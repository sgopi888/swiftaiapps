"use client";

import { motion } from "framer-motion";
import { Building2, Rocket, UserCog, Handshake } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";

const pillars = [
  {
    icon: Building2,
    color: "text-[#adc6ff]",
    title: "Enterprise-Grade Architecture",
    desc: "Secure, scalable systems built for real business environments — not demos.",
  },
  {
    icon: Rocket,
    color: "text-[#4cd7f6]",
    title: "Rapid Delivery",
    desc: "We ship production AI systems in weeks. No bloated timelines or endless discovery phases.",
  },
  {
    icon: UserCog,
    color: "text-[#d0bcff]",
    title: "Human-in-the-Loop AI",
    desc: "Every system includes approval workflows, audit trails, and human oversight built in.",
  },
  {
    icon: Handshake,
    color: "text-[#adc6ff]",
    title: "Long-Term Partnership",
    desc: "We don't hand off and disappear. Ongoing optimization, monitoring, and support.",
  },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function WhyUs() {
  return (
    <section className="py-24 max-w-[1280px] mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-14 text-center"
      >
        <SectionLabel label="Why SwiftAIApps" />
        <h2 className="text-[clamp(26px,4vw,42px)] font-extrabold tracking-tight">
          Built Differently. Delivered Faster.
        </h2>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
      >
        {pillars.map((p) => (
          <motion.div
            key={p.title}
            variants={item}
            className="glass p-7 text-center hover:bg-white/[0.02] transition-colors cursor-default"
          >
            <p.icon size={36} className={`${p.color} mx-auto mb-4`} />
            <h3 className="font-bold text-sm mb-2 text-[#e5e2e1]">{p.title}</h3>
            <p className="text-xs text-[#c2c6d6] leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
