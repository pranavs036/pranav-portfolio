"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Sparkles, Mic, BarChart3, Search, ShieldCheck, LineChart } from "lucide-react";
import { GitHubIcon } from "./icons";
import Image from "next/image";

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

function ScreenshotCarousel({ images }: { images: { src: string; alt: string }[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  return (
    <div className="relative">
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {images.map((img, i) => (
          <div key={i} className="flex-none w-[320px] sm:w-[400px] md:w-[480px] snap-start">
            <div className="screenshot-frame">
              {/* Browser chrome */}
              <div className="bg-bg-secondary/80 flex items-center gap-2 px-4 py-2.5 border-b border-border">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green/60" />
                </div>
                <div className="flex-1 mx-3">
                  <div className="bg-bg-primary/50 rounded-md px-3 py-1 text-[10px] text-text-muted text-center">
                    northstar.app
                  </div>
                </div>
              </div>
              <Image
                src={img.src}
                alt={img.alt}
                width={960}
                height={600}
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
      {/* Fade edges */}
      <div className="absolute top-0 right-0 bottom-4 w-16 bg-gradient-to-l from-bg-primary to-transparent pointer-events-none" />
    </div>
  );
}

function TechBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-md text-xs font-medium bg-bg-secondary border border-border text-text-secondary">
      {children}
    </span>
  );
}

function FeatureItem({ icon: Icon, title, desc }: { icon: React.ElementType; title: string; desc: string }) {
  return (
    <div className="flex gap-3">
      <div className="flex-none w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
        <Icon size={16} className="text-accent-light" />
      </div>
      <div>
        <h4 className="text-sm font-semibold text-text-primary mb-0.5">{title}</h4>
        <p className="text-xs text-text-muted leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function NorthStarProject() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const screenshots = [
    { src: "/screenshots/northstar/landing-hero.png", alt: "NorthStar landing page hero" },
    { src: "/screenshots/northstar/dashboard.png", alt: "NorthStar dashboard with brand analysis" },
    { src: "/screenshots/northstar/brand-scan.png", alt: "Brand scan detail view" },
    { src: "/screenshots/northstar/catalog.png", alt: "Product catalog management" },
    { src: "/screenshots/northstar/query-results.png", alt: "AI search query results" },
    { src: "/screenshots/northstar/dashboard-full.png", alt: "Full dashboard overview" },
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
      className="relative"
    >
      {/* Project card */}
      <div className="relative rounded-3xl border border-border bg-bg-card/50 backdrop-blur-sm overflow-hidden">
        {/* Accent glow */}
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-accent/8 rounded-full blur-3xl pointer-events-none" />

        <div className="p-6 sm:p-8 md:p-10">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-accent-light flex items-center justify-center">
                  <Sparkles size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold">NorthStar</h3>
                  <p className="text-xs text-accent-light font-medium">GEO SKU Optimiser</p>
                </div>
              </div>
              <p className="text-text-secondary text-sm sm:text-base leading-relaxed max-w-xl">
                An AI ecommerce platform that helps brands get found in AI search engines.
                When consumers ask ChatGPT, Perplexity, or Google AI Overviews for product recommendations,
                NorthStar ensures your brand appears in those answers.
              </p>
            </div>
            <div className="flex gap-2 flex-shrink-0">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-green/10 border border-green/20 text-green-light text-xs font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-green" />
                Live
              </span>
            </div>
          </div>

          {/* Screenshots carousel */}
          <div className="mb-8">
            <ScreenshotCarousel images={screenshots} />
          </div>

          {/* Features grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <FeatureItem
              icon={Search}
              title="AI Search Monitoring"
              desc="Track brand visibility across ChatGPT, Perplexity, and Google AI Overviews"
            />
            <FeatureItem
              icon={BarChart3}
              title="Brand Analysis"
              desc="Comprehensive scoring for awareness, category ownership, and intent matching"
            />
            <FeatureItem
              icon={ShieldCheck}
              title="SKU Audit System"
              desc="Automated catalogue auditing against AI search engine recommendations"
            />
            <FeatureItem
              icon={LineChart}
              title="Trend Analytics"
              desc="Historical visibility tracking with competitive benchmarking"
            />
          </div>

          {/* Tech stack + links */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-border">
            <div className="flex flex-wrap gap-2">
              <TechBadge>Next.js</TechBadge>
              <TechBadge>TypeScript</TechBadge>
              <TechBadge>Tailwind CSS</TechBadge>
              <TechBadge>Supabase</TechBadge>
              <TechBadge>OpenAI API</TechBadge>
              <TechBadge>Python</TechBadge>
            </div>
            <div className="flex gap-3">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent/10 border border-accent/20 text-accent-light text-sm font-medium hover:bg-accent/20 transition-colors duration-200 cursor-pointer"
              >
                <ExternalLink size={14} />
                Visit Site
              </a>
              <a
                href="https://github.com/pranavsharma"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border-light text-text-secondary text-sm font-medium hover:border-accent/30 hover:text-text-primary transition-all duration-200 cursor-pointer"
              >
                <GitHubIcon size={14} />
                Source
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function CRMProject() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.15 }}
      className="relative"
    >
      <div className="relative rounded-3xl border border-border bg-bg-card/50 backdrop-blur-sm overflow-hidden">
        {/* Green accent glow */}
        <div className="absolute -top-32 -left-32 w-64 h-64 bg-green/8 rounded-full blur-3xl pointer-events-none" />

        <div className="p-6 sm:p-8 md:p-10">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green to-green-light flex items-center justify-center">
                  <Mic size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold">AI CRM Voice Agent</h3>
                  <p className="text-xs text-green-light font-medium">Intelligent Customer Outreach</p>
                </div>
              </div>
              <p className="text-text-secondary text-sm sm:text-base leading-relaxed max-w-xl">
                An AI-powered voice agent that automatically reaches out to customers who rated products low
                or tried a new SKU. It conducts natural phone conversations, gathers feedback, and
                generates structured analysis summaries for the CRM team.
              </p>
            </div>
            <div className="flex gap-2 flex-shrink-0">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-accent/10 border border-accent/20 text-accent-light text-xs font-semibold">
                In Development
              </span>
            </div>
          </div>

          {/* Mockup: Figma-style design preview */}
          <div className="mb-8">
            <CRMMockup />
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            <FeatureItem
              icon={Mic}
              title="Natural Voice Calls"
              desc="AI agent conducts human-like phone conversations with customers"
            />
            <FeatureItem
              icon={BarChart3}
              title="Sentiment Analysis"
              desc="Real-time analysis of customer sentiment during calls"
            />
            <FeatureItem
              icon={LineChart}
              title="CRM Integration"
              desc="Automatic call summaries and action items pushed to your CRM"
            />
          </div>

          {/* Tech stack + links */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-border">
            <div className="flex flex-wrap gap-2">
              <TechBadge>Python</TechBadge>
              <TechBadge>FastAPI</TechBadge>
              <TechBadge>Twilio</TechBadge>
              <TechBadge>OpenAI Whisper</TechBadge>
              <TechBadge>LangChain</TechBadge>
              <TechBadge>React</TechBadge>
            </div>
            <div className="flex gap-3">
              <a
                href="https://github.com/pranavsharma"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border-light text-text-secondary text-sm font-medium hover:border-green/30 hover:text-text-primary transition-all duration-200 cursor-pointer"
              >
                <GitHubIcon size={14} />
                Source
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function CRMMockup() {
  return (
    <div className="relative rounded-2xl border border-border bg-bg-secondary/50 overflow-hidden">
      {/* Figma-style top bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-bg-primary/60 border-b border-border">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-green/20 border border-green/30" />
          <span className="text-[10px] text-text-muted font-medium">AI CRM Voice Agent - Dashboard Mockup</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[10px] text-text-muted">100%</span>
          <div className="flex -space-x-1.5">
            <div className="w-5 h-5 rounded-full bg-accent/30 border-2 border-bg-primary" />
            <div className="w-5 h-5 rounded-full bg-green/30 border-2 border-bg-primary" />
          </div>
        </div>
      </div>

      {/* Mockup content */}
      <div className="p-6 sm:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left sidebar - Call Queue */}
          <div className="lg:col-span-1 space-y-4">
            <div className="rounded-xl border border-border bg-bg-card p-4">
              <h4 className="text-xs font-heading font-semibold text-text-secondary uppercase tracking-wider mb-3">Call Queue</h4>
              {[
                { name: "Sarah Chen", reason: "Low rating (2/5)", sku: "Premium Moisturiser", status: "pending", sentiment: null },
                { name: "Raj Patel", reason: "New SKU trial", sku: "Anti-Aging Serum", status: "in-call", sentiment: "positive" },
                { name: "Emma Wilson", reason: "Low rating (1/5)", sku: "Night Repair Cream", status: "completed", sentiment: "negative" },
              ].map((call, i) => (
                <div key={i} className={`p-3 rounded-lg border mb-2 last:mb-0 ${
                  call.status === "in-call" ? "border-green/30 bg-green/5" :
                  call.status === "completed" ? "border-border bg-bg-secondary/30" :
                  "border-border-light bg-bg-secondary/50"
                }`}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-text-primary">{call.name}</span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                      call.status === "in-call" ? "bg-green/15 text-green-light" :
                      call.status === "completed" ? "bg-text-muted/15 text-text-muted" :
                      "bg-accent/15 text-accent-light"
                    }`}>
                      {call.status === "in-call" ? "On Call" : call.status === "completed" ? "Done" : "Queued"}
                    </span>
                  </div>
                  <p className="text-[11px] text-text-muted">{call.reason}</p>
                  <p className="text-[11px] text-text-muted">{call.sku}</p>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-border bg-bg-card p-3 text-center">
                <div className="text-2xl font-heading font-bold text-green-light">24</div>
                <div className="text-[10px] text-text-muted mt-0.5">Calls Today</div>
              </div>
              <div className="rounded-xl border border-border bg-bg-card p-3 text-center">
                <div className="text-2xl font-heading font-bold text-accent-light">87%</div>
                <div className="text-[10px] text-text-muted mt-0.5">Completion</div>
              </div>
            </div>
          </div>

          {/* Main area - Active Call */}
          <div className="lg:col-span-2 space-y-4">
            {/* Active call display */}
            <div className="rounded-xl border border-green/20 bg-bg-card p-5">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green/15 flex items-center justify-center">
                    <Mic size={18} className="text-green-light" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-text-primary">Active Call - Raj Patel</div>
                    <div className="text-xs text-text-muted">Duration: 2:34 | Anti-Aging Serum</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {/* Audio waveform visualization */}
                  <div className="flex items-end gap-0.5 h-6">
                    {[3, 5, 8, 4, 7, 5, 9, 3, 6, 4, 8, 5, 7, 3, 6, 8, 4, 5, 7, 3].map((h, i) => (
                      <div
                        key={i}
                        className="w-0.5 bg-green-light/60 rounded-full"
                        style={{
                          height: `${h * 2.5}px`,
                          opacity: 0.4 + (h / 10) * 0.6,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Live transcript */}
              <div className="bg-bg-primary/50 rounded-lg p-4 max-h-48 overflow-y-auto">
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-green-light text-xs font-medium">AI Agent</span>
                    <p className="text-text-secondary mt-0.5">Hi Raj, this is calling from BrandCo. I see you recently tried our Anti-Aging Serum. How has your experience been so far?</p>
                  </div>
                  <div>
                    <span className="text-accent-light text-xs font-medium">Raj Patel</span>
                    <p className="text-text-secondary mt-0.5">Oh yes! I actually really like it. The texture is smooth and I noticed a difference after about a week.</p>
                  </div>
                  <div>
                    <span className="text-green-light text-xs font-medium">AI Agent</span>
                    <p className="text-text-secondary mt-0.5">That&apos;s wonderful to hear! Would you say it met your expectations compared to what you saw online?</p>
                  </div>
                </div>
              </div>

              {/* Sentiment bar */}
              <div className="flex items-center gap-3 mt-4">
                <span className="text-xs text-text-muted">Sentiment</span>
                <div className="flex-1 h-2 bg-bg-primary rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-gradient-to-r from-green to-green-light rounded-full" />
                </div>
                <span className="text-xs font-medium text-green-light">Positive</span>
              </div>
            </div>

            {/* Analysis summary */}
            <div className="rounded-xl border border-border bg-bg-card p-5">
              <h4 className="text-xs font-heading font-semibold text-text-secondary uppercase tracking-wider mb-3">AI Analysis Summary</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <div className="text-xs text-text-muted">Key Themes</div>
                  <div className="flex flex-wrap gap-1">
                    {["Texture", "Efficacy", "Packaging"].map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded text-[10px] bg-accent/10 text-accent-light border border-accent/20">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-xs text-text-muted">Recommendation</div>
                  <p className="text-xs text-text-secondary">Likely to repurchase. Suggest cross-sell with complementary serum.</p>
                </div>
                <div className="space-y-2">
                  <div className="text-xs text-text-muted">Action Items</div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5">
                      <div className="w-1 h-1 rounded-full bg-green" />
                      <span className="text-[11px] text-text-secondary">Send follow-up email</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-1 h-1 rounded-full bg-green" />
                      <span className="text-[11px] text-text-secondary">Add to loyalty program</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-1 h-1 rounded-full bg-accent" />
                      <span className="text-[11px] text-text-secondary">Flag for review campaign</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative px-6 py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="Work"
          title="Featured Projects"
          description="Products I've designed and built from the ground up, solving real problems with AI."
        />

        <div className="space-y-12 md:space-y-16">
          <NorthStarProject />
          <CRMProject />
        </div>
      </div>
    </section>
  );
}
