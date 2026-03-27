"use client";
import React from "react";
import { motion } from "framer-motion";
import { MdCheck } from "react-icons/md";
import Button from "@/components/Button";

const plans = [
  {
    name: "Builder",
    price: "Free",
    period: "forever",
    description: "Everything you need to start building and collaborating on your ideas.",
    features: [
      "Access to community-driven ideation",
      "Basic workspace and collaboration tools",
      "Standard template library",
      "Community support",
      "1 active project",
    ],
    isPopular: false,
    buttonText: "Start Building",
    buttonVariant: "outline" as const,
  },
  {
    name: "Founder",
    price: "$49",
    period: "per month",
    description: "Advanced tools, AI capabilities, and unlimited execution power for serious founders.",
    features: [
      "Everything in Builder, plus:",
      "AI-powered Business Intelligence Suite",
      "Unlimited projects & workspaces",
      "Advanced investor CRM & legal automation",
      "Custom branding & exports",
      "Priority 24/7 support",
    ],
    isPopular: true,
    buttonText: "Upgrade to Founder",
    buttonVariant: "primary" as const,
  },
];

export default function PricingSection() {
  return (
    <section className="w-full bg-[#FAFAFA] py-24 pb-32 border-t border-gray-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-normal text-[#1A1A1A] tracking-tight mb-6"
          >
            Simple, transparent pricing
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base text-gray-500 leading-relaxed"
          >
            Choose the plan that fits your ambition. Whether you&apos;re just starting out or ready to scale, we have you covered.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              key={plan.name}
              className={`relative rounded-4xl p-8 lg:p-12 flex flex-col ${
                plan.isPopular
                  ? "bg-[#1A1A1A] text-white shadow-2xl shadow-[#6E00CC]/10 ring-1 ring-[#6E00CC]/30"
                  : "bg-white text-[#1A1A1A] shadow-xl shadow-gray-200/50 border border-gray-100"
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-8 transform -translate-y-1/2">
                  <span className="bg-[#6E00CC] text-white text-xs font-bold uppercase tracking-wider py-1.5 px-4 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className={`text-2xl font-medium mb-4 ${plan.isPopular ? "text-white" : "text-[#1A1A1A]"}`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className={`text-5xl lg:text-6xl tracking-tighter ${plan.isPopular ? "text-white" : "text-[#1A1A1A]"}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm font-medium ${plan.isPopular ? "text-gray-400" : "text-gray-500"}`}>
                    /{plan.period}
                  </span>
                </div>
                <p className={`text-base leading-relaxed ${plan.isPopular ? "text-gray-400" : "text-gray-500"}`}>
                  {plan.description}
                </p>
              </div>

              <div className="grow">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <MdCheck className={`w-6 h-6 shrink-0 mt-0.5 ${plan.isPopular ? "text-[#6E00CC]" : "text-[#1F6B6B]"}`} />
                      <span className={`text-base ${plan.isPopular ? "text-gray-300" : "text-gray-600"}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto pt-8">
                {/* We use standard HTML buttons since we can't easily modify the custom generic Button component's dark mode right here, but if the generic Button works well, we just use it */}
                {/* <button
                  className={`w-full py-4 px-6 rounded-full font-medium transition-all duration-200 ${
                    plan.isPopular
                      ? "bg-[#6E00CC] hover:bg-[#5900A6] text-white shadow-lg shadow-[#6E00CC]/20"
                      : "bg-gray-100 hover:bg-gray-200 text-[#1A1A1A]"
                  }`}
                >
                  {plan.buttonText}
                </button> */}
                <Button variant={plan.buttonVariant} className="w-full flex justify-center items-center">
                  {plan.buttonText}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
