import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Sparkles, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Industrial & Manufacturing Growth | VYOMA Media",
  description:
    "Enterprise procurement teams research for weeks and decide as a committee. We build the credibility, product catalog architecture, and search presence that make you the supplier they shortlist.",
  alternates: {
    canonical: "https://vyomamedia.com/industries/manufacturing",
  },
};

export default function ManufacturingIndustryPage() {
  return (
    <main className="min-h-screen bg-[#F1F3F1] pt-36 md:pt-44 pb-32 text-[#30383D] selection:bg-[#7899B0] selection:text-white relative overflow-hidden font-sans">
      <div className="container mx-auto px-5 sm:px-6 md:px-12 max-w-[1360px] relative z-10">
        <Link
          href="/industries"
          className="inline-flex items-center gap-2 text-xs font-mono font-medium tracking-widest text-[#7899B0] hover:text-[#172B3A] transition-colors mb-12 uppercase"
        >
          <ArrowLeft size={16} /> All Industries
        </Link>

        <div className="mb-20 md:mb-24">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#7899B0]/30 text-[11px] font-mono text-[#172B3A] mb-6 uppercase tracking-widest font-semibold shadow-sm">
            <Sparkles size={12} className="text-[#D3A56C]" />
            <span>INDUSTRIAL B2B & COMMITTEE PURCHASING</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-[#172B3A] mb-8 uppercase leading-[1.02]">
            Industrial & B2B Manufacturing<span className="text-[#7899B0]">.</span>
          </h1>

          <p className="text-lg sm:text-2xl text-[#30383D] max-w-3xl font-sans leading-relaxed">
            Industrial and B2B buyers research for weeks and decide as a committee. We build the engineering credibility, technical product content, and search presence that make you the supplier enterprise procurement teams shortlist.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-[#7899B0]/20 pt-16 mb-24">
          <div className="rounded-3xl bg-white border border-[#7899B0]/25 p-8 sm:p-12 space-y-6 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#172B3A]">
              FROM WORKSHOP TO DIGITAL SYSTEM.
            </h2>
            <p className="text-base sm:text-lg text-[#30383D] leading-relaxed">
              A purchasing manager asks: can I trust this supplier before issuing a high-value purchase order? We structure your digital system around how engineers and procurement teams actually search for components, with specification-led pages, technical documentation, and clear application guides.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                href="/work/bharat-hydraulics"
                className="inline-flex items-center gap-2 bg-[#172B3A] text-white font-mono text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-full hover:bg-[#20394c] transition-all group shadow-md"
              >
                <span>VIEW BHARAT HYDRAULICS CASE STUDY</span>
                <ArrowUpRight
                  size={15}
                  className="text-[#7899B0] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-[#7899B0]/30 bg-white text-[#172B3A] font-mono text-xs font-semibold uppercase tracking-wider px-6 py-3.5 rounded-full hover:border-[#172B3A] transition-all"
              >
                <span>DISCUSS B2B SCOPE ↗</span>
              </Link>
            </div>
          </div>

          <div className="rounded-3xl bg-white border border-[#7899B0]/25 p-8 sm:p-12 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#172B3A] mb-8">
              CORE DISCIPLINES.
            </h2>
            <ul className="flex flex-col gap-4 text-sm sm:text-base font-sans text-[#172B3A] font-medium">
              <li className="flex items-center gap-4 border-b border-[#7899B0]/20 pb-4">
                <CheckCircle2 size={18} className="text-[#7899B0] shrink-0" />
                <span>Technical Product Catalog Architecture & Search</span>
              </li>
              <li className="flex items-center gap-4 border-b border-[#7899B0]/20 pb-4">
                <CheckCircle2 size={18} className="text-[#7899B0] shrink-0" />
                <span>Procurement RFP Ingestion & Fast Lead Routing</span>
              </li>
              <li className="flex items-center gap-4 border-b border-[#7899B0]/20 pb-4">
                <CheckCircle2 size={18} className="text-[#7899B0] shrink-0" />
                <span>Application-Specific Engineering Guides & CAD/BOM Indexing</span>
              </li>
              <li className="flex items-center gap-4 border-b border-[#7899B0]/20 pb-4">
                <CheckCircle2 size={18} className="text-[#7899B0] shrink-0" />
                <span>Enterprise SEO for High-Volume OEM Parts & Systems</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
