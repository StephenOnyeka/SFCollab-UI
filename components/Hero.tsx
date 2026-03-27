"use client";

import Image from "next/image";
import Button from "@/components/Button";
import { MdPlayArrow, MdFiberManualRecord } from "react-icons/md";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full bg-white pt-12 pb-24 lg:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Column */}
        <div className="flex flex-col items-start gap-8">
          {/* Review Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-gray-100">
            <span className="text-sm font-medium uppercase">
              1,500+ Reviews
            </span>
            <div className="flex -space-x-1.5">
              <div className="w-7 h-7 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                <Image
                  src="https://i.pravatar.cc/100?u=1"
                  alt="Reviewer"
                  width={28}
                  height={28}
                  className="rounded-full"
                />
              </div>
              <div className="w-7 h-7 rounded-full border-2 border-white overflow-hidden bg-gray-300">
                <Image
                  src="https://i.pravatar.cc/100?u=2"
                  alt="Reviewer"
                  width={28}
                  height={28}
                  className="rounded-full"

                />
              </div>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-[44px] sm:text-[56px] lg:text-[60px] font-inter text-[#1A1A1A] leading-tight tracking-tighter">
            We help ambitious brands grow faster
          </h1>

          {/* Description */}
          <p className="text-base text-gray-600 max-w-lg">
            Collaboration without friction The real-time canvas where distributed teams build, think, and create in sync.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="primary">Get Started</Button>
            <Link href="/waitlist">
            <Button variant="outline" className="border border-black" >Join waitlist</Button>
            </Link>
          </div>

          {/* Feature Pillars - Infinite Scroll */}
          {/* flex flex-wrap items-center gap-x-4 gap-y-0 mt-2 */}
          <div className="max-w-sm overflow-hidden mt-2">
            <motion.div 
              className="flex items-center gap-x-4 whitespace-nowrap"
              animate={{ x: ["-50%", "0%"] }}
              transition={{ 
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 50,
                  ease: "linear",
                }
              }}
              style={{ width: "fit-content" }}
            >
              {[...Array(6)].map((_, i) => (
                <div key={i} className="flex items-center gap-x-8">
                  <div className="flex items-center gap-2 text-sm text-[#1A1A1A]/70">
                    <MdFiberManualRecord className="w-3 h-3 text-[#6E00CC]" />
                    Pay per growth
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#1A1A1A]/70">
                    <MdFiberManualRecord className="w-3 h-3 text-[#6E00CC]" />
                    System-ready
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#1A1A1A]/70">
                    <MdFiberManualRecord className="w-3 h-3 text-[#6E00CC]" />
                    Start Free
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Right Column - Image & Overlays */}
        <div className="relative">
          <div className="relative aspect-16/14 w-full rounded-[2.5rem] overflow-hidden shadow-2xl">
            <Image
              src="/hero-image.png"
              alt="Marketing experts collaborating"
              fill
              className="object-cover"
              priority
            />

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-white/95 backdrop-blur-md px-6 py-3.5 rounded-2xl flex items-center gap-4 text-black shadow-2xl transition-all transform hover:scale-110 active:scale-95 group">
                <div className="w-11 h-11 bg-[#1A1A1A] rounded-xl flex items-center justify-center shadow-inner group-hover:bg-[#6E00CC] transition-colors">
                  <MdPlayArrow className="text-white text-2xl ml-0.5" />
                </div>
                <span className="text-[17px] font-medium tracking-tight text-[#1A1A1A]">
                  Watch Video
                </span>
              </button>
            </div>
          </div>

          {/* Floating Template Card */}
          {/* <div className="absolute -bottom-6 -right-4 lg:right-6 bg-white p-6 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] flex flex-col gap-1 border border-gray-50 min-w-[260px] transform transition-transform hover:-translate-y-2">
            <h4 className="text-[17px] font-medium text-[#1A1A1A]">Customise this template?</h4>
            <div className="flex items-center justify-between mt-1">
              <span className="text-[14px] font-medium text-gray-400">View our process</span>
              <div className="text-gray-400 group-hover:text-black">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
