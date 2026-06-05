import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Services } from "@/components/sections/Services";
import { CredibilityBand } from "@/components/sections/CredibilityBand";
import { NextGenSystems } from "@/components/sections/NextGenSystems";
import { WhyUs } from "@/components/sections/WhyUs";
import { Process } from "@/components/sections/Process";
import { Integrations } from "@/components/sections/Integrations";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "AI Engineering Services | SwiftAIApps",
  description:
    "We engineer AI agents, enterprise copilots, RAG systems, and workflow automation for organizations that want to operate faster with less manual effort.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <CredibilityBand />
        <NextGenSystems />
        <WhyUs />
        <Process />
        <Integrations />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
