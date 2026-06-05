"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FileSearch, ShieldCheck, Zap } from "lucide-react";

const bullets = [
  {
    icon: FileSearch,
    color: "text-[#adc6ff]",
    bg: "bg-[#4d8eff]/10",
    title: "Full Answer Transparency",
    desc: "Every AI response shows the exact data sources, reasoning path, and DAX formula used — no black boxes.",
  },
  {
    icon: ShieldCheck,
    color: "text-[#4cd7f6]",
    bg: "bg-[#4cd7f6]/10",
    title: "Runs Inside Your Azure Tenant",
    desc: "Your data is never sent to external servers. The AI operates entirely within your cloud boundary.",
  },
  {
    icon: Zap,
    color: "text-[#d0bcff]",
    bg: "bg-[#a078ff]/10",
    title: "Plain English Queries",
    desc: "Anyone on your team can ask questions and get instant, structured answers from your Power BI models.",
  },
];

export function BIAIChatStrip() {
  return (
    <section className="py-24 max-w-[1280px] mx-auto px-6">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

        {/* Left — image */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="w-full lg:w-1/2 shrink-0"
        >
          <div className="relative rounded-2xl overflow-hidden border border-white/[0.09] shadow-[0_0_60px_rgba(77,142,255,0.13)]">
            {/* Chrome bar */}
            <div className="flex items-center gap-1.5 px-4 py-2.5 bg-[#111827] border-b border-white/[0.07]">
              <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <span className="w-3 h-3 rounded-full bg-[#28c840]" />
              <span className="ml-3 text-xs text-[#8c909f] font-mono">Swift AI Ask</span>
            </div>
            <Image
              src="/images/ai-chat.png"
              alt="Swift AI Ask interface showing a user querying Power BI data in plain English with transparent AI responses"
              width={1448}
              height={1086}
              className="w-full h-auto"
            />
            {/* Edge glow */}
            <div className="absolute inset-0 pointer-events-none rounded-2xl ring-1 ring-[#4d8eff]/20" />
          </div>
        </motion.div>

        {/* Right — text */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="w-full lg:w-1/2"
        >
          <SectionLabel label="Swift AI Ask" color="text-[#4cd7f6]" />
          <h2 className="text-[clamp(24px,3.5vw,38px)] font-extrabold tracking-tight mb-4">
            Ask Your Data Anything.<br />
            <span className="grad-text">Get Answers, Not Just Charts.</span>
          </h2>
          <p className="text-[#c2c6d6] leading-relaxed mb-8">
            Embed a conversational AI layer directly into your BI portal. Users query your Power BI
            semantic models in plain English and receive structured, sourced, explainable answers —
            all without ever leaving your Azure environment.
          </p>

          <div className="flex flex-col gap-5">
            {bullets.map((b) => (
              <div key={b.title} className="flex items-start gap-4">
                <div className={`w-9 h-9 rounded-xl ${b.bg} flex items-center justify-center shrink-0 mt-0.5`}>
                  <b.icon size={16} className={b.color} />
                </div>
                <div>
                  <p className="font-bold text-sm text-[#e5e2e1] mb-1">{b.title}</p>
                  <p className="text-xs text-[#c2c6d6] leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
