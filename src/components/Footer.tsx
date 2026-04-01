"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, ArrowUpRight } from "lucide-react";
import { LinkedInIcon } from "./icons";

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <footer id="contact" className="relative px-6 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        {/* CTA section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Let&apos;s Build Something Together
          </h2>
          <p className="text-text-secondary text-lg max-w-xl mx-auto mb-8">
            Interested in collaborating on AI products, or just want to chat about the future of AI in commerce?
          </p>
          <a
            href="mailto:hello@pranavsharma.dev"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-text-primary text-bg-primary font-heading font-semibold hover:bg-text-secondary transition-colors duration-200 cursor-pointer"
          >
            Say Hello
            <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </a>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-text-muted">
              Pranav Sharma
            </p>

            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com/in/pranavsharma"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-text-muted hover:text-[#0A66C2] hover:bg-[#0A66C2]/10 transition-all duration-200 cursor-pointer"
                aria-label="LinkedIn profile"
              >
                <LinkedInIcon size={18} />
              </a>
              <a
                href="mailto:hello@pranavsharma.dev"
                className="p-2 rounded-lg text-text-muted hover:text-green hover:bg-green/10 transition-all duration-200 cursor-pointer"
                aria-label="Send email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
