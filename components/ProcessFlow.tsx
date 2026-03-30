"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Ideation",
    description: "Share an idea or join one. Explore your desired brand, audience, and goals to uncover clear opportunities and align the direction before moving forward.",
  },
  {
    number: "02",
    title: "Start with People",
    description: "With whatever purpose you have, we have people to help you with it. Meet founders, builders, designers, and thinkers — all in one place. No pitching. No pressure. Just collaboration.",
  },
  {
    number: "03",
    title: "Execution",
    description: "Tasks are clear. Progress is visible. Effort is tracked. You always know what needs to be done, who's doing it, and how value is created",
  },
  {
    number: "04",
    title: "Get Rewarded Fairly",
    description: "Work turns into value. That value turns into pay, ownership, reputation, and opportunity. No empty promises. It's built into the system.",
  },
];

const ProcessFlow = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={containerRef}
      className="relative py-24 bg-white overflow-x-hidden w-screen left-1/2 -translate-x-1/2"
    >
      {/* Inner content container - stays nicely padded and centered */}
      <div className="container mx-auto px-4 sm:px-6 md:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-20 xl:gap-24 w-full max-w-full">
          
          {/* Left Column: Title and Description */}
          <div className="lg:col-span-5 flex flex-col items-start lg:sticky lg:top-32 h-fit">
            <h2 className="text-3xl md:text-4xl text-gray-900 leading-[1.1] tracking-tight mb-6">
              Our Process Flow
            </h2>
            
            <p className="text-base text-gray-500 max-w-sm leading-relaxed">
              The streamlined process that guides every project from idea to execution with precision.
            </p>
          </div>

          {/* Right Column: Timeline */}
          <div className="lg:col-span-7 relative min-w-0">
            
            {/* Vertical Line */}
            <div className="absolute left-6 md:left-[calc(1.5rem)] top-6 bottom-6 w-[2px] bg-gray-100 hidden md:block">
              <motion.div 
                style={{ height: lineHeight, scaleY: 1 }}
                className="w-full bg-[#ff00e5] origin-top"
              />
            </div>

            <div className="space-y-20 md:space-y-24 relative">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-6 md:gap-8 lg:gap-10">
                  
                  {/* Step Number Circle */}
                  <div className="relative z-10 shrink-0">
                    <div className="w-12 h-12 rounded-full border-2 border-gray-300 bg-white flex items-center justify-center text-base font-medium">
                      {step.number}
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="flex-1 flex flex-col gap-3 pt-2 min-w-0">
                    <h3 className="text-2xl text-gray-900">
                      {step.title}
                    </h3>
                    <p className="text-base text-gray-500 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ProcessFlow;