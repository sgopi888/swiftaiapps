"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { DiscoveryModal } from "@/components/ui/DiscoveryModal";

const links = [
  { label: "Services", href: "#services" },
  { label: "Solutions", href: "#next-gen" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [discoveryOpen, setDiscoveryOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleAnchor = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0A0A]/80 backdrop-blur-xl border-b border-white/[0.07] shadow-[0_4px_40px_rgba(0,0,0,0.5)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-[1280px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-[22px] font-extrabold grad-text tracking-tight">
          SwiftAIApps
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#c2c6d6]">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => handleAnchor(l.href)}
              className="hover:text-white transition-colors cursor-pointer bg-transparent border-none"
            >
              {l.label}
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setDiscoveryOpen(true)}
            className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2 rounded-xl bg-gradient-to-r from-[#4d8eff] to-[#a078ff] font-semibold text-[#00285d] text-sm hover:scale-105 active:scale-95 transition-transform shadow-[0_0_20px_rgba(77,142,255,0.25)] cursor-pointer border-none"
          >
            Book a Call
          </button>
          <button
            className="md:hidden p-2 rounded-lg text-[#c2c6d6] hover:text-white transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="md:hidden border-t border-white/5 bg-[#0d0d0d]"
          >
            <div className="flex flex-col px-6 py-4 gap-1 text-sm font-medium text-[#c2c6d6]">
              {links.map((l) => (
                <button
                  key={l.href}
                  onClick={() => handleAnchor(l.href)}
                  className="text-left py-2.5 hover:text-white transition-colors bg-transparent border-none cursor-pointer"
                >
                  {l.label}
                </button>
              ))}
              <button
                onClick={() => { setMobileOpen(false); setDiscoveryOpen(true); }}
                className="mt-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#4d8eff] to-[#a078ff] text-[#00285d] font-semibold text-center cursor-pointer border-none"
              >
                Book a Call
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
    <DiscoveryModal open={discoveryOpen} onClose={() => setDiscoveryOpen(false)} />
    </>
  );
}
