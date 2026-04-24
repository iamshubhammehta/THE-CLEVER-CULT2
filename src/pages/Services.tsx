import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, TrendingUp, BarChart3, CreditCard, ChevronRight, CheckCircle2, PhoneCall, Mail, Share2, Target, Calendar, Database, ShieldCheck } from 'lucide-react';

const Services = () => {
  const onboardSteps = [
    { step: "01", title: "Discovery Call", desc: "We deep-dive into your existing workflows and identify scaling bottlenecks." },
    { step: "02", title: "Strategy Blueprint", desc: "A tailored roadmap is designed, selecting the right talent and tech stack for your needs." },
    { step: "03", title: "Go-Live & Scale", desc: "The team is deployed and continuously optimized through data feedback loops." }
  ];

  return (
    <div className="min-h-screen pt-32">
      {/* Service Hero */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-orange/10 blur-[130px] rounded-full -z-10" />
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-orange/30 bg-brand-orange/10 text-brand-orange text-xs font-bold uppercase tracking-widest mb-6">
              The Doctrine
            </div>
            <h1 className="text-5xl lg:text-8xl font-display font-bold text-white mb-8">
              Solutions for the <br />
              <span className="text-gradient italic">Modern Era.</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium">
              We don’t just "handle" tasks; we optimize them. Explore our pillars of excellence designed to fuel your business growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services Breakdown */}
      <section className="py-24 space-y-32">
        <div className="max-w-7xl mx-auto px-6">
          {/* CX & Support */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-orange/10 flex items-center justify-center text-brand-orange mb-8">
                <MessageSquare size={32} />
              </div>
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-8 border-l-8 border-brand-orange pl-6">
                CX & Support
              </h2>
              <p className="text-xl text-slate-300 font-sans leading-relaxed mb-8">
                Beyond answering phones. We manage Live Chat, Email ticketing, and Social DM support with a focus on "First Contact Resolution" - solving the problem the first time, every time.
              </p>
              <div className="grid grid-cols-2 gap-4">
                 {[
                   { icon: PhoneCall, label: "Live Voice Support" },
                   { icon: Mail, label: "Email Management" },
                   { icon: MessageSquare, label: "24/7 Live Chat" },
                   { icon: Share2, label: "Social Media DMs" }
                 ].map((item, i) => (
                   <div key={i} className="flex items-center gap-3 glass p-4 rounded-xl border-white/5">
                      <item.icon size={18} className="text-brand-orange" />
                      <span className="text-white text-sm font-bold uppercase tracking-tight">{item.label}</span>
                   </div>
                 ))}
              </div>
            </motion.div>
            <div className="relative">
               <div className="aspect-square glass rounded-[48px] overflow-hidden border-white/10 p-2 shadow-2xl">
                  <div className="w-full h-full bg-slate-900 rounded-[40px] flex items-center justify-center relative overflow-hidden group">
                     <div className="absolute inset-0 bg-brand-orange/5 mix-blend-overlay" />
                     <motion.div 
                       animate={{ 
                         scale: [1, 1.1, 1],
                         rotate: [0, 5, 0]
                       }}
                       transition={{ duration: 10, repeat: Infinity }}
                       className="p-12 text-center"
                     >
                        <div className="text-8xl font-display font-black text-brand-orange/20 mb-4 tracking-tighter">CSAT</div>
                        <div className="text-brand-orange text-6xl font-black">98%</div>
                        <div className="text-slate-500 uppercase tracking-widest text-xs mt-2 font-bold">Customer Satisfaction</div>
                     </motion.div>
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* Growth & Lead Gen */}
        <div className="bg-white/[0.02] py-32 border-y border-white/5 relative overflow-hidden">
          <div className="absolute top-1/2 left-0 w-64 h-64 bg-brand-amber/10 blur-[120px] -translate-y-1/2 rounded-full -z-10" />
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 relative">
                 <div className="grid grid-cols-2 gap-6">
                    <div className="p-8 glass rounded-3xl border-brand-amber/20 hover:neon-glow transition-all text-center">
                       <div className="text-brand-amber font-black text-4xl mb-1">500+</div>
                       <div className="text-slate-500 uppercase tracking-widest text-[10px] font-bold">Meetings Booked</div>
                    </div>
                    <div className="p-8 glass rounded-3xl border-brand-orange/20 hover:neon-glow transition-all translate-y-12 text-center">
                       <div className="text-brand-orange font-black text-4xl mb-1">2.5X</div>
                       <div className="text-slate-500 uppercase tracking-widest text-[10px] font-bold">ROI Average</div>
                    </div>
                 </div>
              </div>
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-1 lg:order-2"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-amber/10 flex items-center justify-center text-brand-amber mb-8">
                  <TrendingUp size={32} />
                </div>
                <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-8 border-l-8 border-brand-amber pl-6">
                  Growth & Lead Gen
                </h2>
                <p className="text-xl text-slate-300 font-sans leading-relaxed mb-8">
                  Outbound with a soul. We identify your ideal customers, reach out with personalized messaging, and book meetings directly into your calendar. We’re your dedicated pipeline builders.
                </p>
                <div className="space-y-4">
                   {[
                     { icon: Target, label: "Ideal Customer Profiling" },
                     { icon: Calendar, label: "Automated Calendar Sync" },
                     { icon: Mail, label: "Personalized Outreach" }
                   ].map((item, i) => (
                     <div key={i} className="flex items-center gap-4 group">
                        <div className="w-10 h-10 rounded-lg bg-brand-amber/10 flex items-center justify-center text-brand-amber group-hover:bg-brand-amber group-hover:text-white transition-all">
                           <item.icon size={20} />
                        </div>
                        <span className="text-white font-bold uppercase text-xs tracking-widest">{item.label}</span>
                     </div>
                   ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Digital & Data Ops */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-orange/10 flex items-center justify-center text-brand-orange mb-8">
                <BarChart3 size={32} />
              </div>
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-8 border-l-8 border-brand-orange pl-6">
                Digital & Data Ops
              </h2>
              <p className="text-xl text-slate-300 font-sans leading-relaxed mb-8">
                The behind-the-scenes magic. From content moderation to high-level data entry and CRM management. We keep your systems clean and your data actionable.
              </p>
              <div className="flex flex-wrap gap-4">
                 {["Content Moderation", "CRM Maintenance", "Data Verification", "Workflow Automation"].map((tag, i) => (
                   <span key={i} className="px-4 py-2 rounded-full glass border border-white/10 text-slate-400 text-xs font-bold uppercase tracking-widest">
                      {tag}
                   </span>
                 ))}
              </div>
            </motion.div>
            <div className="relative rounded-[48px] overflow-hidden glass border border-white/10 p-8">
               <div className="grid grid-cols-3 gap-4">
                  {[...Array(9)].map((_, i) => (
                    <motion.div 
                      key={i}
                      animate={{ 
                        opacity: [0.1, 0.4, 0.1],
                        scale: [1, 1.05, 1]
                      }}
                      transition={{ duration: 3, delay: i * 0.2, repeat: Infinity }}
                      className="aspect-square glass rounded-2xl flex items-center justify-center"
                    >
                       <Database size={24} className="text-brand-orange" />
                    </motion.div>
                  ))}
               </div>
               <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 to-transparent flex items-end p-8">
                  <div className="flex items-center gap-4">
                     <ShieldCheck className="text-green-500" size={32} />
                     <div className="text-white font-bold uppercase tracking-widest text-sm">Data Integrity Guaranteed</div>
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* Payroll & Workforce Management */}
        <div className="bg-linear-to-t from-black/40 to-transparent py-32 border-t border-white/5 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 relative">
                 <div className="aspect-video glass rounded-[40px] overflow-hidden border-white/10 p-2 shadow-2xl relative">
                    <div className="w-full h-full bg-slate-900 rounded-[32px] flex items-center justify-center p-12">
                       <div className="w-full space-y-6">
                          <div className="h-4 w-1/3 bg-white/10 rounded-full" />
                          <div className="grid grid-cols-4 gap-4">
                             {[...Array(8)].map((_, i) => (
                               <div key={i} className="h-10 glass rounded-lg" />
                             ))}
                          </div>
                          <div className="flex justify-between items-center bg-brand-orange/10 p-4 rounded-xl border border-brand-orange/20">
                             <div className="text-brand-orange font-bold text-xs uppercase tracking-widest">Processing Payroll</div>
                             <div className="text-white font-black">100% SUCCESS</div>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-1 lg:order-2"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-orange/10 flex items-center justify-center text-brand-orange mb-8">
                  <CreditCard size={32} />
                </div>
                <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-8 border-l-8 border-brand-orange pl-6">
                  Payroll & Workforce
                </h2>
                <p className="text-xl text-slate-300 font-sans leading-relaxed mb-8">
                  Managing a team is hard, paying them shouldn’t be. We handle the entire payroll lifecycle, ensuring tax compliance and timely disbursements so you can focus on scaling.
                </p>
                <div className="grid grid-cols-2 gap-4">
                   <div className="flex items-center gap-3 text-slate-400 font-bold uppercase text-[10px] tracking-widest">
                      <CheckCircle2 size={16} className="text-brand-orange" /> Tax Compliance
                   </div>
                   <div className="flex items-center gap-3 text-slate-400 font-bold uppercase text-[10px] tracking-widest">
                      <CheckCircle2 size={16} className="text-brand-orange" /> Global Disbursements
                   </div>
                   <div className="flex items-center gap-3 text-slate-400 font-bold uppercase text-[10px] tracking-widest">
                      <CheckCircle2 size={16} className="text-brand-orange" /> Benefits Admin
                   </div>
                   <div className="flex items-center gap-3 text-slate-400 font-bold uppercase text-[10px] tracking-widest">
                      <CheckCircle2 size={16} className="text-brand-orange" /> Compliance Audits
                   </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Onboard Section */}
      <section className="py-24 bg-black/40 border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-orange/5 blur-[120px] -z-10" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
             <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-6 uppercase tracking-tight">The Onboarding Sprint</h2>
             <p className="text-slate-500 font-bold uppercase tracking-[0.3em] text-xs">From zero to operational in 3 simple steps</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12 relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-brand-orange/20 to-transparent -translate-y-1/2 -z-10" />
            
            {onboardSteps.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="relative bg-white/2 border border-white/5 p-10 rounded-[40px] group hover:border-brand-orange/30 transition-all hover:neon-glow"
              >
                <div className="text-7xl font-display font-black text-brand-orange/5 absolute top-4 right-8">{item.step}</div>
                <div className="w-14 h-14 rounded-2xl bg-brand-orange/20 text-brand-orange flex items-center justify-center mb-8 font-bold shadow-lg shadow-brand-orange/10 group-hover:bg-brand-orange group-hover:text-white transition-all text-xl">
                  {idx + 1}
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-4 uppercase tracking-tighter">{item.title}</h3>
                <p className="text-slate-400 font-sans leading-relaxed text-sm">{item.desc}</p>
                {idx < 2 && (
                   <div className="lg:hidden flex justify-center py-8">
                      <ChevronRight size={32} className="text-brand-orange animate-bounce-x" />
                   </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="glass p-16 rounded-[48px] border-brand-orange/20 relative"
          >
            <h2 className="text-5xl lg:text-7xl font-display font-bold text-white mb-8">Ready to <span className="text-gradient">Optimize?</span></h2>
            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Don't leave your operations to chance. Join the cult and let's engineer your success.
            </p>
            <button className="px-12 py-5 rounded-xl bg-brand-orange text-white font-black text-xl hover:bg-orange-500 transition-all cursor-pointer shadow-2xl shadow-brand-orange/20 active:scale-95">
               Start Your Blueprint
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
