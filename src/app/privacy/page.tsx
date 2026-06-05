import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | SwiftAIApps",
  description: "SwiftAIApps privacy policy — how we collect, use, and protect your information.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#e5e2e1]">
      {/* Simple nav */}
      <header className="border-b border-white/[0.06] py-4 px-6">
        <div className="max-w-[1280px] mx-auto">
          <Link href="/" className="text-xl font-extrabold grad-text">SwiftAIApps</Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16">
        <p className="font-mono text-xs text-[#8c909f] uppercase tracking-widest mb-4">Legal</p>
        <h1 className="text-4xl font-extrabold tracking-tight mb-2">Privacy Policy</h1>
        <p className="text-[#8c909f] text-sm mb-12">Last updated: June 2026</p>

        <div className="prose prose-invert max-w-none space-y-10 text-[#c2c6d6] leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-[#e5e2e1] mb-3">1. Who We Are</h2>
            <p>SwiftAIApps is an AI engineering company that designs and builds AI agents, enterprise copilots, workflow automation systems, and related software for businesses. Our contact email is <a href="mailto:ai@swiftaiapps.com" className="text-[#adc6ff] hover:underline">ai@swiftaiapps.com</a>.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#e5e2e1] mb-3">2. Information We Collect</h2>
            <p>We collect information only when you voluntarily provide it to us. This includes:</p>
            <ul className="list-disc list-inside mt-3 space-y-2 pl-2">
              <li><strong className="text-[#e5e2e1]">Contact and inquiry information</strong> — name, email address, company name, and project details submitted via our contact forms or emailed to us directly.</li>
              <li><strong className="text-[#e5e2e1]">Project requirements</strong> — descriptions of AI projects, business processes, timelines, and budgets shared during discovery conversations.</li>
              <li><strong className="text-[#e5e2e1]">Usage data</strong> — basic analytics such as page views and session duration, collected via privacy-respecting analytics tools. We do not use cross-site tracking or sell your data to advertisers.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#e5e2e1] mb-3">3. How We Use Your Information</h2>
            <p>We use the information you provide solely to:</p>
            <ul className="list-disc list-inside mt-3 space-y-2 pl-2">
              <li>Respond to inquiries and project requests</li>
              <li>Deliver contracted AI engineering services</li>
              <li>Send relevant project updates and status communications</li>
              <li>Improve our website and services</li>
            </ul>
            <p className="mt-3">We do not sell, rent, or trade your personal information to any third party.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#e5e2e1] mb-3">4. Data Storage and Security</h2>
            <p>Information you share with us is stored securely. For client projects, all data processing and storage complies with the security requirements agreed upon in individual project agreements. We implement industry-standard technical and organizational safeguards to protect your information.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#e5e2e1] mb-3">5. Cookies</h2>
            <p>This website may use minimal session cookies required for basic functionality. We do not use advertising cookies or third-party tracking pixels. You may disable cookies in your browser settings without affecting your ability to use this site.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#e5e2e1] mb-3">6. Third-Party Services</h2>
            <p>Our website may link to or reference third-party tools and platforms (such as cloud providers and AI model APIs). These third parties have their own privacy policies that govern their data practices. We are not responsible for the privacy practices of third-party services.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#e5e2e1] mb-3">7. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc list-inside mt-3 space-y-2 pl-2">
              <li>Request access to the personal data we hold about you</li>
              <li>Request correction or deletion of your personal data</li>
              <li>Withdraw consent for future communications at any time</li>
            </ul>
            <p className="mt-3">To exercise any of these rights, email us at <a href="mailto:ai@swiftaiapps.com" className="text-[#adc6ff] hover:underline">ai@swiftaiapps.com</a>.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#e5e2e1] mb-3">8. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. When we do, we will update the &ldquo;Last updated&rdquo; date at the top of this page. Continued use of our website after changes constitutes acceptance of the revised policy.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#e5e2e1] mb-3">9. Contact</h2>
            <p>For any privacy-related questions or requests, contact us at:<br/>
            <a href="mailto:ai@swiftaiapps.com" className="text-[#adc6ff] hover:underline">ai@swiftaiapps.com</a></p>
          </section>

        </div>

        <div className="mt-16 pt-8 border-t border-white/[0.06]">
          <Link href="/" className="text-sm text-[#8c909f] hover:text-[#4cd7f6] transition-colors font-mono">
            ← Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
}
