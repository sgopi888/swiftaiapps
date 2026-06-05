"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";

const items = [
  { label: "Documents & Knowledge Bases", icon: "📄" },
  { label: "Email & Communication Platforms", icon: "✉️" },
  { label: "Business Applications", icon: "🏢" },
  { label: "Databases & Data Warehouses", icon: "🗄️" },
  { label: "APIs & SaaS Platforms", icon: "🔗" },
  { label: "Internal Tools & Legacy Systems", icon: "🔧" },
  { label: "AI Models & Agent Platforms", icon: "🤖" },
  { label: "Cloud Infrastructure", icon: "☁️" },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } };
const item = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.35 } },
};

export function Integrations() {
  return (
    <section className="py-24 max-w-[1280px] mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-14 text-center"
      >
        <SectionLabel label="Integrations" color="text-[#d0bcff]" />
        <h2 className="text-[clamp(26px,4vw,42px)] font-extrabold tracking-tight mb-3">
          Built Around Your Business Data
        </h2>
        <p className="text-[#c2c6d6] max-w-lg mx-auto">
          We connect AI to the systems where your business knowledge already lives.{" "}
          <span className="text-[#8c909f]">Any system with an API can become part of your AI workflow.</span>
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-3"
      >
        {items.map((c) => (
          <motion.div
            key={c.label}
            variants={item}
            className="glass px-5 py-3.5 rounded-xl cursor-default hover:border-[#a078ff]/25 hover:bg-white/[0.03] transition-all duration-200 flex items-center gap-3"
          >
            <span className="text-lg leading-none">{c.icon}</span>
            <span className="font-medium text-sm text-[#e5e2e1]">{c.label}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
