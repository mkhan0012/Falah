"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Search, Loader2, TrendingUp, BarChart3, AlertCircle, CheckCircle2, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";
import EmptyState from "@/components/ui/EmptyState";

interface KeywordData {
  keyword: string;
  volume: string;
  difficulty: number;
  cpc: string;
  intent: "Informational" | "Navigational" | "Commercial" | "Transactional";
}

const mockGenerateData = (query: string): { main: KeywordData; related: KeywordData[] } | null => {
  const clean = query.trim().toLowerCase();
  if (clean === "noresults" || clean === "empty") {
    return null;
  }

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
      keyword: clean,
      ...mainStats
    },
    related: [
      { keyword: `best ${clean}`, ...generateRandomStat() },
      { keyword: `${clean} architecture`, ...generateRandomStat() },
      { keyword: `how to optimize ${clean}`, ...generateRandomStat() },
      { keyword: `${clean} agency hyderabad`, ...generateRandomStat() },
      { keyword: `enterprise ${clean}`, ...generateRandomStat() },
    ]
  };
};

function KeywordToolInner() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";

  const [query, setQuery] = useState(initialQuery);
  const [isSearching, setIsSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [results, setResults] = useState<{ main: KeywordData; related: KeywordData[] } | null>(null);

  const executeSearch = (targetQuery: string) => {
    const trimmed = targetQuery.trim();
    if (!trimmed) {
      setErrorMsg("Please enter a valid keyword or industry term to analyze.");
      setSuccessMsg(null);
      return;
    }

    if (trimmed.length < 2) {
      setErrorMsg("Keyword query must be at least 2 characters long.");
      setSuccessMsg(null);
      return;
    }

    setErrorMsg(null);
    setIsSearching(true);
    setHasSearched(true);
    
    setTimeout(() => {
      const data = mockGenerateData(trimmed);
      setResults(data);
      setIsSearching(false);
      if (data) {
        setSuccessMsg(`Intelligence discovered: 6 verified keyword gaps analyzed for "${trimmed}".`);
      } else {
        setSuccessMsg(null);
      }
    }, 1200);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    executeSearch(query);
  };

  useEffect(() => {
    if (initialQuery) {
      const timer = setTimeout(() => {
        setQuery(initialQuery);
        executeSearch(initialQuery);
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [initialQuery]);

  const getDifficultyColor = (diff: number) => {
    if (diff < 35) return "text-emerald-700 bg-emerald-50 border-emerald-200";
    if (diff < 70) return "text-amber-700 bg-amber-50 border-amber-200";
    return "text-rose-700 bg-rose-50 border-rose-200";
  };

  return (
    <section className="relative py-24 md:py-32 bg-cloud-white text-deep-atmosphere min-h-screen overflow-hidden font-sans">
      <div className="container mx-auto px-5 sm:px-6 md:px-12 max-w-[1360px] relative z-10">
        
        {/* Header Section */}
        <div className="max-w-4xl mx-auto mb-16 md:mb-20 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-sky-slate/30 text-xs font-mono text-sky-slate mb-6 uppercase tracking-widest font-semibold shadow-xs">
            <Sparkles size={12} /> PROPRIETARY SEO INTELLIGENCE TOOL
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold tracking-tight text-deep-atmosphere mb-6 leading-[1.05] uppercase">
            Discover Keywords That <span className="text-sky-slate">Drive Revenue.</span>
          </h1>
          
          <p className="text-base sm:text-lg text-graphite/80 max-w-2xl mx-auto leading-relaxed">
            Stop guessing what your customers are searching for. Use our keyword intelligence tool to uncover high-intent search terms, analyze ranking difficulty, and prepare for AI Answer Engine citations.
          </p>
        </div>

        {/* Search Input Bar */}
        <div className="max-w-3xl mx-auto mb-16">
          <form onSubmit={handleSearch} className="relative flex flex-col sm:flex-row items-center gap-3">
            <div className="relative w-full">
              <Search size={20} className="absolute left-5 top-1/2 -translate-y-1/2 text-graphite/50" />
              <input 
                type="text" 
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  if (errorMsg) setErrorMsg(null);
                }}
                placeholder="Enter a seed keyword (e.g., industrial hydraulics, b2b saas)"
                className="w-full bg-white border border-mist-blue hover:border-sky-slate/50 focus:border-sky-slate focus:ring-2 focus:ring-sky-slate/20 rounded-full py-4 sm:py-5 pl-14 pr-6 text-base sm:text-lg text-deep-atmosphere placeholder-graphite/40 outline-none transition-all shadow-xs"
              />
            </div>
            <button 
              type="submit"
              disabled={isSearching}
              className="w-full sm:w-auto shrink-0 bg-deep-atmosphere hover:bg-sky-slate text-white font-mono font-bold text-xs uppercase tracking-widest px-8 py-4 sm:py-5 rounded-full transition-all flex items-center justify-center gap-2 shadow-md disabled:opacity-50"
            >
              {isSearching ? <Loader2 size={18} className="animate-spin" /> : "ANALYZE GAPS ↗"}
            </button>
          </form>

          {/* Inline Error Message */}
          {errorMsg && (
            <div className="mt-4 p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-mono flex items-center gap-2 animate-in fade-in duration-200">
              <AlertCircle size={16} className="shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Inline Success Message */}
          {successMsg && !isSearching && (
            <div className="mt-4 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-mono flex items-center gap-2 animate-in fade-in duration-200">
              <CheckCircle2 size={16} className="shrink-0" />
              <span>{successMsg}</span>
            </div>
          )}

          {/* Quick Suggestion Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            <span className="text-xs font-mono text-graphite/60">Try:</span>
            {["industrial hydraulics", "b2b pharma marketing", "next.js web design", "hyderabad seo"].map((chip) => (
              <button
                key={chip}
                type="button"
                onClick={() => {
                  setQuery(chip);
                  executeSearch(chip);
                }}
                className="text-xs font-mono px-3.5 py-1.5 rounded-full bg-white hover:bg-deep-atmosphere text-graphite hover:text-white border border-mist-blue shadow-xs transition-colors"
              >
                {chip}
              </button>
            ))}
          </div>
        </div>

        {/* Results Area */}
        {hasSearched && (
          <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-6 duration-500">
            {isSearching ? (
              <div className="flex flex-col items-center justify-center py-24 text-graphite/60 space-y-4">
                <Loader2 size={44} className="animate-spin text-sky-slate" />
                <p className="font-mono text-xs tracking-widest uppercase animate-pulse">
                  Scanning SERP Citations & AI Answer Intent...
                </p>
              </div>
            ) : results ? (
              <div className="space-y-8">
                
                {/* Main Seed Overview Bento Card */}
                <div className="rounded-3xl bg-white border border-mist-blue p-6 sm:p-10 shadow-xs">
                  <div className="flex items-center justify-between pb-4 mb-6 border-b border-mist-blue">
                    <span className="text-xs font-mono uppercase tracking-widest text-graphite/60">
                      CORE SEED OVERVIEW
                    </span>
                    <span className="text-sm font-mono font-bold text-sky-slate">
                      &ldquo;{results.main.keyword}&rdquo;
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <div className="p-4 rounded-2xl bg-cloud-white border border-mist-blue">
                      <div className="flex items-center gap-1.5 text-xs font-mono text-graphite/60 mb-1">
                        <BarChart3 size={13} /> Vol /mo
                      </div>
                      <div className="text-2xl sm:text-3xl font-display font-bold text-deep-atmosphere">
                        {results.main.volume}
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-cloud-white border border-mist-blue">
                      <div className="flex items-center gap-1.5 text-xs font-mono text-graphite/60 mb-1">
                        <AlertCircle size={13} /> Difficulty
                      </div>
                      <div className={`text-2xl sm:text-3xl font-display font-bold ${getDifficultyColor(results.main.difficulty).split(" ")[0]}`}>
                        {results.main.difficulty}<span className="text-sm text-graphite/50">/100</span>
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-cloud-white border border-mist-blue">
                      <div className="flex items-center gap-1.5 text-xs font-mono text-graphite/60 mb-1">
                        <TrendingUp size={13} /> Est. CPC
                      </div>
                      <div className="text-2xl sm:text-3xl font-display font-bold text-sky-slate">
                        {results.main.cpc}
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-cloud-white border border-mist-blue">
                      <div className="text-xs font-mono text-graphite/60 mb-1">
                        Search Intent
                      </div>
                      <span className="inline-block px-2.5 py-1 text-xs font-mono font-semibold rounded-full bg-white border border-mist-blue text-deep-atmosphere">
                        {results.main.intent}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Related Keywords Card */}
                <div className="rounded-3xl bg-white border border-mist-blue overflow-hidden shadow-xs">
                  <div className="p-6 border-b border-mist-blue flex items-center justify-between">
                    <h3 className="font-display font-bold text-lg text-deep-atmosphere">
                      High-Intent Ranking Opportunities
                    </h3>
                    <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      + GEO OPTIMIZED
                    </span>
                  </div>

                  <div className="divide-y divide-mist-blue">
                    {results.related.map((item, i) => (
                      <div
                        key={i}
                        className="p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:bg-cloud-white/60 transition-colors"
                      >
                        <div className="space-y-1">
                          <div className="text-base font-sans font-semibold text-deep-atmosphere">
                            {item.keyword}
                          </div>
                          <div className="text-xs font-mono text-graphite/60">
                            Intent: {item.intent} · Est. CPC: {item.cpc}
                          </div>
                        </div>

                        <div className="flex items-center gap-4 self-end sm:self-auto">
                          <span className="text-xs font-mono text-graphite/60">
                            {item.volume} vol
                          </span>
                          <span className={`px-2.5 py-1 text-xs font-mono font-bold rounded-full border ${getDifficultyColor(item.difficulty)}`}>
                            KD {item.difficulty}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Free Action Plan Upsell */}
                <div className="rounded-3xl bg-white border border-mist-blue p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
                  <div className="space-y-2 text-center md:text-left">
                    <h4 className="text-xl sm:text-2xl font-display font-bold text-deep-atmosphere">
                      Ready to dominate these keyword territories?
                    </h4>
                    <p className="text-sm text-graphite/80 max-w-xl">
                      Get a comprehensive architectural audit of your organic search footprint and AI engine citations.
                    </p>
                  </div>
                  <Link
                    href="/contact"
                    className="shrink-0 bg-deep-atmosphere hover:bg-sky-slate text-white font-mono font-bold text-xs uppercase px-7 py-4 rounded-full transition-all flex items-center gap-2 shadow-md tracking-wider"
                  >
                    REQUEST AUDIT <ArrowRight size={14} />
                  </Link>
                </div>

              </div>
            ) : (
              /* Empty State Component Integration */
              <EmptyState
                title={`No keyword data for "${query}"`}
                description="We couldn't locate search volume data for this term. Try checking for typos or test one of our recommended high-intent category seeds."
                onReset={() => {
                  setQuery("");
                  setHasSearched(false);
                  setResults(null);
                }}
                onSelectSuggestion={(sug) => {
                  setQuery(sug);
                  executeSearch(sug);
                }}
              />
            )}
          </div>
        )}

      </div>
    </section>
  );
}

export default function KeywordTool() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-cloud-white flex items-center justify-center text-xs font-mono text-graphite/60">Loading Search Intelligence Engine...</div>}>
      <KeywordToolInner />
    </Suspense>
  );
}
