# SwiftAIApps — Website

Marketing website for SwiftAIApps, an AI engineering company.

## Tech Stack

- **Next.js 16** (App Router, TypeScript, `output: standalone`)
- **React 19**
- **Tailwind CSS v4**
- **shadcn/ui** (base-ui components)
- **Framer Motion 12** — scroll reveal, stagger animations, FAQ accordion
- **Lucide React** — icons
- **pnpm 10.30.0** — package manager (pinned — do not change without updating `Dockerfile`)

---

## Run in Terminal

```bash
cd ~/Desktop/Website_swiftapps/swiftaiapps
pnpm install
pnpm dev
```

```bash
cd ~/Desktop/Website_swiftapps/swiftaiapps
pnpm build
pnpm start
```

---

## Docker (Local + VPS)

```bash
# Build and run (foreground)
docker compose up --build

# Build and run detached (recommended for VPS)
docker compose up --build -d

# Stop
docker compose down

# View logs
docker compose logs -f
```

The Docker build uses a multi-stage Dockerfile:
- `deps` — installs dependencies with frozen lockfile
- `builder` — runs `next build` to produce `standalone` output
- `runner` — minimal production image (no dev deps), non-root user, port 3000

**Important:** The `pnpm` version in `Dockerfile` is pinned to `10.30.0` to match the version that generated `pnpm-lock.yaml`. If you upgrade pnpm locally (`pnpm add -g pnpm`), update line 2 of the Dockerfile to match.

---

## VPS Deployment

Example deployment target for this project:

```bash
/var/www/swiftaiapps.com
```

1. Create a new site directory on the VPS
2. Copy the project to the VPS with `rsync` or `git clone`
3. Ensure Docker + Docker Compose are installed
4. Run: `docker compose up --build -d`
5. Put Nginx in front as a reverse proxy to port `3000`
6. Point DNS for `swiftaiapps.com` to the VPS IP
7. Issue HTTPS with Certbot once DNS resolves

Example sync command from local machine:

```bash
rsync -avz --delete \
  --exclude 'node_modules' \
  --exclude '.next' \
  --exclude '.git' \
  /Users/sreekanthgopi/Desktop/Website_swiftapps/swiftaiapps/ \
  root@YOUR_SERVER_IP:/var/www/swiftaiapps.com/
```

Example first-time VPS setup:

```bash
mkdir -p /var/www/swiftaiapps.com
cd /var/www/swiftaiapps.com
docker compose up --build -d
docker compose logs -f web
```

Example Nginx reverse proxy:

```nginx
server {
    server_name swiftaiapps.com www.swiftaiapps.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

---

## Project Structure

```
src/
  app/
    page.tsx          ← Homepage (assembles all sections)
    layout.tsx        ← Root layout, metadata, fonts
    globals.css       ← Global styles, design tokens, .glass utility
    privacy/page.tsx  ← Privacy Policy page
    terms/page.tsx    ← Terms of Service page
  components/
    sections/
      Navbar.tsx      ← Sticky nav, mobile menu
      Hero.tsx        ← Hero + primary CTAs
      TrustBar.tsx    ← Technology logos strip
      Services.tsx    ← 6-card What We Build grid
      CredibilityBand.tsx  ← 4 trust signals
      NextGenSystems.tsx   ← 4 next-gen AI cards
      WhyUs.tsx       ← 4 pillars
      Process.tsx     ← 5-step timeline
      Integrations.tsx ← Integration chips
      FAQ.tsx         ← Accordion FAQ (8 questions)
      CTA.tsx         ← Final call-to-action section
      Footer.tsx      ← Links, copyright
    ui/
      ProjectModal.tsx ← Project inquiry modal used on BI-related CTAs
      SectionLabel.tsx
      RevealSection.tsx
```

---

## Contact / Forms

There is no backend.

- **"Share Your Requirements"** opens a Google Form
- **"Book Discovery Call"** opens a Google Calendar booking link
- The footer email link opens `mailto:ai@swiftaiapps.com`

This approach works on any hosting (static, Docker, VPS) with zero server infrastructure.

---

## Content Updates

All page copy lives directly in the section components under `src/components/sections/`. No CMS — just edit the TypeScript files and redeploy.

Key things to update when going live:
- [ ] Replace LinkedIn URL if needed: `Footer.tsx` line with `linkedin.com/company/101817668`
- [ ] Review Privacy Policy dates: `src/app/privacy/page.tsx`
- [ ] Review Terms of Service: `src/app/terms/page.tsx`

---

## Known Constraints

- **Next.js version:** This project uses Next.js 16 (not 15). The API is largely compatible with Next.js 15 App Router conventions.
- **shadcn/ui accordion:** Uses `@base-ui/react` under the hood in this version. The FAQ uses a custom accordion built with Framer Motion instead to avoid API mismatch.
- **pnpm version pinning:** Do not use `pnpm@latest` in Docker — it enforces a `minimumReleaseAge` supply-chain policy that rejects recently-published packages even if the lockfile is valid.
