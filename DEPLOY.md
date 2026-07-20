# Deploying swiftaiapps Behind nginx on the VPS

A Dockerized Next.js app served via host nginx + Let's Encrypt HTTPS.

- **Server:** `data-neuroheart`
- **Public IP:** `159.198.44.98`
- **App:** swiftaiapps (Next.js, standalone build)
- **Domain:** swiftaiapps.com
- **App location on server:** `/opt/swiftapps`

---

## How this server is set up

- **nginx runs on the host** (not in Docker) and owns ports **80/443**. It reverse-proxies
  all sites by domain name (name-based virtual hosting). One nginx, many apps.
- **Each app runs in its own Docker container** on a unique high port bound to localhost.
  nginx routes each domain to the right port.
- **certbot** (Let's Encrypt) provides free, auto-renewing HTTPS.

### App / port map

| App                 | Domain          | Container port     |
| ------------------- | --------------- | ------------------ |
| neuroheart.ai       | neuroheart.ai   | `127.0.0.1:3000`   |
| neuroheart calendar | (sub-path)      | `127.0.0.1:8090`   |
| TTS API             | —               | `127.0.0.1:8844`   |
| **swiftaiapps**     | swiftaiapps.com | **`127.0.0.1:3001`** |

---

## STEP 1 — Get the code onto the server

The repo's SSH host alias (`github-sgopi888`) doesn't resolve on the server. The repo is
**public**, so use HTTPS instead:

```bash
cd /opt/swiftapps
git remote set-url origin https://github.com/sgopi888/swiftaiapps.git
git fetch origin
git checkout -b main origin/main
```

If `main` already exists:

```bash
git checkout main && git reset --hard origin/main
```

> The code lands directly in `/opt/swiftapps` (Dockerfile + docker-compose.yml are at the
> root, no subfolder).

---

## STEP 2 — Handle the port conflict, then build & run

Port 3000 is already used by neuroheart.ai. Map this app to host port **3001** instead
(the container still listens on 3000 internally):

```bash
cd /opt/swiftapps
sed -i 's/"3000:3000"/"3001:3000"/' docker-compose.yml
grep -n ports -A1 docker-compose.yml          # verify: "3001:3000"

docker compose up --build -d
docker compose ps                             # STATUS=Up, PORTS=0.0.0.0:3001->3000/tcp
docker compose logs -f web                    # Ctrl+C to exit (container keeps running)
```

Before choosing a port, check what's free:

```bash
docker ps --format '{{.Names}}\t{{.Ports}}'
ss -tlnp | grep -E ':80 |:443 '
```

---

## STEP 3 — Point DNS at the VPS

In the **Northwest Registered Agents DNS panel**, change the A records from the old
WordPress IP (`66.223.49.89`) to the VPS IP (`159.198.44.98`):

| Host    | Value           | TTL   |
| ------- | --------------- | ----- |
| `@`     | `159.198.44.98` | 1 min |
| `www.`  | `159.198.44.98` | 1 min |

Leave `mail.` and `*.` alone. Verify propagation (~1–2 min with 1 min TTL):

```bash
dig +short swiftaiapps.com        # must return 159.198.44.98
```

> Get the server's public IP anytime with: `curl -4 ifconfig.me`

---

## STEP 4 — Add the nginx site (HTTP)

This server uses the `sites-available` / `sites-enabled` pattern. Create an HTTP-only
config (certbot adds SSL in the next step):

```bash
cat > /etc/nginx/sites-available/swiftaiapps.com <<'EOF'
server {
    listen 80;
    listen [::]:80;
    server_name swiftaiapps.com www.swiftaiapps.com;

    location / {
        proxy_pass http://127.0.0.1:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
EOF

ln -s /etc/nginx/sites-available/swiftaiapps.com /etc/nginx/sites-enabled/

nginx -t                          # MUST say "test is successful" before continuing
systemctl reload nginx            # zero-downtime; other sites unaffected
```

Verify the proxy → container path (no DNS needed):

```bash
curl -I -H "Host: swiftaiapps.com" http://127.0.0.1     # expect HTTP/1.1 200 OK
```

---

## STEP 5 — Enable HTTPS (after DNS resolves to the VPS)

certbot is already installed (it manages the other sites). Run:

```bash
certbot --nginx -d swiftaiapps.com -d www.swiftaiapps.com
```

- When asked to redirect HTTP→HTTPS, choose **2 (redirect)**.
- certbot auto-edits the config (adds `listen 443 ssl`, cert paths, and the HTTP→HTTPS
  redirect) and sets up auto-renewal.

Verify:

```bash
curl -I https://swiftaiapps.com          # expect HTTP/2 200
certbot renew --dry-run                   # confirm auto-renewal works
```

Then visit **https://swiftaiapps.com** in a browser.

---

## Updating the app later (redeploy after a git push)

Fetch and inspect the incoming update before changing the running checkout:

```bash
cd /opt/swiftapps
git fetch origin
git status -sb
git log --oneline HEAD..origin/main
git diff --stat HEAD..origin/main
git diff --name-only HEAD..origin/main
```

The VPS intentionally has a local `docker-compose.yml` modification for the `3001:3000`
port mapping. Do not restore or overwrite it. If the incoming file list does not include
`docker-compose.yml`, fast-forward and redeploy:

```bash
git pull --ff-only origin main
docker compose up --build -d
docker compose ps
docker compose logs --tail=50 web
curl -I https://swiftaiapps.com/restaurant    # expect HTTP 200
```

---

## Troubleshooting

| Symptom                              | Cause                       | Fix                                                       |
| ------------------------------------ | --------------------------- | -------------------------------------------------------- |
| `Could not resolve hostname github-` | SSH alias not on server     | Use HTTPS remote (STEP 1)                                |
| `address already in use` on `up`     | host port taken             | Change host port via `sed` (STEP 2)                      |
| `nginx -t` fails                     | config typo                 | Fix file; **never reload until test passes**             |
| certbot fails validation             | DNS not pointed at VPS yet  | Wait for `dig` to return `159.198.44.98`, then retry     |
| 502 Bad Gateway                      | container down / wrong port | `docker compose ps`; confirm `proxy_pass` port matches   |
