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

export default function Home() {
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
