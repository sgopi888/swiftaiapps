"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { DISCOVERY_CALL_URL } from "@/lib/contact";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Solutions", href: "#next-gen" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
];

const biNavLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Architecture", href: "#architecture" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const restaurantNavLinks = [
  { label: "Demo", href: "#demo" },
  { label: "Platform", href: "#platform" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Results", href: "#results" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const isAIPage = pathname === "/" || pathname === "";
  const isBIPage = pathname === "/services";
  const isRestaurantPage = pathname === "/restaurant";
  const links = isAIPage ? navLinks : isRestaurantPage ? restaurantNavLinks : biNavLinks;

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
          <Link href="/" className="text-[22px] font-extrabold grad-text tracking-tight shrink-0">
            SwiftAIApps
          </Link>

          {/* Center: page switcher tabs + nav links */}
          <div className="hidden md:flex items-center gap-1">
            {/* Page tab switcher */}
            <div className="flex items-center bg-white/[0.05] border border-white/[0.08] rounded-xl p-1 mr-4">
              <Link
                href="/"
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  isAIPage
                    ? "bg-gradient-to-r from-[#4d8eff] to-[#a078ff] text-[#00285d] shadow-sm"
                    : "text-[#8c909f] hover:text-white"
                }`}
              >
                AI Services
              </Link>
              <Link
                href="/services"
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  isBIPage
                    ? "bg-gradient-to-r from-[#4d8eff] to-[#a078ff] text-[#00285d] shadow-sm"
                    : "text-[#8c909f] hover:text-white"
                }`}
              >
                BI Portal
              </Link>
              <Link
                href="/restaurant"
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  isRestaurantPage
                    ? "bg-gradient-to-r from-[#4d8eff] to-[#a078ff] text-[#00285d] shadow-sm"
                    : "text-[#8c909f] hover:text-white"
                }`}
              >
                Restaurant AI
              </Link>
            </div>

            {/* Section links */}
            <div className="flex items-center gap-6 text-sm font-medium text-[#c2c6d6]">
              {links.map((l) => (
                <button
                  key={l.label}
                  onClick={() => handleAnchor(l.href)}
                  className="hover:text-white transition-colors cursor-pointer bg-transparent border-none"
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <a
              href={DISCOVERY_CALL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2 rounded-xl bg-gradient-to-r from-[#4d8eff] to-[#a078ff] font-semibold text-[#00285d] text-sm hover:scale-105 active:scale-95 transition-transform shadow-[0_0_20px_rgba(77,142,255,0.25)] cursor-pointer border-none"
            >
              Book a Call
            </a>
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
                {/* Tab switcher mobile */}
                <div className="flex gap-2 mb-3">
                  <Link
                    href="/"
                    onClick={() => setMobileOpen(false)}
                    className={`flex-1 py-2 px-3 rounded-xl text-center text-xs font-semibold transition-all ${
                      isAIPage
                        ? "bg-gradient-to-r from-[#4d8eff] to-[#a078ff] text-[#00285d]"
                        : "bg-white/[0.05] text-[#8c909f]"
                    }`}
                  >
                    AI Services
                  </Link>
                  <Link
                    href="/services"
                    onClick={() => setMobileOpen(false)}
                    className={`flex-1 py-2 px-3 rounded-xl text-center text-xs font-semibold transition-all ${
                      isBIPage
                        ? "bg-gradient-to-r from-[#4d8eff] to-[#a078ff] text-[#00285d]"
                        : "bg-white/[0.05] text-[#8c909f]"
                    }`}
                  >
                    BI Portal
                  </Link>
                  <Link
                    href="/restaurant"
                    onClick={() => setMobileOpen(false)}
                    className={`flex-1 py-2 px-3 rounded-xl text-center text-xs font-semibold transition-all ${
                      isRestaurantPage
                        ? "bg-gradient-to-r from-[#4d8eff] to-[#a078ff] text-[#00285d]"
                        : "bg-white/[0.05] text-[#8c909f]"
                    }`}
                  >
                    Restaurant AI
                  </Link>
                </div>
                {links.map((l) => (
                  <button
                    key={l.label}
                    onClick={() => handleAnchor(l.href)}
                    className="text-left py-2.5 hover:text-white transition-colors bg-transparent border-none cursor-pointer"
                  >
                    {l.label}
                  </button>
                ))}
                <a
                  href={DISCOVERY_CALL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="mt-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#4d8eff] to-[#a078ff] text-[#00285d] font-semibold text-center cursor-pointer border-none"
                >
                  Book a Call
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
