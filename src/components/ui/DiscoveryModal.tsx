"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar } from "lucide-react";

interface DiscoveryModalProps {
  open: boolean;
  onClose: () => void;
}

const times = [
  "Morning (9am – 12pm)",
  "Afternoon (12pm – 5pm)",
  "Evening (5pm – 8pm)",
  "Flexible / Any time",
];

export function DiscoveryModal({ open, onClose }: DiscoveryModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [preferred, setPreferred] = useState("");
  const nameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) setTimeout(() => nameRef.current?.focus(), 80);
  }, [open]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Discovery Call Request — ${name}`);
    const body = encodeURIComponent(
      `Hi SwiftAIApps team,\n\nI'd like to book a free discovery call to discuss an AI project.\n\nName: ${name}\nEmail: ${email}\nPreferred time: ${preferred || "Flexible"}\n\n${message ? `Message:\n${message}` : "Looking forward to connecting."}\n\nBest,\n${name}`
    );
    window.location.href = `mailto:ai@swiftaiapps.com?subject=${subject}&body=${body}`;
    onClose();
  };

  const inputCls =
    "w-full bg-white/[0.05] border border-white/[0.1] rounded-xl px-4 py-3 text-sm text-[#e5e2e1] placeholder-[#8c909f] focus:outline-none focus:border-[#4d8eff]/60 transition-colors";

  const selectCls =
    "w-full bg-white/[0.05] border border-white/[0.1] rounded-xl px-4 py-3 text-sm text-[#e5e2e1] focus:outline-none focus:border-[#4d8eff]/60 transition-colors appearance-none cursor-pointer";

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full max-w-md bg-[#0f1117] border border-white/[0.1] rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/[0.07]">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#4d8eff]/10 flex items-center justify-center">
                    <Calendar size={16} className="text-[#adc6ff]" />
                  </div>
                  <div>
                    <h2 className="font-extrabold text-base text-[#e5e2e1]">Book a Discovery Call</h2>
                    <p className="text-xs text-[#8c909f] mt-0.5">Free 30-min call. No commitment.</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="text-[#8c909f] hover:text-white transition-colors p-1 bg-transparent border-none cursor-pointer"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="px-6 py-6 flex flex-col gap-4">
                <div>
                  <label className="block text-xs text-[#8c909f] mb-1.5 font-mono uppercase tracking-wide">Name *</label>
                  <input
                    ref={nameRef}
                    required
                    type="text"
                    placeholder="Jane Smith"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={inputCls}
                  />
                </div>

                <div>
                  <label className="block text-xs text-[#8c909f] mb-1.5 font-mono uppercase tracking-wide">Email *</label>
                  <input
                    required
                    type="email"
                    placeholder="jane@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={inputCls}
                  />
                </div>

                <div className="relative">
                  <label className="block text-xs text-[#8c909f] mb-1.5 font-mono uppercase tracking-wide">Preferred time</label>
                  <select
                    value={preferred}
                    onChange={(e) => setPreferred(e.target.value)}
                    className={selectCls}
                    style={{ background: "rgba(255,255,255,0.05)" }}
                  >
                    <option value="" style={{ background: "#0f1117" }}>Select a time window</option>
                    {times.map((t) => (
                      <option key={t} value={t} style={{ background: "#0f1117" }}>{t}</option>
                    ))}
                  </select>
                  <svg className="absolute right-3 top-[38px] w-3.5 h-3.5 text-[#8c909f] pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </div>

                <div>
                  <label className="block text-xs text-[#8c909f] mb-1.5 font-mono uppercase tracking-wide">Anything you&rsquo;d like us to know?</label>
                  <textarea
                    rows={3}
                    placeholder="Brief description of what you're working on, your team size, or any specific questions..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className={`${inputCls} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="mt-1 w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#4d8eff] to-[#a078ff] font-bold text-[#00285d] text-sm hover:scale-[1.02] active:scale-95 transition-transform shadow-[0_0_20px_rgba(77,142,255,0.25)] cursor-pointer border-none"
                >
                  <Calendar size={15} />
                  Request Discovery Call
                </button>

                <p className="text-center text-[11px] text-[#8c909f]">
                  Opens your email client pre-filled to{" "}
                  <span className="text-[#adc6ff]">ai@swiftaiapps.com</span>
                </p>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
