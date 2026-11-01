"use client";

import React from "react";
import Link from "next/link";
import { SearchX, ArrowRight, RefreshCw, Sparkles } from "lucide-react";

interface EmptyStateProps {
  title?: string;
  description?: string;
  actionLabel?: string;
  actionHref?: string;
  onReset?: () => void;
  suggestions?: string[];
  onSelectSuggestion?: (query: string) => void;
}

export default function EmptyState({
  title = "No search intelligence found",
  description = "We couldn't uncover data matching your query. Try broadening your search term or exploring one of our suggested category seeds.",
  actionLabel = "Return to Overview",
  actionHref = "/",
  onReset,
  suggestions = ["industrial manufacturing", "b2b pharma marketing", "next.js web design", "hyderabad seo agency"],
  onSelectSuggestion,
}: EmptyStateProps) {
  return (
    <div className="rounded-3xl bg-white border border-mist-blue p-8 sm:p-12 text-center max-w-2xl mx-auto my-8 space-y-6 animate-in fade-in zoom-in-95 duration-300 shadow-xs font-sans">
      <div className="w-16 h-16 rounded-full bg-mist-blue/40 border border-sky-slate/30 flex items-center justify-center mx-auto text-deep-atmosphere">
        <SearchX size={28} />
      </div>

      <div className="space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cloud-white border border-sky-slate/30 text-[10px] font-mono text-sky-slate uppercase font-semibold">
          <Sparkles size={11} className="text-sky-slate" />
          <span>QUERY STATUS // ZERO MATCHES</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-display font-bold text-deep-atmosphere uppercase">
          {title}
        </h3>
        <p className="text-sm text-graphite/80 max-w-md mx-auto leading-relaxed">
          {description}
        </p>
      </div>

      {suggestions && suggestions.length > 0 && (
        <div className="pt-2 border-t border-mist-blue">
          <div className="text-xs font-mono text-graphite/60 mb-3 uppercase tracking-wider font-medium">
            Suggested High-Intent Searches:
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {suggestions.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => onSelectSuggestion && onSelectSuggestion(item)}
                className="text-xs font-mono px-3 py-1.5 rounded-lg bg-cloud-white hover:bg-deep-atmosphere text-graphite hover:text-white transition-colors border border-mist-blue"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
        {onReset && (
          <button
            type="button"
            onClick={onReset}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-mist-blue bg-cloud-white text-deep-atmosphere text-xs font-mono font-bold uppercase hover:bg-mist-blue/30 transition-colors"
          >
            <RefreshCw size={13} />
            <span>Reset Search</span>
          </button>
        )}
        
        {actionHref && (
          <Link
            href={actionHref}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-deep-atmosphere hover:bg-sky-slate text-white text-xs font-mono font-bold uppercase transition-colors shadow-xs"
          >
            <span>{actionLabel}</span>
            <ArrowRight size={13} />
          </Link>
        )}
      </div>
    </div>
  );
}
