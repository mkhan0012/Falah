import { Metadata } from "next";
import { insights } from "@/data/insights";
import InsightsList from "./InsightsList";
import { Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Insights & Strategy | Vyoma Media",
  description: "Editorial perspectives on brand positioning, conversion web architecture, Generative Engine Optimization, and digital distribution from Vyoma Media.",
  alternates: {
    canonical: "https://vyomamedia.com/insights",
  },
};

export default function InsightsPage() {
  return (
    <main className="pt-36 md:pt-44 pb-32 min-h-screen bg-cloud-white text-deep-atmosphere selection:bg-sky-slate selection:text-white relative overflow-hidden font-sans">
      {/* Subtle atmospheric horizon glows */}
      <div className="pointer-events-none absolute left-1/4 top-24 w-[600px] h-[350px] bg-sky-slate/10 blur-[150px] rounded-full" />
      <div className="pointer-events-none absolute right-10 bottom-1/3 w-[450px] h-[450px] bg-mist-blue/40 blur-[140px] rounded-full" />

      <div className="container mx-auto px-5 sm:px-6 md:px-12 max-w-[1360px] mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-sky-slate/30 text-[11px] font-mono text-sky-slate mb-6 uppercase tracking-widest font-semibold shadow-xs">
          <Sparkles size={12} />
          <span>STRATEGIC PERSPECTIVES</span>
        </div>

        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display font-bold tracking-tight mb-8 uppercase text-deep-atmosphere leading-[0.95]">
          THINKING &<br />
          INSIGHTS<span className="text-sky-slate">.</span>
        </h1>
        
        <p className="text-lg sm:text-2xl text-graphite/80 max-w-3xl font-sans leading-relaxed">
          Deep dives on modern brand systems, high-converting Next.js architecture, and the strategic shift toward owned organic visibility.
        </p>
      </div>

      <div className="relative z-10">
        <InsightsList insights={insights} />
      </div>
    </main>
  );
}
