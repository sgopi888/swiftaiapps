"use client";

import { ShieldCheck, Lock, Rocket, Handshake } from "lucide-react";
import { motion } from "framer-motion";

const signals = [
  { icon: ShieldCheck, color: "text-[#adc6ff]", label: "Production-Ready Engineering" },
  { icon: Lock, color: "text-[#4cd7f6]", label: "Enterprise-Grade Security" },
  { icon: Rocket, color: "text-[#d0bcff]", label: "Ships in Weeks" },
  { icon: Handshake, color: "text-[#adc6ff]", label: "Long-Term Support" },
];

export function CredibilityBand() {
  return (
    <section className="border-y border-white/[0.06] bg-[#0e0e0e] py-8">
      <div className="max-w-[1280px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center items-center gap-6 md:gap-12"
        >
          {signals.map((s) => (
            <div key={s.label} className="flex items-center gap-2.5 text-[#c2c6d6]">
              <s.icon size={18} className={s.color} />
              <span className="font-semibold text-sm">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
