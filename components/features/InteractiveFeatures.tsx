"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MdLightbulbOutline,
  MdTrendingUp,
  MdStars,
  MdBusinessCenter,
  MdBrush,
  MdPeopleOutline,
} from "react-icons/md";

const featuresData = [
  {
    title: "From Idea to Execution",
    description:
      "Transform raw ideas into structured business plans, project roadmaps, and investor-ready pitch decks in minutes, not months.",
    icon: MdLightbulbOutline,
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
    tags: [
      "Business Plan Generator",
      "AI Pitch Decks",
      "Smart Roadmaps",
      "MVP Planning",
    ],
  },
  {
    title: "AI-Powered Business Intelligence",
    description:
      "Advanced AI tools for market research, competitor analysis, financial modeling, and strategic decision-making.",
    icon: MdTrendingUp,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    tags: [
      "Market Analysis AI",
      "Financial Modeling",
      "Competitor Intelligence",
      "Risk Assessment",
    ],
  },
  {
    title: "Virtual Economy & Gamification",
    description:
      "Earn XP, unlock achievements, and exchange SF Coins for premium features. A complete gamified ecosystem for professionals.",
    icon: MdStars,
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800",
    tags: [
      "XP System",
      "SF Coins Economy",
      "Achievement System",
      "Reward Marketplace",
    ],
  },
  {
    title: "Complete Startup Infrastructure",
    description:
      "Everything a startup needs: team collaboration, legal document automation, investor CRM, and performance analytics.",
    icon: MdBusinessCenter,
    image:
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800",
    tags: [
      "Team Management",
      "Legal Automation",
      "Investor CRM",
      "KPI Dashboards",
    ],
  },
  {
    title: "Professional Creative Suite",
    description:
      "Generate logos, edit images, remove backgrounds, create pitch visuals, and design professional documents.",
    icon: MdBrush,
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800",
    tags: [
      "Logo Generator",
      "Image Editor",
      "Background Remover",
      "PDF Signing",
    ],
  },
  {
    title: "Smart Collaboration Network",
    description:
      "Connect with founders, investors, and professionals. Smart matching based on skills, interests, and goals.",
    icon: MdPeopleOutline,
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800",
    tags: [
      "Talent Discovery",
      "Investor Matching",
      "Team Formation",
      "Expert Network",
    ],
  },
];

export default function InteractiveFeatures() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    // <section className="w-full bg-[#FAFAFA] py-20 lg:py-32 border-t border-gray-100">
    // <section className="w-full bg-[#FAFAFA] border-t border-gray-100">
    <section className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          {/* <p className="text-lg md:text-xl text-gray-500 leading-relaxed"> */}
          {/* <p className="text-base text-gray-500 leading-relaxed">
            We partner with forward-thinking teams who believe in strategy, creativity, and measurable growth.
          </p> */}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - Dynamic Image */}
          <div className="relative aspect-4/3 lg:aspect-square w-full rounded-4xl overflow-hidden shadow-2xl bg-gray-100">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeIndex}
                src={featuresData[activeIndex].image}
                alt={featuresData[activeIndex].title}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
          </div>

          {/* Right Side - Accordion List */}
          <div className="flex flex-col gap-4">
            {featuresData.map((feature, index) => {
              const isActive = index === activeIndex;
              const Icon = feature.icon;

              return (
                <div
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`cursor-pointer rounded-3xl transition-all duration-300 ${
                    isActive
                      ? "bg-white p-6 sm:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-gray-100"
                      : "bg-[#F5F5F5] p-6 hover:bg-[#F0F0F0]"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <Icon
                      className={`w-6 h-6 transition-colors duration-300 ${
                        isActive ? "text-[#1A1A1A]" : "text-gray-400"
                      }`}
                    />
                    <h3
                      className={`text-xl md:text-2xl tracking-tight transition-colors duration-300 ${
                        isActive
                          ? "font-medium text-[#1A1A1A]"
                          : "font-normal text-gray-500"
                      }`}
                    >
                      {feature.title}
                    </h3>
                  </div>

                  {/* Accordion Content */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                        animate={{ height: "auto", opacity: 1, marginTop: 24 }}
                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="text-base text-gray-500 leading-relaxed">
                          {feature.description}
                        </p>
                        
                        {/* Optional subtle tags for the sub-tools in the extracted data */}
                        <div className="flex flex-wrap gap-2 mt-6">
                          {feature.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-3 py-1.5 bg-gray-50 text-gray-500 text-xs font-medium rounded-full border border-gray-100"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
