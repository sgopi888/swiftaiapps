"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { DISCOVERY_CALL_URL, REQUIREMENTS_FORM_URL } from "@/lib/contact";

export function Hero() {
  const scrollToServices = () => {
    document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-16 pb-0 overflow-hidden">
      {/* Background — network image + glows */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/images/ai-services-hero.png"
          alt=""
          fill
          priority
          className="object-cover opacity-[0.12] mix-blend-lighten"
        />
        <div className="absolute top-0 right-0 w-[700px] h-[600px] bg-[#4d8eff]/[0.1] rounded-full blur-[120px] translate-x-1/3 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[500px] bg-[#a078ff]/[0.08] rounded-full blur-[100px] -translate-x-1/3 translate-y-1/4" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center py-20 md:py-28">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8 text-xs font-mono tracking-widest uppercase text-[#8c909f] border border-white/10 bg-white/[0.03]"
        >
          AI Engineering Company
        </motion.div>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[clamp(38px,6.5vw,72px)] font-extrabold tracking-tight leading-[1.06] mb-6"
        >
          AI Agents That Think, Decide,{" "}
          <br className="hidden sm:block" />
          <span className="grad-text">and Get Work Done</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[clamp(16px,2vw,20px)] text-[#c2c6d6] max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          We engineer AI agents, enterprise copilots, and intelligent workflow
          systems that help organizations automate operations and move faster.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={REQUIREMENTS_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#4d8eff] to-[#a078ff] font-bold text-[#00285d] text-base hover:scale-105 active:scale-95 transition-transform shadow-[0_0_30px_rgba(77,142,255,0.3)] cursor-pointer border-none"
          >
            Share Your Requirements
          </a>
          <a
            href={DISCOVERY_CALL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-xl glass font-semibold text-[#e5e2e1] text-base hover:bg-white/5 transition-all cursor-pointer border-none"
          >
            Book Discovery Call
          </a>
        </motion.div>

        {/* Scroll cue */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          onClick={scrollToServices}
          className="mt-16 mx-auto flex flex-col items-center gap-1 text-[#8c909f] hover:text-[#adc6ff] transition-colors cursor-pointer bg-transparent border-none"
          aria-label="Scroll to services"
        >
          <span className="text-xs font-mono tracking-widest uppercase">Explore</span>
          <ChevronDown size={18} className="animate-bounce-slow" />
        </motion.button>
      </div>
    </section>
  );
}
