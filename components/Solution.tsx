'use client';

import React from 'react';
import { MdOutlineBolt, MdOutlineGroups, MdOutlineMap, MdOutlineAutoAwesome } from 'react-icons/md';
import { motion } from 'framer-motion';
import Button from './Button';
import Image from 'next/image';

export default function Solution() {
  const solutions = [
    {
      icon: <MdOutlineBolt className="w-7 h-7" />,
      title: "One-click Ecosystem",
      description: "Everything you need to launch: legal structure, integrated banking, and contributor agreements."
    },
    {
      icon: <MdOutlineGroups className="w-7 h-7" />,
      title: "Vetted Network",
      description: "Find your next co-founder or early hire from a high-signal pool of developers, designers, and growth experts."
    },
    {
      icon: <MdOutlineMap className="w-7 h-7" />,
      title: "Vision Alignment",
      description: "The 'Vision Ledger' ensures everyone is building toward the same milestone with transparent equity split."
    },
    {
      icon: <MdOutlineAutoAwesome className="w-7 h-7" />,
      title: "Instant Execution",
      description: "Distributed teams can start executing instantly on a shared canvas without legal or setup overhead."
    }
  ];

  return (
    <section className="w-full bg-white py-24 lg:py-32 overflow-hidden relative">
      {/* Decorative background element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-[0.03]">
          <div className="absolute top-40 -left-20 w-80 h-80 bg-[#6E00CC] blur-[120px] rounded-full"></div>
          <div className="absolute bottom-40 -right-20 w-80 h-80 bg-[#6E00CC] blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col items-center text-center gap-6 mb-20 lg:mb-24">
          <span className="text-[#6E00CC] font-normal tracking-[0.2em] uppercase text-sm border-b-2 border-[#6E00CC]/20 pb-1">
            The Solution
          </span>
            <h2 className="text-[42px] md:text-[60px] font-normal text-[#1A1A1A] leading-tight tracking-tighter max-w-4xl">
              The first integrated environment for <span className="bg-clip-text text-transparent bg-linear-to-r from-[#6E00CC] to-[#A855F7]">venture formation.</span>
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
              SFCollab replaces weeks of fragmented admin with a single, high-momentum workflow from vision to launch.
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((item, index) => (
              <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col gap-6 p-8 rounded-[2rem] bg-gray-50 border border-gray-100 hover:border-[#6E00CC]/30 hover:bg-white hover:shadow-[0_20px_40px_rgba(110,0,204,0.06)] transition-all duration-300 group"
              >
                  <div className="w-14 h-14 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center group-hover:bg-[#6E00CC] group-hover:text-white transition-colors">
                      {item.icon}
                  </div>
                  <div className="flex flex-col gap-3">
                      <h3 className="text-[20px] font-normal text-[#1A1A1A] group-hover:text-[#6E00CC] transition-colors">
                          {item.title}
                      </h3>
                      <p className="text-[15px] text-gray-400 group-hover:text-gray-500 transition-colors leading-relaxed">
                          {item.description}
                      </p>
                  </div>
              </motion.div>
            ))}
          </div>
  
          {/* Feature Highlight / CTA Block */}
          {/* <div className="mt-20 lg:mt-32 relative group"> */}
          <div className="mt-20 lg:mt-32 relative">
              <div className="absolute inset-0 bg-[#6E00CC] rounded-[3rem] blur-3xl opacity-5 hover:opacity-10 transition-opacity"></div>
              <div className="relative bg-[#1A1A1A] text-white rounded-[4rem] overflow-hidden flex flex-col md:flex-row items-center justify-between p-8 md:p-16 gap-12">
                  <div className="flex flex-col gap-6 max-w-lg">
                      <h3 className="text-3xl md:text-4xl font-normal leading-tight tracking-tight">
                          Ready to launch your vision in record time?
                      </h3>
                      <p className="text-white/60 text-[17px]">
                          Join the builders who are bypassing traditional friction to focus on what matters: the product.
                      </p>
                      <div className="flex flex-wrap gap-4 mt-2">
                          <Button variant="primary">Get Started</Button>
                      </div>
                  </div>
                  
                  {/* Visual Momentum - CONTINUOUS NETWORKING ANIMATION */}
                  <div className="w-full max-w-[400px] aspect-square rounded-[3rem] bg-linear-to-br from-[#6E00CC]/20 to-transparent border border-white/10 flex items-center justify-center p-8 group-hover:border-[#6E00CC]/50 transition-colors overflow-hidden relative">
                      
                      {/* Background Nodes & Connections */}
                      <div className="absolute inset-0">
                          {/* Central Hub */}
                          <motion.div 
                              animate={{ 
                                  scale: [1, 1.1, 1],
                                  opacity: [0.5, 0.8, 0.5]
                              }}
                              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#6E00CC]/30 rounded-full blur-2xl"
                          />
  
                        {/* Floating Nodes (Builders) */}
                        {[
                          { x: -80, y: -60, delay: 0, img: "https://i.pravatar.cc/100?u=1" },
                          { x: 90, y: -40, delay: 1, img: "https://i.pravatar.cc/100?u=2" },
                          { x: -60, y: 80, delay: 2, img: "https://i.pravatar.cc/100?u=3" },
                          { x: 70, y: 60, delay: 0.5, img: "https://i.pravatar.cc/100?u=4" },
                          { x: 0, y: -100, delay: 1.5, img: "https://i.pravatar.cc/100?u=5" }
                        ].map((pos, i) => (
                          <motion.div
                            key={i}
                            initial={{ x: pos.x, y: pos.y }}
                            animate={{ 
                                x: [pos.x, pos.x + (i % 2 === 0 ? 15 : -15), pos.x],
                                y: [pos.y, pos.y + (i % 2 === 0 ? -15 : 15), pos.y]
                            }}
                            transition={{ duration: 5 + i, repeat: Infinity, ease: "linear" }}
                            className="absolute top-1/2 left-1/2 w-10 h-10 -translate-x-1/2 -translate-y-1/2 border-2 border-[#6E00CC]/30 rounded-full overflow-hidden shadow-lg backdrop-blur-sm"
                          >
                             <Image 
                                src={pos.img} 
                                alt={`Team member ${i + 1}`} 
                                width={48} 
                                height={48} 
                                className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
                             />
                          </motion.div>
                        ))}

                        {/* Dynamic Beaming Lines (Connections) */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none">
                            {[
                                { x1: "50%", y1: "50%", x2: "20%", y2: "30%", dur: 3 },
                                { x1: "50%", y1: "50%", x2: "80%", y2: "40%", dur: 4 },
                                { x1: "50%", y1: "50%", x2: "30%", y2: "80%", dur: 5 },
                                { x1: "50%", y1: "50%", x2: "70%", y2: "70%", dur: 3.5 }
                            ].map((line, i) => (
                                <motion.line 
                                    key={i}
                                    x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2} 
                                    stroke="url(#lineGradient)" 
                                    strokeWidth="1.5" 
                                    strokeDasharray="10 100"
                                    animate={{ 
                                        strokeDashoffset: [0, -200],
                                        opacity: [0.3, 0.6, 0.3]
                                    }}
                                    transition={{ duration: line.dur, repeat: Infinity, ease: "linear" }}
                                />
                            ))}
                            <defs>
                                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#6E00CC" stopOpacity="0" />
                                    <stop offset="50%" stopColor="#6E00CC" stopOpacity="1" />
                                    <stop offset="100%" stopColor="#6E00CC" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>

                    <div className="relative z-10 flex flex-col items-center gap-4">
                        <div className="w-16 h-16 rounded-2xl bg-[#6E00CC] shadow-[0_0_30px_#6E00CC] flex items-center justify-center">
                            {/* <MdOutlineAutoAwesome className="w-8 h-8 text-white" /> */}
                            <div className='w-10 h-10 bg-white rounded-full'>
                              <Image alt='logo' src={'/logo.svg'} width={50} height={50}/>
                            </div>
                        </div>
                        {/* <motion.p 
                          animate={{ opacity: [0.4, 0.8, 0.4] }}
                          transition={{ duration: 3, repeat: Infinity }}
                          className="text-sm text-center text-white/60 uppercase tracking-[0.3em] font-medium"
                        >
                          Network Sync
                        </motion.p> */}
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
