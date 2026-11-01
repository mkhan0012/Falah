import { Metadata } from "next";
import WorkGallery from "@/components/sections/WorkGallery";
import { Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Work & Case Studies | Vyoma Media",
  description: "Explore our selected deployments across branding, conversion web systems, technical SEO, and digital growth.",
  alternates: {
    canonical: "https://vyomamedia.com/work",
  },
};

export default function WorkPage() {
  return (
    <main className="pt-36 md:pt-44 pb-28 min-h-screen bg-cloud-white text-deep-atmosphere selection:bg-sky-slate selection:text-white relative overflow-hidden">
      <div className="container mx-auto px-5 sm:px-6 md:px-12 max-w-[1360px] mb-20 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-sky-slate/30 text-[11px] font-mono text-sky-slate mb-6 uppercase tracking-widest font-semibold shadow-xs">
          <Sparkles size={12} />
          <span>SELECTED PORTFOLIO // VERIFIED DEPLOYMENTS</span>
        </div>

        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display font-bold tracking-tight mb-6 uppercase text-deep-atmosphere">
          SELECTED WORK<span className="text-sky-slate">.</span>
        </h1>
        <p className="text-lg sm:text-2xl text-graphite/80 max-w-3xl font-sans leading-relaxed">
          We engineer category-defining digital presence systems for industrial manufacturers, healthcare brands, and high-value enterprises.
        </p>
      </div>
      
      <div className="relative z-10">
        <WorkGallery />
      </div>
    </main>
  );
}
