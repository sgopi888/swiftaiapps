"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";

const faqs = [
  {
    q: "Do my report viewers need a Power BI license?",
    a: "No. End-users do not require a Power BI Pro or Microsoft Fabric license to access, view, or filter reports in the portal. The platform uses server-side capacity licenses (A-SKU/F-SKU) to embed reports — providing a cost-effective, unlimited-user scaling model. Only report creators need a Pro license to publish dashboards.",
  },
  {
    q: "How is data security maintained?",
    a: "The entire system runs inside your Azure tenant. Data is securely queried inside your cloud boundaries and is never extracted or sent to external servers. Row-Level Security (RLS) dynamically filters database rows based on the user's login identity.",
  },
  {
    q: "What is BI Genius and how does it work?",
    a: "BI Genius is the AI enablement layer built into the portal. It lets users ask questions in plain English against your Power BI semantic models. Every answer includes source attribution (which fields were used), decision tracing (step-by-step reasoning), and the exact DAX formula generated — so there are no black boxes.",
  },
  {
    q: "Can I white-label the portal with my own brand?",
    a: "Yes. On Pro and Scale plans you can fully remove SwiftAIApps branding and replace it with your own logo, colors, and domain. Starter plan includes portal access under the SwiftAIApps platform brand.",
  },
  {
    q: "What AI models power BI Genius?",
    a: "BI Genius uses models deployed within your Azure environment — including Azure OpenAI Service. Your data is never sent to external AI providers. The platform supports GPT-4o and other Azure-hosted models depending on your configuration.",
  },
  {
    q: "How long does setup take?",
    a: "Most deployments go live within 1–2 weeks. The process involves connecting your Power BI workspace, configuring user roles and branding, and deploying the portal to your Azure environment. We handle the technical setup end-to-end.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="glass rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex justify-between items-center px-6 py-5 text-left gap-4 cursor-pointer bg-transparent border-none"
        aria-expanded={open}
      >
        <span className="font-semibold text-[#e5e2e1] text-sm md:text-base">{q}</span>
        <ChevronDown
          size={18}
          className={`text-[#4d8eff] flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-sm text-[#c2c6d6] leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function BIFAQ() {
  return (
    <section id="faq" className="py-24 max-w-[1280px] mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-14 text-center"
      >
        <SectionLabel label="FAQ" color="text-[#4cd7f6]" />
        <h2 className="text-[clamp(26px,4vw,42px)] font-extrabold tracking-tight">
          Licensing &amp; Security — Answered
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto flex flex-col gap-3"
      >
        {faqs.map((f) => <FaqItem key={f.q} q={f.q} a={f.a} />)}
      </motion.div>
    </section>
  );
}
