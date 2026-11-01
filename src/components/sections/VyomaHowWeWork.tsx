"use client";

import { Compass, Palette, Network, CheckCircle2 } from "lucide-react";

const processSteps = [
  {
    step: "01",
    title: "Strategy First",
    subtitle: "We study real search demand, define positioning, and agree on revenue metrics.",
    icon: Compass,
    description:
      "We don’t guess. We study your market, your competitors, and what people actually search for, so we know where demand already exists. Then we set your positioning, the one idea that makes you different. We also agree on what a “qualified lead” means before any campaign runs, so your marketing is judged on enquiries and revenue, not clicks.",
    outcomes: [
      "Real competitor search demand audit",
      "Defensible brand positioning statement",
      "Pre-agreed qualified enquiry metrics",
    ],
  },
  {
    step: "02",
    title: "Design Matters",
    subtitle: "Instant visual credibility engineered for sector-specific psychology.",
    icon: Palette,
    description:
      "People judge credibility in seconds, before reading a word. We build premium visual identities and websites that signal you are careful and capable: calm and clear for healthcare, aspirational for property, sharp for industry, bold for politics and film.",
    outcomes: [
      "Calm & clear systems for healthcare",
      "Aspirational luxury layouts for real estate",
      "Engineering precision for industry & B2B",
    ],
  },
  {
    step: "03",
    title: "Systems Over Tactics",
    subtitle: "Building compounding assets instead of chasing short-lived virality.",
    icon: Network,
    description:
      "A viral post is a tactic. A search presence, a content library, and a fast, well-tracked website are systems. We set up tracking so you always see what is working, cut what isn’t, and put more into what is.",
    outcomes: [
      "Durable organic search footprint",
      "Sub-second Core Web Vitals performance",
      "Closed-loop enquiry source tracking",
    ],
  },
];

export default function VyomaHowWeWork() {
  return (
    <section className="relative py-24 sm:py-32 bg-[#F1F3F1] border-b border-[#7899B0]/25 overflow-hidden font-sans">
      <div className="container mx-auto px-5 sm:px-6 md:px-12 max-w-[1360px] relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#7899B0]/30 text-xs font-mono uppercase tracking-widest text-[#172B3A] font-semibold shadow-sm">
            <span>HOW WE WORK</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-[#172B3A] leading-tight">
            Strategy first. Design that earns trust.{" "}
            <span className="text-[#7899B0]">Systems that compound.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#30383D] leading-relaxed font-sans">
            Our delivery methodology avoids bloated agency layers. You work directly with the senior strategists, designers, and engineers executing the work.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {processSteps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.step}
                className="rounded-3xl bg-white border border-[#7899B0]/25 hover:border-[#172B3A] p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 group shadow-sm hover:shadow-[0_12px_36px_rgba(23,43,58,0.08)]"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-[#7899B0]/20">
                    <span className="text-2xl font-display font-black text-[#172B3A]">
                      {step.step}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-[#DCE6EB]/60 flex items-center justify-center text-[#172B3A] group-hover:bg-[#172B3A] group-hover:text-white transition-all duration-300">
                      <Icon size={22} />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-display font-bold text-[#172B3A] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm font-semibold text-[#7899B0] mb-4">
                      {step.subtitle}
                    </p>
                    <p className="text-sm text-[#30383D] leading-relaxed font-sans">
                      {step.description}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#7899B0]/20 space-y-2.5">
                  <span className="text-[10px] font-mono tracking-widest text-[#7899B0] uppercase font-bold block mb-1">
                    VERIFIED OUTCOMES
                  </span>
                  {step.outcomes.map((outcome) => (
                    <div key={outcome} className="flex items-center gap-2 text-xs text-[#30383D]">
                      <CheckCircle2 size={14} className="text-[#7899B0] shrink-0" />
                      <span>{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
