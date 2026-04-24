import React from 'react';

const StatCounter = ({ value, label, suffix = "" }: { value: string, label: string, suffix?: string }) => {
  return (
    <div className="text-center p-6 rounded-2xl bg-white/2 border border-white/5 hover:border-brand-orange/30 hover:neon-glow transition-all duration-500">
      <div className="text-4xl lg:text-5xl font-display font-bold text-white mb-2 underline decoration-brand-orange/20 decoration-4 underline-offset-4">
        {value}{suffix}
      </div>
      <div className="text-slate-500 text-xs font-semibold uppercase tracking-widest">{label}</div>
    </div>
  );
};

export default StatCounter;
