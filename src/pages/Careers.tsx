import React from 'react';
import { motion } from 'motion/react';
import { Rocket, Coffee, Zap, TrendingUp, CheckCircle2, ChevronRight, Users, Briefcase } from 'lucide-react';

const Careers = () => {
  const perks = [
    "Market-leading salaries",
    "Performance-based 'Level Ups'",
    "Modern Office Vibes",
    "Regular Social Gatherings",
    "Health & Wellness Benefits",
    "Skill Development Workshops"
  ];

  return (
    <div className="min-h-screen pt-32">
      {/* Recruitment Hero */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-brand-orange/10 blur-[130px] rounded-full -z-10 animate-pulse-slow" />
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-orange/30 bg-brand-orange/10 text-brand-orange text-xs font-bold uppercase tracking-widest mb-6">
                <Briefcase size={14} /> The Initiation
              </div>
              <h1 className="text-5xl lg:text-7xl font-display font-bold text-white mb-8">
                Don't Just Get a Job. <br />
                <span className="text-gradient">Start a Movement.</span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed font-sans mb-8 font-medium">
                We’re looking for the bold, the bright, and the slightly obsessed. If you have the drive, we have the platform to make you elite.
              </p>
              <button className="px-10 py-5 rounded-xl bg-brand-orange text-white font-black text-lg hover:bg-orange-500 transition-all cursor-pointer shadow-2xl shadow-brand-orange/20 active:scale-95">
                Drop Your CV
              </button>
            </motion.div>
            
            <div className="relative">
              <div className="aspect-square glass rounded-[48px] overflow-hidden border-white/10 p-2 shadow-2xl relative">
                <div className="w-full h-full bg-slate-900 rounded-[40px] flex items-center justify-center relative overflow-hidden">
                   <div className="absolute inset-0 bg-brand-orange/5 mix-blend-overlay" />
                   <div className="grid grid-cols-2 gap-4 p-8 w-full">
                      {[...Array(4)].map((_, i) => (
                        <motion.div 
                          key={i}
                          animate={{ 
                            scale: [1, 1.05, 1],
                            opacity: [0.1, 0.3, 0.1]
                          }}
                          transition={{ duration: 4, delay: i * 0.5, repeat: Infinity }}
                          className="aspect-video glass rounded-2xl flex items-center justify-center border-white/5"
                        >
                           <Users className="text-brand-orange/30" />
                        </motion.div>
                      ))}
                   </div>
                   <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-32 h-32 rounded-full bg-brand-orange/20 blur-3xl animate-ping" />
                      <Rocket className="text-brand-orange w-16 h-16 relative z-10" />
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Life at the Cult */}
      <section className="py-24 bg-white/[0.02] border-y border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative">
               <div className="grid grid-cols-2 gap-6">
                  <div className="h-64 glass rounded-3xl p-8 flex flex-col justify-end border-brand-orange/10 group hover:border-brand-orange/40 transition-all">
                     <Coffee className="text-brand-orange mb-4 group-hover:scale-125 transition-transform" />
                     <div className="text-white font-bold uppercase tracking-tight">Free Fuel</div>
                     <div className="text-slate-500 text-xs">Premium Coffee & Snacks</div>
                  </div>
                  <div className="h-48 glass rounded-3xl p-8 flex flex-col justify-end border-brand-amber/10 translate-y-12 group hover:border-brand-amber/40 transition-all">
                     <Zap className="text-brand-amber mb-4 group-hover:scale-125 transition-transform" />
                     <div className="text-white font-bold uppercase tracking-tight">High Energy</div>
                     <div className="text-slate-500 text-xs">Dynamic Team Huddles</div>
                  </div>
               </div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-8 border-l-8 border-brand-orange pl-6">
                More Than Just a Desk.
              </h2>
              <p className="text-xl text-slate-300 font-sans leading-relaxed mb-6 font-medium">
                We’ve built an environment that rewards creativity. 
              </p>
              <p className="text-lg text-slate-400 font-sans leading-relaxed">
                From high-energy team huddles to a workspace that feels like a startup, not a cubicle farm. We believe that inspired people do the best work, so we keep the vibes high and the red tape low.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Growth Path */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
             <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-6 uppercase tracking-tight">We Build Leaders</h2>
             <div className="w-24 h-1 bg-brand-orange mx-auto rounded-full" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
             <motion.div
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="p-10 glass rounded-[40px] border-white/5 relative overflow-hidden"
             >
                <div className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-brand-orange/5 to-transparent -z-10" />
                <h3 className="text-2xl font-display font-bold text-white mb-6 uppercase tracking-tighter">No Dead-End Roles</h3>
                <p className="text-slate-400 font-sans leading-relaxed text-lg mb-8">
                  Every member of our cult has a clear, documented path to leadership, management, and specialized tech roles. We invest in you as much as you invest in us.
                </p>
                <div className="space-y-4">
                   {["Internal Mentorship", "Technical Certification Support", "Monthly Leadership Syncs"].map((item, i) => (
                     <div key={i} className="flex items-center gap-3 text-slate-300 font-bold uppercase text-xs tracking-widest">
                        <TrendingUp size={16} className="text-brand-orange" /> {item}
                     </div>
                   ))}
                </div>
             </motion.div>
             
             <div className="grid gap-6">
                {[
                  { step: "01", title: "Apprentice", desc: "Learn the brand voice and master the core systems." },
                  { step: "02", title: "Specialist", desc: "Take ownership of complex accounts and mentor others." },
                  { step: "03", title: "Strategist", desc: "Design new workflows and lead dedicated elite teams." }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ x: 10 }}
                    className="p-8 glass rounded-3xl border-white/5 flex items-center gap-8 group hover:border-brand-orange/20 transition-all"
                  >
                     <div className="text-4xl font-display font-black text-brand-orange/20 group-hover:text-brand-orange transition-colors">{item.step}</div>
                     <div>
                        <h4 className="text-white font-bold mb-1 uppercase tracking-tight">{item.title}</h4>
                        <p className="text-slate-500 text-sm">{item.desc}</p>
                     </div>
                  </motion.div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="py-24 bg-linear-to-b from-black/40 to-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
             <h2 className="text-4xl font-display font-bold text-white mb-4 uppercase italic">The Goods</h2>
             <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">What you get for being part of the cult</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks.map((perk, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="p-6 glass rounded-2xl border-white/5 flex items-center gap-4 group hover:border-brand-orange/30 transition-all"
              >
                 <div className="w-10 h-10 rounded-lg bg-brand-orange/10 flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all">
                    <CheckCircle2 size={20} />
                 </div>
                 <span className="text-white font-bold font-sans text-sm">{perk}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply Now Section */}
      <section className="py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="glass p-16 rounded-[48px] border-brand-orange/20 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/10 blur-[100px] -mr-32 -mt-32 group-hover:bg-brand-orange/20 transition-colors" />
            <h2 className="text-5xl lg:text-7xl font-display font-bold text-white mb-8">Ready to be <span className="text-gradient italic">Clever?</span></h2>
            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
               Step out of the ordinary. Join a culture that celebrates your talent and rewards your drive.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="px-10 py-5 rounded-xl bg-brand-orange text-white font-black text-lg hover:bg-orange-500 transition-all cursor-pointer shadow-2xl shadow-brand-orange/20 active:scale-95 flex items-center justify-center gap-2">
                Apply for Openings <ChevronRight size={20} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
