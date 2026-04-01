"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 overflow-hidden">
      {/* Background graphic - abstract commerce/growth visual */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large faded chart/growth line */}
        <svg className="absolute right-[-10%] top-[15%] w-[60%] h-[60%] opacity-[0.04]" viewBox="0 0 400 300" fill="none">
          <path d="M20 280 L80 220 L140 240 L200 160 L260 180 L320 80 L380 40" stroke="#1C1917" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="380" cy="40" r="8" fill="#1C1917"/>
          <circle cx="320" cy="80" r="5" fill="#1C1917"/>
          <circle cx="260" cy="180" r="5" fill="#1C1917"/>
          <circle cx="200" cy="160" r="5" fill="#1C1917"/>
        </svg>
        {/* Abstract grid/shelf pattern suggesting retail/commerce */}
        <svg className="absolute left-[-5%] bottom-[10%] w-[40%] h-[40%] opacity-[0.03]" viewBox="0 0 200 200" fill="none">
          <rect x="10" y="10" width="50" height="50" rx="4" stroke="#1C1917" strokeWidth="2"/>
          <rect x="70" y="10" width="50" height="50" rx="4" stroke="#1C1917" strokeWidth="2"/>
          <rect x="130" y="10" width="50" height="50" rx="4" stroke="#1C1917" strokeWidth="2"/>
          <rect x="10" y="70" width="50" height="50" rx="4" stroke="#1C1917" strokeWidth="2"/>
          <rect x="70" y="70" width="50" height="50" rx="4" stroke="#1C1917" strokeWidth="2"/>
          <rect x="130" y="70" width="50" height="50" rx="4" stroke="#1C1917" strokeWidth="2"/>
          <rect x="10" y="130" width="50" height="50" rx="4" stroke="#1C1917" strokeWidth="2"/>
          <rect x="70" y="130" width="50" height="50" rx="4" stroke="#1C1917" strokeWidth="2"/>
          <rect x="130" y="130" width="50" height="50" rx="4" stroke="#1C1917" strokeWidth="2"/>
        </svg>
        {/* Subtle diagonal lines for texture */}
        <div className="absolute top-0 right-0 w-full h-full opacity-[0.015]" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 40px, #1C1917 40px, #1C1917 41px)',
        }} />
      </div>

      <div className="relative max-w-3xl mx-auto text-center z-10">
        {/* Name - bigger, with accent color */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-base sm:text-lg font-heading font-semibold text-accent tracking-wide uppercase mb-6"
        >
          Pranav Sharma
        </motion.p>

        {/* Main tagline - de-emphasize AI, focus on brands/commerce */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight mb-6 text-text-primary"
        >
          I build products that help brands grow and sell smarter.
        </motion.h1>

        {/* Supporting description - less AI-heavy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed mb-10"
        >
          From optimising how products get discovered in the age of agentic and conversational search to automating customer relations with agents &mdash; I design and ship tools at the intersection of technology and commerce.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-text-primary text-bg-primary font-heading font-semibold text-sm hover:bg-text-secondary transition-colors duration-200 cursor-pointer"
          >
            See my work
            <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform duration-200" />
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border-light text-text-secondary font-heading font-semibold text-sm hover:border-text-muted hover:text-text-primary transition-all duration-200 cursor-pointer"
          >
            About me
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={20} className="text-text-muted" />
        </motion.div>
      </motion.div>
    </section>
  );
}
