"use client";

import { CheckCircle2, ShieldCheck, HeartPulse, Building2, Factory, Vote } from "lucide-react";

const audiences = [
  {
    role: "The Patient",
    action: "Before booking a consultation",
    context: "Facing anxiety and searching during vulnerable moments.",
    keyRequirement: "Needs reassurance, medical credibility, and transparent clinician profiles without exaggerated claims.",
    sectorTone: "Healthcare & Clinics → Reassurance",
    icon: HeartPulse,
  },
  {
    role: "The Family",
    action: "Before putting savings into a home",
    context: "Investing life savings into a future, not just a square-foot floor plan.",
    keyRequirement: "Demands architectural aspiration, RERA compliance transparency, and undeniable developer credibility.",
    sectorTone: "Real Estate & Luxury → Aspiration",
    icon: Building2,
  },
  {
    role: "The Purchasing Manager",
    action: "Before issuing a high-value purchase order",
    context: "Reporting to an executive procurement committee with zero tolerance for downtime.",
    keyRequirement: "Requires rigorous technical specifications, certifiable tolerances, and proof of industrial reliability.",
    sectorTone: "Industrial & B2B → Precision",
    icon: Factory,
  },
  {
    role: "The Discerning Consumer",
    action: "Before committing repeat loyalty",
    context: "Filtering through hundreds of commoditized digital advertisements.",
    keyRequirement: "Requires distinctive aesthetics, authentic brand conviction, and an effortless digital checkout.",
    sectorTone: "Consumer Brands → Recognition",
    icon: Vote,
  },
];

export default function VyomaTrustAudiences() {
  return (
    <section className="relative py-24 sm:py-32 bg-[#F1F3F1] border-b border-[#7899B0]/25 overflow-hidden font-sans">
      <div className="container mx-auto px-5 sm:px-6 md:px-12 max-w-[1360px] relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#7899B0]/30 text-xs font-mono uppercase tracking-widest text-[#172B3A] font-semibold shadow-sm">
            <span>MULTI-STAKEHOLDER GOVERNANCE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-[#172B3A] leading-tight">
            Whoever you’re trying to reach, they’re asking the same question:{" "}
            <span className="text-[#7899B0]">can I trust you?</span>
          </h2>

          <p className="text-base sm:text-lg text-[#30383D] leading-relaxed font-sans">
            And you are asking something equally vital: <strong className="text-[#172B3A]">will this studio truly understand my industry?</strong>
          </p>
        </div>

        {/* 4 Audience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {audiences.map((aud, idx) => {
            const Icon = aud.icon;
            return (
              <div
                key={aud.role}
                className="rounded-3xl bg-white border border-[#7899B0]/25 hover:border-[#172B3A] p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 group shadow-sm hover:shadow-[0_12px_36px_rgba(23,43,58,0.08)]"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-[#7899B0]/20">
                    <span className="text-xs font-mono font-bold text-[#172B3A]">
                      0{idx + 1}
                    </span>
                    <div className="w-8 h-8 rounded-xl bg-[#DCE6EB]/60 flex items-center justify-center text-[#172B3A]">
                      <Icon size={16} />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-display font-bold text-[#172B3A]">
                      {aud.role}
                    </h3>
                    <span className="text-xs font-mono text-[#7899B0] block mt-0.5">
                      {aud.action}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#30383D] leading-relaxed">
                    {aud.context}
                  </p>

                  <div className="p-3.5 rounded-2xl bg-[#DCE6EB]/40 border border-[#7899B0]/20 text-xs text-[#30383D] leading-relaxed">
                    <strong className="text-[#172B3A] block mb-1 font-mono uppercase text-[10px]">
                      DECISION CRITERIA:
                    </strong>
                    {aud.keyRequirement}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-[#7899B0]/20">
                  <span className="text-[11px] font-mono font-semibold text-[#172B3A]">
                    {aud.sectorTone}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="p-6 rounded-2xl bg-white border border-[#7899B0]/25 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#30383D] font-sans">
            <strong className="text-[#172B3A]">Different audiences make decisions differently.</strong> We adapt the creative tone, information hierarchy, and technical rigor to match how your specific market decides.
          </p>
          <span className="text-xs font-mono font-bold text-[#7899B0] uppercase shrink-0">
            HYDERABAD STUDIO
          </span>
        </div>
      </div>
    </section>
  );
}
