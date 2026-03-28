"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] relative overflow-hidden">
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
            SF Ecosystem
          </span>
          <h1 className="text-4xl md:text-5xl font-normal text-[#1A1A1A] tracking-tighter mb-4">
            Terms of Service
          </h1>
          <p className="text-gray-500">Last updated: December 27, 2025</p>
        </motion.div>

        <motion.article 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="prose prose-gray max-w-none prose-headings:font-medium prose-headings:text-[#1A1A1A] prose-headings:tracking-tight prose-p:text-gray-600 prose-p:leading-relaxed prose-li:text-gray-600 prose-li:leading-relaxed space-y-10"
        >
          <p className="text-lg">
            By accessing or using the SF Ecosystem—including SFCollab, SFManagers, and related platforms, services, applications, tools, and AI systems (collectively, the &quot;Platform&quot;)—you agree to these Terms of Service. If you do not agree, do not use the Platform.
          </p>

          <section>
            <h2 className="text-2xl mb-4">1. Platform Scope & Philosophy</h2>
            <p className="mb-4">
              The SF Ecosystem is a collaborative startup ecosystem designed to support:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Idea validation and creativity</li>
              <li>Team formation and collaboration</li>
              <li>Knowledge sharing and learning</li>
              <li>Structured execution via connected systems</li>
              <li>Secure investment, funding, and ecosystem growth</li>
            </ul>
            <p className="mt-6 font-medium text-[#1A1A1A]">
              Important: SF does not guarantee success, funding, employment, or financial returns.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4">2. Eligibility & Accounts</h2>
            
            <h3 className="text-xl mb-3 text-[#1A1A1A]">Account Requirements</h3>
            <ul className="list-disc pl-5 space-y-2 mb-6">
              <li>One account per real person (strictly enforced)</li>
              <li>Multiple accounts are prohibited</li>
              <li>You must provide truthful, accurate, and current information</li>
              <li>Accounts may be restricted based on verification, trust level, or compliance requirements</li>
              <li>Violations result in permanent bans without appeal</li>
            </ul>

            <h3 className="text-xl mb-3 text-[#1A1A1A]">Identity Verification & KYC</h3>
            <p className="mb-4">Certain actions require identity verification, including:</p>
            <ul className="list-disc pl-5 space-y-2 mb-6">
              <li>Payments or investments</li>
              <li>Escrow participation</li>
              <li>Mentorship or investor access</li>
              <li>Abuse prevention and trust enforcement</li>
            </ul>

            <p className="mb-4">Verification methods may include:</p>
            <ul className="list-disc pl-5 space-y-2 mb-6">
              <li>Government-issued ID</li>
              <li>Facial or biometric verification</li>
              <li>Anti-fraud and compliance checks</li>
            </ul>

            <p className="bg-[#6E00CC]/5 p-4 rounded-xl border border-[#6E00CC]/10 text-sm">
              Sensitive verification data is primarily processed by certified third-party providers. SF typically receives only verification status, risk signals, and limited metadata. Attempts to bypass or falsify verification result in immediate permanent bans and may be reported where legally required.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4">3. Acceptable Use & Prohibited Conduct</h2>
            <p className="mb-4">You may not:</p>
            <ul className="list-disc pl-5 space-y-2 mb-6">
              <li>Scam, defraud, impersonate, or mislead</li>
              <li>Create fake startups or fabricate participation</li>
              <li>Join startups without intent to contribute</li>
              <li>Manipulate votes, points, reputation, or visibility</li>
              <li>Abuse bugs, loopholes, or edge cases</li>
              <li>Bypass detection or enforcement systems</li>
            </ul>
            <p className="font-medium text-[#1A1A1A]">All activity is monitored and analyzed.</p>
          </section>

          <section>
            <h2 className="text-2xl mb-4">4. Enforcement & Platform Authority</h2>
            <p className="mb-4">SF reserves the right to:</p>
            <ul className="list-disc pl-5 space-y-2 mb-6">
              <li>Suspend, restrict, or permanently ban accounts</li>
              <li>Remove content, startups, or access</li>
              <li>Withhold points, rewards, or privileges</li>
              <li>Retain data related to abuse prevention</li>
            </ul>
            <p className="font-medium text-[#1A1A1A]">Enforcement decisions are final.</p>
          </section>

          <section>
            <h2 className="text-2xl mb-4">5. Payments, Escrow & Investments</h2>
            <h3 className="text-xl mb-3 text-[#1A1A1A]">Supported Activities</h3>
            <p className="mb-6">
              The Platform may support contributions, subscriptions, support payments, staged investments, escrow-based fund holding, and milestone enforcement.
            </p>
            
            <h3 className="text-xl mb-3 text-[#1A1A1A]">Important Disclaimers</h3>
            <p className="mb-4">SF does not guarantee:</p>
            <ul className="list-disc pl-5 space-y-2 mb-6">
              <li>Startup success</li>
              <li>Investment returns</li>
              <li>Milestone completion</li>
            </ul>
            <p className="font-medium text-[#1A1A1A]">All financial participation is at user risk.</p>
          </section>

          <section>
            <h2 className="text-2xl mb-4">6. Mentors, Investors & Third Parties</h2>
            <p>
              Mentors and investors operate independently. SF does not guarantee outcomes, advice quality, or performance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4">7. Intellectual Property</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>You retain ownership of your content</li>
              <li>You grant SF a license to host, display, and operate your content within the ecosystem</li>
              <li>You are responsible for ensuring you have rights to all uploaded content</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl mb-4">8. AI Systems & Automation</h2>
            <p className="mb-4">SF uses AI systems to:</p>
            <ul className="list-disc pl-5 space-y-2 mb-6">
              <li>Assist creation and collaboration</li>
              <li>Analyze activity and behavior</li>
              <li>Detect abuse and fraud</li>
              <li>Improve platform intelligence</li>
            </ul>
            <p className="font-medium text-[#1A1A1A]">Note: AI outputs are assistive, not guarantees.</p>
          </section>

          <section>
            <h2 className="text-2xl mb-4">9. Limitation of Liability</h2>
            <p>
              The Platform is provided &quot;as is.&quot; SF is not liable for financial loss, startup failure, or data loss beyond reasonable control.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4">10. Changes to Terms</h2>
            <p>
              SF may update these Terms at any time. Continued use constitutes acceptance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4">11. Contact</h2>
            <p>
              Legal inquiries: <a href="mailto:sfcollab333@gmail.com" className="text-[#6E00CC] hover:underline">sfcollab333@gmail.com</a>
            </p>
          </section>
        </motion.article>
      </div>
    </main>
  );
}
