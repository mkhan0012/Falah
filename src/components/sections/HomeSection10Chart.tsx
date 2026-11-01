"use client";

import React, { useState } from "react";

export default function HomeSection10Chart() {
  const [activeMetric, setActiveMetric] = useState("Google impressions");

  const metrics = [
    "Google impressions",
    "Website visits",
    "Enquiries",
    "Qualified leads",
    "B2B enquiries",
    "Conversions"
  ];

  return (
    <section className="py-24 md:py-32 bg-neutral-100 dark:bg-neutral-900 text-black dark:text-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight mb-4">
            SHOW THE CHANGE. <br />
            DON&apos;T JUST SAY IT.
          </h2>
        </div>

        <div className="bg-white dark:bg-black rounded-3xl p-8 md:p-12 shadow-xl shadow-black/5 dark:shadow-white/5 border border-neutral-200 dark:border-neutral-800">
          
          {/* Header & Tabs */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-16">
            <div className="flex flex-wrap gap-2">
              {metrics.map(metric => (
                <button
                  key={metric}
                  onClick={() => setActiveMetric(metric)}
                  className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-colors ${
                    activeMetric === metric
                      ? "bg-black text-white dark:bg-white dark:text-black"
                      : "bg-neutral-100 dark:bg-neutral-900 text-neutral-500 hover:text-black dark:hover:text-white"
                  }`}
                >
                  {metric}
                </button>
              ))}
            </div>
            
            <div className="px-4 py-2 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-500 rounded-full text-xs font-bold tracking-widest uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              DATA COLLECTION IN PROGRESS
            </div>
          </div>

          {/* Chart Area */}
          <div className="relative w-full aspect-video md:aspect-[21/9] border-b border-l border-neutral-200 dark:border-neutral-800">
            {/* Grid lines */}
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-full h-px bg-neutral-100 dark:bg-neutral-900" />
              ))}
            </div>

            {/* Empty State Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
              <div className="text-neutral-300 dark:text-neutral-700 font-medium tracking-widest uppercase mb-2">
                AWAITING HISTORICAL DATA
              </div>
              <p className="text-neutral-400 dark:text-neutral-600 text-sm max-w-sm">
                This chart will automatically populate as verified data is collected over the coming months. We don&apos;t use placeholder numbers.
              </p>
            </div>

            {/* X Axis Labels */}
            <div className="absolute -bottom-8 left-0 right-0 flex justify-between text-xs font-bold uppercase tracking-widest text-neutral-400">
              <span>Month 1</span>
              <span>Month 2</span>
              <span>Month 3</span>
              <span>Month 4</span>
              <span>Month 5</span>
              <span>Month 6</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
