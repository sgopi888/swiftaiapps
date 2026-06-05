"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Minus } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ProjectModal } from "@/components/ui/ProjectModal";

// ── BI Portal tiers ─────────────────────────────────────────────────────────
const portalTiers = [
  {
    name: "Core",
    price: "$199",
    tag: "Small teams getting started",
    highlight: false,
    features: [
      { label: "Unlimited users", yes: true },
      { label: "1 application workspace", yes: true },
      { label: "Custom branding & theme", yes: true },
      { label: "Microsoft SSO & MFA", yes: true },
      { label: "Custom app URL", yes: true },
      { label: "Power BI capacity management", yes: true },
      { label: "Row-level security", yes: false },
      { label: "Multi-workspace support", yes: false },
      { label: "Scheduled report emails", yes: false },
      { label: "Report editing & exporting", yes: false },
    ],
  },
  {
    name: "Launch",
    price: "$399",
    tag: "Growing organizations",
    highlight: false,
    features: [
      { label: "Unlimited users", yes: true },
      { label: "3 application workspaces", yes: true },
      { label: "Custom branding & theme", yes: true },
      { label: "Microsoft SSO & MFA", yes: true },
      { label: "Custom app URL", yes: true },
      { label: "Power BI capacity management", yes: true },
      { label: "Row-level security", yes: true },
      { label: "Multi-workspace support", yes: true },
      { label: "Scheduled report emails", yes: false },
      { label: "Report editing & exporting", yes: true },
    ],
  },
  {
    name: "Growth",
    price: "$699",
    tag: "Multi-client enterprises",
    highlight: true,
    badge: "Most Popular",
    features: [
      { label: "Unlimited users", yes: true },
      { label: "20 application workspaces", yes: true },
      { label: "Custom branding & theme", yes: true },
      { label: "SSO: Entra, Auth0, OKTA", yes: true },
      { label: "Custom app URL", yes: true },
      { label: "Power BI capacity management", yes: true },
      { label: "Row-level security", yes: true },
      { label: "Multi-workspace support", yes: true },
      { label: "Scheduled report emails", yes: true },
      { label: "Report editing & exporting", yes: true },
    ],
  },
  {
    name: "Enterprise",
    price: "$999",
    tag: "Analytics service providers",
    highlight: false,
    features: [
      { label: "Unlimited users", yes: true },
      { label: "50 application workspaces", yes: true },
      { label: "Custom branding & theme", yes: true },
      { label: "SSO: Entra, Auth0, OKTA", yes: true },
      { label: "Workspace-specific custom domains", yes: true },
      { label: "Power BI capacity management", yes: true },
      { label: "Row-level security", yes: true },
      { label: "Multi-workspace support", yes: true },
      { label: "Scheduled report emails", yes: true },
      { label: "Report editing & exporting", yes: true },
    ],
  },
];

// ── Swift AI Ask tiers ───────────────────────────────────────────────────────
const aiTiers = [
  {
    name: "Starter",
    price: "$99",
    agents: "1 agent included",
    addonCost: "$50 / extra agent",
    highlight: false,
    features: [
      { label: "Unlimited end-users", yes: true },
      { label: "Admin query transparency", yes: true },
      { label: "End-user query transparency", yes: false },
      { label: "Multi-datasource agents", yes: false },
      { label: "Semantic model row-level security", yes: false },
      { label: "Remove platform branding", yes: false },
    ],
  },
  {
    name: "Professional",
    price: "$299",
    agents: "5 agents included",
    addonCost: "$40 / extra agent",
    highlight: true,
    badge: "Most Popular",
    features: [
      { label: "Unlimited end-users", yes: true },
      { label: "Admin query transparency", yes: true },
      { label: "End-user query transparency", yes: true },
      { label: "Multi-datasource agents", yes: true },
      { label: "Semantic model row-level security", yes: true },
      { label: "Remove platform branding", yes: true },
    ],
  },
  {
    name: "Business",
    price: "$499",
    agents: "10 agents included",
    addonCost: "$20 / extra agent",
    highlight: false,
    features: [
      { label: "Unlimited end-users", yes: true },
      { label: "Admin query transparency", yes: true },
      { label: "End-user query transparency", yes: true },
      { label: "Multi-datasource agents", yes: true },
      { label: "Semantic model row-level security", yes: true },
      { label: "Remove platform branding", yes: true },
    ],
  },
];

// ── Shared card ──────────────────────────────────────────────────────────────
interface AnyTier {
  name: string;
  price: string;
  highlight: boolean;
  badge?: string;
  tag?: string;
  agents?: string;
  addonCost?: string;
  features: { label: string; yes: boolean }[];
}

