import React from "react";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Problem />
      <Solution />
      {/* Additional sections can be added here */}
    </div>
  );
}
