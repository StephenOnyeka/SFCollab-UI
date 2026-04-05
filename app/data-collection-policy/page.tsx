"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";

export default function DataCollectionPolicyPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] relative overflow-hidden px-5 md:px-0">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#6E00CC]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#1A1A1A]/5 blur-[100px] rounded-full pointer-events-none" />

      {/* Navigation */}
      <nav className="absolute top-0 left-0 w-full p-6 md:p-8 z-20">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group text-gray-500 hover:text-[#1A1A1A] transition-colors">
            <MdArrowBack className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium text-sm">Back to Home</span>
          </Link>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-[#6E00CC] font-medium tracking-[0.2em] uppercase text-xs border-b border-[#6E00CC]/20 pb-1 mb-6 inline-block">
            Data Collection Policy
          </span>
          <h1 className="text-4xl md:text-5xl font-normal text-[#1A1A1A] tracking-tighter leading-[1.2] mb-4">
            How We Collect User Data
          </h1>
          <p className="text-gray-500">Last updated: March 31, 2026</p>
        </motion.div>

        <motion.article 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="prose prose-gray max-w-none prose-headings:font-medium prose-headings:text-[#1A1A1A] prose-headings:tracking-tight prose-p:text-gray-600 prose-p:leading-relaxed prose-li:text-gray-600 prose-li:leading-relaxed space-y-12"
        >
          <section>
            <h2 className="text-2xl mb-6 text-[#1A1A1A]">Our Approach to Data Collection</h2>
            <p className="mb-6 text-gray-600">
              We do not spy on users. We collect data by observing how people interact with the SF platform to ensure safety, prevent abuse, maintain trust, and build a better ecosystem for everyone.
            </p>
            <p className="text-gray-600">
              This Data Collection Policy explains the types of data we collect across the SF Ecosystem (including SFCollab, SFManagers, and future products), why we collect it, and the principles that guide our approach.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-6 text-[#1A1A1A]">1. Types of Data We Collect</h2>
            
            <h3 className="text-xl text-[#1A1A1A] mb-4">Platform Usage Data</h3>
            <p className="mb-6 text-gray-600">
              Automatically collected technical information when you use the platform, including page views, route changes, feature usage, session duration, errors, device type, browser, operating system, and a coarse approximation of location from your IP address.
            </p>

            <h3 className="text-xl text-[#1A1A1A] mb-4">Interaction and Activity Data</h3>
            <p className="mb-6 text-gray-600">
              Records of meaningful actions you take on the platform, such as submitting ideas, voting, creating or joining startups, participating in mentorship sessions, making payments or commitments, and other key activities that affect the ecosystem.
            </p>

            <h3 className="text-xl text-[#1A1A1A] mb-4">Identity and Trust Signals</h3>
            <p className="mb-6 text-gray-600">
              Information received from external verification services for identity checks and trust assessment. This includes verification status and basic trust signals. We do not collect or store raw identification documents or full biometric data.
            </p>

            <h3 className="text-xl text-[#1A1A1A] mb-4">Derived and Aggregated Data</h3>
            <p className="text-gray-600">
              Insights and patterns created from the data above, such as contribution trends, reputation signals, and platform health indicators. These help improve fairness and intelligence in the ecosystem.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-6 text-[#1A1A1A]">2. Why We Collect This Data</h2>
            <ul className="list-disc pl-5 space-y-4 text-gray-600">
              <li>To prevent abuse, scams, and unfair activity</li>
              <li>To support one-account-per-person integrity</li>
              <li>To power reputation systems, gamification, and community trust</li>
              <li>To protect founders, mentors, investors, and honest participants</li>
              <li>To understand platform usage and make improvements</li>
              <li>To build a responsible foundation for future AI-powered features that benefit the community</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl mb-6 text-[#1A1A1A]">3. How We Collect Data</h2>
            <p className="mb-6 text-gray-600">
              Usage data is collected automatically through system logs and analytics events. Important interactions are validated on our servers for accuracy and reliability. We use hashing techniques for certain identifiers to enhance privacy.
            </p>
            <p className="text-gray-600">
              We follow data minimization — collecting only what is necessary for the purposes above. Raw sensitive data is avoided wherever possible, and different types of data are handled with appropriate separation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-6 text-[#1A1A1A]">4. Our Data Collection Principles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#6E00CC]/5 p-8 rounded-2xl border border-[#6E00CC]/10">
                <h3 className="text-lg font-medium text-[#6E00CC] mb-5">We collect data to build</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">• An observable and transparent ecosystem</li>
                  <li className="flex items-start gap-3">• A platform rooted in trust and accountability</li>
                  <li className="flex items-start gap-3">• A clean, responsible foundation for future intelligence</li>
                </ul>
              </div>
              <div className="bg-gray-100 p-8 rounded-2xl">
                <h3 className="text-lg font-medium text-[#1A1A1A] mb-5">We do not collect data for</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">• Surveillance or hidden monitoring</li>
                  <li className="flex items-start gap-3">• Advertising or behavioral manipulation</li>
                  <li className="flex items-start gap-3">• Unnecessary tracking of private content</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl mb-6 text-[#1A1A1A]">5. Key Guidelines for Data Collection</h2>
            <p className="mb-6 text-gray-600">
              We only collect data that serves a clear and legitimate purpose. All significant activity events are designed to represent real state changes and are validated where possible. We avoid collecting precise location data, keystrokes, or hidden recordings.
            </p>
            <p className="text-gray-600">
              Our systems are designed so that data remains clean, auditable, and suitable for safe long-term use, including responsible future AI applications.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-6 text-[#1A1A1A]">Final Note</h2>
            <p className="text-gray-600 mb-8">
              Getting data collection right helps us create a fair, safe, and intelligent platform that rewards honest participation.
            </p>
            <div className="p-8 bg-gradient-to-r from-[#6E00CC]/5 to-[#A855F7]/5 rounded-2xl text-center">
              <p className="font-medium text-[#1A1A1A]">
                If we collect the right data thoughtfully from the beginning, everything else in the ecosystem becomes stronger and more trustworthy over time.
              </p>
            </div>
          </section>

        </motion.article>
      </div>
    </main>
  );
}