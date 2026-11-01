import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Sparkles, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Real Estate & Property Developments | VYOMA Media",
  description:
    "Selling the future, not just a floor plan. High-converting digital presence and organic search for property developers in Hyderabad. RERA-compliant and aspirational.",
  alternates: {
    canonical: "https://vyomamedia.com/industries/real-estate",
  },
};

export default function RealEstateIndustryPage() {
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
            <span>ASPIRATIONAL PROPERTY & RERA COMPLIANCE</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-[#172B3A] mb-8 uppercase leading-[1.02]">
            Real Estate & Luxury<span className="text-[#7899B0]">.</span>
          </h1>

          <p className="text-lg sm:text-2xl text-[#30383D] max-w-3xl font-sans leading-relaxed">
            A home is bought as a future, not a floor plan. We tell that architectural story through search, imagery, and ultra-fast landing pages, planned strictly around RERA registration and disclosure norms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-[#7899B0]/20 pt-16 mb-24">
          <div className="rounded-3xl bg-white border border-[#7899B0]/25 p-8 sm:p-12 space-y-6 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#172B3A]">
              HOW WE ELEVATE PROPERTY BRANDS.
            </h2>
            <p className="text-base sm:text-lg text-[#30383D] leading-relaxed">
              A family asks: can I trust this developer before putting our lifetime savings into a home? A developer needs aspiration and transparent legitimacy. We engineer digital flagships and search presence that answer what prospective homebuyers genuinely care about—connectivity, neighborhood infrastructure, layout viability, and verifiable construction milestones.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#172B3A] text-white font-mono text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-full hover:bg-[#20394c] transition-all group shadow-md"
              >
                <span>DISCUSS PROPERTY SCOPE</span>
                <ArrowUpRight
                  size={15}
                  className="text-[#7899B0] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </Link>
              <Link
                href="/work/velora"
                className="inline-flex items-center gap-2 border border-[#7899B0]/30 bg-white text-[#172B3A] font-mono text-xs font-semibold uppercase tracking-wider px-6 py-3.5 rounded-full hover:border-[#172B3A] transition-all"
              >
                <span>VIEW VELORA CASE STUDY ↗</span>
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
                <span>Architectural UI & Interactive Floor Plan Showcases</span>
              </li>
              <li className="flex items-center gap-4 border-b border-[#7899B0]/20 pb-4">
                <CheckCircle2 size={18} className="text-[#7899B0] shrink-0" />
                <span>High-Intent Local Search & Micro-Market Inbound</span>
              </li>
              <li className="flex items-center gap-4 border-b border-[#7899B0]/20 pb-4">
                <CheckCircle2 size={18} className="text-[#7899B0] shrink-0" />
                <span>Strict RERA Disclaimer Integration & Trust Compliance</span>
              </li>
              <li className="flex items-center gap-4 border-b border-[#7899B0]/20 pb-4">
                <CheckCircle2 size={18} className="text-[#7899B0] shrink-0" />
                <span>Sub-Second Mobile Landing Pages for High-Converting Ad Traffic</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