function PricingCard({
  tier,
  sub,
  onCTA,
  ctaLabel,
}: {
  tier: AnyTier;
  sub: string;
  onCTA: () => void;
  ctaLabel: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className={`glass rounded-2xl p-7 relative flex flex-col ${
        tier.highlight ? "border-[#4d8eff]/40 shadow-[0_0_36px_rgba(77,142,255,0.14)]" : ""
      }`}
    >
      {"badge" in tier && tier.badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-[#4d8eff] to-[#a078ff] text-[#00285d] text-[10px] font-bold whitespace-nowrap">
          {tier.badge}
        </div>
      )}

      <p className="font-mono text-[10px] text-[#8c909f] uppercase tracking-widest mb-2">{tier.name}</p>
      <p className="text-xs text-[#8c909f] mb-3 leading-snug">{sub}</p>

      <div className="flex items-end gap-1 mb-1">
        <span className="text-3xl font-extrabold text-[#e5e2e1]">{tier.price}</span>
        <span className="text-[#8c909f] text-xs mb-1">/mo</span>
      </div>

      {"agents" in tier && tier.agents && (
        <p className="text-xs text-[#c2c6d6] mb-0.5">{tier.agents}</p>
      )}
      {"addonCost" in tier && tier.addonCost && (
        <p className="text-xs text-[#8c909f] mb-5">{tier.addonCost}</p>
      )}
      {!("agents" in tier) && <div className="mb-5" />}

      <ul className="flex flex-col gap-2.5 mb-7 flex-1">
        {tier.features.map((f) => (
          <li key={f.label} className="flex items-center gap-2 text-xs">
            {f.yes ? (
              <Check size={13} className="text-[#4cd7f6] shrink-0" />
            ) : (
              <Minus size={13} className="text-[#424754] shrink-0" />
            )}
            <span className={f.yes ? "text-[#c2c6d6]" : "text-[#8c909f]"}>{f.label}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={onCTA}
        className={`w-full py-2.5 rounded-xl font-bold text-sm transition-all cursor-pointer border-none ${
          tier.highlight
            ? "bg-gradient-to-r from-[#4d8eff] to-[#a078ff] text-[#00285d] hover:scale-105 shadow-[0_0_18px_rgba(77,142,255,0.22)]"
            : "bg-white/[0.06] text-[#e5e2e1] hover:bg-white/[0.1]"
        }`}
      >
        {ctaLabel}
      </button>
    </motion.div>
  );
}

// ── Why choose section ───────────────────────────────────────────────────────
const reasons = [
  {
    title: "Faster time to market",
    desc: "Skip months of custom development. Deploy a production-ready analytics portal in days, not quarters.",
  },
  {
    title: "Dramatically lower IT costs",
    desc: "What normally needs a full dev team can be managed by one administrator. Free your engineers for core product work.",
  },
  {
    title: "Smarter licensing model",
    desc: "Capacity-based pricing means no per-user fees. Scale to thousands of viewers without the licensing headache.",
  },
  {
    title: "30-day risk-free trial",
    desc: "Deploy the full platform in your own Azure environment. No credit card required. Keep everything if you upgrade.",
  },
];

// ── Component ────────────────────────────────────────────────────────────────
export function BIPricing() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="pricing" className="py-24 bg-[#0e0e0e]">
      <div className="max-w-[1280px] mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <SectionLabel label="Pricing" color="text-[#4cd7f6]" />
          <h2 className="text-[clamp(26px,4vw,42px)] font-extrabold tracking-tight mb-3">
            Flexible Plans for Every Stage
          </h2>
          <p className="text-[#c2c6d6] max-w-lg mx-auto">
            No per-user Power BI licenses. Capacity-based pricing that scales with your business.
          </p>
        </motion.div>

        {/* BI Portal tiers */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-xs text-[#4d8eff] uppercase tracking-widest mb-5"
        >
          BI Portal — Analytics Delivery Platform
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {portalTiers.map((tier) => (
            <PricingCard
              key={tier.name}
              tier={tier}
              sub={tier.tag}
              onCTA={() => setModalOpen(true)}
              ctaLabel={tier.highlight ? "Start Free Trial" : "Get Started"}
            />
          ))}
        </div>

        {/* Swift AI Ask tiers */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl px-7 py-5 mb-5 flex flex-col sm:flex-row sm:items-center gap-3"
        >
          <div className="flex-1">
            <p className="font-mono text-xs text-[#4cd7f6] uppercase tracking-widest mb-1">Swift AI Ask — AI Agent Add-on</p>
            <p className="text-sm text-[#c2c6d6]">Add conversational AI to any portal plan. Users query your Power BI data in plain English — with full answer transparency.</p>
          </div>
          <span className="text-xs text-[#8c909f] shrink-0">Sold separately or bundled with Growth & Enterprise</span>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          {aiTiers.map((tier) => (
            <PricingCard
              key={tier.name}
              tier={tier}
              sub=""
              onCTA={() => setModalOpen(true)}
              ctaLabel={tier.highlight ? "Start Free Trial" : "Get Started"}
            />
          ))}
        </div>

        {/* Why choose */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <p className="font-mono text-xs text-[#d0bcff] uppercase tracking-widest mb-5">Why Choose Our Platform</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {reasons.map((r) => (
              <div key={r.title} className="glass p-6 rounded-xl cursor-default">
                <h4 className="font-bold text-sm text-[#e5e2e1] mb-2">{r.title}</h4>
                <p className="text-xs text-[#c2c6d6] leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <p className="text-center text-xs text-[#8c909f] mt-6">
          All portal plans include unlimited end-users. No Power BI Pro license required for report viewers. Annual billing saves 10%.
        </p>
      </div>

      <ProjectModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
