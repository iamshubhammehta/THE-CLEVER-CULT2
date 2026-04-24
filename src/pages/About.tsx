import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Zap, Lightbulb, Users, Globe, Award } from 'lucide-react';
import ServiceCard from '../components/ServiceCard.tsx';

const About = () => {
  return (
    <div className="min-h-screen pt-32">
      {/* Origin Story */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        {/* Animated background blobs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-orange/10 blur-[130px] rounded-full -z-10" 
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [0, -90, 0],
            opacity: [0.05, 0.15, 0.05]
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-amber/10 blur-[120px] rounded-full -z-10" 
        />

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-orange/30 bg-brand-orange/10 text-brand-orange text-xs font-bold uppercase tracking-widest mb-6">
                The Inner Circle
              </div>
              <h1 className="text-5xl lg:text-7xl font-display font-bold text-white mb-8">
                A Different Kind of <span className="text-gradient">Agency.</span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed font-sans mb-6">
                The Clever Cult was founded on a simple idea: that business process outsourcing shouldn't feel "outsourced."
              </p>
              <p className="text-lg text-slate-400 leading-relaxed font-sans">
                We wanted to create a hub where talent actually enjoys the work. A place where "BPO" isn't a four-letter word, but a badge of engineering and empathetic excellence. We aren't just a vendor; we're your partner in the trenches.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative"
            >
              <div className="aspect-video glass rounded-[40px] overflow-hidden border-white/10 p-2 shadow-2xl relative group">
                 <div className="absolute inset-0 bg-brand-orange/10 group-hover:bg-brand-orange/20 transition-colors" />
                 <div className="w-full h-full bg-slate-900 rounded-[32px] flex items-center justify-center relative z-10">
                    <div className="text-center group-hover:scale-110 transition-transform duration-500">
                       <motion.div 
                         animate={{ y: [0, -10, 0] }}
                         transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                         className="text-brand-orange font-black text-6xl italic mb-2 tracking-tighter"
                       >
                         HQ
                       </motion.div>
                       <div className="text-slate-500 uppercase tracking-[0.3em] text-xs font-bold font-display italic">Mohali, India</div>
                    </div>
                    <div className="absolute inset-0 opacity-20 pointer-events-none">
                       {[...Array(5)].map((_, i) => (
                         <div key={i} className={`absolute h-[1px] w-full bg-brand-orange top-${i*20} left-0`} style={{ top: `${i*25}%` }} />
                       ))}
                    </div>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mohali Edge */}
      <section className="py-24 bg-white/[0.02] border-y border-white/5 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 grid grid-cols-2 gap-6 relative">
               <motion.div 
                 whileHover={{ y: -5, scale: 1.05 }}
                 className="p-8 glass rounded-3xl border-brand-orange/20 text-center hover:neon-glow transition-all cursor-default"
               >
                  <div className="text-white font-bold text-3xl mb-1">Elite</div>
                  <div className="text-slate-500 text-xs uppercase tracking-widest font-bold font-display italic">Talent Pool</div>
               </motion.div>
               <motion.div 
                 whileHover={{ y: -5, scale: 1.05 }}
                 className="p-8 glass rounded-3xl border-brand-amber/20 text-center translate-y-12 hover:neon-glow transition-all cursor-default"
               >
                  <div className="text-white font-bold text-3xl mb-1">Tech</div>
                  <div className="text-slate-500 text-xs uppercase tracking-widest font-bold font-display italic">Native Pros</div>
               </motion.div>
               <motion.div 
                 whileHover={{ y: -5, scale: 1.05 }}
                 className="p-8 glass rounded-3xl border-brand-amber/20 text-center hover:neon-glow transition-all cursor-default"
               >
                  <div className="text-white font-bold text-3xl mb-1">Global</div>
                  <div className="text-slate-500 text-xs uppercase tracking-widest font-bold font-display italic">Standards</div>
               </motion.div>
               <motion.div 
                 whileHover={{ y: -5, scale: 1.05 }}
                 className="p-8 glass rounded-3xl border-brand-orange/20 text-center translate-y-12 hover:neon-glow transition-all cursor-default"
               >
                  <div className="text-white font-bold text-3xl mb-1">24/7</div>
                  <div className="text-slate-500 text-xs uppercase tracking-widest font-bold font-display italic">Uptime</div>
               </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-8">
                Global Vision, <span className="text-brand-orange italic">Local Talent.</span>
              </h2>
              <p className="text-xl text-slate-300 leading-relaxed font-sans mb-6">
                Based in the booming tech corridor of Mohali, we tap into a pool of highly educated, tech-savvy pros.
              </p>
              <p className="text-lg text-slate-400 leading-relaxed font-sans font-medium">
                Our Mohali advantage allows us to offer world-class multilingual support and technical expertise without the bloated overhead of Silicon Valley. We are ready to represent your brand on a global stage.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
             <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-6 uppercase tracking-tight">The Cult Code</h2>
             <div className="w-24 h-1 bg-brand-orange mx-auto rounded-full" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
             {[
               { icon: ShieldCheck, title: "Unfiltered Honesty", desc: "We tell you what’s working and what isn’t. No sugar-coating, just data and growth-oriented feedback." },
               { icon: Zap, title: "Speed Over Bureaucracy", desc: "Decisions are made in minutes, not meetings. We move fast so you don't lose scaling momentum." },
               { icon: Lightbulb, title: "Relentless Curiosity", desc: "We’re always looking for a 'cleverer' way to do things. Innovation is our standard operating procedure." }
             ].map((val, idx) => (
               <motion.div 
                 key={idx}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.5, delay: idx * 0.2 }}
                 whileHover={{ y: -15, scale: 1.02 }}
                 className="p-10 glass rounded-[32px] border-white/5 hover:border-brand-orange/40 transition-all group cursor-default shadow-xl hover:shadow-brand-orange/10"
               >
                  <motion.div 
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    className="w-16 h-16 rounded-2xl bg-brand-orange/10 flex items-center justify-center text-brand-orange mb-8 group-hover:bg-brand-orange group-hover:text-white transition-all duration-300 shadow-md"
                  >
                     <val.icon size={32} />
                  </motion.div>
                  <h3 className="text-2xl font-display font-bold text-white mb-4 uppercase tracking-tighter group-hover:text-brand-orange transition-colors">{val.title}</h3>
                  <p className="text-slate-400 font-sans leading-relaxed text-sm">{val.desc}</p>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-linear-to-b from-transparent to-black/40">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white/2 border border-white/5 rounded-[48px] p-12 lg:p-20 relative overflow-hidden"
          >
             <div className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-brand-orange/5 to-transparent -z-10" />
             <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                   <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-8 border-l-8 border-brand-orange pl-6">Run by Operators.</h2>
                   <p className="text-xl text-slate-300 font-sans leading-relaxed mb-8">
                      We aren't run by "suits." We are run by operators, creators, and strategists who are in the trenches with our team every day.
                   </p>
                   <p className="text-lg text-slate-400 font-sans leading-relaxed font-medium">
                      Our leadership has a combined experience of scaling startups from zero to millions of users. We built the system we wished we had.
                   </p>
                </div>
                <div className="grid grid-cols-1 gap-6">
                   <motion.div 
                     whileHover={{ x: 10 }}
                     className="flex items-center gap-6 glass p-6 rounded-3xl border-brand-orange/10 group hover:neon-glow transition-all"
                   >
                      <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center text-brand-orange font-bold font-display italic group-hover:bg-brand-orange group-hover:text-white transition-all shadow-lg">L1</div>
                      <div>
                         <div className="text-white font-bold text-lg uppercase tracking-tight">Growth Strategist</div>
                         <div className="text-slate-500 text-xs font-black uppercase tracking-widest italic">15+ Years Tech</div>
                      </div>
                   </motion.div>
                   <motion.div 
                     whileHover={{ x: 10 }}
                     className="flex items-center gap-6 glass p-6 rounded-3xl border-brand-amber/10 translate-x-8 group hover:neon-glow transition-all"
                   >
                      <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center text-brand-amber font-bold font-display italic group-hover:bg-brand-amber group-hover:text-white transition-all shadow-lg">L2</div>
                      <div>
                         <div className="text-white font-bold text-lg uppercase tracking-tight">Operations Architect</div>
                         <div className="text-slate-500 text-xs font-black uppercase tracking-widest italic">Scaling Expert</div>
                      </div>
                   </motion.div>
                </div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
           <h2 className="text-slate-500 text-[10px] uppercase tracking-[0.5em] font-black mb-12">Recognized Growth</h2>
           <div className="flex flex-wrap justify-center gap-12 items-center opacity-40 grayscale filter hover:grayscale-0 hover:opacity-100 transition-all duration-500">
              <motion.div 
                whileHover={{ scale: 1.1, opacity: 1 }}
                className="flex items-center gap-2"
              >
                <Award className="text-white" size={24}/> <span className="text-white font-bold font-display italic">Top Employer 2025</span>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.1, opacity: 1 }}
                className="flex items-center gap-2"
              >
                <Globe className="text-white" size={24}/> <span className="text-white font-bold font-display italic">Global Scale Award</span>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.1, opacity: 1 }}
                className="flex items-center gap-2"
              >
                <Users className="text-white" size={24}/> <span className="text-white font-bold font-display italic">100% Talent Success</span>
              </motion.div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default About;
