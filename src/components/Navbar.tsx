"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-4 left-4 right-4 z-50 flex items-center justify-between px-6 py-3 rounded-2xl border transition-all duration-300 ${
          scrolled
            ? "bg-bg-primary/80 backdrop-blur-xl border-border-light shadow-lg shadow-black/20"
            : "bg-transparent border-transparent"
        }`}
      >
        <a href="#" className="font-heading font-bold text-lg tracking-tight cursor-pointer">
          <span className="text-accent-light">P</span>
          <span className="text-text-primary">ranav</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors duration-200 cursor-pointer"
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:hello@pranavsharma.dev"
            className="text-sm font-medium px-4 py-2 rounded-lg bg-accent/10 text-accent-light hover:bg-accent/20 border border-accent/20 transition-all duration-200 cursor-pointer"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-text-secondary hover:text-text-primary transition-colors cursor-pointer"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-4 right-4 z-50 bg-bg-card/95 backdrop-blur-xl border border-border-light rounded-2xl p-6 md:hidden shadow-2xl shadow-black/30"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-medium text-text-secondary hover:text-text-primary transition-colors duration-200 cursor-pointer py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="mailto:hello@pranavsharma.dev"
                className="text-sm font-medium px-4 py-3 rounded-lg bg-accent/10 text-accent-light hover:bg-accent/20 border border-accent/20 text-center transition-all duration-200 cursor-pointer"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
