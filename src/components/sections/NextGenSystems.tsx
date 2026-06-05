"use client";

import { motion } from "framer-motion";
import { UserRound, Network, Layers3, ArrowRightLeft } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";

const systems = [
  {
    icon: UserRound,
    color: "text-[#adc6ff]",
    bg: "bg-[#4d8eff]/10",
    title: "AI Digital Workers",
    desc: "AI systems that take on repeatable roles across your organization — research, reporting, intake, coordination.",
  },
  {
    icon: Network,
    color: "text-[#4cd7f6]",
    bg: "bg-[#4cd7f6]/10",
    title: "Multi-Agent Systems",
    desc: "Coordinated agents that collaborate to solve complex, multi-step business problems at scale.",
  },
  {
    icon: Layers3,
    color: "text-[#d0bcff]",
    bg: "bg-[#a078ff]/10",
    title: "AI Operating Layer",
    desc: "A unified intelligence layer connecting your documents, databases, CRM, ERP, and business tools into one system.",
  },
  {
    icon: ArrowRightLeft,
    color: "text-[#adc6ff]",
    bg: "bg-[#4d8eff]/10",
    title: "Knowledge-to-Action Systems",
    desc: "AI that retrieves context, generates insights, and executes approved actions — moving beyond search and chat.",
  },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export function NextGenSystems() {
  return (
    <section id="next-gen" className="py-24 bg-[#0e0e0e]">
      <div className="max-w-[1280px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <SectionLabel label="Next-Generation Systems" color="text-[#4cd7f6]" />
          <h2 className="text-[clamp(26px,4vw,42px)] font-extrabold tracking-tight mb-3">
            The Next Wave of Enterprise AI
          </h2>
          <p className="text-[#c2c6d6] max-w-xl leading-relaxed">
            AI is moving from chatbots to autonomous workers. We build the systems
            leading organizations are deploying now.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {systems.map((s) => (
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
      </div>
    </section>
  );
}
