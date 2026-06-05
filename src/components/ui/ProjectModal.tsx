"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, ChevronDown } from "lucide-react";

interface ProjectModalProps {
  open: boolean;
  onClose: () => void;
}

const budgets = [
  "Under $10k",
  "$10k – $25k",
  "$25k – $50k",
  "$50k – $100k",
  "$100k+",
  "Not sure yet",
];

const timelines = [
  "ASAP (< 4 weeks)",
  "1–2 months",
  "2–4 months",
  "4+ months",
  "Flexible",
];

export function ProjectModal({ open, onClose }: ProjectModalProps) {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const nameRef = useRef<HTMLInputElement>(null);

  // Focus first field when opened
  useEffect(() => {
    if (open) setTimeout(() => nameRef.current?.focus(), 80);
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New Project Inquiry from ${name}${company ? ` @ ${company}` : ""}`);
    const body = encodeURIComponent(
      `Name: ${name}\nCompany: ${company || "N/A"}\nEmail: ${email}\n\nProject Description:\n${description}\n\nBudget: ${budget || "Not specified"}\nTimeline: ${timeline || "Not specified"}`
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
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full max-w-lg bg-[#0f1117] border border-white/[0.1] rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/[0.07]">
                <div>
                  <h2 className="font-extrabold text-lg text-[#e5e2e1]">Tell Us About Your Project</h2>
                  <p className="text-xs text-[#8c909f] mt-0.5">We&rsquo;ll respond within 24 hours.</p>
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                    <label className="block text-xs text-[#8c909f] mb-1.5 font-mono uppercase tracking-wide">Company</label>
                    <input
                      type="text"
                      placeholder="Acme Corp"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className={inputCls}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-[#8c909f] mb-1.5 font-mono uppercase tracking-wide">Your Email *</label>
                  <input
                    required
                    type="email"
                    placeholder="jane@acme.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={inputCls}
                  />
                </div>

                <div>
                  <label className="block text-xs text-[#8c909f] mb-1.5 font-mono uppercase tracking-wide">What do you want to build? *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your project — what problem you're solving, what systems are involved, what outcome you need..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className={`${inputCls} resize-none`}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <label className="block text-xs text-[#8c909f] mb-1.5 font-mono uppercase tracking-wide">Budget</label>
                    <select
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className={selectCls}
                      style={{ background: "rgba(255,255,255,0.05)" }}
                    >
                      <option value="" style={{ background: "#0f1117" }}>Select range</option>
                      {budgets.map((b) => (
                        <option key={b} value={b} style={{ background: "#0f1117" }}>{b}</option>
                      ))}
                    </select>
                    <ChevronDown size={14} className="absolute right-3 top-[38px] text-[#8c909f] pointer-events-none" />
                  </div>
                  <div className="relative">
                    <label className="block text-xs text-[#8c909f] mb-1.5 font-mono uppercase tracking-wide">Timeline</label>
                    <select
                      value={timeline}
                      onChange={(e) => setTimeline(e.target.value)}
                      className={selectCls}
                      style={{ background: "rgba(255,255,255,0.05)" }}
                    >
                      <option value="" style={{ background: "#0f1117" }}>Select timeline</option>
                      {timelines.map((t) => (
                        <option key={t} value={t} style={{ background: "#0f1117" }}>{t}</option>
                      ))}
                    </select>
                    <ChevronDown size={14} className="absolute right-3 top-[38px] text-[#8c909f] pointer-events-none" />
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-2 w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#4d8eff] to-[#a078ff] font-bold text-[#00285d] text-sm hover:scale-[1.02] active:scale-95 transition-transform shadow-[0_0_20px_rgba(77,142,255,0.25)]"
                >
                  <Send size={15} />
                  Send Requirement
                </button>

                <p className="text-center text-[11px] text-[#8c909f]">
                  This opens your email client pre-filled and sends to{" "}
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
