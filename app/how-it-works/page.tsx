import React from "react";
import ProcessFlow from "@/components/ProcessFlow";
import ProcessDetails from "@/components/ProcessDetails";
import Footer from "@/components/Footer";

export default function HowItWorksPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <div className="pt-24 md:pt-32">
        <ProcessFlow />
        <ProcessDetails />
      </div>
      <Footer />
    </main>
  );
}
