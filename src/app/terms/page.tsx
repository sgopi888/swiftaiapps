import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | SwiftAIApps",
  description: "SwiftAIApps terms of service — the terms governing use of our website and services.",
};

export default function TermsPage() {
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
        <h1 className="text-4xl font-extrabold tracking-tight mb-2">Terms of Service</h1>
        <p className="text-[#8c909f] text-sm mb-12">Last updated: June 2026</p>

        <div className="prose prose-invert max-w-none space-y-10 text-[#c2c6d6] leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-[#e5e2e1] mb-3">1. Acceptance of Terms</h2>
            <p>By accessing or using the SwiftAIApps website (<strong className="text-[#e5e2e1]">swiftaiapps.com</strong>) or engaging our services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#e5e2e1] mb-3">2. Services</h2>
            <p>SwiftAIApps provides AI engineering services including, but not limited to:</p>
            <ul className="list-disc list-inside mt-3 space-y-2 pl-2">
              <li>Design and development of AI agents and digital workers</li>
              <li>Enterprise copilot development and deployment</li>
              <li>Workflow automation and business process AI systems</li>
              <li>RAG systems, knowledge platforms, and enterprise search</li>
              <li>Intelligent document processing systems</li>
              <li>Custom AI web and mobile applications</li>
              <li>AI system integration and consulting</li>
            </ul>
            <p className="mt-3">All service engagements are governed by individual project agreements or statements of work signed between SwiftAIApps and the client.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#e5e2e1] mb-3">3. Website Use</h2>
            <p>You may use this website for lawful purposes only. You agree not to:</p>
            <ul className="list-disc list-inside mt-3 space-y-2 pl-2">
              <li>Use the website in any way that violates applicable local, national, or international laws or regulations</li>
              <li>Attempt to gain unauthorized access to any part of the website or its infrastructure</li>
              <li>Transmit unsolicited or unauthorized advertising or promotional material</li>
              <li>Engage in any conduct that restricts or inhibits anyone&rsquo;s use or enjoyment of the website</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#e5e2e1] mb-3">4. Intellectual Property</h2>
            <p>All content on this website — including text, graphics, logos, and code — is the property of SwiftAIApps and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works from any content on this site without our express written permission.</p>
            <p className="mt-3">Software and systems developed under client engagements are governed by the intellectual property terms specified in individual project agreements.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#e5e2e1] mb-3">5. Confidentiality</h2>
            <p>Any business information, project requirements, or technical details you share with SwiftAIApps during inquiry or engagement will be treated as confidential. We do not disclose client information to third parties except as required to deliver contracted services or as required by law. Formal engagements include a mutual non-disclosure agreement.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#e5e2e1] mb-3">6. Disclaimers</h2>
            <p>This website and its content are provided on an &ldquo;as is&rdquo; basis without warranties of any kind, either express or implied. SwiftAIApps does not warrant that the website will be uninterrupted, error-free, or free of viruses or other harmful components.</p>
            <p className="mt-3">AI systems developed by SwiftAIApps are subject to the limitations inherent in current AI technology. Performance representations are made in good faith and are subject to the specific terms of individual project agreements.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#e5e2e1] mb-3">7. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, SwiftAIApps shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of this website or our services, beyond the amount paid for the relevant service.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#e5e2e1] mb-3">8. Links to Third-Party Sites</h2>
            <p>Our website may contain links to third-party websites. These links are provided for convenience only. SwiftAIApps has no control over the content of those sites and accepts no responsibility for them or for any loss or damage that may arise from your use of them.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#e5e2e1] mb-3">9. Changes to Terms</h2>
            <p>We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to this page with an updated date. Your continued use of our website after changes are posted constitutes acceptance of the revised terms.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#e5e2e1] mb-3">10. Governing Law</h2>
            <p>These terms are governed by applicable law. Any disputes arising from these terms or your use of SwiftAIApps services will be subject to the jurisdiction agreed upon in individual project agreements.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#e5e2e1] mb-3">11. Contact</h2>
            <p>For questions about these Terms of Service, contact us at:<br/>
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
