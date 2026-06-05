"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Users, Eye, LayoutDashboard, Bot, Search, Lock, Zap } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";

const portalFeatures = [
  {
    icon: LayoutDashboard,
    color: "text-[#adc6ff]",
    bg: "bg-[#4d8eff]/10",
    title: "Analytics-as-a-Service",
    desc: "Deliver data portals to clients and stakeholders under your brand — no code required.",
  },
  {
    icon: Users,
    color: "text-[#4cd7f6]",
    bg: "bg-[#4cd7f6]/10",
    title: "Dynamic Access Controls",
    desc: "Grant customized folder-level and report-level permissions per user or organization.",
  },
  {
    icon: ShieldCheck,
    color: "text-[#d0bcff]",
    bg: "bg-[#a078ff]/10",
    title: "Row-Level Security (RLS)",
    desc: "Different users see only their authorized data rows from a single unified report.",
  },
  {
    icon: Eye,
    color: "text-[#adc6ff]",
    bg: "bg-[#4d8eff]/10",
    title: "Full Admin Oversight",
    desc: "Audit user logins, document views, and system actions from a dedicated admin console.",
  },
];

const aiFeatures = [
  {
    icon: Bot,
    color: "text-[#4cd7f6]",
    bg: "bg-[#4cd7f6]/10",
    title: "Domain-Specific AI Agents",
    desc: "Spin up Sales, Finance, or Operations agents tailored to specific semantic models.",
  },
  {
    icon: Search,
    color: "text-[#d0bcff]",
    bg: "bg-[#a078ff]/10",
    title: "Explainable AI Outputs",
    desc: "Full source attribution, decision tracing, and DAX formula generation — no black boxes.",
  },
  {
    icon: Lock,
    color: "text-[#adc6ff]",
    bg: "bg-[#4d8eff]/10",
    title: "Strict Security Boundaries",
    desc: "AI runs fully inside your Azure tenant. Your data is never sent to external parties.",
  },
  {
    icon: Zap,
    color: "text-[#4cd7f6]",
    bg: "bg-[#4cd7f6]/10",
    title: "Fabric License Freedom",
    desc: "Scale without Microsoft Fabric Co-Pilot capacity constraints or licensing overhead.",
  },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const item = { hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export function BIFeatures() {
  return (
    <section id="features" className="py-24 max-w-[1280px] mx-auto px-6">
      {/* Pillar A */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <SectionLabel label="Pillar A — Secure BI Portal" color="text-[#4d8eff]" />
        <h2 className="text-[clamp(24px,3.5vw,38px)] font-extrabold tracking-tight mb-2">
          White-Label Analytics Delivery
        </h2>
        <p className="text-[#c2c6d6] max-w-xl">
          Deliver Power BI reports to any audience under your own brand — with enterprise-grade access controls built in.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-20"
      >
        {portalFeatures.map((f) => (
          <motion.div key={f.title} variants={item} className="glass p-7 group cursor-default">
            <div className={`w-10 h-10 rounded-xl ${f.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
              <f.icon size={18} className={f.color} />
            </div>
            <h3 className="font-bold text-sm mb-2 text-[#e5e2e1]">{f.title}</h3>
            <p className="text-xs text-[#c2c6d6] leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Pillar B */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <SectionLabel label="Pillar B — Swift AI Ask" color="text-[#4cd7f6]" />
        <h2 className="text-[clamp(24px,3.5vw,38px)] font-extrabold tracking-tight mb-2">
          Next-Gen AI Enablement Platform
        </h2>
        <p className="text-[#c2c6d6] max-w-xl">
          Let users query your data in plain English — with full transparency on how every answer was produced.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
      >
        {aiFeatures.map((f) => (
          <motion.div key={f.title} variants={item} className="glass p-7 group cursor-default">
            <div className={`w-10 h-10 rounded-xl ${f.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
              <f.icon size={18} className={f.color} />
            </div>
            <h3 className="font-bold text-sm mb-2 text-[#e5e2e1]">{f.title}</h3>
            <p className="text-xs text-[#c2c6d6] leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
