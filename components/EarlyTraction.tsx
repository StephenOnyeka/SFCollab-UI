'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MdTrendingUp, MdOutlineGroups, MdOutlineRocketLaunch } from 'react-icons/md';

export default function EarlyTraction() {
  const metrics = [
    { 
      label: "Builders Joined", 
      value: "85", 
      icon: <MdOutlineGroups />, 
      suffix: "+",
      description: "Vetted talent across engineering, design, and product." 
    },
    { 
      label: "Projects Created", 
      value: "34", 
      icon: <MdOutlineRocketLaunch />, 
      suffix: "",
      description: "Startup visions currently in the formation phase." 
    }
  ];

  return (
    <section className="w-full bg-[#FBFBFB] py-24 lg:py-32 border-y border-gray-100 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#6E00CC_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="flex flex-col gap-8">
            {/* <div className="flex items-center gap-3 text-[#6E00CC] font-bold text-xs uppercase tracking-[0.3em]">
                <MdTrendingUp className="text-xl" />
                Early Momentum
            </div> */}
            <h2 className="text-[42px] md:text-[56px] font-normal leading-[1.1] tracking-tighter text-[#1A1A1A]">
                The ecosystem is <br /> <span className="text-gray-400 italic">already forming.</span>
            </h2>
            <p className="text-lg text-gray-500 max-w-lg leading-relaxed">
                SFCollab is more than a platform—it's infrastructure for the next generation of builders. We're seeing organic team formation happen at record speeds.
            </p>
            
            <div className="flex items-center gap-6 mt-4">
                <div className="flex -space-x-3">
                    {[1,2,3,4,5].map((i) => (
                        <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                            <img src={`https://i.pravatar.cc/100?u=sf${i}`} alt="Avatar" className="w-full h-full object-cover" />
                        </div>
                    ))}
                </div>
                <span className="text-sm font-medium text-gray-400">Join the waitlist of 200+ elite builders</span>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {metrics.map((metric, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-gray-100 p-8 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all group flex flex-col gap-6"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#6E00CC]/5 flex items-center justify-center text-[#6E00CC] text-3xl group-hover:scale-110 transition-transform">
                    {metric.icon}
                </div>
                <div className="flex flex-col gap-1">
                    <div className="flex items-baseline gap-1">
                        <motion.span 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="text-6xl font-normal tracking-tighter text-[#1A1A1A]"
                        >
                            {metric.value}
                        </motion.span>
                        <span className="text-3xl text-[#6E00CC]">{metric.suffix}</span>
                    </div>
                    <span className="text-sm font-bold uppercase tracking-widest text-[#6E00CC]">{metric.label}</span>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                    {metric.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
