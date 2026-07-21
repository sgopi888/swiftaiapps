import Link from "next/link";
import Image from "next/image";

const links = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Contact", href: "mailto:ai@swiftaiapps.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/101817668/", external: true },
];

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#0A0A0A] py-12">
      <div className="max-w-[1280px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <Link href="/" aria-label="SwiftAIApps home" className="inline-flex items-center gap-2">
            <Image src="/brand/swiftaiapps-mark.png" alt="" width={36} height={36} className="size-9 rounded-lg" />
            <span className="text-xl font-extrabold grad-text">SwiftAIApps</span>
          </Link>
          <p className="text-xs text-[#8c909f] mt-1 font-mono">
            © 2026 SwiftAIApps. AI Engineering for the Modern Enterprise.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-xs font-mono text-[#8c909f]">
          {links.map((l) =>
            l.external ? (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#4cd7f6] transition-colors"
              >
                {l.label}
              </a>
            ) : l.href.startsWith("mailto") ? (
              <a
                key={l.label}
                href={l.href}
                className="hover:text-[#4cd7f6] transition-colors"
              >
                {l.label}
              </a>
            ) : (
              <Link
                key={l.label}
                href={l.href}
                className="hover:text-[#4cd7f6] transition-colors"
              >
                {l.label}
              </Link>
            )
          )}
        </div>
      </div>
    </footer>
  );
}
