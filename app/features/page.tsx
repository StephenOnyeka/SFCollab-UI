import React from "react";
import FeaturesHero from "@/components/features/FeaturesHero";
import InteractiveFeatures from "@/components/features/InteractiveFeatures";
import PricingSection from "@/components/features/PricingSection";

export default function FeaturesPage() {
  return (
    // <main className="min-h-screen bg-[#FAFAFA]">
    <main className="min-h-screen bg-white">
      <FeaturesHero />
      {/* <InteractiveFeatures /> */}
      <PricingSection />
      {/* <AboutCTA /> */}
    </main>
  );
}
