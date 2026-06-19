"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { ProjectModal } from "@/components/ui/ProjectModal";
import { CONTACT_MAILTO, DISCOVERY_CALL_URL } from "@/lib/contact";

export function BICTA() {
  const [trialOpen, setTrialOpen] = useState(false);

  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto relative">
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#4d8eff]/[0.08] blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-[#4cd7f6]/[0.07] blur-3xl pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="glass p-12 md:p-16 text-center relative z-10"
        >
          <h2 className="text-[clamp(28px,5vw,48px)] font-extrabold tracking-tight mb-4">
            Ready to Modernize
            <br className="hidden sm:block" /> Your BI Delivery?
          </h2>
          <p className="text-[#c2c6d6] text-base leading-relaxed mb-10 max-w-lg mx-auto">
            Start a free 30-day trial or book a product walkthrough. We&rsquo;ll set up your portal
            and connect your first Power BI workspace.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <button
              onClick={() => setTrialOpen(true)}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#4d8eff] to-[#a078ff] font-bold text-[#00285d] text-base hover:scale-105 active:scale-95 transition-transform shadow-[0_0_30px_rgba(77,142,255,0.3)] cursor-pointer border-none"
            >
              Start Free Trial
            </button>
            <a
              href={DISCOVERY_CALL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-xl border border-white/[0.12] hover:bg-white/[0.04] font-semibold text-[#e5e2e1] text-base transition-all cursor-pointer bg-transparent"
            >
              Book a Walkthrough
            </a>
          </div>

          <a
            href={CONTACT_MAILTO}
            className="inline-flex items-center gap-2 font-mono text-sm text-[#8c909f] hover:text-[#adc6ff] transition-colors"
          >
            <Mail size={14} />
            ai@swiftaiapps.com
          </a>
        </motion.div>
      </div>

      <ProjectModal open={trialOpen} onClose={() => setTrialOpen(false)} />
    </section>
  );
}
