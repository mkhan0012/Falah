"use client";

import { useState } from "react";
import { Compass, Palette, Cpu, TrendingUp, Sparkles, Check, ArrowUpRight } from "lucide-react";
import TransitionLink from "@/components/ui/TransitionLink";

const capabilityCategories = [
  {
    id: "strategy",
    name: "Strategy",
    badge: "FOUNDATIONAL POSITIONING",
    icon: Compass,
    link: "/services/branding",
    items: [
      {
        title: "BRAND POSITIONING",
        desc: "The one commercial idea that sets you apart from everyone competing for the same customer.",
      },
      {
        title: "TONE OF VOICE",
        desc: "Language that sounds like a person people trust, used consistently everywhere.",
      },
      {
        title: "DIGITAL STRATEGY",
        desc: "The specific channels that matter for your commercial goals and budget, instead of trying to be everywhere.",
      },
      {
        title: "MARKET RESEARCH",
        desc: "Real evidence on your audience, competitors, and search demand behind every decision.",
      },
    ],
  },
  {
    id: "design",
    name: "Design",
    badge: "EXPERIENCE & IDENTITY",
    icon: Palette,
    link: "/services/branding",
    items: [
      {
        title: "VISUAL IDENTITY",
        desc: "Logo, monogram, colour palette, typography, and brand assets working as one coherent system.",
      },
      {
        title: "ART DIRECTION",
        desc: "One creative thread across your website, editorial publications, print, and physical environments.",
      },
      {
        title: "UI/UX DESIGN",
        desc: "Customer journeys designed so a visitor always knows what to do next without friction.",
      },
      {
        title: "WEB DESIGN",
        desc: "Swiss editorial grid website structure and calls to action built around the questions your buyers really ask.",
      },
    ],
  },
  {
    id: "technology",
    name: "Technology",
    badge: "NEXT.JS & PERFORMANCE",
    icon: Cpu,
    link: "/services/web-development",
    items: [
      {
        title: "FRONTEND DEVELOPMENT",
        desc: "Clean, responsive Next.js and TypeScript code that loads in under a second on all devices.",
      },
      {
        title: "HEADLESS CMS",
        desc: "A flexible content system your team can update (listings, doctor profiles, product specs) without slowing the site.",
      },
      {
        title: "WEB PERFORMANCE",
        desc: "Sub-second speed engineered to score 100/100 on Google’s Core Web Vitals benchmark.",
      },
      {
        title: "TECHNICAL SEO",
        desc: "Structured data schema, clean crawl architecture, and indexing pipelines so search engines and AI engines read you accurately.",
      },
    ],
  },
  {
    id: "growth",
    name: "Growth",
    badge: "COMPOUNDING EQUITY",
    icon: TrendingUp,
    link: "/services/seo",
    items: [
      {
        title: "CONTENT STRATEGY",
        desc: "Articles, clinical guides, property deep-dives, and technical specs that people actually search for.",
      },
      {
        title: "ORGANIC SEARCH",
        desc: "Technical and topical optimization so you rank on Google and get cited by generative AI tools.",
      },
      {
        title: "LOCAL SEO",
        desc: "Google Business Profile optimization and location prominence so nearby customers reach you directly.",
      },
      {
        title: "PERSONAL BRANDING",
        desc: "Thought leadership and LinkedIn positioning for founders, doctors, and specialists.",
      },
      {
        title: "DEVELOPER MARKETING",
        desc: "Technical documentation, SDK portals, and developer advocacy for software and API platforms.",
      },
    ],
  },
];

export default function VyomaCapabilities() {
  const [activeTab, setActiveTab] = useState("strategy");

  return (
    <section className="relative py-24 sm:py-32 bg-[#F1F3F1] border-b border-[#7899B0]/25 overflow-hidden font-sans">
      <div className="container mx-auto px-5 sm:px-6 md:px-12 max-w-[1360px] relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#7899B0]/30 text-xs font-mono uppercase tracking-widest text-[#172B3A] font-semibold shadow-sm">
            <Sparkles size={13} className="text-[#D3A56C]" />
            <span>FOUR CORE DISCIPLINES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-[#172B3A] leading-tight">
            Comprehensive Capabilities. <br />
            <span className="text-[#7899B0]">Unified Architecture.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#30383D] leading-relaxed font-sans">
            Every capability in our studio is designed to connect directly into the others. We build strategy that guides design, design that accelerates code, and code that powers organic visibility.
          </p>
        </div>

        {/* Desktop Category Tabs */}
        <div className="flex flex-wrap items-center gap-3 mb-10 pb-4 border-b border-[#7899B0]/20">
          {capabilityCategories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2.5 px-6 py-3 rounded-full font-mono text-xs font-bold uppercase tracking-wider transition-all ${
                  isActive
                    ? "bg-[#172B3A] text-white shadow-md"
                    : "bg-white text-[#30383D] border border-[#7899B0]/25 hover:border-[#172B3A]"
                }`}
              >
                <Icon size={15} className={isActive ? "text-[#7899B0]" : "text-[#7899B0]"} />
                <span>{cat.name}</span>
                <span className="text-[10px] opacity-70">({cat.items.length})</span>
              </button>
            );
          })}
        </div>

        {/* Active Discipline Content Panel */}
        {capabilityCategories
          .filter((cat) => cat.id === activeTab)
          .map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                className="rounded-3xl bg-white border border-[#7899B0]/25 p-8 sm:p-12 shadow-sm animate-in fade-in duration-300"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-8 border-b border-[#7899B0]/20 mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#DCE6EB]/60 flex items-center justify-center text-[#172B3A]">
                      <Icon size={24} />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono tracking-widest text-[#7899B0] uppercase font-bold">
                        {cat.badge}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#172B3A]">
                        {cat.name} Architecture
                      </h3>
                    </div>
                  </div>

                  <TransitionLink
                    href={cat.link}
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#172B3A] hover:text-[#7899B0] transition-colors"
                  >
                    <span>Explore {cat.name} Services</span>
                    <ArrowUpRight size={14} />
                  </TransitionLink>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {cat.items.map((item) => (
                    <div
                      key={item.title}
                      className="p-6 rounded-2xl bg-[#DCE6EB]/30 border border-[#7899B0]/20 hover:border-[#172B3A] transition-colors space-y-3"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#172B3A]" />
                        <h4 className="font-display font-bold text-sm tracking-wide text-[#172B3A] uppercase">
                          {item.title}
                        </h4>
                      </div>
                      <p className="text-xs sm:text-sm text-[#30383D] leading-relaxed font-sans">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
}
