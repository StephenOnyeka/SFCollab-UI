'use client';

import React from 'react';
import { MdOutlineNavigateNext } from 'react-icons/md';
import { motion } from 'framer-motion';
import PoweredBy from './SFEngine';

export default function Problem() {
  const problems = [
    {
      id: '01',
      title: "Siloed Talent",
      description: "90% of builders struggle to find high-signal collaborators outside their immediate geographic circle."
    },
    {
      id: '02',
      title: "Capital Inefficiency",
      description: "The pre-seed phase is the most fragmented. Capital is often deployed to teams with incomplete skill sets."
    },
    {
      id: '03',
      title: "High Momentum Friction",
      description: "Traditional venture formation takes months. Builders lose focus during the most critical 'vision' phase."
    }
  ];

  return (
    <section className="w-full bg-[#0A0A0A] py-24 lg:py-32 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Heading & Context */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            // className="flex flex-col gap-6 sticky top-32"
            className="flex flex-col gap-6"
          >
            <span className="text-[#6E00CC] font-normal tracking-[0.2em] uppercase text-sm">
              The Reality
            </span>
            <h2 className="text-[40px] md:text-[56px] font-normal text-white leading-[1.1] tracking-tighter">
              The process of starting is fundamentally <span className="text-white/40 italic">broken.</span>
            </h2>
            {/* <p className="text-lg text-white/50 max-w-md leading-relaxed"> */}
            <p className="text-base text-white/50 max-w-md leading-relaxed">
              We&apos;ve identified a critical gap in the venture lifecycle: <strong>Capital & Talent Inefficiency.</strong> Currently, starting a project depends more on luck than on skill alignment.
            </p>
            
            {/* Visual element: A "Broken" Diagram - INFINITE ANIMATION */}
            {/* <div className="mt-8 relative h-40 w-full overflow-hidden rounded-3xl bg-linear-to-br from-white/5 to-transparent border border-white/10 p-8"> */}
            <div className="mt-8 relative h-[300px] md:h-72 w-full overflow-hidden rounded-3xl p-4 md:p-8 ">
            {/* <div className="mt-8 relative h-[300px] md:h-72 w-full overflow-hidden rounded-3xl p-4 md:p-8 bg-white/2 border border-white/5"> */}
                {/* Background Glow */}
                <motion.div 
                    animate={{ 
                        opacity: [0.1, 0.2, 0.1],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-[#6E00CC]/20 blur-[100px] rounded-full"
                ></motion.div>

                <div className="relative flex items-center justify-between gap-4 h-full">
                    {/* Left: Solid but unstable line */}
                    <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden relative">
                        <motion.div 
                            animate={{ 
                                x: ["-100%", "100%"],
                                opacity: [0.3, 0.6, 0.3]
                            }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 w-1/2 bg-linear-to-r from-transparent via-[#6E00CC]/40 to-transparent"
                        />
                    </div>

                    {/* Center: The "Broken" Node */}
                    <div className="relative flex items-center justify-center py-8 scale-75 md:scale-100 transition-transform duration-300">
                        <PoweredBy />
                    </div>

                    {/* Right: Leaking / Broken connection */}
                    <div className="flex-1 h-1 bg-white/5 rounded-full overflow-hidden relative">
                        <motion.div
                            animate={{ 
                                x: ["100%", "-100%"],
                                opacity: [0.2, 0.4, 0.2]
                            }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 w-full bg-[repeating-linear-gradient(90deg,transparent,transparent_10px,#6E00CC_10px,#6E00CC_20px)]"
                        />
                    </div>
                </div>
            </div>
          </motion.div>

          {/* Right Column: Problem Cards */}
          <div className="flex flex-col gap-6 md:gap-8">
            {problems.map((problem, index) => (
              <motion.div 
                key={problem.id} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative bg-white/3 hover:bg-white/6 border border-white/10 p-8 rounded-[2.5rem] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-6">
                  <span className="text-2xl font-normal text-[#6E00CC]/40 font-mono tracking-tighter">
                    {problem.id}
                  </span>
                  <div className="flex flex-col gap-3">
                    <h3 className="text-2xl font-normal text-white tracking-tight group-hover:text-[#6E00CC] transition-colors">
                      {problem.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed font-normal">
                      {problem.description}
                    </p>
                  </div>
                </div>
                
                {/* Micro-interaction: Corner accent */}
                <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <MdOutlineNavigateNext className="w-6 h-6 text-[#6E00CC] transform -rotate-45" />
                </div>
              </motion.div>
            ))}

            {/* Problem Footer / Momentum CTA */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-8 p-10 rounded-[3rem] bg-linear-to-br from-[#6E00CC] to-[#450080] shadow-2xl relative overflow-hidden group"
            >
                {/* Background Pattern */}
                {/* <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_2px_2px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:24px_24px]"></div> */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_2px_2px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-size-[24px_24px]"></div>
                
                <div className="relative flex flex-col gap-4 text-center items-center">
                    <p className="text-white/90 font-normal text-xl tracking-tight leading-snug">
                       &quot;SFCollab is the antidote to friction. We replace luck with architecture.&quot;
                    </p>
                    <motion.div 
                        initial={{ width: "3rem" }}
                        whileHover={{ width: "6rem" }}
                        className="h-[2px] bg-white/30 rounded-full"
                    ></motion.div>
                </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
