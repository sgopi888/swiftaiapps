"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Play } from "lucide-react";
import { DiscoveryModal } from "@/components/ui/DiscoveryModal";
import { ProjectModal } from "@/components/ui/ProjectModal";

export function BIHero() {
  const [demoOpen, setDemoOpen] = useState(false);
  const [projectOpen, setProjectOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-16 overflow-hidden">
      {/* Background glows — blue-to-purple, same system */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[700px] h-[600px] bg-[#4d8eff]/[0.11] rounded-full blur-[130px] translate-x-1/3 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[500px] bg-[#a078ff]/[0.09] rounded-full blur-[110px] -translate-x-1/3 translate-y-1/4" />
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-[#4cd7f6]/[0.04] rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center py-20 md:py-28">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8 text-xs font-mono tracking-widest uppercase text-[#8c909f] border border-white/10 bg-white/[0.03]"
        >
          Enterprise BI Portal · Swift AI Ask
        </motion.div>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[clamp(36px,6vw,68px)] font-extrabold tracking-tight leading-[1.07] mb-6"
        >
          A Smarter Way to Distribute
          <br className="hidden sm:block" />
          <span className="grad-text">and Query Business Intelligence</span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[clamp(15px,2vw,19px)] text-[#c2c6d6] max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          A secure, white-labeled client portal powered by Power BI Embedded, with
          plug-and-play AI agents running securely inside your own Azure environment.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => setProjectOpen(true)}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#4d8eff] to-[#a078ff] font-bold text-[#00285d] text-base hover:scale-105 active:scale-95 transition-transform shadow-[0_0_30px_rgba(77,142,255,0.3)] cursor-pointer border-none"
          >
            Get Started — 30-Day Free Trial
          </button>
          <button
            onClick={() => setDemoOpen(true)}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl glass font-semibold text-[#e5e2e1] text-base hover:bg-white/5 transition-all cursor-pointer border-none"
          >
            <Play size={15} className="text-[#4d8eff]" />
            Book a Walkthrough
          </button>
        </motion.div>

        {/* Scroll cue */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          onClick={() => document.querySelector("#features")?.scrollIntoView({ behavior: "smooth" })}
          className="mt-16 mx-auto flex flex-col items-center gap-1 text-[#8c909f] hover:text-[#adc6ff] transition-colors cursor-pointer bg-transparent border-none"
        >
          <span className="text-xs font-mono tracking-widest uppercase">Explore</span>
          <ChevronDown size={18} className="animate-bounce-slow" />
        </motion.button>
      </div>

      <DiscoveryModal open={demoOpen} onClose={() => setDemoOpen(false)} />
      <ProjectModal open={projectOpen} onClose={() => setProjectOpen(false)} />
    </section>
  );
}
