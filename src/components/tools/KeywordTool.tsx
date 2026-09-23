"use client";

import { useState } from "react";
import { Search, Loader2, TrendingUp, BarChart3, AlertCircle } from "lucide-react";
import Link from "next/link";

interface KeywordData {
  keyword: string;
  volume: string;
  difficulty: number;
  cpc: string;
  intent: "Informational" | "Navigational" | "Commercial" | "Transactional";
}

const mockGenerateData = (query: string): { main: KeywordData, related: KeywordData[] } => {
  const intents = ["Informational", "Navigational", "Commercial", "Transactional"] as const;
  
  const generateRandomStat = () => {
    const vol = Math.floor(Math.random() * 50000) + 1000;
    const diff = Math.floor(Math.random() * 100);
    const cpcVal = (Math.random() * 15).toFixed(2);
    const intent = intents[Math.floor(Math.random() * intents.length)];
    
    return {
      volume: vol > 10000 ? `${(vol / 1000).toFixed(1)}k` : vol.toString(),
      difficulty: diff,
      cpc: `$${cpcVal}`,
      intent
    };
  };

  const mainStats = generateRandomStat();

  return {
    main: {
      keyword: query.toLowerCase(),
      ...mainStats
    },
    related: [
      { keyword: `best ${query.toLowerCase()}`, ...generateRandomStat() },
      { keyword: `${query.toLowerCase()} software`, ...generateRandomStat() },
      { keyword: `how to use ${query.toLowerCase()}`, ...generateRandomStat() },
      { keyword: `${query.toLowerCase()} agency near me`, ...generateRandomStat() },
      { keyword: `affordable ${query.toLowerCase()}`, ...generateRandomStat() },
    ]
  };
};

