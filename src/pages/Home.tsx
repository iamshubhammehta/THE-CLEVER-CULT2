import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, TrendingUp, BarChart3, Users, CheckCircle2, Rocket } from 'lucide-react';
import FloatingCard from '../components/FloatingCard.tsx';
import ServiceCard from '../components/ServiceCard.tsx';
import StatCounter from '../components/StatCounter.tsx';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-brand-orange/15 blur-[120px] rounded-full -z-10 animate-pulse-slow" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-brand-amber/10 blur-[100px] rounded-full -z-10 animate-pulse-slow" />
        
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-orange/30 bg-brand-orange/10 text-brand-orange text-xs font-bold uppercase tracking-widest mb-6">
              <Rocket size={14} /> The Future of Business Operations
            </div>
            <h1 className="text-7xl lg:text-8xl font-display font-bold leading-[1.05] tracking-tight text-white mb-8">
              The Customer <br />
              <span className="text-gradient">Experience, Reimagined.</span>
            </h1>
            <p className="text-lg text-slate-400 mb-10 max-w-xl leading-relaxed font-medium">
              We combine human empathy with high-speed tech to manage your support, sales, and operations. Strategic Conversations, no robots - just results.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 rounded-xl bg-brand-orange text-white font-bold hover:bg-orange-500 transition-all cursor-pointer shadow-lg shadow-orange-500/20 active:scale-95">
                Get Started Now
              </button>
              <button className="px-8 py-4 rounded-xl glass text-white font-bold hover:bg-slate-800 transition-all cursor-pointer active:scale-95 border border-slate-700">
                Book a Strategy Call
              </button>
            </div>
          </motion.div>
          
          <div className="relative h-[500px] hidden lg:block">
            {/* Visual elements */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 rounded-full border-2 border-white/5 animate-pulse" />
              <div className="absolute w-60 h-60 rounded-full border border-white/10 animate-ping" />
            </div>
            
            <FloatingCard className="top-10 left-10 w-48 border-brand-orange/20" delay={0.2}>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-green-500/20 text-green-400"><MessageSquare size={20}/></div>
                <div className="text-xs font-bold text-white uppercase">Human Support</div>
              </div>
              <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                <motion.div animate={{ width: ['20%', '80%', '20%'] }} transition={{ duration: 4, repeat: Infinity }} className="h-full bg-green-400" />
              </div>
              <div className="mt-2 text-[10px] text-slate-500 font-bold">Empathy: 100%</div>
            </FloatingCard>
            
            <FloatingCard className="bottom-20 right-0 w-56 border-brand-amber/20" delay={0.5}>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-brand-orange/20 text-brand-orange"><TrendingUp size={20}/></div>
                <div className="text-xs font-bold text-white uppercase">Growth & Sales</div>
              </div>
              <div className="flex items-end gap-1 h-12">
                {[40, 70, 45, 90, 65, 80].map((h, i) => (
                  <motion.div 
                    key={i}
                    animate={{ height: `${h}%` }}
                    transition={{ duration: 1, delay: i * 0.1, repeat: Infinity, repeatType: 'reverse' }}
                    className="flex-1 bg-brand-orange rounded-t-sm" 
                  />
                ))}
              </div>
              <div className="mt-2 text-xs font-black text-brand-orange tracking-tighter uppercase">+85% Conversations</div>
            </FloatingCard>
            
            <FloatingCard className="top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-64 bg-black/60 border-brand-orange/30 shadow-brand-orange/10 shadow-2xl" delay={0.8}>
               <div className="space-y-3">
                  <div className="flex justify-between items-center whitespace-nowrap">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Ops Pipeline</span>
                    <span className="text-[10px] text-green-400 px-2 py-0.5 rounded-full bg-green-500/10 font-bold">Synchronized</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-10 glass rounded-lg flex items-center justify-center"><Users size={18} className="text-brand-orange opacity-50"/></div>
                    <div className="h-10 glass rounded-lg flex items-center justify-center"><CheckCircle2 size={18} className="text-brand-amber opacity-50"/></div>
                  </div>
               </div>
            </FloatingCard>
          </div>
        </div>
      </section>
      
      {/* Trust Strip */}
      <section className="py-12 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-slate-500 text-sm font-semibold uppercase tracking-widest mb-10">Scale operations with the cult</p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            {['SYNERGY', 'NEXUS', 'VECTOR', 'ORBIT', 'APEX', 'QUANTUM'].map(name => (
              <span key={name} className="text-2xl font-display font-black tracking-tighter italic text-white">{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Anti-Boring Section */}
      <section className="py-24 bg-linear-to-b from-black/40 to-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-8 border-l-8 border-brand-orange pl-6">
                Why Brands Choose the Cult.
              </h2>
              <p className="text-xl text-slate-300 leading-relaxed font-sans mb-6">
                Traditional BPOs are slow and disconnected. We operate as an extension of your team.
              </p>
              <p className="text-lg text-slate-400 leading-relaxed font-sans">
                We learn your brand voice, adopt your goals, and treat your customers like our own family. No scripts, just genuine human connection backed by institutional-grade intelligence.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-48 glass rounded-3xl flex flex-col items-center justify-center p-6 text-center border-brand-orange/10">
                   <div className="text-brand-orange font-bold text-3xl mb-1">98%</div>
                   <div className="text-slate-500 text-[10px] items-center uppercase tracking-widest font-bold">CSAT Score</div>
                </div>
                <div className="h-64 glass rounded-3xl flex flex-col items-center justify-center p-6 text-center border-brand-amber/10">
                   <div className="text-brand-amber font-bold text-3xl mb-1">1M+</div>
                   <div className="text-slate-500 text-[10px] uppercase tracking-widest font-bold">Interactions</div>
                </div>
              </div>
              <div className="space-y-4 translate-y-8">
                <div className="h-64 glass rounded-3xl flex flex-col items-center justify-center p-6 text-center border-brand-amber/10">
                   <div className="text-brand-amber font-bold text-3xl mb-1">50+</div>
                   <div className="text-slate-500 text-[10px] uppercase tracking-widest font-bold">Global Partners</div>
                </div>
                <div className="h-48 glass rounded-3xl flex flex-col items-center justify-center p-6 text-center border-brand-orange/10">
                   <div className="text-brand-orange font-bold text-3xl mb-1">24/7</div>
                   <div className="text-slate-500 text-[10px] uppercase tracking-widest font-bold">Coverage</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section id="services" className="py-24 lg:py-32 bg-linear-to-b from-transparent to-black/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 text-gradient">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-6">The Core Expertise</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard 
              icon={MessageSquare} 
              title="Support" 
              desc="24/7 Human-led CX. We manage your customer experience with empathy and precision, ensuring high satisfaction." 
              delay={0.1}
            />
            <ServiceCard 
              icon={TrendingUp} 
              title="Growth" 
              desc="Sales & Lead Generation. Strategic outbound and inbound solutions designed to scale your revenue fast." 
              delay={0.2}
            />
            <ServiceCard 
              icon={BarChart3} 
              title="Back Office" 
              desc="Data & Digital Ops. Meticulous management of your data, workflows, and digital operations infrastructure." 
              delay={0.3}
            />
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 bg-black/40 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-16 text-center">The Clever Blueprint</h2>
          
          <div className="grid lg:grid-cols-3 gap-12 relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-brand-orange/20 to-transparent -translate-y-1/2 -z-10" />
            
            {[
              { step: "01", title: "Analyze", desc: "We deep-dive into your existing workflows and identify scaling bottlenecks." },
              { step: "02", title: "Build", desc: "A dedicated team of experts is deployed, trained in your brand voice and tech stack." },
              { step: "03", title: "Scale", desc: "Continuous optimization through data feedback loops to ensure peak efficiency." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="relative bg-white/2 border border-white/5 p-8 rounded-3xl group hover:border-brand-orange/30 transition-all"
              >
                <div className="text-6xl font-display font-black text-brand-orange/5 absolute top-4 right-4">{item.step}</div>
                <div className="w-12 h-12 rounded-xl bg-brand-orange/20 text-brand-orange flex items-center justify-center mb-6 font-bold shadow-lg shadow-brand-orange/10 group-hover:bg-brand-orange group-hover:text-white transition-all">
                  {idx + 1}
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-4">{item.title}</h3>
                <p className="text-slate-400 font-sans text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Feature / Differentiator */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative rounded-3xl overflow-hidden glass aspect-square border border-white/10 p-2">
             <div className="absolute inset-0 bg-linear-to-br from-brand-orange/20 to-brand-amber/20 mix-blend-overlay" />
             <div className="w-full h-full bg-slate-900 flex items-center justify-center relative overflow-hidden rounded-2xl">
               <div className="grid grid-cols-4 gap-4 p-8 w-full group">
                 {[...Array(16)].map((_, i) => (
                    <motion.div 
                      key={i} 
                      animate={{ opacity: [0.1, 0.4, 0.1], scale: [1, 1.1, 1] }}
                      transition={{ duration: 3, delay: i * 0.1, repeat: Infinity }}
                      className="aspect-square glass rounded flex items-center justify-center text-brand-orange font-black text-xs"
                    >
                      {i + 1}
                    </motion.div>
                 ))}
               </div>
               <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 to-transparent flex items-center justify-center text-center p-8">
                 <div>
                   <div className="text-4xl font-display font-bold text-white mb-2">24/7</div>
                   <div className="text-slate-400 uppercase tracking-widest text-xs font-bold">Always Active Operations</div>
                 </div>
               </div>
             </div>
          </div>
          
          <div>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-8 border-l-8 border-brand-orange pl-6">
              Strategic Growth Partner
            </h2>
            <div className="space-y-6">
              {[
                { title: "Dedicated Experts", desc: "No rotational shifts. Only experts who know your business inside out." },
                { title: "24/7 Operations", desc: "The sun never sets on your business. We run while you sleep." },
                { title: "Scalable Teams", desc: "Ramp up from 1 to 50 experts in record time as your volume spikes." },
                { title: "Data-Driven Decisions", desc: "Advanced analytics provided weekly to refine and optimize every touchpoint." }
              ].map((point, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="shrink-0 mt-1"><CheckCircle2 className="text-brand-orange group-hover:scale-125 transition-transform" size={20} /></div>
                  <div>
                    <h4 className="text-white font-bold mb-1 uppercase tracking-tight">{point.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed font-sans">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* impact Section rewritten as By the Numbers */}
      <section id="impact" className="py-24 bg-linear-to-r from-brand-orange/5 via-brand-amber/5 to-brand-orange/5">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-display font-bold text-white mb-16 text-center uppercase tracking-widest">By the Numbers</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCounter value="98" suffix="%" label="CSAT Score" />
            <StatCounter value="1" suffix="M+" label="Interactions" />
            <StatCounter value="50" suffix="+" label="Global Partners" />
            <StatCounter value="24" suffix="/7" label="Human Support" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-orange/5 blur-[150px] -z-10" />
        <div className="max-w-4xl mx-auto px-6 text-center glass p-16 rounded-[40px] border-brand-orange/20 relative group hover:border-brand-orange/40 transition-all">
          <motion.div 
             initial={{ scale: 0.9, opacity: 0 }}
             whileInView={{ scale: 1, opacity: 1 }}
             viewport={{ once: true }}
          >
            <h2 className="text-5xl lg:text-7xl font-display font-bold text-white mb-8">Your Business Deserves a <span className="text-gradient">Clever Edge</span></h2>
            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
              Elite conversations, no robots, just results. Contact us today to receive your custom quote.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="px-10 py-5 rounded-xl bg-brand-orange text-white font-black text-lg hover:bg-orange-500 transition-all cursor-pointer shadow-2xl shadow-brand-orange/20 active:scale-95">
                Get a Custom Quote
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
