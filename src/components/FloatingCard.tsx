import React from 'react';
import { motion } from 'motion/react';

const FloatingCard = ({ children, className, delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
    className={`absolute glass p-4 rounded-xl animate-float shadow-2xl ${className}`}
    style={{ animationDelay: `${delay}s` }}
  >
    {children}
  </motion.div>
);

export default FloatingCard;
