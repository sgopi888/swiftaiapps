"use client";

import { motion } from "framer-motion";
import { FileSearch, LayoutDashboard, SlidersHorizontal, Users } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";

const items = [
  {
    icon: FileSearch,
    color: "text-[#adc6ff]",
    bg: "bg-[#4d8eff]/10",
    title: "Explainable AI Outputs",
    desc: "Clear breakdowns of how every insight is generated — source attribution, decision path analysis, semantic model interpretability, and the exact DAX formula used to extract the answer.",
  },
  {
    icon: LayoutDashboard,
    color: "text-[#4cd7f6]",
    bg: "bg-[#4cd7f6]/10",
    title: "Admin Oversight Dashboard",
    desc: "Monitor AI activity, review past interactions for accuracy, and maintain full audit logs and history tracking for compliance and accountability.",
  },
  {
    icon: SlidersHorizontal,
    color: "text-[#d0bcff]",
    bg: "bg-[#a078ff]/10",
    title: "Customization & Agent Control",
    desc: "Define knowledge boundaries, restrict AI access to specific datasets, and apply granular user and data access controls — governing who can interact with what, per agent.",
  },
  {
    icon: Users,
    color: "text-[#adc6ff]",
    bg: "bg-[#4d8eff]/10",
    title: "Bridging AI and Business Users",
    desc: "Business users can ask clarifying questions and get transparent responses. Administrators can step in with explanations, building organization-wide trust in AI-driven decisions.",
  },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.09 } } };
const item = { hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export function BITransparencyStrip() {
  return (
    <section className="py-24 max-w-[1280px] mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-14"
      >
        <SectionLabel label="Transparency & Interpretability" color="text-[#d0bcff]" />
        <h2 className="text-[clamp(24px,3.5vw,38px)] font-extrabold tracking-tight mb-3">
          Empowering Administrators with AI Visibility
        </h2>
        <p className="text-[#c2c6d6] max-w-2xl leading-relaxed">
          When organizations deploy AI-driven analytics, trust is everything. Our platform gives administrators complete visibility into what&rsquo;s happening behind the scenes — so every insight is clear, explainable, and defensible.
        </p>
        <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-sm text-[#c2c6d6] max-w-xl">
          {[
            "Understand how AI-generated insights are formed",
            "Validate model accuracy and relevance",
            "Provide meaningful explanations to end users",
            "Maintain governance and compliance over AI decisions",
          ].map((p) => (
            <li key={p} className="flex items-start gap-2">
              <span className="text-[#4d8eff] mt-0.5">—</span>
              {p}
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
      >
        {items.map((f) => (
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
