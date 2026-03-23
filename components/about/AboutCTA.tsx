"use client";
import { motion } from "framer-motion";
import Button from "@/components/Button";

export default function AboutCTA() {
  return (
    <section className="w-full bg-[#1A1A1A] py-24 lg:py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#6E00CC]/20 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white tracking-tight mb-8"
        >
          The world has enough talkers. <br className="hidden sm:block" />
          <span className="text-[#6E00CC]">It needs more builders.</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          Your first project is waiting to be born. Start for free. Build with AI. Win together.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Button variant="primary">
            Join Waitlist →
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
