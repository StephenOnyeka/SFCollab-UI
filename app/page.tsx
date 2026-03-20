import React from "react";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import BuilderReputation from "@/components/BuilderReputation";
import EarlyTraction from "@/components/EarlyTraction";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Problem />
      <Solution />
      <BuilderReputation />
      <EarlyTraction />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}
