import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { insights } from "@/data/insights";
import FinalCta from "@/components/sections/FinalCta";

export const metadata: Metadata = {
  title: "Insights & Thinking | FALAH BRANDHOUSE",
  description: "Our thoughts on brand strategy, digital design, and SEO.",
};

export default function InsightsPage() {
  return (
    <>
      <main className="pt-32 pb-24 min-h-screen">
        <div className="container mx-auto px-6 md:px-12 mb-24">
          <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-serif tracking-tight mb-8">
            THINKING & <span className="text-foreground/40 italic">INSIGHTS</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/60 max-w-2xl font-light">
            Our perspective on building digital systems that perform.
          </p>
        </div>

        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
            {insights.map((insight) => (
              <Link 
                key={insight.slug} 
                href={`/insights/${insight.slug}`}
                className="group block"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm mb-6 bg-charcoal">
                  <Image
                    src={insight.heroImage}
                    alt={insight.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                
                <div className="flex gap-4 items-center text-xs font-bold tracking-wider text-foreground/50 mb-4 uppercase">
                  <span>{insight.category}</span>
                  <span className="w-1 h-1 bg-foreground/30 rounded-full" />
                  <span>{insight.date}</span>
                </div>
                
                <h3 className="text-2xl font-serif mb-4 group-hover:text-accent transition-colors">
                  {insight.title}
                </h3>
                
                <div className="flex items-center gap-2 text-sm font-bold text-accent opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  READ ARTICLE <ArrowUpRight size={16} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <FinalCta />
    </>
  );
}