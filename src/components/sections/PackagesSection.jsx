import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Palette,
  Globe,
  Share2,
  TrendingUp,
  Check,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  Clock,
  Layers,
} from 'lucide-react'
import { SectionHeading } from '../ui/SectionHeading'

const segments = [
  {
    id: 'branding',
    label: 'Branding & Identity',
    icon: Palette,
    summary: 'Visual identity systems, logos, brand guidelines, and design tokens.',
    packages: [
      {
        id: 'brand-starter',
        name: 'Brand Foundation',
        badge: 'Seed & Early Stage',
        price: '₹45,000',
        period: 'one-time investment',
        tagline: 'Core visual identity to launch your venture with credibility and distinction.',
        popular: false,
        features: [
          'Primary & Secondary Logo System (SVG, PNG, EPS)',
          'Carefully Curated Color Palette & Typography Hierarchy',
          'Favicon & Social Media Profile Assets',
          'Essential Brand Style Guide (PDF, 15 Pages)',
          'Source Vector Files (Figma / Illustrator)',
          '7-Day Rapid Turnaround',
          '2 Revision Sprints Included',
        ],
      },
      {
        id: 'brand-system',
        name: 'Complete Brand System',
        badge: 'Most Popular',
        price: '₹95,000',
        period: 'one-time investment',
        tagline: 'Comprehensive visual architecture and guidelines for fast-growing companies.',
        popular: true,
        features: [
          'Full Logo Suite with Submarks & Monogram Variations',
          'Complete Design Tokens System (Figma Component Library)',
          'Custom Iconography Set & Graphic Patterns',
          'Marketing Collateral Suite (Pitch Deck Template, Letterhead, Business Cards)',
          'Social Media Launch Kit (10 Templates for Figma)',
          'Comprehensive 35-Page Brand Guidelines Manual',
          '14-Day Delivery with Direct Director Sync',
          'Unlimited Revisions during active design phase',
        ],
      },
      {
        id: 'brand-enterprise',
        name: 'Enterprise Rebrand',
        badge: 'Scale & Redesign',
        price: '₹1,80,000',
        period: 'one-time investment',
        tagline: 'Strategic repositioning and category-defining visual overhaul for market leaders.',
        popular: false,
        features: [
          'Market Positioning Audit & Competitor Visual Differentiation',
          '3D Animated Brand Mark & Video Logo Stingers',
          'Comprehensive Multi-Platform Design System',
          'Packaging, Merchandise & Environmental Signage Guidelines',
          'Internal Brand Book & Culture Presentation Deck',
          'Employee Brand Guidelines & Template Ecosystem',
          'Dedicated Creative Director & Senior Brand Lead',
          'Executive Hand-off Workshop & 30-Day Transition Support',
        ],
      },
    ],
  },
  {
    id: 'web',
    label: 'Web & 3D Development',
    icon: Globe,
    summary: 'High-converting landing pages, interactive 3D digital experiences, and web applications.',
    packages: [
      {
        id: 'web-landing',
        name: 'High-Converting Landing Page',
        badge: 'Launch Sprints',
        price: '₹65,000',
        period: 'one-time investment',
        tagline: 'Meticulously crafted landing page engineered to turn cold visitors into high-value leads.',
        popular: false,
        features: [
          'Custom UX/UI Design in Figma (No generic templates)',
          'Front-End Engineering in React 19 / Next.js / Vite',
          'Ultra-Fast Loading: 95+ Mobile & Desktop Lighthouse Score',
          'Lead Capture Form & CRM / Zapier Integration',
          'On-Page Technical SEO & Social OpenGraph Tags',
          'Smooth Micro-Interactions & Framer Motion Animations',
          '10-Day Turnaround to Production',
          '30-Day Bug Warranty & Post-Launch Support',
        ],
      },
      {
        id: 'web-interactive',
        name: 'Interactive 3D Website',
        badge: 'Most Popular',
        price: '₹1,45,000',
        period: 'one-time investment',
        tagline: 'Award-winning multi-page web experience with immersive 3D canvas and WebGL accents.',
        popular: true,
        features: [
          '5–8 Custom-Designed Responsive Pages',
          'Interactive Three.js / WebGL Canvas Elements (Custom Meshes)',
          'Headless CMS Setup (Sanity / Strapi / MDX for easy edits)',
          'Advanced Scroll-Driven Timeline & GSAP Animations',
          'Full Responsive Engineering: Mobile, Tablet, Ultrawide',
          'Speed-Optimized Asset Pipelines & WebP Compression',
          '21-Day Turnaround with Staging Previews',
          'Comprehensive Analytics & Event Tracking Setup',
        ],
      },
      {
        id: 'web-app',
        name: 'Custom Web Application',
        badge: 'Complex Systems',
        price: '₹2,95,000',
        period: 'one-time investment',
        tagline: 'Full-stack bespoke web application or interactive product visualizer with high throughput.',
        popular: false,
        features: [
          'Bespoke 3D Product Visualizer or Custom Web Application',
          'Full-Stack Architecture: Next.js, Node.js API & Database',
          'Authentication, User Roles & Dashboard Interfaces',
          'Complex State Management & High-Frame-Rate Render Loop',
          'API Integrations, Payment Gateways & Webhooks',
          'Enterprise Security Hardening & Zero-Downtime Deployment',
          'Dedicated Tech Architect & Bi-Weekly Sprints',
          '60-Day Dedicated Post-Launch Support & Code Transfer',
        ],
      },
    ],
  },
  {
    id: 'social',
    label: 'Social Media & Content',
    icon: Share2,
    summary: 'Viral short-form reels, high-engagement carousels, and monthly social growth engines.',
    packages: [
      {
        id: 'social-starter',
        name: 'Social Ignition',
        badge: 'Consistency & Reach',
        price: '₹40,000',
        period: 'per month',
        tagline: 'Consistent, premium social presence to establish organic audience trust and brand authority.',
        popular: false,
        features: [
          '12 Custom-Branded Feed Posts & Carousels / mo',
          '4 High-Production Short-Form Vertical Reels / mo',
          'Hook Writing, Strategic Copywriting & Hashtag Stacks',
          'Monthly Content Calendar & Aesthetic Grid Planning',
          'Publishing & Schedule Automation (Instagram & LinkedIn)',
          'Monthly Performance Analytics & Growth Report',
          'Slack Channel with Content Lead',
        ],
      },
      {
        id: 'social-velocity',
        name: 'Content Velocity Engine',
        badge: 'Most Popular',
        price: '₹85,000',
        period: 'per month',
        tagline: 'Aggressive multi-platform content engine engineered for viral reach and follower conversion.',
        popular: true,
        features: [
          '24 Custom Posts, Infographics & Deep-Dive Carousels / mo',
          '10 4K Vertical Video Reels with Kinetic Typography & SFX',
          'Story Engagement Campaigns & Interactive Polls / Quizzes',
          'Repurposing Engine across Instagram, LinkedIn, YouTube Shorts, X',
          'Dedicated Video Editor & Motion Graphics Specialist',
          'Bi-Weekly Creative Brainstorms & Viral Hook Discovery',
          'Community Engagement & DM Reply Playbook',
          'Priority 24-Hour Revisions',
        ],
      },
      {
        id: 'social-scale',
        name: 'Omnichannel Domination',
        badge: 'Full Media Brand',
        price: '₹1,60,000',
        period: 'per month',
        tagline: 'Full media house capability for founders, leaders, and brands aiming for category monopoly.',
        popular: false,
        features: [
          'Daily Omnichannel Publishing (30+ Pieces / mo)',
          '20 Studio-Grade Vertical Video Reels / Shorts / TikToks',
          '2 Long-Form YouTube Videos (Scripting, Editing, Thumbnails)',
          'Ghostwritten Thought Leadership Articles for Founder LinkedIn / X',
          'Influencer Collaboration & Creator Outreach Management',
          'Dedicated Creative Director, Video Producer & Strategist',
          'Weekly Viral Trend Radar & Rapid Production Sprints',
          'Dedicated WhatsApp War Room & Real-Time Tracking',
        ],
      },
    ],
  },
  {
    id: 'performance',
    label: 'Performance & Paid Ads',
    icon: TrendingUp,
    summary: 'Precision-targeted Meta & Google ads, funnel conversion optimization, and organic SEO authority.',
    packages: [
      {
        id: 'perf-seo',
        name: 'Organic Search Authority',
        badge: 'Long-Term Inbound',
        price: '₹50,000',
        period: 'per month',
        tagline: 'Dominate high-intent search keywords and build a defensible moat of organic inbound traffic.',
        popular: false,
        features: [
          'Full Technical SEO Architecture & Core Web Vitals Audit',
          'High-Intent Keyword Map & Competitor Content Gap Analysis',
          '4 Long-Form SEO-Optimized Articles / mo (2,000+ words each)',
          'Schema Markup, Internal Linking & Meta Optimization',
          'High-Authority Domain Inbound Link Acquisition Strategy',
          'Real-Time Google Search Console & Keyword Ranking Dashboard',
          'Monthly Strategy Call & Keyword Velocity Updates',
        ],
      },
      {
        id: 'perf-ads',
        name: 'Paid Acquisition Engine',
        badge: 'Most Popular',
        price: '₹80,000',
        period: 'per month + ad spend',
        tagline: 'High-ROAS paid advertising across Meta & Google with constant creative testing cycles.',
        popular: true,
        features: [
          'Full Paid Ad Management across Meta (Instagram/Facebook) & Google',
          '15 High-Converting Ad Creatives & Video Variations / mo',
          'Audience Persona Segmentation & Lookalike Modeling',
          'Landing Page Conversion Rate Optimization (CRO) Audit',
          'Dynamic Retargeting Funnel & Cart Abandonment Campaigns',
          'Real-Time Attribution Setup (Meta CAPI, GA4, GTM)',
          'Dedicated Senior Media Buyer with $5M+ Proven Track Record',
          'Weekly ROAS & CAC Performance Dashboard',
        ],
      },
      {
        id: 'perf-growth',
        name: 'Full-Funnel Growth Suite',
        badge: 'Scale Multiplier',
        price: '₹1,50,000',
        period: 'per month + ad spend',
        tagline: 'Unified paid media, organic SEO, and aggressive conversion rate optimization to scale revenue.',
        popular: false,
        features: [
          'Omnichannel Paid Media: Meta, Google, YouTube & LinkedIn Ads',
          '30+ High-Performance Static & Video Ad Creatives / mo',
          'Full Technical & Content SEO Program (8 Articles / mo)',
          'Weekly A/B Split Testing on Core Conversion Funnels',
          'Custom Attribution Modeling & Cohort LTV Analytics',
          'Direct Access to Senior Growth Strategist & Media Buyer',
          'Bi-Weekly Strategy Sync & Pipeline Forecasting',
          'Mutual Performance Benchmarks & Priority Queue',
        ],
      },
    ],
  },
]

