"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Search } from "lucide-react";
import clsx from "clsx";
import EmptyState from "@/components/ui/EmptyState";

type Insight = { 
  slug: string; 
  title: string; 
  category: string; 
  date: string; 
  heroImage?: string; 
  readTime?: string;
  excerpt?: string;
};

export default function InsightsList({ insights }: { insights: Insight[] }) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("ALL");

  const categories = ["ALL", "BRANDING", "WEBSITES", "SEO", "DIGITAL MARKETING", "SOCIAL MEDIA", "INDUSTRIES"];

  const filteredInsights = insights.filter(insight => {
    const matchesSearch = insight.title.toLowerCase().includes(search.toLowerCase()) || 
                          insight.category.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === "ALL" || insight.category.toUpperCase() === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto px-5 sm:px-6 md:px-12 max-w-[1360px]">
      
      {/* Search & Filter Toolbar */}
      <div className="flex flex-col lg:flex-row justify-between items-stretch lg:items-center gap-6 mb-16 pb-8 border-b border-mist-blue">
        <div className="flex flex-wrap gap-2 sm:gap-2.5">
          {categories.map(cat => (
            <button 
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={clsx(
                "text-xs font-mono tracking-wider uppercase px-4 py-2 rounded-full border transition-all",
                activeCategory === cat 
                  ? "bg-deep-atmosphere text-white border-deep-atmosphere font-bold shadow-xs" 
                  : "bg-white text-graphite/80 border-mist-blue hover:border-sky-slate/50 hover:text-deep-atmosphere"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
        
        <div className="relative w-full lg:w-80 shrink-0">
          <Search size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-graphite/50" />
          <input 
            type="text" 
            placeholder="Search insights..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white border border-mist-blue rounded-full pl-11 pr-4 py-2.5 font-sans text-xs text-deep-atmosphere placeholder-graphite/40 focus:outline-none focus:border-sky-slate shadow-xs transition-colors"
          />
        </div>
      </div>

      {/* Grid or Empty State */}
      {filteredInsights.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {filteredInsights.map((insight) => (
            <Link 
              key={insight.slug} 
              href={`/insights/${insight.slug}`}
              className="group rounded-3xl bg-white border border-mist-blue p-6 hover:border-sky-slate/50 shadow-xs hover:shadow-[0_12px_36px_rgba(23,43,58,0.06)] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-cloud-white mb-6 border border-mist-blue">
                  <Image
                    src={insight.heroImage || '/images/mockups/bharat.jpg'}
                    alt={insight.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-atmosphere/30 via-transparent to-transparent opacity-40" />
                </div>
                
                <div className="flex items-center gap-3 text-xs font-mono text-graphite/60 mb-3 uppercase tracking-wider">
                  <span className="text-sky-slate font-semibold">{insight.category}</span>
                  <span className="w-1 h-1 bg-mist-blue rounded-full" />
                  <span>{insight.date}</span>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-display font-bold text-deep-atmosphere group-hover:text-sky-slate transition-colors leading-snug mb-4">
                  {insight.title}
                </h3>
              </div>

              <div className="pt-4 border-t border-mist-blue flex items-center justify-between text-xs font-mono text-graphite/60 group-hover:text-deep-atmosphere transition-colors">
                <span>READ PERSPECTIVE</span>
                <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-sky-slate transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <EmptyState 
          title="No insights match your query"
          description="Try broadening your search term or exploring a different category filter above."
          onReset={() => {
            setSearch("");
            setActiveCategory("ALL");
          }}
          suggestions={["SEO", "Branding", "Websites", "Healthcare"]}
          onSelectSuggestion={(sug) => {
            setSearch(sug);
          }}
        />
      )}
    </div>
  );
}
