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
    // description: "We develop creative, data-informed concepts that fit your objectives and connect naturally with your target audience.",
    description: "With whatever purpose you have, we have people to help you with it. Meet founders, builders, designers, and thinkers — all in one place. No pitching. No pressure. Just collaboration.",
  },
  {
    number: "03",
    title: "Execution",
    description: "We turn ideas into a focused marketing plan and craft visuals, content, and assets that communicate your message with clarity.",
  },
  {
    number: "04",
    title: "Get Rewarded Fairly",
    description: "We track performance, analyze results, and refine your campaigns to ensure continuous improvement and stronger outcomes.",
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
    <section className="py-24 bg-white" ref={containerRef}>
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Left Column: Title and Badge */}
          <div className="lg:col-span-5 flex flex-col items-start lg:sticky lg:top-32 h-fit">
            {/* <div className="flex items-center gap-2 mb-6">
              <span className="text-black font-bold">✦</span>
              <span className="text-sm font-bold tracking-widest uppercase text-black">Process</span>
            </div> */}
            
            <h2 className="text-3xl md:text-4xl text-gray-900 leading-[1.1] tracking-tight mb-6">
              Our Process Flow
            </h2>
            
            <p className="text-base text-gray-500 max-w-sm leading-relaxed">
              A streamlined process that guides every project from idea to execution with precision.
            </p>
          </div>

          {/* Right Column: Timeline and Steps */}
          <div className="lg:col-span-7 relative">
            
            {/* Vertical Line Container */}
            <div className="absolute left-[23px] top-6 bottom-6 w-[2px] bg-gray-100 hidden md:block">
              {/* Animated Progress Line */}
              <motion.div 
                style={{ height: lineHeight, scaleY: 1 }}
                className="w-full bg-[#ff00e5] origin-top"
              />
            </div>

            <div className="space-y-24 relative">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-8 md:gap-16">
                  
                  {/* Step Number Circle */}
                  <div className="relative z-10 shrink-0">
                    <div className="w-12 h-12 rounded-full border-2 border-gray-300 bg-white flex items-center justify-center text-base">
                      {step.number}
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="flex flex-col gap-4 pt-2">
                    <h3 className="text-2xl text-gray-900">
                      {step.title}
                    </h3>
                    <p className="text-base text-gray-500 max-w-xl leading-relaxed">
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
