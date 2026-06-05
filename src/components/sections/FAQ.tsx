"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";

const faqs = [
  {
    q: "What is an AI Agent?",
    a: "An AI agent is a software system that can perceive its environment, make decisions, and take actions to complete multi-step tasks autonomously — without requiring a human to direct every step.",
  },
  {
    q: "What is Agentic AI?",
    a: "Agentic AI refers to AI systems designed to pursue goals, use tools, coordinate with other agents, and execute workflows with minimal supervision.",
  },
  {
    q: "How long does an AI project take?",
    a: "Most projects move from discovery to first deployment in 4–8 weeks, depending on complexity and the integrations required.",
  },
  {
    q: "Can AI integrate with our existing systems?",
    a: "Yes. We connect AI systems to CRMs, ERPs, email platforms, databases, internal apps, and APIs. Integration is a core part of every project we build.",
  },
  {
    q: "Do you build private AI solutions?",
    a: "Yes. We build private, on-premise, and cloud-isolated AI systems that ensure your data never leaves your environment.",
  },
  {
    q: "What industries do you work with?",
    a: "We work across industries — healthcare, financial services, professional services, operations, and research organizations.",
  },
  {
    q: "What AI models do you use?",
    a: "We work with OpenAI (GPT-4o, o1), Anthropic Claude, Azure AI, and open-source models. We select the right model based on your use case, compliance requirements, and cost targets.",
  },
  {
    q: "What is RAG?",
    a: "Retrieval-Augmented Generation (RAG) connects an AI model to your proprietary documents and data, allowing it to answer questions based on your specific knowledge base — not just its training data.",
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
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-sm text-[#c2c6d6] leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="py-24 max-w-[1280px] mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-14 text-center"
      >
        <SectionLabel label="Common Questions" color="text-[#4cd7f6]" />
        <h2 className="text-[clamp(26px,4vw,42px)] font-extrabold tracking-tight">
          Answers to What You&rsquo;re Wondering
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto flex flex-col gap-3"
      >
        {faqs.map((faq) => (
          <FaqItem key={faq.q} q={faq.q} a={faq.a} />
        ))}
      </motion.div>
    </section>
  );
}
