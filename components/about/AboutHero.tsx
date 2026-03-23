"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative w-full max-w-7xl mx-auto">
      <div className="px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <motion.h1 
          // className="text-[44px] sm:text-[56px] lg:text-[72px] font-inter text-[#1A1A1A] leading-tight tracking-tighter max-w-4xl"
          className="text-[44px] sm:text-[56px] lg:text-[72px] font-inter text-[#1A1A1A] leading-tight tracking-tighter max-w-4xl py-10 mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Where Builders Create <br className="hidden sm:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A1A1A] via-[#1A1A1A] to-[#6E00CC]">Real Products</span> Together
        </motion.h1>
      </div>
      <div className="relative aspect-[8/4] w-5xl rounded-[2.5rem] overflow-hidden shadow-2xl mx-auto ">
                <Image
                  src="/images/r.jpg"
                  alt="Marketing experts collaborating"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
      {/* <div className="relative w-full h-[600px]">
        <Image src="/images/r.jpg" alt="About Hero" fill className="object-cover rounded-lg mt-10 aspect-[16/9] w-full" priority />
      </div> */}
    </section>
  );
}
