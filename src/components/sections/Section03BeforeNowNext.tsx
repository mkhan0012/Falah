"use client";
import { ArrowRight } from "lucide-react";

export default function Section03BeforeNowNext() {
  return (
    <section className="py-24 bg-charcoal text-[#F4F1EA]">
      <div className="container mx-auto px-6 md:px-[5vw]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          <div className="group rounded-2xl border border-white/10 bg-white/5 p-8 md:p-12 transition-all hover:bg-white/10 flex flex-col">
            <div className="mb-8">
              <h3 className="text-3xl font-primary font-bold mb-2">BEFORE</h3>
              <p className="font-mono text-xs tracking-widest text-[#F4F1EA]/50 uppercase">Offline-First</p>
            </div>
            <ul className="space-y-4 mb-12 flex-1">
              <li className="flex gap-3 text-[#F4F1EA]/70 font-primary"><span className="text-vermilion/50">×</span> Traditional customer acquisition</li>
              <li className="flex gap-3 text-[#F4F1EA]/70 font-primary"><span className="text-vermilion/50">×</span> Limited online discovery</li>
              <li className="flex gap-3 text-[#F4F1EA]/70 font-primary"><span className="text-vermilion/50">×</span> Manual processes</li>
              <li className="flex gap-3 text-[#F4F1EA]/70 font-primary"><span className="text-vermilion/50">×</span> Limited digital catalogue</li>
              <li className="flex gap-3 text-[#F4F1EA]/70 font-primary"><span className="text-vermilion/50">×</span> Offline customer relationships</li>
            </ul>
          </div>

          <div className="group rounded-2xl border border-vermilion/30 bg-vermilion/5 p-8 md:p-12 transition-all hover:bg-vermilion/10 relative flex flex-col">
            <div className="absolute top-1/2 -left-4 -translate-y-1/2 w-8 h-8 bg-charcoal rounded-full border border-white/10 flex items-center justify-center hidden lg:flex z-10">
              <ArrowRight size={14} className="text-vermilion" />
            </div>
            <div className="mb-8">
              <h3 className="text-3xl font-primary font-bold mb-2 text-vermilion">NOW</h3>
              <p className="font-mono text-xs tracking-widest text-vermilion/70 uppercase">Digital Foundation</p>
            </div>
            <ul className="space-y-4 mb-12 flex-1">
              <li className="flex gap-3 text-[#F4F1EA]/90 font-primary"><span className="text-vermilion">✓</span> Professional website</li>
              <li className="flex gap-3 text-[#F4F1EA]/90 font-primary"><span className="text-vermilion">✓</span> Product catalogue</li>
              <li className="flex gap-3 text-[#F4F1EA]/90 font-primary"><span className="text-vermilion">✓</span> Local SEO</li>
              <li className="flex gap-3 text-[#F4F1EA]/90 font-primary"><span className="text-vermilion">✓</span> Google Business</li>
              <li className="flex gap-3 text-[#F4F1EA]/90 font-primary"><span className="text-vermilion">✓</span> WhatsApp enquiries</li>
              <li className="flex gap-3 text-[#F4F1EA]/90 font-primary"><span className="text-vermilion">✓</span> Inventory management</li>
              <li className="flex gap-3 text-[#F4F1EA]/90 font-primary"><span className="text-vermilion">✓</span> Customer follow-up tools</li>
            </ul>
          </div>

          <div className="group rounded-2xl border border-white/10 bg-white/5 p-8 md:p-12 transition-all hover:bg-white/10 relative flex flex-col opacity-80 hover:opacity-100">
            <div className="absolute top-1/2 -left-4 -translate-y-1/2 w-8 h-8 bg-charcoal rounded-full border border-white/10 flex items-center justify-center hidden lg:flex z-10">
              <ArrowRight size={14} className="text-[#F4F1EA]/50" />
            </div>
            <div className="mb-8">
              <h3 className="text-3xl font-primary font-bold mb-2">NEXT</h3>
              <p className="font-mono text-xs tracking-widest text-[#F4F1EA]/50 uppercase">Growth System</p>
            </div>
            <ul className="space-y-4 mb-12 flex-1">
              <li className="flex gap-3 text-[#F4F1EA]/70 font-primary"><span className="text-[#F4F1EA]/30">→</span> More online discovery</li>
              <li className="flex gap-3 text-[#F4F1EA]/70 font-primary"><span className="text-[#F4F1EA]/30">→</span> More qualified enquiries</li>
              <li className="flex gap-3 text-[#F4F1EA]/70 font-primary"><span className="text-[#F4F1EA]/30">→</span> B2B opportunities</li>
              <li className="flex gap-3 text-[#F4F1EA]/70 font-primary"><span className="text-[#F4F1EA]/30">→</span> Better customer follow-up</li>
              <li className="flex gap-3 text-[#F4F1EA]/70 font-primary"><span className="text-[#F4F1EA]/30">→</span> Repeat business</li>
              <li className="flex gap-3 text-[#F4F1EA]/70 font-primary"><span className="text-[#F4F1EA]/30">→</span> Measurable digital acquisition</li>
            </ul>
            <div className="mt-auto pt-6 border-t border-white/10">
              <p className="text-xs font-mono text-[#F4F1EA]/40 uppercase tracking-widest text-center">Goal Pipeline</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
