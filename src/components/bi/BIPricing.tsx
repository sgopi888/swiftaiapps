"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Minus } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ProjectModal } from "@/components/ui/ProjectModal";

const tiers = [
  {
    name: "Starter",
    price: "$99",
    period: "/mo",
    agents: "1 Agent",
    addonCost: "$50/agent",
    highlight: false,
    features: [
      { label: "End-Users", value: "Unlimited" },
      { label: "Admin Query Transparency", yes: true },
      { label: "End-User Query Transparency", yes: false },
      { label: "Row-Level Security (RLS)", yes: false },
      { label: "Remove Platform Branding", yes: false },
    ],
  },
  {
    name: "Pro",
    price: "$199",
    period: "/mo",
    agents: "5 Agents",
    addonCost: "$40/agent",
    highlight: true,
    badge: "Recommended",
    features: [
      { label: "End-Users", value: "Unlimited" },
      { label: "Admin Query Transparency", yes: true },
      { label: "End-User Query Transparency", yes: true },
      { label: "Row-Level Security (RLS)", yes: true },
      { label: "Remove Platform Branding", yes: true },
    ],
  },
  {
    name: "Scale",
    price: "$299",
    period: "/mo",
    agents: "10 Agents",
    addonCost: "$20/agent",
    highlight: false,
    features: [
      { label: "End-Users", value: "Unlimited" },
      { label: "Admin Query Transparency", yes: true },
      { label: "End-User Query Transparency", yes: true },
      { label: "Row-Level Security (RLS)", yes: true },
      { label: "Remove Platform Branding", yes: true },
    ],
  },
];

export function BIPricing() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="pricing" className="py-24 bg-[#0e0e0e]">
      <div className="max-w-[1280px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <SectionLabel label="Pricing" color="text-[#4cd7f6]" />
          <h2 className="text-[clamp(26px,4vw,42px)] font-extrabold tracking-tight mb-3">
            Simple, Transparent Pricing
          </h2>
          <p className="text-[#c2c6d6] max-w-md mx-auto">
            No per-user Power BI licenses. Unlimited end-users on every plan.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`glass rounded-2xl p-8 relative ${
                tier.highlight
                  ? "border-[#4d8eff]/40 shadow-[0_0_40px_rgba(77,142,255,0.15)]"
                  : ""
              }`}
            >
              {tier.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-[#4d8eff] to-[#a078ff] text-[#00285d] text-xs font-bold whitespace-nowrap">
                  {tier.badge}
                </div>
              )}

              <p className="font-mono text-xs text-[#8c909f] uppercase tracking-widest mb-3">{tier.name}</p>
              <div className="flex items-end gap-1 mb-1">
                <span className="text-4xl font-extrabold text-[#e5e2e1]">{tier.price}</span>
                <span className="text-[#8c909f] text-sm mb-1">{tier.period}</span>
              </div>
              <p className="text-sm text-[#c2c6d6] mb-1">Included: <span className="text-[#e5e2e1] font-semibold">{tier.agents}</span></p>
              <p className="text-xs text-[#8c909f] mb-6">Add-on agents: {tier.addonCost}</p>

              <ul className="flex flex-col gap-3 mb-8">
                {tier.features.map((f) => (
                  <li key={f.label} className="flex items-center gap-2.5 text-sm">
                    {f.value ? (
                      <Check size={14} className="text-[#4cd7f6] shrink-0" />
                    ) : f.yes ? (
                      <Check size={14} className="text-[#4cd7f6] shrink-0" />
                    ) : (
                      <Minus size={14} className="text-[#424754] shrink-0" />
                    )}
                    <span className={f.yes === false ? "text-[#8c909f]" : "text-[#c2c6d6]"}>
                      {f.label}
                      {f.value && <span className="text-[#e5e2e1] font-semibold ml-1">— {f.value}</span>}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => setModalOpen(true)}
                className={`w-full py-3 rounded-xl font-bold text-sm transition-all cursor-pointer border-none ${
                  tier.highlight
                    ? "bg-gradient-to-r from-[#4d8eff] to-[#a078ff] text-[#00285d] hover:scale-105 shadow-[0_0_20px_rgba(77,142,255,0.25)]"
                    : "bg-white/[0.06] text-[#e5e2e1] hover:bg-white/[0.1]"
                }`}
              >
                {tier.highlight ? "Start Free Trial" : "Get Started"}
              </button>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-xs text-[#8c909f] mt-8">
          All plans include unlimited end-users. No Power BI Pro license required for report viewers.
        </p>
      </div>

      <ProjectModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
