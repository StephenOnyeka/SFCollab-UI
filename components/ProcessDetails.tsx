"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ProcessDetails = () => {
  return (
    <div className="bg-white">
      {/* Overview & Challenge Section */}
      <section className="py-24 border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto space-y-24">
            {/* Overview */}
            <div className="grid grid-cols-1 gap-4">
              <h2 className="text-2xl font-medium text-gray-900">Overview</h2>
              <p className="text-base text-gray-600 ">
                SFCollab is the definitive Startup Operating System—a unified platform where ideas meet execution. We&apos;ve replaced the fragmented stack of disconnected tools with a single, calm, and continuous workspace. Built for serious teams and forward-thinking founders, SFCollab integrates real-time collaboration, intelligent operations, and AI-assisted workflows into one seamless environment.
              </p>
            </div>

            {/* The Challenge */}
            <div className="grid grid-cols-1 gap-4">
              <h2 className="text-2xl font-medium text-gray-900">
                The Challenge
              </h2>
              <div className="space-y-6">
                <p className="text-base text-gray-600">
                  Modern startups lose critical momentum switching context between project management boards, video calls, document editors, and messaging apps. This fragmented approach scatters knowledge, slows down execution, and creates unnecessary friction.
                </p>
                <p className="text-base text-gray-600">
                  The challenge was to build an infrastructure capable of scaling from a rough MVP to a unicorn, without adding operational noise or artificial delays to the founder&apos;s daily workflow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Result Section */}
      <section className="pb-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto">
            {/* Result Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative aspect-4/2 w-full rounded-3xl overflow-hidden mb-16 shadow-lg"
            >
              <Image
                src="/images/co-founders.jpg"
                alt="Strategy session"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Result Content */}
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 gap-4">
                <h2 className="text-2xl font-medium text-gray-900">Result</h2>
                <p className="text-base text-gray-600">
                  The result is a lightning-fast, real-time creative ecosystem featuring sub-50ms sync latency and an infinite canvas scale. Every action, update, and idea syncs instantly across teams and boards without refresh or delay. From generating structural business plans to discovering elite talent, SFCollab delivers a friction-free environment where distributed teams can build, think, and win together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProcessDetails;
