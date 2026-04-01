"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, Briefcase, GraduationCap, Zap } from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "./icons";

function SectionHeading({ label, title, description }: { label: string; title: string; description: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="text-center mb-16 md:mb-20"
    >
      <span className="inline-block text-xs font-heading font-semibold uppercase tracking-[0.2em] text-accent-light mb-4">
        {label}
      </span>
      <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
        {title}
      </h2>
      <p className="text-text-secondary text-lg max-w-2xl mx-auto">{description}</p>
    </motion.div>
  );
}

function StatCard({ value, label, delay }: { value: string; label: string; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay }}
      className="rounded-2xl border border-border bg-bg-card/50 p-6 text-center"
    >
      <div className="text-3xl sm:text-4xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-light to-green mb-1">
        {value}
      </div>
      <div className="text-sm text-text-muted">{label}</div>
    </motion.div>
  );
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="about" className="relative px-6 py-24 md:py-32">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <SectionHeading
          label="About"
          title="The Builder Behind the Products"
          description="Passionate about creating AI-powered tools that solve real business problems."
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
            <div className="md:col-span-2 rounded-2xl border border-border bg-bg-card/50 p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-green flex items-center justify-center text-white font-heading font-bold text-xl">
                  PS
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-text-primary">Pranav Sharma</h3>
                  <p className="text-sm text-text-secondary">AI & SaaS Builder</p>
                </div>
              </div>

              <p className="text-text-secondary leading-relaxed mb-6">
                I build products that sit at the intersection of artificial intelligence and business.
                My focus is on creating tools that help brands adapt to the AI-first future --
                from optimising product visibility in AI search engines to automating customer
                engagement with intelligent voice agents.
              </p>
              <p className="text-text-secondary leading-relaxed mb-6">
                I believe the best AI products are invisible -- they solve real problems so seamlessly
                that users forget there&apos;s complex technology behind them. Every product I build
                starts with a genuine pain point and works backwards to the simplest possible solution.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {["AI/ML", "Full Stack", "Product Design", "SaaS", "Ecommerce", "Voice AI", "NLP"].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-lg text-xs font-medium bg-bg-secondary border border-border text-text-secondary">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Social links card */}
            <div className="rounded-2xl border border-border bg-bg-card/50 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <h4 className="font-heading text-sm font-semibold text-text-muted uppercase tracking-wider mb-6">Connect</h4>
                <div className="space-y-3">
                  <a
                    href="https://linkedin.com/in/pranavsharma"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl border border-border hover:border-accent/30 hover:bg-bg-card-hover transition-all duration-200 cursor-pointer group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#0A66C2]/10 flex items-center justify-center group-hover:bg-[#0A66C2]/20 transition-colors">
                      <LinkedInIcon size={16} className="text-[#0A66C2]" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-text-primary">LinkedIn</div>
                      <div className="text-xs text-text-muted">/in/pranavsharma</div>
                    </div>
                  </a>

                  <a
                    href="https://github.com/pranavsharma"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl border border-border hover:border-accent/30 hover:bg-bg-card-hover transition-all duration-200 cursor-pointer group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                      <GitHubIcon size={16} className="text-text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-text-primary">GitHub</div>
                      <div className="text-xs text-text-muted">@pranavsharma</div>
                    </div>
                  </a>

                  <a
                    href="mailto:hello@pranavsharma.dev"
                    className="flex items-center gap-3 p-3 rounded-xl border border-border hover:border-green/30 hover:bg-bg-card-hover transition-all duration-200 cursor-pointer group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-green/10 flex items-center justify-center group-hover:bg-green/20 transition-colors">
                      <Mail size={16} className="text-green-light" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-text-primary">Email</div>
                      <div className="text-xs text-text-muted">Get in touch</div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2 mt-6 pt-4 border-t border-border">
                <MapPin size={14} className="text-text-muted" />
                <span className="text-xs text-text-muted">Building remotely</span>
              </div>
            </div>
          </div>

          {/* Experience highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12">
            <div className="rounded-2xl border border-border bg-bg-card/50 p-6">
              <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-4">
                <Briefcase size={18} className="text-accent-light" />
              </div>
              <h4 className="font-heading text-base font-semibold text-text-primary mb-2">Product Builder</h4>
              <p className="text-sm text-text-muted leading-relaxed">
                End-to-end product development from ideation to production. Shipped multiple AI-powered SaaS products.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-bg-card/50 p-6">
              <div className="w-10 h-10 rounded-xl bg-green/10 border border-green/20 flex items-center justify-center mb-4">
                <Zap size={18} className="text-green-light" />
              </div>
              <h4 className="font-heading text-base font-semibold text-text-primary mb-2">AI Engineer</h4>
              <p className="text-sm text-text-muted leading-relaxed">
                Deep experience with LLMs, voice AI, NLP, and building production AI systems that scale.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-bg-card/50 p-6">
              <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-4">
                <GraduationCap size={18} className="text-accent-light" />
              </div>
              <h4 className="font-heading text-base font-semibold text-text-primary mb-2">Continuous Learner</h4>
              <p className="text-sm text-text-muted leading-relaxed">
                Always exploring the cutting edge of AI research and applying it to real-world products.
              </p>
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard value="2+" delay={0} label="AI Products Shipped" />
            <StatCard value="10k+" delay={0.1} label="Lines of Code" />
            <StatCard value="3+" delay={0.2} label="AI APIs Integrated" />
            <StatCard value="24/7" delay={0.3} label="Always Building" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
