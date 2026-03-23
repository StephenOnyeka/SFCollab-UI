"use client";
import { motion } from "framer-motion";
import { MdAutoAwesome, MdOutlineDraw, MdOutlineShowChart, MdSecurity, MdVpnKey, MdFingerprint } from "react-icons/md";

const aiTools = [
  { title: "Generate Logos", desc: "Create professional brand assets in seconds.", icon: MdOutlineDraw },
  { title: "Draft Pitch Decks", desc: "Build investor-ready presentations with AI assistance.", icon: MdAutoAwesome },
  { title: "Market Research", desc: "Run competitive analysis and market insights automatically.", icon: MdOutlineShowChart },
];

const security = [
  { title: "Enterprise-Grade Encryption", desc: "Your data is protected with industry-leading security standards.", icon: MdSecurity },
  { title: "Proof of Collaboration", desc: "Blockchain-backed verification of your contributions and ownership.", icon: MdFingerprint },
  { title: "You Own Your IP", desc: "Always. No exceptions. What you create belongs to you.", icon: MdVpnKey },
];

export default function AIToolsAndSecurity() {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* AI Tools */}
        <div>
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-medium text-sm mb-6"
            >
              <MdAutoAwesome className="text-lg" />
              AI-Powered Tools
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl font-semibold text-[#1A1A1A]"
            >
              Let AI handle the busy work so you can focus on building.
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aiTools.map((tool, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <tool.icon className="text-3xl text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">{tool.title}</h3>
                <p className="text-gray-600">{tool.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Security */}
        <div>
          <div className="text-center mb-16">
             <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 text-green-600 font-medium text-sm mb-6"
            >
              <MdSecurity className="text-lg" />
              Trust & Security
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl font-semibold text-[#1A1A1A]"
            >
              Built to protect your vision.
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {security.map((sec, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <sec.icon className="text-3xl text-green-600 mb-4" />
                <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">{sec.title}</h3>
                <p className="text-gray-600">{sec.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
