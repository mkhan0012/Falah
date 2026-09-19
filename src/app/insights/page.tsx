import { Metadata } from "next";
import { insights } from "@/data/insights";
import InsightsList from "./InsightsList";

export const metadata: Metadata = {
  title: "Insights | FALAH BRANDHOUSE",
  description: "Strategy, design, SEO, digital, and growth insights.",
};

export default function InsightsPage() {
  return (
    <>
      <main className="pt-40 pb-24 min-h-screen bg-ivory text-graphite">
        <div className="container mx-auto px-6 md:px-[5vw] mb-24">
          <p className="text-[10px] md:text-xs font-mono tracking-widest text-slate mb-8 uppercase">
            FALAH INSIGHTS
          </p>
          <h1 className="text-5xl md:text-8xl font-primary font-bold tracking-tight mb-8">
            THINKING &<br />INSIGHTS.
          </h1>
          <p className="text-xl md:text-2xl text-slate max-w-2xl font-primary">
            Our perspective on building digital systems that perform.
          </p>
        </div>

        <InsightsList insights={insights} />
      </main>
          </>
  );
}

