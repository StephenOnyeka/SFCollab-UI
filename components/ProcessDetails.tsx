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
          <div className="max-w-4xl mx-auto space-y-24">
            {/* Overview */}
            <div className="grid grid-cols-1 gap-8">
              <h2 className="text-3xl font-medium text-gray-900">Overview</h2>
              <p className="text-lg text-gray-600 ">
                At SFCollab, we focus on creating simple yet effective digital
                experiences tailored for individuals and small businesses. Our
                workflow is supported by reliable tools and technologies that
                keep communication smooth and productivity high. We use project
                management platforms like Trello to organize tasks and
                timelines, while Zoom or Google Meet ensures effortless virtual
                collaboration. For shared documents and real-time editing, we
                rely on tools such as Google Docs or Office Online, helping
                every project stay aligned from start to finish.
              </p>
            </div>

            {/* The Challenge */}
            <div className="grid grid-cols-1 gap-8">
              <h2 className="text-3xl font-medium text-gray-900">
                The Challenge
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-600">
                  This project required building a clean, functional website
                  using a pre-designed template—perfect for clients who need a
                  straightforward online presence without complex customization.
                  The structure typically includes 5-10 pages, focusing on
                  clarity, usability, and essential branding.
                </p>
                <p className="text-lg text-gray-600">
                  To keep the process efficient, we used Trello for tracking
                  progress, online meeting tools for discussions, and
                  collaborative editing platforms to maintain consistency across
                  all content and design elements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Result Section */}
      <section className="pb-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto">
            {/* Result Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[4/2] w-full rounded-3xl overflow-hidden mb-16 shadow-lg"
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
              <div className="grid grid-cols-1 gap-8">
                <h2 className="text-3xl font-medium text-gray-900">Result</h2>
                <p className="text-lg text-gray-600">
                  The final outcome delivered a smooth, minimal, and fully
                  responsive website that meets the needs of small businesses or
                  individuals wanting a strong digital presence. Throughout the
                  process, we utilized Trello for organization, video
                  conferencing tools for seamless communication, and
                  collaborative document platforms to ensure accuracy and
                  alignment across all project details. The result is a
                  streamlined website built with clarity, reliability, and
                  efficiency at its core.
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
