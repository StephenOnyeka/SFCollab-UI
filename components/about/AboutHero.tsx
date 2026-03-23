"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Button from "../Button";

export default function AboutHero() {
  return (
    <section className="relative w-full max-w-7xl mx-auto">
      <div className="px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 min-w-full py-10">
          <div className="flex flex-col gap-6 text-left w-xl ">
            <span className="text-[#6E00CC] font-normal tracking-[0.2em] uppercase text-sm border-b-2 border-[#6E00CC]/20 pb-1 w-fit">
              About Us
            </span>
            <h2 className="text-[42px] md:text-[60px] font-normal text-[#1A1A1A] leading-tight tracking-tighter">
              Where Builders Create{" "}
              <span className=" text-gray-400">Real Products</span>{" "}
            </h2>
          </div>
          <div className="flex flex-col gap-6 w-lg">
            <p className="text-base text-gray-500 leading-relaxed text-left">
              We’re a platform of creatives helping brands grow through smart strategy, strong design, and results-driven execution.
            </p>
            {/* <Button variant="primary" className="w-fit">
              Create a Startup
            </Button> */}
          </div>
          {/* </div> */}
        </div>      
        {/* <motion.h1
          // className="text-[44px] sm:text-[56px] lg:text-[72px] font-inter text-[#1A1A1A] leading-tight tracking-tighter max-w-4xl py-10 mt-10"
          className="text-[42px] md:text-[60px] text-center text-[#1A1A1A] leading-tight tracking-tighter max-w-4xl py-10 mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Where Builders Create <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-[#1A1A1A] via-[#1A1A1A] to-[#6E00CC]">
            Real Products
          </span>{" "}
          Together
        </motion.h1> */}  
      </div>
      <div className="relative aspect-[8/4] w-4xl rounded-[2.5rem] overflow-hidden shadow-2xl mx-auto ">
        <Image
          src="/images/r.jpg"
          alt="Marketing experts collaborating"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}




{/* <motion.h1
          // className="text-[44px] sm:text-[56px] lg:text-[72px] font-inter text-[#1A1A1A] leading-tight tracking-tighter max-w-4xl py-10 mt-10"
          className="text-[42px] md:text-[60px] text-center text-[#1A1A1A] leading-tight tracking-tighter max-w-4xl py-10 mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Where Builders Create <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-[#1A1A1A] via-[#1A1A1A] to-[#6E00CC]">
            Real Products
          </span>{" "}
          Together
        </motion.h1> */}