"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We offer a comprehensive suite of digital growth services including performance marketing, strategic brand positioning, high-conversion design, and data-driven content strategy tailored to your specific goals.",
  },
  {
    question: "Do you work with international clients?",
    answer: "Yes, we partner with ambitious brands globally. Our team is experienced in navigating diverse markets and cultural nuances to deliver impact regardless of geographic boundaries.",
  },
  {
    question: "How do you measure campaign success?",
    answer: "Success is measured through transparent, ROI-focused metrics. We track everything from conversion rates and cost-per-acquisition to long-term customer lifetime value and brand sentiment.",
  },
  {
    question: "How long does it take to see results?",
    answer: "While some optimizations show immediate impact, we typically see significant, scalable results within 3 to 6 months as our data-driven strategies compound and gain momentum.",
  },
  {
    question: "Do you handle content creation too?",
    answer: "Absolutely. Our creative team produces high-performance visual and written content that isn't just beautiful—it's strategically designed to drive engagement and conversions.",
  },
];

const FAQItem = ({ 
  question, 
  answer, 
  isOpen, 
  onClick 
}: { 
  question: string; 
  answer: string; 
  isOpen: boolean; 
  onClick: () => void 
}) => {
  return (
    <div 
      className={`mb-4 transition-all duration-300 rounded-xl md:rounded-2xl border overflow-hidden ${
        isOpen 
          ? "bg-gray-50 border-gray-200" 
          : "bg-[#F9FAFB] border-gray-100 hover:border-gray-200"
      }`}
    >
      <button
        onClick={onClick}
        className="w-full px-6 py-4 md:px-8 md:py-4 flex items-center justify-between text-left focus:outline-none"
      >
        <span className="text-lg md:text-xl text-gray-900 pr-8">
          {question}
        </span>
        <div className="shrink-0 text-gray-900 bg-white rounded-full p-2 shadow-sm border border-gray-100 flex items-center justify-center">
          {isOpen ? <FiMinus size={20} /> : <FiPlus size={20} />}
        </div>
      </button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 md:px-8 md:pb-8 text-gray-600 leading-relaxed text-sm md:text-base max-w-2xl">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Left Column: Title and Badge */}
          <div className="lg:col-span-5 flex flex-col items-start pt-4">
            
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl text-gray-900 leading-[1.1] tracking-tight"
            >
              Frequently Asked <br /> Questions
            </motion.h2>
          </div>

          {/* Right Column: Accordion Items */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                />
              ))}
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default FAQ;
