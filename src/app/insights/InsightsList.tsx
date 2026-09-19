"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Search } from "lucide-react";

type Insight = any;

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
    <div className="container mx-auto px-6 md:px-[5vw]">
      
      {/* Search & Filter */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-24 pb-12 border-b border-warm-grey">
        <div className="flex flex-wrap gap-4">
          {categories.map(cat => (
            <button 
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs font-mono tracking-widest uppercase px-3 py-1.5 border transition-colors ${
                activeCategory === cat 
                  ? 'bg-graphite text-ivory border-graphite' 
                  : 'text-slate border-transparent hover:border-warm-grey hover:text-graphite'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        
        <div className="relative w-full md:w-auto">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate" />
          <input 
            type="text" 
            placeholder="SEARCH FALAH INSIGHTS..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-80 bg-transparent border border-warm-grey pl-12 pr-4 py-3 font-mono text-xs tracking-widest text-graphite focus:outline-none focus:border-graphite transition-colors placeholder:text-slate"
          />
        </div>
      </div>

      {/* Grid */}
      {filteredInsights.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 mb-32">
          {filteredInsights.map((insight) => (
            <Link 
              key={insight.slug} 
              href={`/insights/${insight.slug}`}
              className="group block"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-warm-grey mb-8">
                <Image
                  src={insight.heroImage || '/images/mockups/placeholder.jpg'}
                  alt={insight.title}
                  fill
                  className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[1.03] grayscale hover:grayscale-0"
                />
              </div>
              
              <div className="flex gap-4 items-center text-xs font-mono font-bold tracking-wider text-slate mb-4 uppercase">
                <span>{insight.category}</span>
                <span className="w-1 h-1 bg-warm-grey rounded-full" />
                <span>{insight.date}</span>
              </div>
              
              <h3 className="text-3xl font-primary font-bold mb-6 text-graphite group-hover:text-vermilion transition-colors leading-tight">
                {insight.title}
              </h3>
              
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-graphite pt-4 relative w-fit">
                <span className="relative z-10">READ ARTICLE</span>
                <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform relative z-10" />
                <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-vermilion group-hover:w-full transition-all duration-500" />
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="py-32 text-center">
          <p className="text-xl font-mono text-slate">No insights found matching your search.</p>
          <button onClick={() => {setSearch(""); setActiveCategory("ALL");}} className="mt-8 text-xs font-mono font-bold text-vermilion border-b border-vermilion pb-1 tracking-widest uppercase">
            CLEAR SEARCH
          </button>
        </div>
      )}
    </div>
  );
}