export function PackagesSection() {
  const [activeSegmentId, setActiveSegmentId] = useState('branding')

  const activeSegment = segments.find((s) => s.id === activeSegmentId) || segments[0]

  return (
    <section id="pricing" className="section-padding relative overflow-hidden">
      {/* Background ambient accents */}
      <div
        className="absolute top-1/4 -left-40 w-[600px] h-[600px] rounded-full pointer-events-none opacity-[0.03]"
        style={{ background: 'radial-gradient(circle, #D4FF00, transparent 60%)' }}
      />
      <div
        className="absolute bottom-1/4 -right-40 w-[600px] h-[600px] rounded-full pointer-events-none opacity-[0.03]"
        style={{ background: 'radial-gradient(circle, #6366F1, transparent 60%)' }}
      />

      <div className="section-container relative z-10">
        <SectionHeading
          eyebrow="SEGMENTED PACKAGES // TARGETED SCOPE"
          title={
            <span>
              Specialized Plans for <span className="gradient-text">Every Discipline</span>
            </span>
          }
          description="Select your service focus below to explore dedicated tiers, concrete deliverables, and transparent pricing."
        />

        {/* Segment Selection Tabs */}
        <div className="mb-12 flex justify-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 rounded-2xl border border-white/10 bg-secondary/90 p-2 shadow-xl backdrop-blur-md">
            {segments.map((seg) => {
              const Icon = seg.icon
              const isActive = seg.id === activeSegmentId
              return (
                <button
                  type="button"
                  key={seg.id}
                  onClick={() => setActiveSegmentId(seg.id)}
                  className={`relative flex items-center gap-2.5 rounded-xl px-4 sm:px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                    isActive ? 'text-primary' : 'text-subtext hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeSegmentIndicator"
                      className="absolute inset-0 rounded-xl bg-accent shadow-[0_0_20px_rgba(212,255,0,0.35)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    <Icon size={15} />
                    <span>{seg.label}</span>
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Segment Summary Callout */}
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <p className="text-xs sm:text-sm text-slate-300 font-medium">
            {activeSegment.summary}
          </p>
        </div>

        {/* Segment Package Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSegment.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid gap-8 lg:grid-cols-3 lg:gap-8 items-stretch"
          >
            {activeSegment.packages.map((pkg, index) => {
              const isPopular = pkg.popular
              return (
                <div
                  key={pkg.id}
                  className={`relative flex flex-col justify-between rounded-3xl p-7 sm:p-8 transition-all duration-300 ${
                    isPopular
                      ? 'border-2 border-accent bg-[#0d0f14]/90 shadow-[0_0_36px_rgba(212,255,0,0.12)] lg:-translate-y-2'
                      : 'glass-card border border-white/10 hover:border-white/20'
                  }`}
                >
                  {/* Popular Floating Pill */}
                  {isPopular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span className="flex items-center gap-1.5 rounded-full bg-accent px-4 py-1 text-[11px] font-extrabold uppercase tracking-widest text-primary shadow-[0_0_16px_rgba(212,255,0,0.4)]">
                        <Sparkles size={12} className="fill-primary" />
                        {pkg.badge}
                      </span>
                    </div>
                  )}

                  <div>
                    {/* Header info */}
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-display text-xl font-bold text-white">{pkg.name}</h3>
                      {!isPopular && (
                        <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[11px] font-medium text-subtext">
                          {pkg.badge}
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-subtext leading-relaxed mb-6 min-h-[34px]">
                      {pkg.tagline}
                    </p>

                    {/* Price Tag */}
                    <div className="mb-7 flex items-baseline gap-2 border-b border-white/5 pb-6">
                      <span className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight tabular-nums">
                        {pkg.price}
                      </span>
                      <span className="text-xs text-subtext font-medium">{pkg.period}</span>
                    </div>

                    {/* Deliverables Checklist */}
                    <div className="space-y-3 mb-8">
                      <p className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-400">
                        Included Deliverables
                      </p>
                      <ul className="space-y-2.5">
                        {pkg.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2.5 text-xs text-slate-300 leading-normal">
                            <span
                              className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${
                                isPopular ? 'bg-accent/20 text-accent' : 'bg-white/10 text-slate-300'
                              }`}
                            >
                              <Check size={11} className="stroke-[3]" />
                            </span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card Action Button */}
                  <div>
                    <a
                      href="#contact"
                      className={`flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-xs font-display font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                        isPopular
                          ? 'bg-accent text-primary shadow-[0_0_20px_rgba(212,255,0,0.3)] hover:bg-[#e0ff33] hover:shadow-[0_0_28px_rgba(212,255,0,0.45)]'
                          : 'border border-white/15 bg-white/5 text-white hover:border-white/30 hover:bg-white/10'
                      }`}
                    >
                      <span>Choose {pkg.name.split(' ')[0]}</span>
                      <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              )
            })}
          </motion.div>
        </AnimatePresence>

        {/* 360 Custom Hybrid Package Banner */}
        <div className="mt-14 rounded-3xl border border-highlight/30 bg-gradient-to-r from-secondary/90 via-[#121422]/90 to-secondary/90 p-7 sm:p-9 shadow-xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-highlight/15 border border-highlight/30 px-3 py-1 text-[11px] font-semibold text-highlight uppercase tracking-wider">
                <Layers size={13} />
                <span>Multi-Segment Synergy</span>
              </div>
              <h4 className="font-display text-lg sm:text-xl font-bold text-white">
                Need a Cross-Discipline Custom Retainer?
              </h4>
              <p className="text-xs sm:text-sm text-subtext max-w-xl">
                Combine Branding, Web Development, and Paid Ads into an integrated monthly growth retainer with dedicated senior squad allocation and a bundled discount.
              </p>
            </div>
            <a
              href="#contact"
              className="shrink-0 flex items-center gap-2 rounded-xl border border-accent bg-accent px-6 py-3.5 text-xs font-display font-bold uppercase tracking-wider text-primary shadow-[0_0_20px_rgba(212,255,0,0.25)] hover:bg-[#e0ff33] hover:shadow-[0_0_30px_rgba(212,255,0,0.4)] transition-all cursor-pointer"
            >
              <span>Build Custom Scope</span>
              <ArrowRight size={15} />
            </a>
          </div>
        </div>

        {/* Trust Badges Strip */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-center text-xs text-subtext">
          <div className="flex items-center gap-2">
            <ShieldCheck size={16} className="text-accent" />
            <span>100% IP & Asset Ownership</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={16} className="text-accent" />
            <span>Guaranteed Production Timelines</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap size={16} className="text-accent" />
            <span>Dedicated Slack & WhatsApp Channel</span>
          </div>
        </div>
      </div>
    </section>
  )
}
