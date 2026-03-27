'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  MdVerified, 
  MdMilitaryTech, 
  MdGroups, 
  MdTrendingUp, 
  MdOutlineSecurity,
  MdAutoGraph
} from 'react-icons/md';

export default function BuilderReputation() {
  const [score, setScore] = React.useState(0);

  React.useEffect(() => {
    import('framer-motion').then(({ animate }) => {
      const controls = animate(0, 942, {
        duration: 2,
        onUpdate: (value) => setScore(Math.floor(value)),
        ease: "easeOut",
      });
      return () => controls.stop();
    });
  }, []);

  const stats = [
    { label: "Execution Rank", value: "Top 2%", icon: <MdMilitaryTech />, color: "text-amber-500", bg: "bg-amber-500/10" },
    { label: "Milestones", value: "128", icon: <MdVerified />, color: "text-[#6E00CC]", bg: "bg-[#6E00CC]/10" },
    { label: "Collab Score", value: "9.8/10", icon: <MdGroups />, color: "text-blue-500", bg: "bg-blue-500/10" },
  ];

  const milestones = [
    { title: "Smart Contract Audit", status: "Verified", date: "2 days ago" },
    { title: "Frontend Architecture", status: "Completed", date: "1 week ago" },
    { title: "Ecosystem Integration", status: "Verified", date: "3 weeks ago" },
  ];

  return (
    <section className="w-full bg-white py-24 lg:py-32 overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-16">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="flex flex-col gap-6 max-w-2xl">
              <span className="text-[#6E00CC] font-normal tracking-[0.2em] uppercase text-sm border-b-2 border-[#6E00CC]/20 pb-1 w-fit">
                Builder Ecosystem
              </span>
              <h2 className="text-[42px] md:text-[60px] font-normal text-[#1A1A1A] leading-tight tracking-tighter">
                Execution builds <span className="italic text-gray-400">reputation.</span>
              </h2>
              <p className="text-base text-gray-500 leading-relaxed">
                We&apos;ve replaced social clout with verifiable data. SF profiles represent a history of finished work, peer-reviewed execution, and milestone consistency.
              </p>
            </div>
            <div className="flex items-center gap-4 bg-gray-50 px-6 py-3 rounded-2xl border border-gray-100">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-medium text-gray-600 uppercase tracking-wider">Live Reputation Engine</span>
            </div>
          </div>

          {/* Reputation Dashboard Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Main Score Card (Left) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-4 bg-[#1A1A1A] rounded-[3rem] p-10 text-white relative overflow-hidden flex flex-col justify-between group"
            >
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-[#6E00CC]/20 blur-[100px] rounded-full group-hover:bg-[#6E00CC]/30 transition-colors" />
              
              <div className="relative flex flex-col gap-8">
                  <div className="flex justify-between items-start">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#6E00CC] text-3xl">
                        <MdAutoGraph />
                    </div>
                    <span className="px-4 py-2 rounded-full bg-[#6E00CC] text-white text-xs font-bold uppercase tracking-widest">Global Rank #42</span>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                      <span className="text-white/50 text-sm uppercase tracking-[0.2em]">Reputation Score</span>
                      <div className="flex items-baseline gap-2">
                        <motion.h3 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-8xl font-normal tracking-tighter"
                        >
                            {score}
                        </motion.h3>
                        <span className="text-2xl text-[#6E00CC]">/ 1000</span>
                      </div>
                  </div>
              </div>

              <div className="relative mt-12 flex flex-col gap-4">
                  <div className="flex justify-between text-sm text-white/50 mb-2">
                      <span>Reliability</span>
                      <span className="text-white">98%</span>
                  </div>
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "98%" }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="h-full bg-[#6E00CC] rounded-full"
                      />
                  </div>
              </div>
            </motion.div>

            {/* Middle Column: Stats & Milestones */}
            <div className="lg:col-span-5 flex flex-col gap-8">
                
                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-4">
                    {stats.map((stat, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-gray-50 border border-gray-100 p-6 rounded-4xl flex flex-col items-center gap-3 text-center hover:bg-white hover:shadow-xl transition-all group"
                        >
                            <div className={`w-12 h-12 ${stat.bg} ${stat.color} rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform`}>
                                {stat.icon}
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[20px] font-normal text-[#1A1A1A] leading-none mb-1">{stat.value}</span>
                                <span className="text-[11px] uppercase tracking-widest text-gray-400">{stat.label}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Milestone Tracker */}
                <motion.div 
                   initial={{ opacity: 0, x: 20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   className="flex-1 bg-white border border-gray-100 p-8 rounded-[3rem] shadow-sm flex flex-col gap-6"
                >
                    <div className="flex justify-between items-center">
                        <h4 className="text-lg font-normal text-[#1A1A1A]">Verified Record</h4>
                        <MdOutlineSecurity className="text-[#6E00CC] text-xl" />
                    </div>
                    <div className="flex flex-col gap-4">
                        {milestones.map((m, i) => (
                           <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-white transition-colors group">
                               <div className="flex items-center gap-4">
                                   <div className="w-2 h-2 rounded-full bg-[#6E00CC]" />
                                   <div className="flex flex-col">
                                       <span className="text-sm font-medium text-[#1A1A1A]">{m.title}</span>
                                       <span className="text-xs text-gray-400">{m.date}</span>
                                   </div>
                               </div>
                               <span className="text-[10px] px-2 py-1 rounded bg-[#6E00CC]/10 text-[#6E00CC] font-bold uppercase tracking-tighter">
                                   {m.status}
                               </span>
                           </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Right Column: Trust Indicators & Meta */}
            <motion.div 
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.3 }}
               className="lg:col-span-3 bg-gray-50 border border-gray-100 rounded-[3rem] p-8 flex flex-col gap-8 justify-between relative overflow-hidden group"
            >
                <div className="flex flex-col gap-2 relative z-10">
                    <span className="text-[#6E00CC] font-bold text-xs uppercase tracking-widest">Meritocratic Engine</span>
                    <h4 className="text-2xl font-normal leading-tight text-[#1A1A1A]">
                        Verified by <br /> Peer consensus.
                    </h4>
                    <p className="text-sm text-gray-400 mt-2">
                        SFCollab uses a weighted consensus algorithm to validate every contribution. No fake endorsements.
                    </p>
                </div>

                <div className="relative h-32 w-full flex items-center justify-center">
                    <div className="absolute inset-0 bg-white/50 rounded-2xl blur-xl" />
                    <MdTrendingUp className="text-8xl text-[#6E00CC]/10 group-hover:text-[#6E00CC]/20 transition-colors" />
                    <div className="absolute flex flex-col items-center">
                        <span className="text-4xl font-normal text-[#6E00CC]">+12%</span>
                        <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400">Monthly Growth</span>
                    </div>
                </div>

                {/* <button className="w-full bg-white border border-[#6E00CC]/20 text-[#6E00CC] py-4 rounded-2xl text-sm font-bold uppercase tracking-[0.2em] hover:bg-[#6E00CC] hover:text-white transition-all">
                    View Methodology
                </button> */}
                {/* <div className="relative z-10 flex flex-col items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-[#6E00CC] shadow-[0_0_30px_#6E00CC] flex items-center justify-center">
                        <div className='w-10 h-10 bg-white rounded-full'>
                            <Image alt='logo' src={'/logo.svg'} width={50} height={50}/>
                        </div>
                    </div>
                </div> */}
                <div className="relative z-10 flex items-center gap-4">
                    {/* <div className="w-16 h-16 rounded-2xl bg-[#6E00CC] shadow-[0_0_30px_#6E00CC] flex items-center justify-center"> */}
                        {/* <div className='w-12 h-12 bg-white rounded-full p-2 border border-gray-400'>
                            <Image alt='logo' src={'/logo.svg'} width={50} height={50}/>
                        </div> */}
                    {/* </div> */}
                </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
