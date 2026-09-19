"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const options = [
  { problem: "MY BRAND LOOKS OUTDATED", service: "BRANDING", route: "/services/branding" },
  { problem: "MY WEBSITE DOESN'T CONVERT", service: "WEB DEVELOPMENT", route: "/services/web-development" },
  { problem: "PEOPLE CAN'T FIND ME ON GOOGLE", service: "SEO", route: "/services/seo" },
  { problem: "I NEED MORE LEADS", service: "DIGITAL MARKETING", route: "/services/digital-marketing" },
  { problem: "I WANT TO BUILD MY PERSONAL BRAND", service: "PERSONAL BRANDING", route: "/services/personal-branding" },
  { problem: "I NEED EVERYTHING", service: "FALAH SYSTEM", route: "/services" },
];

export default function ServiceSelector() {
  return (
    <section className="py-24 md:py-32 bg-ivory border-t border-warm-grey">
      <div className="container mx-auto px-6 md:px-[5vw]">
        
        <h2 className="text-3xl md:text-5xl font-primary font-bold tracking-tight text-graphite mb-16 uppercase">
          NOT SURE WHAT YOU NEED?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
          {options.map((opt) => (
            <Link 
              key={opt.problem}
              href={opt.route}
              className="group flex flex-col sm:flex-row sm:items-center justify-between p-6 md:p-8 border border-warm-grey hover:border-vermilion hover:bg-white transition-all duration-300"
            >
              <h3 className="text-xl md:text-2xl font-primary font-bold text-graphite mb-4 sm:mb-0 group-hover:text-vermilion transition-colors">
                {opt.problem}
              </h3>
              
              <div className="flex items-center gap-3 shrink-0 mt-4 sm:mt-0">
                <span className="text-xs font-mono font-bold tracking-widest text-slate uppercase">
                  → {opt.service}
                </span>
                <div className="w-8 h-8 rounded-full bg-warm-grey group-hover:bg-vermilion flex items-center justify-center transition-colors">
                  <ArrowRight size={14} className="text-graphite group-hover:text-ivory" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}

