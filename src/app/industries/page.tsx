import { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Sparkles, Building2, Stethoscope, Factory, Film, Landmark, ShoppingBag } from "lucide-react";

export const metadata: Metadata = {
  title: "Sectors & Industries | VYOMA Media",
  description:
    "Organic growth, brand positioning, and high-trust digital presence for healthcare, real estate, industrial B2B, consumer brands, politics, and film in Hyderabad.",
  alternates: {
    canonical: "https://vyomamedia.com/industries",
  },
};

const industries = [
  {
    title: "HEALTHCARE & CLINICS",
    href: "/industries/healthcare",
    icon: Stethoscope,
    badge: "Clinical Compliance & Medical Ethics",
    desc: "Patients search at vulnerable moments. We build content that informs and reassures without exaggerated promises, adhering strictly to medical advertising norms, with frictionless doctor consultation booking.",
    tone: "Reassurance, Clinical Accuracy, Compassion",
  },
  {
    title: "REAL ESTATE & LUXURY",
    href: "/industries/real-estate",
    icon: Building2,
    badge: "RERA-Aligned & Transparent",
    desc: "A home is bought as a future, not just a square-foot floor plan. We tell that architectural story through search, imagery, and ultra-fast landing pages, planned strictly around RERA registration and disclosure norms.",
    tone: "Architectural Aspiration, Elegance, Security",
  },
  {
    title: "INDUSTRIAL & B2B MANUFACTURING",
    href: "/industries/manufacturing",
    icon: Factory,
    badge: "Enterprise Procurement Committees",
    desc: "Procurement teams research for weeks and decide as a committee. We build the engineering credibility, technical specification content, and search presence that make you the supplier enterprise procurement teams shortlist.",
    tone: "Technical Rigor, Reliability, ISO Precision",
  },
  {
    title: "CONSUMER BRANDS & D2C",
    href: "/services/branding",
    icon: ShoppingBag,
    badge: "Repeat Purchase Equity",
    desc: "We build recognition that turns into repeat demand, so your name feels familiar, organic discoverability is effortless, and the buying experience feels intuitive.",
    tone: "Brand Distinctiveness, Delight, Frictionless Flow",
  },
  {
    title: "POLITICAL & PUBLIC INTEREST",
    href: "/contact",
    icon: Landmark,
    badge: "ECI Norms & Verified Transparency",
    desc: "We build clear, truthful messaging and high-concurrency digital architecture, planned around Election Commission and platform guidelines, with your compliance team approving every publication.",
    tone: "Conviction, Integrity, Broad Public Clarity",
  },
  {
    title: "FILM & ENTERTAINMENT",
    href: "/contact",
    icon: Film,
    badge: "Theatrical Momentum & Digital Longevity",
    desc: "We build anticipation from the first poster reveal to opening week, then keep your search presence alive and discoverable long after theatrical and OTT distribution.",
    tone: "Cultural Drama, Visual Scale, Momentum",
  },
];

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-[#F1F3F1] pt-36 md:pt-44 pb-32 text-[#30383D] selection:bg-[#7899B0] selection:text-white relative overflow-hidden font-sans">
      <div className="container mx-auto px-5 sm:px-6 md:px-12 max-w-[1360px] relative z-10">
        <div className="mb-20 md:mb-24">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#7899B0]/30 text-[11px] font-mono text-[#172B3A] mb-6 uppercase tracking-widest font-semibold shadow-sm">
            <Sparkles size={12} className="text-[#D3A56C]" />
            <span>SECTOR EXPERTISE · HYDERABAD & GLOBAL</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight mb-8 uppercase text-[#172B3A]">
            INDUSTRIES WE BUILD FOR<span className="text-[#7899B0]">.</span>
          </h1>
          <p className="text-lg sm:text-2xl text-[#30383D] max-w-3xl font-sans leading-relaxed">
            Organic growth for healthcare, real estate, industrial manufacturing, consumer brands, politics, and film. What we bring to each sector is knowing exactly how that audience decides and which regulations apply.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 border-t border-[#7899B0]/20 pt-16">
          {industries.map((ind) => {
            const Icon = ind.icon;
            return (
              <Link
                key={ind.title}
                href={ind.href}
                className="group rounded-3xl border border-[#7899B0]/25 p-8 sm:p-10 bg-white hover:border-[#172B3A] hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#DCE6EB]/60 border border-[#7899B0]/20 flex items-center justify-center text-[#172B3A] group-hover:scale-105 transition-transform">
                      <Icon size={22} />
                    </div>
                    <span className="font-mono text-[10px] font-semibold text-[#7899B0] uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#DCE6EB]/40 border border-[#7899B0]/20">
                      {ind.badge}
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-display font-bold tracking-tight mb-3 text-[#172B3A] group-hover:text-[#7899B0] transition-colors uppercase">
                    {ind.title}
                  </h2>

                  <p className="text-sm font-sans text-[#30383D] leading-relaxed mb-6">
                    {ind.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#7899B0]/20 flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase text-[#7899B0]">
                    {ind.tone}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#DCE6EB]/60 flex items-center justify-center text-[#172B3A] group-hover:bg-[#172B3A] group-hover:text-white transition-colors">
                    <ArrowUpRight size={14} />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Section Closing Banner */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-[#172B3A] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#D3A56C] font-bold">
              INDUSTRY SCOPING
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-bold">
              DOES YOUR INDUSTRY DEMAND DEEP REGULATORY CARE?
            </h3>
            <p className="text-sm text-[#DCE6EB]">
              We formulate strategic plans in close alignment with your legal and compliance officers.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#7899B0] text-[#172B3A] font-mono text-xs font-bold uppercase tracking-wider hover:bg-white transition-colors shrink-0"
          >
            START AN INDUSTRY AUDIT <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </main>
  );
}
