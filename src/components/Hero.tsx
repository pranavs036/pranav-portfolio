"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 overflow-hidden">
      {/* Background — large faded ecom keywords */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        {/* Scattered ecom words as texture */}
        <div className="absolute top-[12%] left-[5%] text-[8rem] sm:text-[12rem] font-heading font-bold text-text-primary opacity-[0.025] leading-none tracking-tighter">
          SEARCH
        </div>
        <div className="absolute top-[35%] right-[2%] text-[6rem] sm:text-[9rem] font-heading font-bold text-text-primary opacity-[0.02] leading-none tracking-tighter">
          CONVERT
        </div>
        <div className="absolute bottom-[18%] left-[8%] text-[7rem] sm:text-[10rem] font-heading font-bold text-text-primary opacity-[0.02] leading-none tracking-tighter">
          GROW
        </div>
        <div className="absolute bottom-[40%] right-[15%] text-[5rem] sm:text-[7rem] font-heading font-bold text-text-primary opacity-[0.018] leading-none tracking-tighter">
          DISCOVER
        </div>
        {/* Dot grid */}
        <div className="absolute top-0 right-0 w-full h-full opacity-[0.015]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #1C1917 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="relative max-w-4xl mx-auto text-left z-10">
        {/* Main tagline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight mb-8 text-text-primary"
        >
          I help ecom brands sell smarter.
        </motion.h1>

        {/* Longer supporting description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="max-w-2xl mb-12"
        >
          <p className="text-lg sm:text-xl text-text-secondary leading-relaxed mb-4">
            Consumers don&apos;t Google products anymore &mdash; they ask ChatGPT, Perplexity, and voice assistants. I build the tools that make sure your brand shows up in those answers.
          </p>
          <p className="text-lg sm:text-xl text-text-secondary leading-relaxed">
            From real-time product visibility audits across every major AI engine, to voice agents that call your customers and turn low ratings into actionable insights &mdash; I ship products that move the needle for ecom brands.
          </p>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-start gap-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-text-primary text-bg-primary font-heading font-semibold text-sm hover:bg-text-secondary transition-colors duration-200 cursor-pointer"
          >
            See my work
            <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform duration-200" />
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border border-border-light text-text-secondary font-heading font-semibold text-sm hover:border-text-muted hover:text-text-primary transition-all duration-200 cursor-pointer"
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
