import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, desc, delay }: { icon: any, title: string, desc: string, delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -10 }}
    className="p-8 rounded-3xl glass relative group overflow-hidden border border-white/5 hover:border-brand-orange/20 transition-all"
  >
    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/5 blur-3xl -mr-16 -mt-16 group-hover:bg-brand-orange/10 transition-colors" />
    <div className="w-14 h-14 rounded-2xl bg-brand-orange/10 flex items-center justify-center mb-6 group-hover:bg-brand-orange group-hover:text-white transition-all text-brand-orange">
      <Icon size={28} />
    </div>
    <h3 className="text-2xl font-display font-bold text-white mb-4">{title}</h3>
    <p className="text-slate-400 leading-relaxed font-sans text-sm">{desc}</p>
    <div className="mt-6 flex items-center text-brand-orange font-bold text-sm gap-1 group-hover:gap-2 transition-all cursor-pointer">
      Learn More <ChevronRight size={16} />
    </div>
  </motion.div>
);

export default ServiceCard;
