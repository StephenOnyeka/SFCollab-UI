"use client";
import { motion } from "framer-motion";

export default function MissionSection() {
  return (
    <section className="w-full bg-[#FAFAFA] py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.p 
          className="text-2xl sm:text-3xl lg:text-4xl font-medium text-[#1A1A1A] leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          SFcollab is where builders, operators, and founders come together to create real products — with clarity, fairness, and shared upside.
        </motion.p>
      </div>
    </section>
  );
}
