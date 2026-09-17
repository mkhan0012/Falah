import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { insights } from "@/data/insights";

export default function InsightsSection() {
  const recentInsights = insights.slice(0, 2);

  return (
    <section className="py-24 md:py-32 bg-background border-t border-foreground/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-serif">THINKING / INSIGHTS</h2>
          <Link 
            href="/insights"
            className="flex items-center gap-2 text-sm font-bold text-foreground/60 hover:text-accent transition-colors"
          >
            VIEW ALL ARTICLES <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {recentInsights.map((insight) => (
            <Link 
              key={insight.slug} 
              href={`/insights/${insight.slug}`}
              className="group block"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-sm mb-6 bg-charcoal">
                <Image
                  src={insight.heroImage}
                  alt={insight.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              <div className="flex gap-4 items-center text-sm font-bold tracking-wider text-foreground/50 mb-4 uppercase">
                <span>{insight.category}</span>
                <span className="w-1 h-1 bg-foreground/30 rounded-full" />
                <span>{insight.readingTime}</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-serif mb-4 group-hover:text-accent transition-colors">
                {insight.title}
              </h3>
              
              <div className="flex items-center gap-2 text-sm font-bold text-accent opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                READ ARTICLE <ArrowUpRight size={16} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}