import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { BIHero } from "@/components/bi/BIHero";
import { BIFeatures } from "@/components/bi/BIFeatures";
import { BIHowItWorks } from "@/components/bi/BIHowItWorks";
import { BIControlStrip } from "@/components/bi/BIControlStrip";
import { BITransparencyStrip } from "@/components/bi/BITransparencyStrip";
import { BIArchitecture } from "@/components/bi/BIArchitecture";
import { BIPricing } from "@/components/bi/BIPricing";
import { BIFAQ } from "@/components/bi/BIFAQ";
import { BICTA } from "@/components/bi/BICTA";

export const metadata: Metadata = {
  title: "Enterprise BI Portal & Swift AI Ask | SwiftAIApps",
  description:
    "A secure, white-labeled Power BI Embedded portal with plug-and-play AI agents running inside your own Azure environment. Unlimited end-users, no Power BI Pro license required.",
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <BIHero />
        <BIFeatures />
        <BIHowItWorks />
        <BIControlStrip />
        <BITransparencyStrip />
        <BIArchitecture />
        <BIPricing />
        <BIFAQ />
        <BICTA />
      </main>
      <Footer />
    </>
  );
}
