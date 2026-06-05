"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ShieldCheck, Cpu, Lock } from "lucide-react";

const nodes = [
  { label: "Client / Internal User", color: "border-[#4cd7f6] text-[#4cd7f6]" },
  { label: "Azure Front Door WAF / Edge CDN", color: "border-[#4d8eff] text-[#4d8eff]" },
  { label: "Next.js Frontend & FastAPI Backend", color: "border-[#a078ff] text-[#d0bcff]" },
  { label: "Microsoft Entra ID / SSO", color: "border-[#4d8eff] text-[#adc6ff]" },
  { label: "Azure PostgreSQL", color: "border-[#4cd7f6] text-[#4cd7f6]" },
  { label: "Azure Key Vault", color: "border-[#a078ff] text-[#d0bcff]" },
  { label: "Power BI Embedded / Fabric Capacity", color: "border-[#4d8eff] text-[#4d8eff]" },
  { label: "Rendered Secure Dashboard", color: "border-[#4cd7f6] text-[#4cd7f6]" },
];

const capabilities = [
  {
    icon: ShieldCheck,
    color: "text-[#4cd7f6]",
    title: "Secure Edge Entry",
    desc: "Global routing via Azure Front Door with WAF rule sets, DDoS protection, and TLS 1.2+.",
  },
  {
    icon: Cpu,
    color: "text-[#adc6ff]",
    title: "Backend Architecture",
    desc: "High-speed REST APIs using MSAL/Service Principal to mint short-lived embed tokens on demand.",
  },
  {
    icon: Lock,
    color: "text-[#d0bcff]",
    title: "Governance & Compliance",
    desc: "HIPAA-aligned architecture, AES-256 encryption at rest, and 12-month system audit logging.",
  },
];

export function BIArchitecture() {
  return (
    <section id="architecture" className="py-24 max-w-[1280px] mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-14 text-center"
      >
        <SectionLabel label="Technical Architecture" color="text-[#4d8eff]" />
        <h2 className="text-[clamp(26px,4vw,42px)] font-extrabold tracking-tight mb-3">
          Enterprise-Grade Azure Pipeline
        </h2>
        <p className="text-[#c2c6d6] max-w-xl mx-auto">
          Secure, scalable infrastructure built on Azure. Your data never leaves your tenant.
        </p>
      </motion.div>

      {/* Pipeline diagram */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass p-8 mb-12 overflow-x-auto"
      >
        <div className="flex flex-wrap justify-center items-center gap-3 min-w-max mx-auto">
          {nodes.map((n, i) => (
            <div key={n.label} className="flex items-center gap-3">
              <div className={`border rounded-xl px-4 py-2.5 text-xs font-semibold ${n.color} bg-white/[0.03] whitespace-nowrap`}>
                {n.label}
              </div>
              {i < nodes.length - 1 && (
                <span className="text-[#424754] text-lg font-light">→</span>
              )}
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-[#8c909f] mt-5 font-mono">
          HTTPS / TLS 1.2+ · Dynamic RLS Enforced · Azure Tenant Boundary
        </p>
      </motion.div>

      {/* Capability cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {capabilities.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass p-7 cursor-default"
          >
            <c.icon size={28} className={`${c.color} mb-4`} />
            <h3 className="font-bold text-sm mb-2 text-[#e5e2e1]">{c.title}</h3>
            <p className="text-xs text-[#c2c6d6] leading-relaxed">{c.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
