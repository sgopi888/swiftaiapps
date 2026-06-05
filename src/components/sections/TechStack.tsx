"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";

const cols = [
  {
    label: "Frontend",
    color: "text-[#4d8eff]",
    items: ["Next.js 15", "React 19", "Tailwind CSS v4", "TypeScript"],
  },
  {
    label: "Backend",
    color: "text-[#4cd7f6]",
    items: ["FastAPI", "Python 3.12", "PostgreSQL", "Redis"],
  },
  {
    label: "AI Layer",
    color: "text-[#d0bcff]",
    items: ["LangGraph", "PydanticAI", "LlamaIndex", "Vector DBs"],
  },
  {
    label: "Infra",
    color: "text-[#8c909f]",
    items: ["Azure / AWS", "Docker", "GitHub Actions", "Kubernetes"],
  },
];

export function TechStack() {
  return (
    <section id="stack" className="py-24 bg-[#0d0d0d]">
      <div className="max-w-[1280px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <SectionLabel label="Engineering Stack" />
          <h2 className="text-[clamp(26px,4vw,42px)] font-extrabold tracking-tight mb-3">
            Modern AI Infrastructure
          </h2>
          <p className="text-[#c2c6d6] max-w-xl mx-auto">
            The most modern, stable, and performant AI technologies — built to scale.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {cols.map((col, i) => (
            <motion.div
              key={col.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass shimmer-card p-7 text-center"
            >
              <p className={`font-mono text-[10px] uppercase tracking-widest mb-5 ${col.color}`}>
                {col.label}
              </p>
              <ul className="flex flex-col gap-3 font-bold text-sm md:text-base">
                {col.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
