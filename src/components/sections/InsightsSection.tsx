import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { insights } from "@/data/insights";

export default function InsightsSection() {
  const recentInsights = insights.slice(0, 2);

  return (
    <section className="py-24 md:py-32 bg-ivory text-graphite border-t border-warm-grey">
      <div className="container mx-auto px-6 md:px-[5vw]">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24 border-b border-warm-grey pb-12">
          <div>
            <p className="text-[10px] md:text-xs font-mono tracking-widest text-slate mb-8 uppercase">
              INSIGHTS
            </p>
            <h2 className="text-[8vw] md:text-[5vw] font-primary font-bold leading-[0.9] tracking-tight text-graphite">
              THINKING & <span className="text-slate">STRATEGY.</span>
            </h2>
          </div>
          <Link 
            href="/insights"
            className="flex items-center gap-2 text-xs font-mono font-bold text-graphite hover:text-vermilion transition-colors uppercase tracking-widest"
          >
            VIEW ALL ARTICLES <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 border-t border-warm-grey pt-12">
          {recentInsights.map((insight) => (
            <Link 
              key={insight.slug} 
              href={`/insights/${insight.slug}`}
              className="group block"
            >
              <div className="relative aspect-[16/10] overflow-hidden mb-6 bg-charcoal border border-warm-grey group-hover:border-graphite transition-colors">
                <Image
                  src={insight.heroImage}
                  alt={insight.title}
                  fill
                  className="object-cover grayscale opacity-90 transition-all duration-[1s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100"
                />
              </div>
              
              <div className="flex gap-4 items-center text-xs font-mono font-bold tracking-widest text-slate mb-4 uppercase">
                <span>{insight.category}</span>
                <span className="text-vermilion">/</span>
                <span>{insight.readingTime}</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-primary font-bold mb-6 group-hover:text-vermilion transition-colors leading-tight">
                {insight.title}
              </h3>
              
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-graphite uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                READ ARTICLE <ArrowUpRight size={16} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
