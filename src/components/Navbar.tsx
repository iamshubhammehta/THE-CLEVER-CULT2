import React, { useState, useEffect } from 'react';
import { MessageSquare } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-linear-to-tr from-brand-orange to-brand-amber flex items-center justify-center font-display font-bold text-white shadow-[0_0_15px_rgba(249,115,22,0.4)] group-hover:scale-110 transition-transform">C</div>
          <span className="font-display font-bold text-xl tracking-tight text-white uppercase group-hover:text-brand-orange transition-colors">THE CLEVER CULT</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          <Link to="/" className={`hover:text-brand-orange transition-colors ${isHome ? 'text-brand-orange' : ''}`}>Home</Link>
          <Link to="/about" className={`hover:text-brand-orange transition-colors ${location.pathname === '/about' ? 'text-brand-orange' : ''}`}>AboutUs</Link>
          <Link to="/services" className={`hover:text-brand-orange transition-colors ${location.pathname === '/services' ? 'text-brand-orange' : ''}`}>Services</Link>
          <Link to="/careers" className={`hover:text-brand-orange transition-colors ${location.pathname === '/careers' ? 'text-brand-orange' : ''}`}>Careers</Link>
          {isHome && (
            <>
              <a href="#how-it-works" className="hover:text-brand-orange transition-colors">Process</a>
              <a href="#impact" className="hover:text-brand-orange transition-colors">Impact</a>
            </>
          )}
          <a href="#cta" className="glass px-5 py-2 rounded-full border border-slate-700 hover:bg-white/10 transition-colors">Contact Us</a>
        </div>
        
        <button className="md:hidden text-white italic">
           <MessageSquare size={24} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
