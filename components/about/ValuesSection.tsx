"use client";
import { motion } from "framer-motion";
import { MdVisibility, MdHandshake, MdGroups, MdFilterListOff, MdTrendingUp } from "react-icons/md";

const values = [
  {
    title: "Clarity",
    description: "Always know what you're building and why.",
    icon: MdVisibility,
  },
  {
    title: "Fair Ownership",
    description: "Your effort translates into real upside.",
    icon: MdHandshake,
  },
  {
    title: "Strong Teams",
    description: "Work with people who are aligned, not random.",
    icon: MdGroups,
  },
  {
    title: "Less Noise",
    description: "Everything in one place, nothing scattered.",
    icon: MdFilterListOff,
  },
  {
    title: "Momentum",
    description: "Build once, grow continuously.",
    icon: MdTrendingUp,
  }
];

export default function ValuesSection() {
  return (
    <section className="w-full bg-[#FAFAFA] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl text-[#1A1A1A] tracking-tight"
          >
            Benefits Built for Builders
            {/* Our Guiding Principles */}
          </motion.h2>
        </div>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center"> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center content-center">
          {values.map((v, i) => (
            <motion.div 
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-3xl bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(110,0,204,0.08)] transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#6E00CC]/10 transition-colors">
                <v.icon className="text-2xl text-[#1A1A1A] group-hover:text-[#6E00CC] transition-colors" />
              </div>
              {/* <h3 className="text-xl font-semibold text-[#1A1A1A] mb-3">{v.title}</h3> */}
              <h3 className="text-xl text-[#1A1A1A] mb-3">{v.title}</h3>
              <p className="text-gray-600 text-base leading-relaxed">{v.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
