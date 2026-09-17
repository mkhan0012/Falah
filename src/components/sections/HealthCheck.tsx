"use client";

import { useState } from "react";
import { ArrowRight, Loader2, Search } from "lucide-react";
import clsx from "clsx";

const auditCategories = [
  { id: "BRANDING", score: 85, status: "GOOD" },
  { id: "SEO", score: 62, status: "NEEDS WORK" },
  { id: "PERFORMANCE", score: 45, status: "POOR" },
  { id: "MOBILE", score: 90, status: "EXCELLENT" },
  { id: "CONTENT", score: 70, status: "FAIR" },
  { id: "CTA", score: 55, status: "NEEDS WORK" },
  { id: "SOCIAL PRESENCE", score: 40, status: "POOR" },
];

export default function HealthCheck() {
  const [url, setUrl] = useState("");
  const [isScanning, setIsScanning] = useState(false);
  const [hasResult, setHasResult] = useState(false);

  const handleScan = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;
    
    setIsScanning(true);
    setHasResult(false);
    
    // Simulate API scan delay
    setTimeout(() => {
      setIsScanning(false);
      setHasResult(true);
    }, 2500);
  };

  return (
    <section className="py-24 md:py-40 bg-ivory text-graphite border-t border-warm-grey">
      <div className="container mx-auto px-6 md:px-[5vw]">
        
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-xs font-mono tracking-widest text-slate mb-6 uppercase">
            DIGITAL HEALTH CHECK
          </p>
          <h2 className="text-4xl md:text-6xl font-primary font-bold tracking-tight mb-8">
            HOW STRONG IS YOUR<br />DIGITAL PRESENCE?
          </h2>
          
          <form onSubmit={handleScan} className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto mt-12">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate">
                <Search size={18} />
              </div>
              <input
                type="text"
                placeholder="Enter your website URL (e.g. example.com)"
                className="w-full bg-white border border-warm-grey pl-12 pr-4 py-4 font-mono text-sm focus:outline-none focus:border-graphite transition-colors"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                required
              />
            </div>
            <button 
              type="submit"
              disabled={isScanning}
              className="bg-graphite text-ivory px-8 py-4 font-mono text-sm font-bold uppercase hover:bg-vermilion transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:hover:bg-graphite"
            >
              {isScanning ? (
                <><Loader2 size={16} className="animate-spin" /> SCANNING...</>
              ) : (
                <>CHECK NOW <ArrowRight size={16} /></>
              )}
            </button>
          </form>
        </div>

        {/* Results UI (Demo) */}
        <div className={clsx(
          "max-w-5xl mx-auto bg-white border border-warm-grey transition-all duration-700 overflow-hidden",
          hasResult ? "opacity-100 translate-y-0 max-h-[800px]" : "opacity-0 translate-y-8 max-h-0 border-transparent"
        )}>
          <div className="bg-charcoal text-ivory p-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-widest">Live Audit Preview</span>
            </div>
            <span className="font-mono text-xs text-ivory/50">DEMO DATA — ILLUSTRATIVE</span>
          </div>
          
          <div className="p-8 md:p-12">
            <div className="mb-12 border-b border-warm-grey pb-8">
              <h3 className="text-2xl font-primary font-bold mb-2">Audit Results for: {url || "example.com"}</h3>
              <p className="text-slate font-primary">
                This is a simulated demonstration. In production, this connects to an automated auditing API.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {auditCategories.map((cat) => (
                <div key={cat.id} className="border border-warm-grey p-6 flex flex-col">
                  <div className="flex justify-between items-start mb-6">
                    <span className="font-mono text-xs font-bold text-slate">{cat.id}</span>
                    <span className={clsx(
                      "font-mono text-[10px] px-2 py-1 uppercase tracking-wider",
                      cat.score >= 80 ? "bg-green-100 text-green-800" :
                      cat.score >= 60 ? "bg-yellow-100 text-yellow-800" :
                      "bg-red-100 text-red-800"
                    )}>
                      {cat.status}
                    </span>
                  </div>
                  
                  <div className="mt-auto">
                    <div className="flex items-end gap-2 mb-2">
                      <span className="text-4xl font-primary font-bold leading-none">{cat.score}</span>
                      <span className="text-slate font-mono text-xs mb-1">/100</span>
                    </div>
                    {/* Progress bar */}
                    <div className="h-1 w-full bg-warm-grey mt-4">
                      <div 
                        className={clsx(
                          "h-full transition-all duration-1000 ease-out",
                          cat.score >= 80 ? "bg-green-500" :
                          cat.score >= 60 ? "bg-yellow-500" :
                          "bg-red-500"
                        )}
                        style={{ width: hasResult ? `${cat.score}%` : '0%' }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
               <button className="border border-graphite px-8 py-4 font-mono text-xs font-bold uppercase hover:bg-graphite hover:text-ivory transition-colors">
                 GET FULL DETAILED REPORT
               </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
