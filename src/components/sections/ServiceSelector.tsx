"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Sparkles } from "lucide-react";

const options = [
  { problem: "MY BRAND LOOKS OUTDATED", service: "BRAND POSITIONING & DESIGN", route: "/services/branding" },
  { problem: "MY WEBSITE DOESN'T CONVERT", service: "NEXT.JS WEB ARCHITECTURE", route: "/services/web-development" },
  { problem: "PEOPLE CAN'T FIND ME ON GOOGLE", service: "TECHNICAL & LOCAL SEO", route: "/services/seo" },
  { problem: "I NEED MORE QUALIFIED ENQUIRIES", service: "ORGANIC GROWTH SYSTEMS", route: "/services/digital-marketing" },
  { problem: "I WANT TO BUILD FOUNDER REPUTATION", service: "EXECUTIVE PERSONAL BRANDING", route: "/services/personal-branding" },
  { problem: "I NEED AN INTEGRATED SYSTEM", service: "VYOMA GROWTH SYSTEM", route: "/services" },
];

export default function ServiceSelector() {
  const pathname = usePathname();
  const filteredOptions = options.filter((opt) => opt.route !== pathname);

  return (
    <section className="py-24 md:py-32 bg-[#F1F3F1] border-t border-[#7899B0]/25 relative overflow-hidden font-sans">
      <div className="container mx-auto px-5 sm:px-6 md:px-12 max-w-[1360px]">
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#7899B0]/30 text-[11px] font-mono text-[#172B3A] mb-4 uppercase tracking-widest font-semibold shadow-sm">
            <Sparkles size={12} className="text-[#D3A56C]" />
            <span>INTENT ROUTER</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-[#172B3A] uppercase">
            NOT SURE WHERE TO START?
          </h2>
          <p className="text-sm sm:text-base font-sans text-[#30383D] mt-3">
            Select your primary commercial bottleneck to review our tailored strategic architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredOptions.map((opt) => (
            <Link
              key={opt.problem}
              href={opt.route}
              className="group flex flex-col sm:flex-row sm:items-center justify-between p-6 sm:p-7 rounded-2xl bg-white border border-[#7899B0]/25 hover:border-[#172B3A] hover:shadow-md transition-all duration-300"
            >
              <h3 className="text-lg sm:text-xl font-display font-bold text-[#172B3A] mb-3 sm:mb-0 group-hover:text-[#7899B0] transition-colors">
                {opt.problem}
              </h3>

              <div className="flex items-center gap-3 shrink-0">
                <span className="text-[11px] font-mono font-bold tracking-widest text-[#7899B0] group-hover:text-[#172B3A] uppercase transition-colors">
                  {opt.service}
                </span>
                <div className="w-8 h-8 rounded-full bg-[#DCE6EB]/60 border border-[#7899B0]/25 group-hover:bg-[#172B3A] group-hover:border-[#172B3A] flex items-center justify-center transition-all">
                  <ArrowRight
                    size={14}
                    className="text-[#172B3A] group-hover:text-white group-hover:translate-x-0.5 transition-transform"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
