"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";

export default function DataCollectionPolicyPage() {
  return (
    <main className="min-h-screen bg-white relative overflow-hidden">

      {/* Background Ambience (fixed contrast) */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#6E00CC]/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#1A1A1A]/5 blur-[80px] rounded-full pointer-events-none" />

      {/* Navigation */}
      <nav className="absolute top-0 left-0 w-full p-6 md:p-8 z-20">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group text-gray-600 hover:text-black transition-colors">
            <MdArrowBack className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium text-sm">Back to Home</span>
          </Link>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-[#6E00CC] tracking-[0.2em] uppercase text-xs border-b border-[#6E00CC]/30 pb-1 mb-6 inline-block">
            Internal Documentation / General Audience
          </span>

          <h1 className="text-4xl md:text-5xl font-normal text-[#1A1A1A] tracking-tighter leading-[1.2] mb-4">
            User Data Collection & Tracking Policy
          </h1>

          <p className="text-gray-600">
            Internal Developer Documentation standard implemented site-wide.
          </p>
        </motion.div>

        {/* Content */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-10 text-gray-700 leading-relaxed"
        >

          {/* SECTION 1 */}
          <section>
            <h2 className="text-2xl mb-4 text-[#1A1A1A]">Purpose of This Document</h2>
            <p className="mb-4">This document explains:</p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>What user data we collect across the SF Ecosystem</li>
              <li>Why we collect it</li>
              <li>How it should be implemented technically</li>
              <li>What must be avoided for legal and architectural safety</li>
            </ul>
            <p>This applies to SFCollab, SFManagers, and all future SF products.</p>
          </section>

          {/* SECTION 2 */}
          <section>
            <h2 className="text-2xl mb-4 text-[#1A1A1A]">1. Core Principle (READ THIS FIRST)</h2>
            <p className="mb-4 font-medium text-[#1A1A1A]">
              We do not "spy" on users. We observe system interactions to ensure integrity, safety, and intelligence.
            </p>
            <p className="mb-4">Data collection exists to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Prevent abuse and scams</li>
              <li>Enforce one-account-per-user</li>
              <li>Power gamification and reputation</li>
              <li>Enable AI and future intelligence</li>
              <li>Protect founders, mentors, and investors</li>
            </ul>
          </section>

          {/* SECTION 3 */}
          <section>
            <h2 className="text-2xl mb-4 text-[#1A1A1A]">2. Data Collection Layers (Architecture Overview)</h2>
            <p className="mb-6">There are 4 layers of data, each with different responsibilities and storage rules.</p>

            <h3 className="text-xl mb-3 text-[#1A1A1A]">2.1 Passive System Data (Automatic)</h3>
            <p><strong>What it is:</strong> Data generated automatically.</p>
            <ul className="list-disc pl-5 space-y-2 mb-6">
              <li>Page views / route changes</li>
              <li>Feature usage</li>
              <li>Session duration</li>
              <li>Errors and crashes</li>
              <li>Device, browser, OS</li>
              <li>IP address (coarse location only)</li>
            </ul>

            <h3 className="text-xl mb-3 text-[#1A1A1A]">2.2 Explicit Interaction Events</h3>
            <div className="bg-gray-100 p-4 rounded-xl font-mono text-sm text-gray-800 mb-6">
              idea_submitted, idea_voted, startup_created, startup_joined, team_member_added, mentor_session_started, payment_initiated, investment_committed, escrow_released, account_flagged, account_banned
            </div>

            <h3 className="text-xl mb-3 text-[#1A1A1A]">2.3 Identity & Trust Data</h3>
            <p className="mb-4">Handled by external providers. Only trust signals stored.</p>

            <h3 className="text-xl mb-3 text-[#1A1A1A]">2.4 Intelligence & Training Data</h3>
            <p>Aggregated insights and behavioral patterns.</p>
          </section>

          {/* SECTION 4 */}
          <section>
            <h2 className="text-2xl mb-4 text-[#1A1A1A]">3. Event Design Guidelines</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              <div className="bg-green-50 p-6 rounded-2xl border border-green-200">
                <h3 className="text-green-800 mb-4">DO</h3>
                <ul className="text-green-700 space-y-2 text-sm">
                  <li>Track meaningful actions</li>
                  <li>Include timestamps</li>
                  <li>Include user_id</li>
                  <li>Include context</li>
                </ul>
              </div>

              <div className="bg-red-50 p-6 rounded-2xl border border-red-200">
                <h3 className="text-red-800 mb-4">DO NOT</h3>
                <ul className="text-red-700 space-y-2 text-sm">
                  <li>Track sensitive personal data</li>
                  <li>Log private content</li>
                  <li>Rely only on frontend</li>
                </ul>
              </div>

            </div>
          </section>

          {/* SECTION 5 */}
          <section>
            <h2 className="text-2xl mb-4 text-[#1A1A1A]">4. Required Core Event Fields</h2>

            <pre className="bg-black text-gray-200 p-6 rounded-2xl text-sm overflow-x-auto">
{`{
  "event_name": "startup_joined",
  "user_id": "uuid",
  "context": { "startup_id": "uuid", "role": "member" },
  "timestamp": "ISO-8601",
  "source": "backend",
  "ip_hash": "hashed",
  "device_fingerprint": "hashed"
}`}
            </pre>
          </section>

          {/* SECTION 6 */}
          <section>
            <h2 className="text-2xl mb-4 text-[#1A1A1A]">5. Enforcement & Audit Logging</h2>
            <p>Everything must be logged and auditable.</p>
          </section>

          {/* SECTION 7 */}
          <section>
            <h2 className="text-2xl mb-4 text-[#1A1A1A]">6. Payments</h2>
            <p>Track metadata only. Never store sensitive financial data.</p>
          </section>

          {/* SECTION 8 */}
          <section>
            <h2 className="text-2xl mb-4 text-[#1A1A1A]">7. AI Considerations</h2>
            <p>Only anonymized and aggregated data should be used.</p>
          </section>

          {/* SECTION 9 */}
          <section>
            <h2 className="text-2xl mb-4 text-[#1A1A1A]">8. Privacy Rules</h2>
            <ul className="bg-gray-100 p-6 rounded-2xl space-y-2">
              <li>No unnecessary data</li>
              <li>External KYC providers</li>
              <li>Legal compliance</li>
            </ul>
          </section>

          {/* FINAL */}
          <section>
            <h2 className="text-2xl mb-4 text-[#1A1A1A]">Final Note</h2>
            <p className="text-center bg-[#6E00CC]/10 p-6 rounded-2xl">
              If we get data right now, everything else becomes easier later.
            </p>
          </section>

        </motion.article>
      </div>
    </main>
  );
}