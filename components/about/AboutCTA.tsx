"use client";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";

export default function AboutCTA() {
  return (
    <section className="w-full bg-white py-24 lg:py-32 relative overflow-hidden">
      {/* Background Glow */}
      {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#6E00CC]/20 blur-[120px] rounded-full pointer-events-none" /> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-[#1A1A1A] rounded-[4rem] p-8 md:p-16 overflow-hidden text-center flex flex-col items-center gap-12">
          {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#6E00CC]/20 blur-[120px] rounded-full pointer-events-none" /> */}
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              // className="text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight mb-8"
              className="text-[48px] md:text-[60px] text-white tracking-[calc(-0.04em)] mb-8 leading-tight"
            >
              The world has enough talkers. <br className="hidden sm:block" />
              It needs 
              {/* <span className="text-[#6E00CC]">more builders.</span> */}
              <span className="bg-clip-text text-transparent bg-linear-to-r from-[#6E00CC] to-[#A855F7]">
             {" "}more builders.
          </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-base text-gray-400 mb-12 max-w-2xl mx-auto"
            >
              Your first project is waiting to be born. Start for free. Build
              with AI. Win together.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Button variant="primary">Join Waitlist</Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AboutCTA2() {
  return (
    // <section className="w-full bg-[#FBFBFB] border-y border-gray-100 relative overflow-hidden">
    <section className="w-full bg-[#0A0A0A] border-y border-gray-100 relative overflow-hidden h-fit">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#6E00CC_1px,transparent_1px)] bg-size-[40px_40px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#6E00CC]/20 blur-[120px] rounded-full pointer-events-none" /> */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="flex flex-col gap-8">
            <h2 className="text-[42px] md:text-[56px] mt-8 md:mt-8 lg:mt-0 font-normal leading-[1.1] tracking-tighter text-white">
              The ecosystem is <br />{" "}
              <span className="text-white/40 italic">already forming.</span>
            </h2>
            <p className="text-base text-white/40 max-w-lg leading-relaxed">
              SFCollab is more than a platform—it&apos;s infrastructure for the next
              generation of builders. We&apos;re seeing organic team formation happen
              at record speeds.
            </p>
            <Link href="/waitlist">
            <Button variant="primary" className="w-fit">
              Join Waitlist
            </Button>
            </Link>
            <div className="flex items-center gap-6 mt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`https://i.pravatar.cc/100?u=sf${i}`}
                      alt="Avatar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              <span className="text-sm font-medium text-gray-400">
                Join the waitlist of 200+ elite builders
              </span>
            </div>
          </div>

          {/* <div className="relative aspect-4/6 w-full rounded-[2.5rem] h-screen overflow-hidden mx-auto "> */}
          <div className="relative aspect-4/6 w-full rounded-[2.5rem] h-[50vh] md:h-screen overflow-hidden mx-auto ">
            {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#6E00CC]/20 blur-[120px] rounded-full pointer-events-none" /> */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[800px] bg-[#6E00CC]/20 blur-[120px] rounded-full pointer-events-none" />
            <Image
              src="/images/phone.png"
              alt="Marketing experts collaborating"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
