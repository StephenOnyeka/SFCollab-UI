"use client";
import { motion } from "framer-motion";
import { MdCheckCircle, MdArrowForward } from "react-icons/md";

const contrasts = [
  { old: "Temporary gigs", new: "Long-term collaborations" },
  { old: "Scattered tools", new: "One shared system" },
  { old: "Working for someone", new: "Working with them" },
];

const principles = [
  "Transparency over hype",
  "Long-term value over short-term wins",
  "People over platforms"
];

export default function GuidingPrinciples() {
  return (
    <section className="w-full bg-[#1A1A1A] py-24 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left Column - The SF Way */}
        <div>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 tracking-tight"
          >
            The SF Way
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg mb-10 leading-relaxed"
          >
            SFcollab changes how work comes together. Built for people who want to build, not just deliver.
          </motion.p>
          
          <div className="space-y-6">
            {contrasts.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10"
              >
                <div className="flex-1 text-gray-400 line-through decoration-white/30 truncate text-right sm:text-left">{c.old}</div>
                <MdArrowForward className="text-[#6E00CC] text-xl shrink-0" />
                <div className="flex-1 font-medium">{c.new}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column - Guiding Principles */}
        <div className="lg:mt-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-[#6E00CC] rounded-[2rem] p-8 sm:p-10 shadow-2xl relative overflow-hidden"
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-8 relative z-10 text-white">Guiding Principles</h3>
            <ul className="space-y-6 relative z-10">
              {principles.map((p, i) => (
                <li key={i} className="flex items-start gap-4">
                  <MdCheckCircle className="text-white text-2xl shrink-0 mt-0.5" />
                  <span className="text-lg font-medium text-white/90">{p}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
