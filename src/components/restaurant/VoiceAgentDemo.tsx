"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { PhoneCall, ClipboardCheck, CheckCircle2, Play } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";

/**
 * The demo being shown. Swapping in a new recording is a change to this block
 * only — replace the files in public/ and update the copy; the markup below
 * reads everything from here.
 */
const demo = {
  src: "/videos/heritage-voice-agent_2026-07-22_09-10-08.mp4",
  poster: "/images/heritage-voice-agent-poster.jpg",
  width: 1080,
  height: 1920,
  alt: "Recording of an AI voice agent answering a restaurant's phone and taking a pickup order",
  beats: [
    {
      icon: PhoneCall,
      color: "text-[#adc6ff]",
      bg: "bg-[#4d8eff]/10",
      title: "Answers and understands",
      desc: "Picks up, greets the caller by name of the restaurant, and handles the request in plain conversation — no phone tree, no hold music.",
    },
    {
      icon: ClipboardCheck,
      color: "text-[#4cd7f6]",
      bg: "bg-[#4cd7f6]/10",
      title: "Builds the order live",
      desc: "Captures each dish as it is spoken and prices the ticket in real time, so nothing is missed and nothing is repeated back wrong.",
    },
    {
      icon: CheckCircle2,
      color: "text-[#d0bcff]",
      bg: "bg-[#a078ff]/10",
      title: "Confirms and closes",
      desc: "Reads the full order back with the total, gives a pickup window, confirms with the guest, and ends the call on its own.",
    },
  ],
};

export function VoiceAgentDemo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  /**
   * The video is mounted only on click. `preload` alone is not enough — browsers
   * answer an open-ended range request for a file this small by sending all of
   * it, so every visitor would pull the full clip without ever pressing play.
   */
  const start = () => {
    setStarted(true);
    requestAnimationFrame(() => videoRef.current?.play());
  };

  return (
    <section id="demo" className="py-24 scroll-mt-20">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left — the recording */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="w-full lg:w-1/2 shrink-0"
          >
            {/* The recording already renders its own device frame, so this
                container stays a plain surface rather than a second bezel. */}
            <div className="relative mx-auto w-full max-w-[300px] sm:max-w-[340px] overflow-hidden rounded-[28px] border border-white/[0.09] shadow-[0_0_60px_rgba(77,142,255,0.13)]">
              {started ? (
                <video
                  ref={videoRef}
                  controls
                  autoPlay
                  playsInline
                  preload="auto"
                  poster={demo.poster}
                  aria-label={demo.alt}
                  className="block h-auto w-full bg-[#0d0d0d]"
                >
                  <source src={demo.src} type="video/mp4" />
                  <a href={demo.src} className="text-[#adc6ff] underline">
                    Download the demo recording
                  </a>
                </video>
              ) : (
                <button
                  type="button"
                  onClick={start}
                  aria-label={`Play demo: ${demo.alt}`}
                  className="group relative block w-full cursor-pointer"
                >
                  <Image
                    src={demo.poster}
                    alt=""
                    width={demo.width}
                    height={demo.height}
                    className="block h-auto w-full"
                    priority={false}
                  />
                  <span className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/10">
                    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 shadow-[0_0_30px_rgba(77,142,255,0.45)] transition-transform group-hover:scale-105">
                      <Play size={26} className="ml-1 fill-[#10131a] text-[#10131a]" />
                    </span>
                  </span>
                </button>
              )}
              <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-[#4d8eff]/20" />
            </div>
          </motion.div>

          {/* Right — text */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="w-full lg:w-1/2"
          >
            <SectionLabel label="Live Demo" color="text-[#4cd7f6]" />
            <h2 className="text-[clamp(24px,3.5vw,38px)] font-extrabold tracking-tight mb-4">
              Hear the AI answer the phone.
              <br />
              <span className="grad-text">It takes the whole order.</span>
            </h2>
            <p className="text-[#8f95a8] leading-7 mb-8">
              One continuous call, start to finish — the voice agent greets the
              caller, takes a full pickup order, reads it back with the total and
              a ready time, and hangs up. No edits, no human stepping in.
            </p>

            <div className="flex flex-col gap-5">
              {demo.beats.map((b) => (
                <div key={b.title} className="flex items-start gap-4">
                  <div
                    className={`w-9 h-9 rounded-xl ${b.bg} flex items-center justify-center shrink-0 mt-0.5`}
                  >
                    <b.icon size={16} className={b.color} />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-[#e5e2e1] mb-1">
                      {b.title}
                    </p>
                    <p className="text-xs text-[#c2c6d6] leading-relaxed">
                      {b.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
