"use client";

import { Activity, Building2, Factory, ShoppingBag, Landmark, Film, ShieldCheck, Sparkles, ArrowUpRight } from "lucide-react";
import TransitionLink from "@/components/ui/TransitionLink";

const industries = [
  {
    id: "healthcare",
    name: "Healthcare",
    badge: "CLINICS & SPECIALISTS",
    icon: Activity,
    link: "/industries/healthcare",
    headline: "Patients search at anxious moments.",
    description:
      "We build content that informs and reassures without promising clinical outcomes, since healthcare advertising is strictly regulated, and we make consultation booking intuitive.",
    rules: "Medical ethics & clinic advertising regulations",
    speed: "Sub-second doctor directories & tele-consult flows",
  },
  {
    id: "real-estate",
    name: "Real Estate",
    badge: "DEVELOPERS & COMMUNITIES",
    icon: Building2,
    link: "/industries/real-estate",
    headline: "A home is bought as a future, not a floor plan.",
    description:
      "We tell that architectural story through search, imagery, and ultra-fast landing pages, planned strictly around RERA registration and disclosure norms.",
    rules: "RERA registration & mandatory disclosure compliance",
    speed: "Fast-loading 3D render & master plan galleries",
  },
  {
    id: "industrial-b2b",
    name: "Industrial & B2B",
    badge: "MANUFACTURERS & SUPPLIERS",
    icon: Factory,
    link: "/industries/manufacturing",
    headline: "Buyers research for weeks and decide as a committee.",
    description:
      "We build the engineering credibility, technical specification content, and search presence that make you the supplier enterprise procurement teams shortlist.",
    rules: "Technical specification accuracy & ISO traceability",
    speed: "Instant spec sheets & CAD/BOM download architecture",
  },
  {
    id: "consumer-brands",
    name: "Consumer Brands",
    badge: "D2C & RETAIL",
    icon: ShoppingBag,
    link: "/services/branding",
    headline: "Recognition that turns into repeat demand.",
    description:
      "We build recognition that turns into repeat demand, so your name feels familiar, discoverability is effortless, and the purchase feels natural.",
    rules: "Consumer protection & frictionless checkout clarity",
    speed: "Sub-second mobile performance & instant checkout",
  },
  {
    id: "politics",
    name: "Political & Public-Interest",
    badge: "CAMPAIGNS & CIVIC LEADERSHIP",
    icon: Landmark,
    link: "/contact",
    headline: "Truthful messaging built for intense public scrutiny.",
    description:
      "We build clear, truthful messaging and a strong digital presence, planned around Election Commission and platform rules, with your legal or compliance team approving what goes live.",
    rules: "Election Commission guidelines & verified transparency",
    speed: "High-concurrency traffic resilience during key addresses",
  },
  {
    id: "film",
    name: "Film & Entertainment",
    badge: "PRODUCTIONS & STUDIOS",
    icon: Film,
    link: "/contact",
    headline: "Anticipation from first poster to opening week.",
    description:
      "We build anticipation from the first poster reveal to opening week, then keep your search presence alive and discoverable long after theatrical release.",
    rules: "Asset security, leak prevention & timed multi-lingual drops",
    speed: "4K teaser embeds & viral ticket booking redirects",
  },
];

export default function VyomaIndustries() {
  return (
    <section className="relative py-24 sm:py-32 bg-[#F1F3F1] border-b border-[#7899B0]/25 overflow-hidden font-sans">
      <div className="container mx-auto px-5 sm:px-6 md:px-12 max-w-[1360px] relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#7899B0]/30 text-xs font-mono uppercase tracking-widest text-[#172B3A] font-semibold shadow-sm">
            <Sparkles size={13} className="text-[#D3A56C]" />
            <span>SECTOR-SPECIFIC EXPERTISE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-[#172B3A] leading-tight">
            Industries We Build For. <br />
            <span className="text-[#7899B0]">Different Rules. Same Commercial Rigor.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#30383D] leading-relaxed font-sans">
            Every sector has unique buyer psychology, regulatory restrictions, and conversion patterns. We understand the specific constraints of healthcare, real estate, B2B manufacturing, and public communication in Hyderabad and beyond.
          </p>
        </div>

        {/* 6 Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {industries.map((ind) => {
            const Icon = ind.icon;
            return (
              <TransitionLink
                key={ind.id}
                href={ind.link}
                className="group rounded-3xl bg-white border border-[#7899B0]/25 hover:border-[#172B3A] p-8 sm:p-9 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-[0_16px_40px_rgba(23,43,58,0.09)]"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-[#7899B0]/20">
                    <div className="w-12 h-12 rounded-2xl bg-[#DCE6EB]/60 flex items-center justify-center text-[#172B3A] group-hover:bg-[#172B3A] group-hover:text-white transition-all duration-300">
                      <Icon size={22} />
                    </div>
                    <span className="font-mono text-[10px] font-bold text-[#7899B0] uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#DCE6EB]/40 border border-[#7899B0]/20">
                      {ind.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-display font-bold text-[#172B3A] mb-2 group-hover:text-[#7899B0] transition-colors">
                      {ind.name}
                    </h3>
                    <h4 className="text-sm font-semibold text-[#30383D] mb-3">
                      {ind.headline}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#30383D]/80 leading-relaxed font-sans">
                      {ind.description}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#7899B0]/20 space-y-2">
                  <div className="flex items-center gap-2 text-xs text-[#172B3A] font-mono">
                    <ShieldCheck size={14} className="text-[#7899B0] shrink-0" />
                    <span className="text-[11px] truncate">{ind.rules}</span>
                  </div>
                  <div className="flex items-center justify-between pt-1">
                    <span className="text-[10px] font-mono uppercase text-[#7899B0] font-bold">
                      SECTOR DETAIL →
                    </span>
                    <ArrowUpRight
                      size={15}
                      className="text-[#7899B0] group-hover:text-[#172B3A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    />
                  </div>
                </div>
              </TransitionLink>
            );
          })}
        </div>
      </div>
    </section>
  );
}
