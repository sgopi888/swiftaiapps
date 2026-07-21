"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BarChart3, MessageSquareMore, Play, ShoppingBag } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";

const dashboardDemo = {
  src: "/videos/restaurant-dashboard-demo.mp4",
  poster: "/images/restaurant-dashboard-poster.jpg",
  alt: "Restaurant AI dashboard showing live calls, messages, orders, customer activity, and analytics",
  highlights: [
    { icon: MessageSquareMore, label: "Calls & messages" },
    { icon: ShoppingBag, label: "Live order flow" },
    { icon: BarChart3, label: "Operational insight" },
  ],
};

export function DashboardDemo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  const start = () => {
    setStarted(true);
    requestAnimationFrame(() => videoRef.current?.play());
  };

  return (
    <section id="dashboard-demo" className="relative overflow-hidden py-24 scroll-mt-20">
      <div className="absolute left-1/2 top-10 h-72 w-[760px] -translate-x-1/2 rounded-full bg-[#4d8eff]/[0.07] blur-3xl" />
      <div className="relative mx-auto max-w-[1120px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 grid gap-7 lg:grid-cols-[1fr_.8fr] lg:items-end"
        >
          <div>
            <SectionLabel label="Platform Demo" color="text-[#a078ff]" />
            <h2 className="text-[clamp(28px,4vw,44px)] font-extrabold tracking-tight text-white">
              See every conversation become
              <span className="grad-text"> an action.</span>
            </h2>
          </div>
          <div>
            <p className="leading-7 text-[#9da3b5]">
              Follow a guest call from live transcript to approved order, kitchen
              handoff, customer history, and performance reporting in one workspace.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {dashboardDemo.highlights.map(({ icon: Icon, label }) => (
                <span key={label} className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.035] px-3 py-2 text-xs text-[#c2c6d6]">
                  <Icon size={14} className="text-[#4cd7f6]" />
                  {label}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.65, delay: 0.08 }}
          className="relative overflow-hidden rounded-[26px] border border-white/[0.09] bg-[#08090d] shadow-[0_24px_80px_rgba(0,0,0,0.42),0_0_60px_rgba(77,142,255,0.08)]"
        >
          {started ? (
            <video
              ref={videoRef}
              controls
              autoPlay
              playsInline
              preload="auto"
              poster={dashboardDemo.poster}
              aria-label={dashboardDemo.alt}
              className="block aspect-video w-full bg-[#08090d]"
            >
              <source src={dashboardDemo.src} type="video/mp4" />
              <a href={dashboardDemo.src} className="text-[#adc6ff] underline">
                Download the dashboard demo
              </a>
            </video>
          ) : (
            <button
              type="button"
              onClick={start}
              aria-label={`Play demo: ${dashboardDemo.alt}`}
              className="group relative block aspect-video w-full cursor-pointer"
            >
              <Image
                src={dashboardDemo.poster}
                alt=""
                fill
                sizes="(min-width: 1120px) 1120px, 100vw"
                className="object-cover"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10 transition-colors group-hover:from-black/25" />
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="flex size-20 items-center justify-center rounded-full bg-white/95 shadow-[0_0_36px_rgba(77,142,255,0.5)] transition-transform group-hover:scale-105">
                  <Play size={30} className="ml-1 fill-[#10131a] text-[#10131a]" />
                </span>
              </span>
              <span className="absolute bottom-5 left-5 rounded-full border border-white/10 bg-black/55 px-3 py-2 font-mono text-[11px] text-white/80 backdrop-blur-md">
                Click to play the dashboard walkthrough
              </span>
            </button>
          )}
        </motion.div>
      </div>
    </section>
  );
}
