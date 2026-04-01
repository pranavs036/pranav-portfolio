"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, Briefcase, Zap, Phone, GraduationCap } from "lucide-react";
import { LinkedInIcon } from "./icons";

function SectionHeading({ label, title, description }: { label: string; title: string; description: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="mb-16 md:mb-20"
    >
      <span className="inline-block text-xs font-heading font-semibold uppercase tracking-[0.2em] text-text-muted mb-4">
        {label}
      </span>
      <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
        {title}
      </h2>
      <p className="text-text-secondary text-lg max-w-2xl">{description}</p>
    </motion.div>
  );
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="about" className="relative px-6 py-24 md:py-32">
      <div className="relative max-w-6xl mx-auto">
        <SectionHeading
          label="About"
          title="Background"
          description="Product manager turned builder. I've shipped at scale and now I build independently."
        />

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {/* Bento grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12">
            {/* Main bio card */}
            <div className="md:col-span-2 rounded-2xl border border-border bg-bg-card p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-text-primary flex items-center justify-center text-bg-primary font-heading font-bold text-xl">
                  PS
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-text-primary">Pranav Sharma</h3>
                  <p className="text-sm text-text-secondary">Product &amp; Engineering</p>
                </div>
              </div>

              <p className="text-text-secondary leading-relaxed mb-4">
                B.Tech in Information Technology from <strong className="text-text-primary">Netaji Subhas University of Technology</strong>, Delhi.
                Started as an iOS engineer at <strong className="text-text-primary">Blinkit</strong>, building native Swift/UIKit flows.
                Then joined the founding team of <strong className="text-text-primary">Bistro</strong> (Blinkit&apos;s 10-min food delivery) as one of 2 PMs &mdash;
                scaled it from zero to 3 lakh monthly orders in six months across 15 micro-kitchens.
              </p>
              <p className="text-text-secondary leading-relaxed mb-4">
                Went on to ship retention and conversion systems at <strong className="text-text-primary">Swish</strong>,
                and currently own the Social Advocacy module at <strong className="text-text-primary">Sprinklr</strong>, Gurgaon &mdash;
                driving enterprise features for global clients. On the side, I build independent products
                focused on how brands adapt to the shift in search and customer engagement.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {["Product Management", "iOS (Swift)", "Full Stack", "SaaS", "Ecommerce", "Growth", "Operations"].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-lg text-xs font-medium bg-bg-secondary border border-border text-text-secondary">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Connect card */}
            <div className="rounded-2xl border border-border bg-bg-card p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <h4 className="font-heading text-sm font-semibold text-text-muted uppercase tracking-wider mb-6">Connect</h4>
                <div className="space-y-3">
                  <a
                    href="https://linkedin.com/in/pranav-sharma-nsut/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl border border-border hover:border-border-light hover:bg-bg-secondary transition-all duration-200 cursor-pointer group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#0A66C2]/10 flex items-center justify-center group-hover:bg-[#0A66C2]/20 transition-colors">
                      <LinkedInIcon size={16} className="text-[#0A66C2]" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-text-primary">LinkedIn</div>
                      <div className="text-xs text-text-muted">/in/pranav-sharma-nsut</div>
                    </div>
                  </a>

                  <a
                    href="mailto:pranavs036@gmail.com"
                    className="flex items-center gap-3 p-3 rounded-xl border border-border hover:border-border-light hover:bg-bg-secondary transition-all duration-200 cursor-pointer group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-green/10 flex items-center justify-center group-hover:bg-green/20 transition-colors">
                      <Mail size={16} className="text-green" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-text-primary">Email</div>
                      <div className="text-xs text-text-muted">pranavs036@gmail.com</div>
                    </div>
                  </a>

                  <a
                    href="tel:+918287610925"
                    className="flex items-center gap-3 p-3 rounded-xl border border-border hover:border-border-light hover:bg-bg-secondary transition-all duration-200 cursor-pointer group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <Phone size={16} className="text-accent" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-text-primary">Phone</div>
                      <div className="text-xs text-text-muted">+91 8287610925</div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2 mt-6 pt-4 border-t border-border">
                <MapPin size={14} className="text-text-muted" />
                <span className="text-xs text-text-muted">Delhi / Gurgaon, India</span>
              </div>
            </div>
          </div>

          {/* Experience timeline */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <div className="rounded-2xl border border-border bg-bg-card p-6">
              <div className="w-10 h-10 rounded-xl bg-bg-secondary border border-border flex items-center justify-center mb-4">
                <Briefcase size={18} className="text-text-secondary" />
              </div>
              <h4 className="font-heading text-base font-semibold text-text-primary mb-1">Sprinklr</h4>
              <p className="text-xs text-accent font-medium mb-2">APM &middot; 2025&ndash;Present</p>
              <p className="text-sm text-text-muted leading-relaxed">
                Owns roadmap for Social Advocacy. Shipped governance features for enterprise clients.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-bg-card p-6">
              <div className="w-10 h-10 rounded-xl bg-bg-secondary border border-border flex items-center justify-center mb-4">
                <Zap size={18} className="text-text-secondary" />
              </div>
              <h4 className="font-heading text-base font-semibold text-text-primary mb-1">Blinkit / Bistro</h4>
              <p className="text-xs text-accent font-medium mb-2">Founding PM + iOS Dev</p>
              <p className="text-sm text-text-muted leading-relaxed">
                Scaled 10-min food delivery from 0 to 3L orders/month. Built inventory &amp; order management across 15 kitchens.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-bg-card p-6">
              <div className="w-10 h-10 rounded-xl bg-bg-secondary border border-border flex items-center justify-center mb-4">
                <Briefcase size={18} className="text-text-secondary" />
              </div>
              <h4 className="font-heading text-base font-semibold text-text-primary mb-1">Swish</h4>
              <p className="text-xs text-accent font-medium mb-2">APM &middot; 2025</p>
              <p className="text-sm text-text-muted leading-relaxed">
                Shipped gamified retention (+6%), conversion optimization (+12%), and CRM integration.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-bg-card p-6">
              <div className="w-10 h-10 rounded-xl bg-bg-secondary border border-border flex items-center justify-center mb-4">
                <Zap size={18} className="text-text-secondary" />
              </div>
              <h4 className="font-heading text-base font-semibold text-text-primary mb-1">Independent</h4>
              <p className="text-xs text-accent font-medium mb-2">Builder &middot; Now</p>
              <p className="text-sm text-text-muted leading-relaxed">
                Building NorthStar and other tools at the intersection of commerce and conversational search.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
