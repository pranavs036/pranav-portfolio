"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24">
      {/* Decorative gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-green/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green/20 bg-green/5 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green animate-pulse" />
          <span className="text-sm font-medium text-green-light">Building AI Products</span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-6"
        >
          <span className="block">Pranav</span>
          <span className="block mt-1">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-light via-accent to-green">
              Sharma
            </span>
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Crafting intelligent products at the intersection of{" "}
          <span className="text-accent-light font-medium">artificial intelligence</span> and{" "}
          <span className="text-green-light font-medium">commerce</span>.
          From AI-powered ecommerce optimisation to voice-driven CRM —
          building the tools that shape how brands connect with their customers.
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
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-white font-heading font-semibold text-sm hover:bg-accent-light transition-all duration-200 cursor-pointer shadow-lg shadow-accent/25"
          >
            View Projects
            <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform duration-200" />
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border-light text-text-secondary font-heading font-semibold text-sm hover:border-accent/40 hover:text-text-primary transition-all duration-200 cursor-pointer"
          >
            About Me
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
