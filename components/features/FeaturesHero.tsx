"use client";

import { motion } from "framer-motion";
import InteractiveFeatures from "./InteractiveFeatures";

export default function FeaturesHero() {
  return (
    <section className="relative w-full overflow-hidden">

      {/* Content wrapper*/}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="pt-10 pb-8 md:pb-12 text-center flex flex-col items-center">
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 w-full">
            
            {/* Left Text Column */}
            <div className="flex flex-col gap-6 text-left w-full md:w-3/5 lg:w-1/2">
              <span className="text-[#6E00CC] font-normal tracking-[0.2em] uppercase text-sm border-b-2 border-[#6E00CC]/20 pb-1 w-fit">
                Core Engine
              </span>
              <h2 className="text-[42px] md:text-[56px] lg:text-[60px] font-normal text-[#1A1A1A] leading-tight tracking-tighter">
                The Startup <br className="hidden sm:block" />
                <span className="text-gray-400">Operating System</span>
              </h2>
            </div>

            {/* Right Description Column */}
            <div className="flex flex-col gap-6 w-full md:w-2/5 lg:w-1/2">
              <p className="text-base text-gray-500 leading-relaxed text-left">
                Where ideas meet execution. One platform for everything your startup needs to build, collaborate, and scale from MVP to unicorn.
              </p>
            </div>
          </div>
        </div>
      </div>

      <InteractiveFeatures />
    </section>
  );
}