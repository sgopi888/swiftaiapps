"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";

const steps = [
  { n: 1, title: "Discover", desc: "We map your workflows, data sources, and goals.", accent: "from-[#4d8eff] to-[#a078ff]", shadow: "rgba(77,142,255,0.35)" },
  { n: 2, title: "Architect", desc: "We design the AI system: models, pipelines, integrations.", accent: null, border: "#adc6ff" },
  { n: 3, title: "Prototype", desc: "A working prototype so you can see it in action fast.", accent: null, border: "#4cd7f6" },
  { n: 4, title: "Deploy", desc: "Production build, cloud hosting, security, monitoring.", accent: null, border: "#d0bcff" },
  { n: 5, title: "Optimize", desc: "We track performance and improve the system over time.", accent: "from-[#4cd7f6] to-[#adc6ff]", shadow: "rgba(76,215,246,0.35)" },
];

export function Process() {
  return (
    <section id="process" className="py-24 bg-[#0d0d0d]">
      <div className="max-w-[1280px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <SectionLabel label="Our Process" color="text-[#4cd7f6]" />
          <h2 className="text-[clamp(26px,4vw,42px)] font-extrabold tracking-tight">
            From Idea to Production
          </h2>
        </motion.div>

        <div className="relative">
          {/* Connector line — desktop only */}
          <div className="hidden md:block absolute top-7 left-[8%] right-[8%] h-px bg-white/[0.08] z-0" />

          <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex-1 text-center relative z-10"
              >
                {s.accent ? (
                  <div
                    className={`w-14 h-14 rounded-full bg-gradient-to-r ${s.accent} flex items-center justify-center font-extrabold text-xl mx-auto mb-4 text-[#00285d]`}
                    style={{ boxShadow: `0 0 20px ${s.shadow}` }}
                  >
                    {s.n}
                  </div>
                ) : (
                  <div
                    className="w-14 h-14 rounded-full border-2 bg-[#0d0d0d] flex items-center justify-center font-extrabold text-xl mx-auto mb-4"
                    style={{ borderColor: s.border }}
                  >
                    {s.n}
                  </div>
                )}
                <h4 className="font-bold mb-1.5 text-[#e5e2e1]">{s.title}</h4>
                <p className="text-[#c2c6d6] text-sm leading-relaxed max-w-[170px] mx-auto">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
