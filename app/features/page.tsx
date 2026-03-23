import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeaturesHero from "@/components/features/FeaturesHero";
import InteractiveFeatures from "@/components/features/InteractiveFeatures";
import PricingSection from "@/components/features/PricingSection";
import AboutCTA from "@/components/about/AboutCTA";

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      <FeaturesHero />
      <InteractiveFeatures />
      <PricingSection />
      {/* <AboutCTA /> */}
    </main>
  );
}
