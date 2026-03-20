'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MdOutlineNavigateNext, MdOutlineBolt, MdVerifiedUser, MdAutoAwesome } from 'react-icons/md';
import Button from './Button';

export default function FinalCTA() {
  return (
    <section className="w-full bg-white py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative bg-[#1A1A1A] rounded-[4rem] p-8 md:p-16 overflow-hidden text-center flex flex-col items-center gap-12">
          
          {/* Animated Background effects */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
              <motion.div 
                animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1]
                }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,#6E00CC_0%,transparent_70%)] blur-[100px]"
              />
          </div>

          <div className="relative z-10 flex flex-col items-center gap-6 max-w-3xl">
            {/* <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="w-16 h-16 rounded-3xl bg-[#6E00CC] flex items-center justify-center text-3xl text-white shadow-[0_0_30px_#6E00CC] mb-4"
            >
                <MdOutlineBolt />
            </motion.div> */}
            
            <h2 className="text-[48px] md:text-[60px] font-normal leading-tight tracking-[calc(-0.04em)] text-white">
                Start <span className="text-[#6E00CC]">building.</span>
            </h2>
            
            <p className="text-base text-gray-400 leading-relaxed">
                Join the ecosystem where visions become startups, and execution builds reputation. Your next venture starts here.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 w-full max-w-3xl justify-center">
            <Button variant="primary">Create a Vision</Button>
            <Button variant="outline">Join a Startup</Button>
            {/* <Button variant="outline">Build Reputation</Button> */}
          </div>

          {/* Trust badges footer */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 border-t border-white/5 pt-12 w-full max-w-4xl">
             <div className="flex items-center gap-4 text-left">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#6E00CC]">
                    <MdVerifiedUser />
                </div>
                <div className="flex flex-col">
                    <span className="text-white text-sm font-medium">Build your reputation.</span>
                    <span className="text-gray-500 text-xs">Verify your work with peer-reviewed data.</span>
                </div>
             </div>
             <div className="flex items-center gap-4 text-left">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#6E00CC]">
                    <MdAutoAwesome />
                </div>
                <div className="flex flex-col">
                    <span className="text-white text-sm font-medium">Powered by SF Engine.</span>
                    <span className="text-gray-500 text-xs">Access proprietary tools for venture formation.</span>
                </div>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
}
