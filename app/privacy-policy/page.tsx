"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";

export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </h1>
          <p className="text-gray-500">Last updated: December 27, 2025</p>
        </motion.div>

        <motion.article 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-none space-y-10"
        >
          {/* Introduction */}
          <p className="text-lg text-gray-600">
            This Privacy Policy explains how SF collects, processes, and uses data across the ecosystem.
          </p>

          <section>
            <h2 className="text-2xl mb-4 text-[#1A1A1A]">1. Data We Collect</h2>
            <p className="mb-4 text-gray-600">
              We collect a broad range of data necessary to operate, secure, improve, and train the Platform, including:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-500">
              <li>Account and profile data</li>
              <li>Content, documents, and interactions</li>
              <li>Messages and collaborations</li>
              <li>Startup and team metadata</li>
              <li>Usage patterns, behavior signals, and activity logs</li>
              <li>Device, browser, network, and technical identifiers</li>
              <li>Payment and transaction metadata (via providers)</li>
              <li>Verification status and trust indicators</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-[#1A1A1A]">2. Sensitive Data & Verification</h2>
            <p className="mb-2 text-gray-600">
              Identity verification data may include ID documents and biometric confirmation. Sensitive data is primarily processed by external certified providers. SF generally does not store raw biometric or identity documents unless legally required.
            </p>
            <p className="font-medium text-[#1A1A1A]">
              Users must not upload sensitive personal data unless explicitly requested.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-[#1A1A1A]">3. Tracking, Monitoring & Abuse Detection</h2>
            <p className="mb-4 text-gray-600">
              SF uses advanced monitoring, analytics, and behavioral analysis systems to:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-500">
              <li>Prevent fraud and abuse</li>
              <li>Enforce one-account-per-user rules</li>
              <li>Protect startups, mentors, and investors</li>
              <li>Maintain ecosystem integrity</li>
            </ul>
            <p className="mt-4 text-gray-600">
              Pattern analysis may detect both known and novel abuse methods.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-[#1A1A1A]">4. AI Training & Platform Intelligence</h2>
            <p className="mb-4 text-gray-600">
              Data generated on the Platform may be used to:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-500">
              <li>Train and improve AI and machine learning models</li>
              <li>Develop recommendation, ranking, and moderation systems</li>
              <li>Power automation and platform intelligence</li>
            </ul>
            <p className="mt-4 mb-2 text-gray-600">
              Training may use aggregated, anonymized, or pseudonymized data where feasible.
            </p>
            <p className="font-medium text-[#1A1A1A]">
              Certain processing cannot be opted out of without discontinuing platform use.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-[#1A1A1A]">5. Legal Basis & Compliance</h2>
            <p className="mb-4 text-gray-600">
              Data processing is conducted in accordance with applicable laws (including GDPR where relevant) and based on:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-500">
              <li>Contractual necessity</li>
              <li>Legitimate interest</li>
              <li>Legal and security obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-[#1A1A1A]">6. Data Retention</h2>
            <p className="mb-4 text-gray-600">
              Data may be retained for extended or indefinite periods when necessary for:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-500">
              <li>Security and abuse prevention</li>
              <li>AI training and system improvement</li>
              <li>Legal compliance</li>
            </ul>
            <p className="mt-4 text-gray-600">
              Banned account data may be retained to prevent circumvention.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-[#1A1A1A]">7. Data Sharing</h2>
            <p className="mb-4 font-medium text-[#1A1A1A]">SF does not sell personal data.</p>
            <p className="mb-4 text-gray-600">Data may be shared with:</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-500">
              <li>Verification and payment providers</li>
              <li>Infrastructure and security partners</li>
              <li>Authorities when legally required</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-[#1A1A1A]">8. User Rights</h2>
            <p className="mb-4 text-gray-600">
              Subject to applicable law, users may request:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-500">
              <li>Data access</li>
              <li>Data correction</li>
              <li>Limited deletion</li>
            </ul>
            <p className="mt-4 text-gray-600">
              Some data cannot be deleted due to legal or security requirements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-[#1A1A1A]">9. Security</h2>
            <p className="text-gray-600">
              SF applies reasonable technical and organizational measures to protect data. No system is completely secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-[#1A1A1A]">10. Policy Updates</h2>
            <p className="text-gray-600">
              This policy may evolve as the ecosystem grows. Continued use indicates acceptance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-[#1A1A1A]">11. Contact</h2>
            <p className="text-gray-600">
              Privacy inquiries: <a href="mailto:sfcollab333@gmail.com" className="text-[#6E00CC] hover:underline">sfcollab333@gmail.com</a>
            </p>
          </section>
        </motion.article>
      </div>
    </main>
  );
}