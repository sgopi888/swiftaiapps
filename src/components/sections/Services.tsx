"use client";

import { motion } from "framer-motion";
import {
  Bot, HeadphonesIcon, Settings2, Database, FileText, Globe
} from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";

const services = [
  {
    icon: Bot,
    color: "text-[#adc6ff]",
    bg: "bg-[#4d8eff]/10",
    title: "AI Agents & Digital Workers",
    desc: "Autonomous systems that research, decide, and execute work across business operations.",
  },
  {
    icon: HeadphonesIcon,
    color: "text-[#4cd7f6]",
    bg: "bg-[#4cd7f6]/10",
    title: "Enterprise Copilots",
    desc: "Private AI assistants connected to your documents, policies, and internal systems.",
  },
  {
    icon: Settings2,
    color: "text-[#d0bcff]",
    bg: "bg-[#a078ff]/10",
    title: "Workflow Automation",
    desc: "AI-powered workflows that replace repetitive operational tasks end-to-end.",
  },
  {
    icon: Database,
    color: "text-[#adc6ff]",
    bg: "bg-[#4d8eff]/10",
    title: "RAG & Knowledge Platforms",
    desc: "Turn proprietary data into searchable, actionable enterprise intelligence.",
  },
  {
    icon: FileText,
    color: "text-[#4cd7f6]",
    bg: "bg-[#4cd7f6]/10",
    title: "Intelligent Document Systems",
    desc: "Extract, classify, analyze, and route information from business documents.",
  },
  {
    icon: Globe,
    color: "text-[#d0bcff]",
    bg: "bg-[#a078ff]/10",
    title: "Custom AI Applications",
    desc: "Web, mobile, and internal tools built on modern AI infrastructure.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export function Services() {
  return (
    <section id="services" className="py-24 max-w-[1280px] mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-14"
      >
        <SectionLabel label="What We Build" />
        <h2 className="text-[clamp(26px,4vw,42px)] font-extrabold tracking-tight mb-4">
          AI Systems Built for Real Business
        </h2>
        <div className="w-16 h-1 rounded-full bg-gradient-to-r from-[#4d8eff] to-[#4cd7f6]" />
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {services.map((s) => (
          <motion.div
            key={s.title}
            variants={item}
            className="glass p-8 group cursor-default"
          >
            <div
              className={`w-11 h-11 rounded-xl ${s.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
            >
              <s.icon size={20} className={s.color} />
            </div>
            <h3 className="text-base font-bold mb-2 text-[#e5e2e1]">{s.title}</h3>
            <p className="text-sm text-[#c2c6d6] leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
