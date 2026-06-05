"use client";

import { motion } from "framer-motion";
import { Code2, DatabaseZap, ShieldCheck, Zap, Puzzle, Timer } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";

const securityItems = [
  {
    icon: Code2,
    color: "text-[#adc6ff]",
    bg: "bg-[#4d8eff]/10",
    title: "All You Need is Your Semantic Model",
    desc: "No coding required — select your existing Power BI Semantic Model and you're ready. Swift AI Ask transforms your data into actionable insights effortlessly.",
  },
  {
    icon: DatabaseZap,
    color: "text-[#4cd7f6]",
    bg: "bg-[#4cd7f6]/10",
    title: "Keep Your Data Safe with Azure",
    desc: "Your data remains securely within your Azure environment — never leaving your control. Business intelligence protected, with complete peace of mind.",
  },
  {
    icon: ShieldCheck,
    color: "text-[#d0bcff]",
    bg: "bg-[#a078ff]/10",
    title: "Take the Reins on Data Security",
    desc: "Set your own security protocols and control exactly who accesses your data. You define the boundaries — Swift AI Ask enforces them.",
  },
];

const insightItems = [
  {
    icon: Zap,
    color: "text-[#adc6ff]",
    bg: "bg-[#4d8eff]/10",
    title: "Get Started in Minutes",
    desc: "Designed for fast deployment — configure and go without advanced technical skills or lengthy setup processes.",
  },
  {
    icon: Puzzle,
    color: "text-[#4cd7f6]",
    bg: "bg-[#4cd7f6]/10",
    title: "Seamless Integration with Power BI",
    desc: "Swift AI Ask connects directly to your existing Power BI models and semantic layers. No rebuilding. No migration.",
  },
  {
    icon: Timer,
    color: "text-[#d0bcff]",
    bg: "bg-[#a078ff]/10",
    title: "Instant Value, No Delays",
    desc: "Get real-time insights and analysis without the usual wait time. Faster time-to-value so decisions happen now, not next quarter.",
  },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export function BIControlStrip() {
  return (
    <section className="py-24 bg-[#0e0e0e]">
      <div className="max-w-[1280px] mx-auto px-6">

        {/* Row 1 — Security */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <SectionLabel label="Full Control & Security" color="text-[#4d8eff]" />
          <h2 className="text-[clamp(24px,3.5vw,38px)] font-extrabold tracking-tight mb-2">
            Your Data, Your Rules
          </h2>
          <p className="text-[#c2c6d6] max-w-xl">
            Swift AI Ask runs entirely inside your Azure environment. No external hosting, no data ever leaving your control.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-20"
        >
          {securityItems.map((f) => (
            <motion.div key={f.title} variants={item} className="glass p-7 group cursor-default">
              <div className={`w-10 h-10 rounded-xl ${f.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <f.icon size={18} className={f.color} />
              </div>
              <h3 className="font-bold text-sm mb-2 text-[#e5e2e1]">{f.title}</h3>
              <p className="text-xs text-[#c2c6d6] leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="w-full h-px bg-white/[0.06] mb-20" />

        {/* Row 2 — Effortless Insights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <SectionLabel label="Effortless Insights" color="text-[#4cd7f6]" />
          <h2 className="text-[clamp(24px,3.5vw,38px)] font-extrabold tracking-tight mb-2">
            No Technical Expertise Needed
          </h2>
          <p className="text-[#c2c6d6] max-w-xl">
            Plug in, configure, and start getting AI-powered insights in minutes. Built for business teams, not just engineers.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {insightItems.map((f) => (
            <motion.div key={f.title} variants={item} className="glass p-7 group cursor-default">
              <div className={`w-10 h-10 rounded-xl ${f.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <f.icon size={18} className={f.color} />
              </div>
              <h3 className="font-bold text-sm mb-2 text-[#e5e2e1]">{f.title}</h3>
              <p className="text-xs text-[#c2c6d6] leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
