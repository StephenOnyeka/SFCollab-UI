import React from "react";
import ProcessFlow from "@/components/ProcessFlow";
import ProcessDetails from "@/components/ProcessDetails";
import Image from "next/image";

export default function HowItWorksPage() {
  return (
    <main className="flex flex-col min-h-screen max-w-7xl mx-auto">
      <div className="flex flex-col items-center">
        <h2 className="text-[42px] md:text-[60px] font-normal text-center text-[#1A1A1A] leading-tight tracking-tighter max-w-4xl py-10 mt-10">
          See How it{" "}
          <span className="bg-clip-text text-transparent bg-linear-to-r from-[#6E00CC] to-[#A855F7]">
            Works
          </span>
        </h2>
        <div className="relative aspect-[8/4] w-5xl rounded-[2.5rem] overflow-hidden shadow-2xl">
          <Image
            // src="/images/r.jpg"
            src="/images/o.jpg"
            alt="Marketing experts collaborating"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="pt-24 md:pt-32">
          <ProcessFlow />
          <ProcessDetails />
        </div>
      </div>
    </main>
  );
}
