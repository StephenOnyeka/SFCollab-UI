"use client";
import { motion } from "framer-motion";

export default function FeaturesHero() {
  return (
    <section className="w-full bg-[#FAFAFA] pt-32 pb-16 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#6E00CC]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#1A1A1A]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col items-center">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[#6E00CC] font-medium tracking-[0.2em] uppercase text-sm border-b-2 border-[#6E00CC]/20 pb-1 mb-6 inline-block"
        >
          Core Engine
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[48px] md:text-[64px] font-normal text-[#1A1A1A] leading-tight tracking-tighter mb-6"
        >
          The Startup <br className="hidden sm:block" />
          <span className="text-gray-400">Operating System</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base text-gray-500 max-w-2xl leading-relaxed"
        >
          Where ideas meet execution. One platform for everything your startup needs to build, collaborate, and scale from MVP to unicorn.
        </motion.p>
      </div>
    </section>
  );
}
