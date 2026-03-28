"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import WaitlistForm from "@/components/waitlist/WaitlistForm";

export default function WaitlistPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] flex flex-col relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#6E00CC]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#A855F7]/5 blur-[100px] rounded-full pointer-events-none" />


      {/* Main Content Split */}
      <div className="flex-1 flex flex-col lg:flex-row items-center justify-center max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-24 gap-16 lg:gap-24 relative z-10">
        
        {/* Left column Content */}
        <div className="flex-1 flex flex-col justify-center max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[#6E00CC] font-normal tracking-[0.2em] uppercase text-sm border-b-2 border-[#6E00CC]/20 pb-1 w-fit">
              Core Engine
            </span>
            <h1 className="text-[42px] md:text-[60px] font-normal text-[#1A1A1A] leading-tight tracking-tighter max-w-4xl py-4">
              The Startup <br />
              <span className="bg-clip-text text-transparent bg-linear-to-r from-[#6E00CC] to-[#A855F7]">
                Operating System
              </span>
            </h1>
            <p className="text-base text-gray-500 leading-relaxed mb-10 max-w-lg">
              We&apos;re currently in private beta. Join the waitlist to secure your spot and start building faster than ever before.
            </p>

            {/* Avatars Social Proof */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-[#FAFAFA] bg-gray-200 overflow-hidden relative">
                    <Image
                      src={`https://i.pravatar.cc/100?img=${i * 12}`}
                      alt="User avatar"
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-4 h-4 text-[#6E00CC]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-500 font-medium">Joined by 500+ builders</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right column Form */}
        <div className="w-full max-w-md lg:max-w-none lg:flex-1 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <WaitlistForm />
          </motion.div>
        </div>

      </div>
    </main>
  );
}
