import React from 'react';
import { Mail, Linkedin, Twitter, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="py-20 border-t border-white/5 relative z-10 overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-12 mb-20">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-lg bg-linear-to-tr from-brand-orange to-brand-amber flex items-center justify-center font-display font-bold text-white">C</div>
            <span className="font-display font-bold text-xl tracking-tight text-white uppercase decoration-brand-orange decoration-4">CLEVER CULT</span>
          </div>
          <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">
            Engineering excellence at the intersection of human expertise and elite technology.
          </p>
          <div className="flex gap-4">
            {[Twitter, Linkedin, Instagram, Mail].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-xl glass flex items-center justify-center text-slate-400 hover:text-brand-orange hover:border-brand-orange transition-all">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
        
        {[
          { title: "Solutions", links: ["BPO & Support", "IT Staffing", "Digital Marketing", "Business Ops"] },
          { title: "Company", links: ["About Us", "Our Culture", "Scale Blueprint", "Careers"] },
          { title: "Resources", links: ["Case Studies", "Market Analysis", "Growth Blog", "Documentation"] }
        ].map((col, i) => (
          <div key={i}>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">{col.title}</h4>
            <ul className="space-y-4">
              {col.links.map(link => (
                <li key={link}><a href="#" className="text-slate-500 hover:text-white transition-colors text-sm font-semibold">{link}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      <div className="pt-8 border-t border-white/5 flex flex-col md:row items-center justify-between gap-6 text-slate-600 text-[10px] font-bold uppercase tracking-[0.2em]">
        <div>© 2026 THE CLEVER CULT. ALL RIGHTS RESERVED.</div>
        <div className="flex gap-8">
          <a href="#" className="hover:text-slate-400">Privacy Policy</a>
          <a href="#" className="hover:text-slate-400">Terms of Service</a>
          <a href="#" className="hover:text-slate-400">Cookies</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
