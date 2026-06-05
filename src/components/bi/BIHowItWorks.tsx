"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionLabel } from "@/components/ui/SectionLabel";

const steps = [
  {
    n: 1,
    title: "Connect Data",
    desc: "Map your existing Power BI Semantic Models and databases to the portal.",
    accent: "from-[#4d8eff] to-[#a078ff]",
    shadow: "rgba(77,142,255,0.35)",
    img: "/images/step-connect.png",
    imgAlt: "Connect data sources to Power BI portal",
  },
  {
    n: 2,
    title: "Customize Experience",
    desc: "Configure your brand colors, navigation folders, user roles, and security boundaries.",
    border: "#4cd7f6",
    img: null,
    imgAlt: "",
  },
  {
    n: 3,
    title: "Deploy & Interact",
    desc: "Securely share reports — or let users query datasets in plain English using AI agents.",
    accent: "from-[#4cd7f6] to-[#adc6ff]",
    shadow: "rgba(76,215,246,0.35)",
    img: "/images/step-deploy.png",
    imgAlt: "Deploy AI-powered BI portal to your Azure environment",
  },
];

export function BIHowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-[#0e0e0e]">
      <div className="max-w-[1280px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <SectionLabel label="How It Works" color="text-[#d0bcff]" />
          <h2 className="text-[clamp(26px,4vw,42px)] font-extrabold tracking-tight">
            Three Steps to Smarter BI
          </h2>
        </motion.div>

        {/* Steps — connector line desktop */}
        <div className="relative">
          <div className="hidden md:block absolute top-16 left-[16%] right-[16%] h-px bg-white/[0.08] z-0" />
          <div className="flex flex-col md:flex-row justify-center items-start gap-8 md:gap-8">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="flex-1 text-center max-w-sm mx-auto relative z-10"
              >
                {/* Step number circle */}
                {s.accent ? (
                  <div
                    className={`w-14 h-14 rounded-full bg-gradient-to-r ${s.accent} flex items-center justify-center font-extrabold text-2xl mx-auto mb-5 text-[#00285d]`}
                    style={{ boxShadow: `0 0 22px ${s.shadow}` }}
                  >
                    {s.n}
                  </div>
                ) : (
                  <div
                    className="w-14 h-14 rounded-full border-2 bg-[#0e0e0e] flex items-center justify-center font-extrabold text-2xl mx-auto mb-5"
                    style={{ borderColor: s.border }}
                  >
                    {s.n}
                  </div>
                )}

                {/* Image or placeholder */}
                <div className="mb-5 rounded-xl overflow-hidden border border-white/[0.07] bg-[#111827] mx-auto aspect-square flex items-center justify-center" style={{ maxWidth: 200 }}>
                  {s.img ? (
                    <Image
                      src={s.img}
                      alt={s.imgAlt}
                      width={400}
                      height={400}
                      className="w-full h-auto object-cover"
                    />
                  ) : (
                    /* Step 2 — no image yet: styled placeholder */
                    <div className="w-full h-full flex flex-col items-center justify-center gap-3 p-6">
                      <div className="w-12 h-12 rounded-xl bg-[#4cd7f6]/10 flex items-center justify-center">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4cd7f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
                          <path d="M15.54 8.46a5 5 0 0 1 0 7.07M8.46 8.46a5 5 0 0 0 0 7.07"/>
                        </svg>
                      </div>
                      <p className="text-xs text-[#8c909f] font-mono">step-customize.png</p>
                    </div>
                  )}
                </div>

                <h4 className="font-bold text-base mb-2 text-[#e5e2e1]">{s.title}</h4>
                <p className="text-sm text-[#c2c6d6] leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
