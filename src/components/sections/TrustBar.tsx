"use client";

import { motion } from "framer-motion";

const techs = [
  "OpenAI",
  "Azure AI",
  "Claude",
  "LangGraph",
  "MCP",
  "PydanticAI",
  "FastAPI",
  "Next.js",
];

export function TrustBar() {
  return (
    <section className="border-y border-white/[0.06] bg-[#0e0e0e] py-10">
      <div className="max-w-[1280px] mx-auto px-6">
        <p className="text-center font-mono text-[11px] text-[#8c909f] uppercase tracking-widest mb-7">
          Powered By
        </p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap justify-center items-center gap-6 md:gap-10 opacity-50 hover:opacity-80 transition-opacity duration-500 grayscale hover:grayscale-0"
        >
          {techs.map((t) => (
            <span key={t} className="font-bold text-base md:text-lg text-[#e5e2e1]">
              {t}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
