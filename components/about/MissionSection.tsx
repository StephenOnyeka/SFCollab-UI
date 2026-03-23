"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform} from "framer-motion";

export default function MissionSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 30%"], // adjust these to control when reveal starts/ends
  });

  const text =
    "We exist to provide space where builders, operators, and founders come together to create real products — with clarity, fairness, and shared upside.";
  const words = text.split(" ");

  return (
    // <section ref={containerRef} className="w-full bg-[#FAFAFA] py-24">
    <div>
    <section ref={containerRef} className="w-full py-24">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-2xl sm:text-3xl lg:text-4xl text-[#1A1A1A] leading-[1.2] font-normal mt-4">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = Math.min((i + 1) / words.length, 1);

            const opacity = useTransform(scrollYProgress, [start, end], [0.18, 1]);

            return (
              <motion.span
                key={`${word}-${i}`}
                style={{ opacity }}
                className="inline-block mr-[0.35em] last:mr-0"
              >
                {word}
              </motion.span>
            );
          })}
        </p>
      </div>
    </section>
    <section className="w-full pb-24">
      {/* <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"> */}
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Metric 1 */}
          <div className="flex flex-col text-center">
            <div className="text-[56px] md:text-[72px] text-[#1A1A1A] leading-none mb-2 tracking-tight">
              500<span className="text-[#6E00CC] text-base md:text-xl">+</span>
            </div>
            <span className="text-sm md:text-base text-gray-500">Startups building</span>
          </div>
          {/* Metric 2 */}
          <div className="flex flex-col text-center">
            <div className="text-[56px] md:text-[72px] text-[#1A1A1A] leading-none mb-2 tracking-tight">
              &lt;50<span className="text-[#6E00CC] text-base md:text-xl">ms</span>
            </div>
            <span className="text-sm md:text-base text-gray-500">Sync latency</span>
          </div>
          {/* Metric 3 */}
          <div className="flex flex-col text-center">
            <div className="text-[56px] md:text-[72px] text-[#1A1A1A] leading-none mb-2 tracking-tight">
              24<span className="text-[#6E00CC] text-base md:text-xl">/7</span>
            </div>
            <span className="text-sm md:text-base text-gray-500">Live collaboration</span>
          </div>
          {/* Metric 4 */}
          <div className="flex flex-col text-center">
            <div className="text-[56px] md:text-[72px] text-[#1A1A1A] leading-none mb-2 tracking-tight">
              ∞
            </div>
            <span className="text-sm md:text-base text-gray-500">Canvas scale</span>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}
