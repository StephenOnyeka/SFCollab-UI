"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";

export default function DataCollectionPolicyPage() {
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
            Internal Documentation / General Audience
          </span>
          <h1 className="text-4xl md:text-5xl font-normal text-[#1A1A1A] tracking-tighter leading-[1.2] mb-4">
            User Data Collection & Tracking Policy
          </h1>
          <p className="text-gray-500">Internal Developer Documentation standard implemented site-wide.</p>
        </motion.div>

        <motion.article 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="prose prose-gray max-w-none prose-headings:font-medium prose-headings:text-[#1A1A1A] prose-headings:tracking-tight prose-p:text-gray-600 prose-p:leading-relaxed prose-li:text-gray-600 prose-li:leading-relaxed space-y-10"
        >
          <section>
            <h2 className="text-2xl mb-4">Purpose of This Document</h2>
            <p className="mb-4">This document explains:</p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>What user data we collect across the SF Ecosystem</li>
              <li>Why we collect it</li>
              <li>How it should be implemented technically</li>
              <li>What must be avoided for legal and architectural safety</li>
            </ul>
            <p>This applies to SFCollab, SFManagers, and all future SF products.</p>
          </section>

          <section>
            <h2 className="text-2xl mb-4">1. Core Principle (READ THIS FIRST)</h2>
            <p className="mb-4 font-medium text-[#1A1A1A]">We do not &quot;spy&quot; on users. We observe system interactions to ensure integrity, safety, and intelligence.</p>
            <p className="mb-4">Data collection exists to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Prevent abuse and scams</li>
              <li>Enforce one-account-per-user</li>
              <li>Power gamification and reputation</li>
              <li>Enable AI and future intelligence</li>
              <li>Protect founders, mentors, and investors</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl mb-4">2. Data Collection Layers (Architecture Overview)</h2>
            <p className="mb-6">There are 4 layers of data, each with different responsibilities and storage rules.</p>

            <h3 className="text-xl mb-3 text-[#1A1A1A]">2.1 Passive System Data (Automatic)</h3>
            <p className="mb-2"><strong>What it is:</strong> Data generated automatically when users use the platform.</p>
            <p className="mb-2"><strong>Examples:</strong></p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Page views / route changes</li>
              <li>Feature usage</li>
              <li>Session duration</li>
              <li>Errors and crashes</li>
              <li>Device, browser, OS</li>
              <li>IP address (coarse location only)</li>
            </ul>
            <p className="mb-2"><strong>Implementation:</strong></p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Frontend analytics events</li>
              <li>Backend request logs</li>
              <li>Server / CDN logs</li>
            </ul>
            <p className="mb-2"><strong>Rules:</strong></p>
            <ul className="list-disc pl-5 space-y-2 mb-6 text-red-600">
              <li>No precise GPS tracking</li>
              <li>No hidden recording</li>
              <li>No keystroke logging</li>
            </ul>

            <h3 className="text-xl mb-3 text-[#1A1A1A]">2.2 Explicit Interaction Events (CORE SF DATA)</h3>
            <p className="mb-4 font-medium">This is the most important layer.</p>
            <p className="mb-2"><strong>Examples:</strong></p>
            <div className="bg-gray-100 p-4 rounded-xl font-mono text-sm text-gray-700 mb-4">
              idea_submitted, idea_voted, startup_created, startup_joined, team_member_added, mentor_session_started, payment_initiated, investment_committed, escrow_released, account_flagged, account_banned
            </div>
            <p className="mb-2"><strong>Why this matters:</strong></p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Powers reputation & points</li>
              <li>Enables fraud detection</li>
              <li>Feeds AI training later</li>
              <li>Enables investor trust</li>
            </ul>
            <p className="mb-2"><strong>Implementation rules:</strong></p>
            <ul className="list-disc pl-5 space-y-2 mb-6">
              <li>Events must represent state changes</li>
              <li>Events must be backend-validated</li>
              <li>Frontend events alone are NOT trusted</li>
            </ul>

            <h3 className="text-xl mb-3 text-[#1A1A1A]">2.3 Identity & Trust Data (Sensitive, Mostly External)</h3>
            <p className="mb-2"><strong>What it includes:</strong> KYC / identity verification, Face verification, ID checks, Risk & trust signals</p>
            <p className="mb-2"><strong>How it works:</strong> Handled by external providers. We receive:</p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>verification status</li>
              <li>provider reference ID</li>
              <li>trust level / risk flags</li>
            </ul>
            <p className="mb-2"><strong>What we NEVER store:</strong></p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Raw ID images</li>
              <li>Full biometric data</li>
              <li>Government ID numbers (unless legally required)</li>
            </ul>
            <p className="mb-6 font-medium text-[#1A1A1A]">Developer rule: Treat identity data as read-only trust signals, not user content.</p>

            <h3 className="text-xl mb-3 text-[#1A1A1A]">2.4 Intelligence & Training Data (Derived)</h3>
            <p className="mb-2"><strong>What it is:</strong> Aggregated, derived, long-term insights.</p>
            <p className="mb-2"><strong>Examples:</strong> Contribution patterns, Startup health signals, Fraud heuristics, Reputation trajectories.</p>
            <p className="mb-2"><strong>Implementation:</strong></p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Built from event data</li>
              <li>Aggregated / anonymized where possible</li>
              <li>Stored separately from raw events</li>
            </ul>
            <p>Not required in MVP: But raw data must be clean from day one.</p>
          </section>

          <section>
            <h2 className="text-2xl mb-4">3. Event Design Guidelines (VERY IMPORTANT)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
                <h3 className="text-lg font-medium text-green-800 mb-4 flex items-center gap-2">✅ DO</h3>
                <ul className="list-disc pl-5 space-y-2 text-green-700">
                  <li>Track meaningful actions</li>
                  <li>Use consistent event naming</li>
                  <li>Include timestamps</li>
                  <li>Include actor (user_id)</li>
                  <li>Include context (startup_id, team_id)</li>
                  <li>Log enforcement actions</li>
                </ul>
              </div>
              <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
                <h3 className="text-lg font-medium text-red-800 mb-4 flex items-center gap-2">❌ DO NOT</h3>
                <ul className="list-disc pl-5 space-y-2 text-red-700">
                  <li>Track raw text unnecessarily</li>
                  <li>Track private content outside context</li>
                  <li>Track sensitive personal data</li>
                  <li>Rely only on frontend events</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl mb-4">4. Required Core Event Fields (Standard)</h2>
            <p className="mb-4">Every event should include:</p>
            <pre className="bg-[#1A1A1A] text-gray-300 p-6 rounded-2xl text-sm overflow-x-auto shadow-xl">
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
            <p className="mt-4 font-medium text-[#1A1A1A]">Hash identifiers where possible. Never store raw fingerprints in plain text.</p>
          </section>

          <section>
            <h2 className="text-2xl mb-4">5. Enforcement & Audit Logging</h2>
            <p className="mb-2"><strong>What must be logged:</strong> Warnings, Restrictions, Bans, Payment disputes, Escrow actions.</p>
            <p className="mb-2"><strong>Why:</strong> Legal defensibility, Abuse prevention, Appeal review (if allowed), Pattern detection.</p>
            <p className="mb-4 font-medium text-[#1A1A1A]">Rule: No silent enforcement. Everything must be auditable.</p>
          </section>

          <section>
            <h2 className="text-2xl mb-4">6. Payments, Escrow & Investments</h2>
            <p className="mb-2"><strong>What to track:</strong> Initiation, Status changes, Milestones, Deadlines, Releases, Failures.</p>
            <p className="mb-2"><strong>What NOT to track:</strong> Full card numbers, Wallet private keys, Sensitive payment credentials.</p>
            <p className="font-medium text-[#1A1A1A]">Payments are metadata + references, never raw secrets.</p>
          </section>

          <section>
            <h2 className="text-2xl mb-4">7. AI Training Considerations (Future-Safe)</h2>
            <p className="mb-2"><strong>What AI can use:</strong> Aggregated events, Anonymized patterns, System metadata, Content where permitted by policy.</p>
            <p className="mb-2"><strong>What AI must NOT use:</strong> Raw identity documents, Private credentials, Sensitive personal data.</p>
            <p className="mb-2"><strong>Developer responsibility:</strong> Design systems so:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Raw data can be separated</li>
              <li>Training datasets can be filtered</li>
              <li>Deletion requests can be respected where required</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl mb-4">8. Privacy & Compliance Rules (NON-NEGOTIABLE)</h2>
            <ul className="list-disc pl-5 space-y-2 mb-4 bg-gray-100 p-6 rounded-2xl text-[#1A1A1A]">
              <li>No sensitive data unless explicitly required</li>
              <li>External providers for KYC</li>
              <li>Lawful basis for all processing</li>
              <li>Data minimization by default</li>
              <li>Retain abuse-related data even after bans</li>
            </ul>
            <p className="font-medium text-[#6E00CC]">If unsure → ask before implementing.</p>
          </section>

          <section>
            <h2 className="text-2xl mb-4">9. What We Are Building (Mental Model)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-4">
              <div className="bg-[#6E00CC]/5 p-6 rounded-2xl border border-[#6E00CC]/10">
                <h3 className="text-lg font-medium text-[#6E00CC] mb-4">We are building:</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>An observable ecosystem</li>
                  <li>A trust-based platform</li>
                  <li>An AI-ready data foundation</li>
                </ul>
              </div>
              <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
                <h3 className="text-lg font-medium text-red-800 mb-4">We are NOT building:</h3>
                <ul className="list-disc pl-5 space-y-2 text-red-700">
                  <li>Surveillance software</li>
                  <li>Ad tracking systems</li>
                  <li>Behavioral manipulation engines</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl mb-4">10. Final Developer Checklist</h2>
            <p className="mb-4">Before shipping a feature:</p>
            <ul className="list-none space-y-3 mb-4">
              <li className="flex items-center gap-3"><span className="w-6 h-6 rounded border-2 border-gray-300"></span> Events defined?</li>
              <li className="flex items-center gap-3"><span className="w-6 h-6 rounded border-2 border-gray-300"></span> Backend validation?</li>
              <li className="flex items-center gap-3"><span className="w-6 h-6 rounded border-2 border-gray-300"></span> No sensitive data leaked?</li>
              <li className="flex items-center gap-3"><span className="w-6 h-6 rounded border-2 border-gray-300"></span> Audit trail present?</li>
              <li className="flex items-center gap-3"><span className="w-6 h-6 rounded border-2 border-gray-300"></span> Abuse vectors considered?</li>
              <li className="flex items-center gap-3"><span className="w-6 h-6 rounded border-2 border-gray-300"></span> Future AI compatibility ensured?</li>
            </ul>
            <p className="font-medium text-red-600">If any box is unchecked → do not ship.</p>
          </section>

          <section>
            <h2 className="text-2xl mt-8 mb-4">Final Note to Developers</h2>
            <p className="mb-4">SF&apos;s strength comes from:</p>
            <ul className="list-disc pl-5 space-y-2 mb-6">
              <li>Clean data</li>
              <li>Clear intent</li>
              <li>Strong enforcement</li>
              <li>Respect for users who build honestly</li>
            </ul>
            <p className="font-medium text-xl text-[#1A1A1A] p-6 bg-gradient-to-r from-[#6E00CC]/10 to-[#A855F7]/10 rounded-2xl text-center shadow-inner">
              If we get data right now, everything else becomes easier later.
            </p>
          </section>

        </motion.article>
      </div>
    </main>
  );
}