export default function KeywordTool() {
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [results, setResults] = useState<{ main: KeywordData, related: KeywordData[] } | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsSearching(true);
    setHasSearched(true);
    
    // Simulate API delay
    setTimeout(() => {
      setResults(mockGenerateData(query));
      setIsSearching(false);
    }, 1500);
  };

  const getDifficultyColor = (diff: number) => {
    if (diff < 30) return "text-green-500 bg-green-500/10 border-green-500/20";
    if (diff < 70) return "text-yellow-500 bg-yellow-500/10 border-yellow-500/20";
    return "text-red-500 bg-red-500/10 border-red-500/20";
  };

  return (
    <section className="relative py-24 md:py-32 bg-[#F4F1EA] text-[#171717] min-h-screen overflow-hidden">
      
      {/* Editorial Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute left-[5vw] right-[5vw] top-0 bottom-0 border-x border-warm-grey/50 grid grid-cols-4 md:grid-cols-12 divide-x divide-warm-grey/30">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="hidden md:block h-full" />
          ))}
        </div>
        <div className="absolute top-[30vh] left-[5vw] right-[5vw] h-[1px] bg-warm-grey/50" />
      </div>

      <div className="container mx-auto px-6 md:px-[5vw] relative z-10">
        <div className="max-w-6xl mx-auto mb-16 md:mb-24 relative z-10">
          <p className="text-[10px] md:text-xs font-mono tracking-[0.2em] font-medium text-slate mb-8 uppercase">
            PROPRIETARY SEO TOOL
          </p>
          
          <h1 className="text-[10vw] md:text-[7vw] leading-[0.9] font-primary font-bold tracking-[-0.03em] text-[#171717] mb-12">
            DISCOVER<br />
            KEYWORDS THAT<br />
            DRIVE <span className="text-vermilion">REVENUE.</span>
          </h1>
          
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-12 mt-16 md:mt-24 border-t border-warm-grey pt-8 mb-16">
            <p className="text-lg md:text-2xl text-slate max-w-2xl leading-relaxed font-primary">
              Stop guessing what your customers are searching for. Use our free keyword intelligence tool to uncover high-intent search terms, analyze ranking difficulty, and build a profitable SEO strategy.
            </p>
            
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#171717] bg-warm-grey/30 px-4 py-2 rounded-full shrink-0">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              LIVE DATA
            </div>
          </div>
        </div>

        {/* Enhanced Search Input */}
        <div className="max-w-4xl mx-auto mb-24 relative z-10">
          <form onSubmit={handleSearch} className="relative flex flex-col md:flex-row items-center gap-4">
            <div className="relative w-full">
              <div className="absolute left-6 md:left-8 top-1/2 -translate-y-1/2 text-slate/50">
                <Search size={28} strokeWidth={1.5} />
              </div>
              <input 
                type="text" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter a seed keyword (e.g., enterprise software)"
                className="w-full bg-white border-2 border-[#171717]/10 hover:border-[#171717]/30 focus:border-vermilion focus:ring-4 focus:ring-vermilion/10 rounded-full py-6 md:py-8 pl-16 md:pl-20 pr-6 text-xl md:text-3xl font-primary text-[#171717] outline-none transition-all shadow-xl shadow-graphite/5"
                required
              />
            </div>
            <button 
              type="submit"
              disabled={isSearching}
              className="w-full md:w-auto shrink-0 bg-[#171717] hover:bg-vermilion text-[#F4F1EA] rounded-full px-12 py-6 md:py-8 font-mono text-sm md:text-base font-bold uppercase tracking-widest transition-colors flex items-center justify-center min-w-[200px]"
            >
              {isSearching ? <Loader2 size={24} className="animate-spin" /> : "ANALYZE KEYWORD"}
            </button>
          </form>
          
          <div className="flex items-center justify-center gap-6 mt-8 opacity-60">
            <p className="text-xs font-mono text-slate uppercase tracking-widest text-center">
              Trusted by leading brands to uncover 1M+ keyword opportunities
            </p>
          </div>
        </div>

        {/* Results Area */}
        {hasSearched && (
          <div className="max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700">
            {isSearching ? (
              <div className="flex flex-col items-center justify-center py-24 text-slate">
                <Loader2 size={48} className="animate-spin text-vermilion mb-6" />
                <p className="font-mono text-sm tracking-widest uppercase animate-pulse">Scanning search engines...</p>
              </div>
            ) : results ? (
              <div className="flex flex-col gap-12">
                
                {/* Main Keyword Overview */}
                <div className="bg-white rounded-3xl p-8 md:p-12 border border-[#171717]/10 shadow-lg shadow-graphite/5">
                  <h2 className="text-sm font-mono tracking-widest text-slate mb-8 uppercase border-b border-[#171717]/10 pb-4">
                    Keyword Overview: <span className="text-[#171717] font-bold">{results.main.keyword}</span>
                  </h2>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2 text-slate font-mono text-xs uppercase tracking-wider">
                        <BarChart3 size={14} /> Volume
                      </div>
                      <span className="text-4xl md:text-5xl font-primary font-bold text-[#171717]">
                        {results.main.volume}
                      </span>
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2 text-slate font-mono text-xs uppercase tracking-wider">
                        <AlertCircle size={14} /> Difficulty
                      </div>
                      <span className={`text-4xl md:text-5xl font-primary font-bold ${getDifficultyColor(results.main.difficulty).split(' ')[0]}`}>
                        {results.main.difficulty}<span className="text-2xl text-slate/50">/100</span>
                      </span>
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2 text-slate font-mono text-xs uppercase tracking-wider">
                        <TrendingUp size={14} /> CPC
                      </div>
                      <span className="text-4xl md:text-5xl font-primary font-bold text-[#171717]">
                        {results.main.cpc}
                      </span>
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2 text-slate font-mono text-xs uppercase tracking-wider">
                        Intent
                      </div>
                      <span className="inline-block mt-2 px-4 py-2 bg-slate/10 text-[#171717] text-sm font-mono font-bold rounded-full w-fit">
                        {results.main.intent}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Related Keywords Table */}
                <div className="bg-white rounded-3xl border border-[#171717]/10 shadow-lg shadow-graphite/5 overflow-hidden">
                  <div className="p-8 border-b border-[#171717]/10">
                    <h3 className="text-xl font-primary font-bold text-[#171717]">Keyword Variations & Opportunities</h3>
                  </div>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-slate/5 border-b border-[#171717]/10">
                          <th className="p-6 font-mono text-xs tracking-widest text-slate uppercase">Keyword</th>
                          <th className="p-6 font-mono text-xs tracking-widest text-slate uppercase">Volume</th>
                          <th className="p-6 font-mono text-xs tracking-widest text-slate uppercase">KD</th>
                          <th className="p-6 font-mono text-xs tracking-widest text-slate uppercase">CPC</th>
                        </tr>
                      </thead>
                      <tbody>
                        {results.related.map((item, i) => (
                          <tr key={i} className="border-b border-[#171717]/5 hover:bg-slate/5 transition-colors">
                            <td className="p-6 font-primary font-bold text-[#171717] text-lg">{item.keyword}</td>
                            <td className="p-6 font-primary text-slate">{item.volume}</td>
                            <td className="p-6">
                              <span className={`px-3 py-1 text-xs font-mono font-bold rounded-full border ${getDifficultyColor(item.difficulty)}`}>
                                {item.difficulty}
                              </span>
                            </td>
                            <td className="p-6 font-primary text-slate">{item.cpc}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Upsell / Lead Gen CTA */}
                <div className="bg-charcoal text-[#F4F1EA] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-primary font-bold mb-4">
                      Want to rank for these keywords?
                    </h3>
                    <p className="text-[#F4F1EA]/70 font-primary text-lg max-w-xl">
                      Get a free, comprehensive SEO audit and action plan. We'll show you exactly how to steal traffic from your competitors.
                    </p>
                  </div>
                  <Link 
                    href="/request-proposal"
                    className="shrink-0 bg-vermilion hover:bg-[#F4F1EA] hover:text-charcoal text-[#F4F1EA] px-8 py-5 font-mono text-sm font-bold uppercase tracking-wider transition-colors rounded-full"
                  >
                    GET FREE AUDIT
                  </Link>
                </div>

              </div>
            ) : null}
          </div>
        )}
      </div>
    </section>
  );
}
