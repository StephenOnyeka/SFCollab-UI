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
          <h1 className="text-4xl md:text-5xl font-normal text-[#1A1A1A] tracking-tighter leading-[1.1] mb-4">
            Terms of Service
          </h1>
          <p className="text-gray-500">Last updated: December 27, 2025</p>
        </motion.div>

        <motion.article 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="prose prose-gray max-w-none 
                     prose-headings:font-medium 
                     prose-headings:tracking-tight 
                     prose-h2:text-[#1A1A1A] 
                     prose-h3:text-[#2F2F2F]
                     prose-p:text-gray-600 
                     prose-p:leading-relaxed 
                     prose-li:text-gray-600 
                     prose-li:leading-relaxed 
                     space-y-12"
        >
          <p className="text-lg text-gray-600">
            By accessing or using the SF Ecosystem—including SFCollab, SFManagers, and related platforms, services, applications, tools, and AI systems (collectively, the &quot;Platform&quot;)—you agree to these Terms of Service. If you do not agree, do not use the Platform.
          </p>

          <section>
            <h2 className="text-2xl mb-6">1. Platform Scope & Philosophy</h2>
            <p className="mb-6 text-gray-600">
              The SF Ecosystem is a collaborative startup ecosystem designed to support:
            </p>
            <ul className="list-disc pl-5 space-y-3 text-gray-600">
              <li>Idea validation and creativity</li>
              <li>Team formation and collaboration</li>
              <li>Knowledge sharing and learning</li>
              <li>Structured execution via connected systems</li>
              <li>Secure investment, funding, and ecosystem growth</li>
            </ul>
            <p className="mt-8 font-medium text-[#1A1A1A] bg-gray-50 p-5 rounded-2xl border-l-4 border-[#6E00CC]/30">
              Important: SF does not guarantee success, funding, employment, or financial returns.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-6">2. Eligibility & Accounts</h2>
            
            <h3 className="text-xl mb-4">Account Requirements</h3>
            <ul className="list-disc pl-5 space-y-3 mb-8 text-gray-600">
              <li>One account per real person (strictly enforced)</li>
              <li>Multiple accounts are prohibited</li>
              <li>You must provide truthful, accurate, and current information</li>
              <li>Accounts may be restricted based on verification, trust level, or compliance requirements</li>
              <li>Violations result in permanent bans without appeal</li>
            </ul>

            <h3 className="text-xl mb-4">Identity Verification & KYC</h3>
            <p className="mb-4 text-gray-600">
              Certain actions require identity verification, including payments, investments, escrow participation, mentorship or investor access, and abuse prevention.
            </p>
            
            <p className="mb-6 text-gray-600">
              Verification methods may include government-issued ID, facial or biometric verification, and anti-fraud checks.
            </p>

            <div className="bg-[#6E00CC]/5 p-6 rounded-2xl border border-[#6E00CC]/10 text-gray-600">
              Sensitive verification data is primarily processed by certified third-party providers. SF typically receives only verification status, risk signals, and limited metadata. 
              Attempts to bypass or falsify verification result in immediate permanent bans and may be reported where legally required.
            </div>
          </section>

          <section>
            <h2 className="text-2xl mb-6">3. Acceptable Use & Prohibited Conduct</h2>
            <p className="mb-4 text-gray-600">You may not:</p>
            <ul className="list-disc pl-5 space-y-3 text-gray-600">
              <li>Scam, defraud, impersonate, or mislead others</li>
              <li>Create fake startups or fabricate participation</li>
              <li>Join startups without genuine intent to contribute</li>
              <li>Manipulate votes, points, reputation, or visibility</li>
              <li>Abuse bugs, loopholes, or system weaknesses</li>
              <li>Bypass detection or enforcement systems</li>
            </ul>
            <p className="mt-6 font-medium text-[#1A1A1A]">
              All activity on the platform is monitored and analyzed for safety and integrity.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-6">4. Enforcement & Platform Authority</h2>
            <p className="mb-4 text-gray-600">SF reserves the right to:</p>
            <ul className="list-disc pl-5 space-y-3 text-gray-600">
              <li>Suspend, restrict, or permanently ban accounts</li>
              <li>Remove content, startups, or access</li>
              <li>Withhold points, rewards, or privileges</li>
              <li>Retain data related to abuse prevention and safety</li>
            </ul>
            <p className="mt-6 font-medium text-[#1A1A1A]">
              Enforcement decisions are final.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-6">5. Payments, Escrow & Investments</h2>
            
            <h3 className="text-xl mb-4">Supported Activities</h3>
            <p className="mb-6 text-gray-600">
              The Platform may support contributions, subscriptions, support payments, staged investments, escrow-based fund holding, and milestone enforcement.
            </p>
            
            <h3 className="text-xl mb-4">Important Disclaimers</h3>
            <p className="mb-4 text-gray-600">SF does not guarantee:</p>
            <ul className="list-disc pl-5 space-y-3 text-gray-600">
              <li>Startup success</li>
              <li>Investment returns</li>
              <li>Milestone completion</li>
            </ul>
            <p className="font-medium text-[#1A1A1A]">
              All financial participation is at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-6">6. Mentors, Investors & Third Parties</h2>
            <p className="text-gray-600">
              Mentors and investors operate independently. SF does not guarantee outcomes, advice quality, or performance of any third party.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-6">7. Intellectual Property</h2>
            <ul className="list-disc pl-5 space-y-3 text-gray-600">
              <li>You retain ownership of your original content</li>
              <li>You grant SF a worldwide, non-exclusive license to host, display, and operate your content within the ecosystem</li>
              <li>You are responsible for ensuring you have the necessary rights to all uploaded content</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl mb-6">8. AI Systems & Automation</h2>
            <p className="mb-4 text-gray-600">SF uses AI systems to:</p>
            <ul className="list-disc pl-5 space-y-3 text-gray-600">
              <li>Assist with creation and collaboration</li>
              <li>Analyze activity and behavior patterns</li>
              <li>Detect abuse and potential fraud</li>
              <li>Improve overall platform intelligence</li>
            </ul>
            <p className="font-medium text-[#1A1A1A] mt-6">
              AI outputs are assistive only and should not be considered guarantees.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-6">9. Limitation of Liability</h2>
            <p className="text-gray-600">
              The Platform is provided &quot;as is&quot; and &quot;as available.&quot; SF is not liable for any financial loss, startup failure, missed opportunities, or data loss beyond what is reasonably within our control.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-6">10. Changes to Terms</h2>
            <p className="text-gray-600">
              We may update these Terms from time to time. Your continued use of the Platform after changes are made constitutes your acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-6">11. Contact</h2>
            <p className="text-gray-600">
              For legal inquiries, please contact us at:{" "}
              <a 
                href="mailto:sfcollab333@gmail.com" 
                className="text-[#6E00CC] hover:underline font-medium"
              >
                sfcollab333@gmail.com
              </a>
            </p>
          </section>
        </motion.article>
      </div>
    </main>
  );
}