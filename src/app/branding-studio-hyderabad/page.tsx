import { Metadata } from "next";
import Link from "next/link";
import { 
  ArrowUpRight, 
  Sparkles, 
  Compass, 
  Palette, 
  MapPin, 
  ArrowRight
} from "lucide-react";
import SelectedWork from "@/components/sections/SelectedWork";
import VyomaFaq from "@/components/sections/VyomaFaq";
import { brandingFaqs } from "@/data/faqs";
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Branding Studio in Hyderabad | Brand Strategy & Visual Identity | VYOMA Media",
  description:
    "VYOMA Media is an elite branding studio in Hyderabad. We craft category positioning, editorial visual identities, and design systems for ambitious enterprises.",
  keywords: [
    "branding studio Hyderabad",
    "branding agency in Hyderabad",
    "brand strategy Hyderabad",
    "corporate identity design Hyderabad",
    "visual identity design Hyderabad",
    "luxury branding Jubilee Hills",
    "rebranding agency HITEC City",
    "creative branding studio Banjara Hills",
  ],
  alternates: {
    canonical: "https://vyomamedia.co.in/branding-studio-hyderabad",
  },
  openGraph: {
    title: "Branding Studio in Hyderabad | VYOMA Media",
    description:
      "We engineer brand identities that command authority. Comprehensive brand strategy, editorial visual systems, and category positioning for ambitious businesses.",
    url: "https://vyomamedia.co.in/branding-studio-hyderabad",
    siteName: "Vyoma Media",
    locale: "en_IN",
    type: "website",
  },
};

export default function BrandingStudioHyderabad() {
  const localSchema = generateLocalBusinessSchema({
    title: "VYOMA Media — Branding Studio in Hyderabad",
    description:
      "Premier luxury branding and corporate visual identity studio in Hyderabad delivering strategic positioning, monograms, and design systems.",
    url: "https://vyomamedia.co.in/branding-studio-hyderabad",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Branding Studio Hyderabad", url: "/branding-studio-hyderabad" },
  ]);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Brand Strategy, Visual Identity & Positioning in Hyderabad",
    serviceType: "Branding & Creative Direction",
    provider: {
      "@type": "LocalBusiness",
      name: "VYOMA Media",
      url: "https://vyomamedia.co.in",
      telephone: "+917008472069",
    },
    areaServed: [
      { "@type": "City", name: "Hyderabad" },
      { "@type": "AdministrativeArea", name: "Jubilee Hills" },
      { "@type": "AdministrativeArea", name: "Banjara Hills" },
      { "@type": "AdministrativeArea", name: "HITEC City" },
      { "@type": "AdministrativeArea", name: "Gachibowli" },
      { "@type": "AdministrativeArea", name: "Financial District" },
      { "@type": "AdministrativeArea", name: "Telangana" },
    ],
    description:
      "Bespoke brand identity systems, corporate monograms, brand positioning strategy, multilingual tone of voice, and comprehensive design systems.",
  };

  const hyderabadSectors = [
    {
      sector: "Luxury Real Estate & Developments",
      desc: "Brand identity systems for high-end residential towers, gated villas, and commercial parks in Jubilee Hills, Neopolis, and Kokapet.",
    },
    {
      sector: "B2B SaaS & Tech Startups",
      desc: "Distinctive positioning and minimalist typography for venture-backed enterprise platforms headquartered in HITEC City.",
    },
    {
      sector: "Healthcare Institutions & Specialists",
      desc: "Authoritative, empathetic visual identities for premium multi-specialty hospitals, fertility clinics, and surgical centers.",
    },
    {
      sector: "Industrial Exporters & Manufacturing",
      desc: "Modernizing multi-generational family enterprises into world-class industrial brands commanding export price premiums.",
    },
  ];

  const methodSteps = [
    {
      phase: "01",
      title: "Commercial Moat & Category Positioning",
      desc: "We research customer decision models and competitors to define the singular idea that separates you from market commoditization.",
    },
    {
      phase: "02",
      title: "Visual Identity & Monogram Craft",
      desc: "Editorial logo design, custom iconography, distinctive color palettes, and typographic hierarchies built for high recall.",
    },
    {
      phase: "03",
      title: "Verbal Architecture & Tone of Voice",
      desc: "Clear copywriting frameworks in English, Telugu, Hindi, and Urdu to ensure every headline and pitch deck speaks with singular authority.",
    },
    {
      phase: "04",
      title: "Design Guidelines & Touchpoint Rollout",
      desc: "Complete digital brand books, social media stylekits, executive stationery, packaging, and seamless Next.js website design tokens.",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <main className="min-h-screen bg-[#F1F3F1] pt-36 md:pt-44 pb-20 text-[#172B3A] selection:bg-[#7899B0] selection:text-white overflow-hidden relative font-sans">
        <div className="container mx-auto px-5 sm:px-6 md:px-12 max-w-[1360px] relative z-10">
          
          {/* Breadcrumb Navigation Bar */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-xs font-mono text-[#3B5B72]">
              <li>
                <Link href="/" className="hover:text-[#172B3A] transition-colors">
                  HOME
                </Link>
              </li>
              <li>/</li>
              <li className="text-[#172B3A] font-bold">BRANDING STUDIO HYDERABAD</li>
            </ol>
          </nav>

          {/* Hero Section */}
          <div className="mb-20 md:mb-28 max-w-5xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#7899B0]/30 text-xs font-mono text-[#172B3A] mb-6 uppercase tracking-widest font-semibold shadow-xs">
              <Sparkles size={12} className="text-[#D3A56C]" />
              <span>HYDERABAD · INDIA // STRATEGIC BRAND ARCHITECTURE</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-[#172B3A] mb-8 uppercase leading-[0.98]">
              Branding Studio in Hyderabad<span className="text-[#3B5B72]">.</span>
            </h1>

            <p className="text-lg sm:text-2xl text-[#30383D] font-sans leading-relaxed mb-10 max-w-3xl">
              We engineer brand identities that command authority. Comprehensive brand strategy, editorial visual systems, and category positioning for ambitious businesses in Hyderabad and beyond.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link 
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#172B3A] text-white px-8 py-4 rounded-full font-mono text-xs md:text-sm font-bold hover:bg-[#3B5B72] transition-all uppercase shadow-md group tracking-wider"
              >
                <span>COMMISSION A BRAND SYSTEM</span>
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>

              <Link
                href="/work"
                className="inline-flex items-center gap-2 bg-white border border-[#7899B0]/30 text-[#172B3A] px-7 py-4 rounded-full font-mono text-xs md:text-sm font-bold hover:border-[#172B3A] transition-all uppercase shadow-xs group tracking-wider"
              >
                <span>EXPLORE BRAND ARCHIVES</span>
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform text-[#3B5B72]" />
              </Link>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-3xl bg-white border border-[#7899B0]/25 shadow-xs mb-20">
            <div className="p-4 border-r border-[#7899B0]/15 last:border-none">
              <div className="text-2xl sm:text-3xl font-display font-black text-[#172B3A]">POSITIONING</div>
              <div className="text-xs font-mono uppercase text-[#3B5B72] tracking-wider mt-1">Core Market Thesis</div>
            </div>
            <div className="p-4 md:border-r border-[#7899B0]/15">
              <div className="text-2xl sm:text-3xl font-display font-black text-[#D3A56C]">SWISS-GRID</div>
              <div className="text-xs font-mono uppercase text-[#3B5B72] tracking-wider mt-1">Editorial Precision</div>
            </div>
            <div className="p-4 border-r border-[#7899B0]/15 last:border-none">
              <div className="text-2xl sm:text-3xl font-display font-black text-[#172B3A]">360°</div>
              <div className="text-xs font-mono uppercase text-[#3B5B72] tracking-wider mt-1">Design Systems</div>
            </div>
            <div className="p-4">
              <div className="text-2xl sm:text-3xl font-display font-black text-[#172B3A]">CODE-READY</div>
              <div className="text-xs font-mono uppercase text-[#3B5B72] tracking-wider mt-1">Next.js Web Tokens</div>
            </div>
          </div>

          {/* The Contrast: Brand Strategy vs Graphic Decoration */}
          <div className="border-t border-[#7899B0]/25 pt-16 pb-20">
            <div className="max-w-3xl mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#7899B0]/30 text-xs font-mono text-[#3B5B72] uppercase tracking-wider mb-4">
                STRATEGIC POSITIONING VS LOGO DECORATION
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-[#172B3A] tracking-tight mb-4">
                A Logo Is Not a Strategy.
              </h2>
              <p className="text-base sm:text-lg text-[#30383D] leading-relaxed">
                Authority is never won with decorative clipart. In high-stakes B2B buying decisions across Hyderabad, customers buy clarity, credibility, and pricing confidence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-3xl bg-white border border-[#172B3A] p-8 shadow-md">
                <div className="w-10 h-10 rounded-xl bg-[#172B3A] text-white flex items-center justify-center mb-4">
                  <Compass size={20} className="text-[#D3A56C]" />
                </div>
                <h3 className="text-xl font-display font-bold text-[#172B3A] mb-3">
                  The Strategic Brand System
                </h3>
                <p className="text-sm text-[#30383D] leading-relaxed mb-4">
                  We define your commercial moat first. The visual assets, typography, and tone of voice become undeniable evidence of your market leadership.
                </p>
                <ul className="space-y-2.5 text-xs font-mono text-[#172B3A]">
                  <li className="flex items-center gap-2">✓ Category-Dominant Positioning Thesis</li>
                  <li className="flex items-center gap-2">✓ Bespoke Monograms & Typography Suites</li>
                  <li className="flex items-center gap-2">✓ Multilingual Regional Voice (EN, TE, HI, UR)</li>
                  <li className="flex items-center gap-2">✓ Direct Translation into Next.js Design Tokens</li>
                </ul>
              </div>

              <div className="rounded-3xl bg-white border border-[#7899B0]/25 p-8 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-[#7899B0]/20 text-[#172B3A] flex items-center justify-center mb-4">
                  <Palette size={20} className="text-[#172B3A]" />
                </div>
                <h3 className="text-xl font-display font-bold text-[#30383D]/80 mb-3">
                  Cosmetic Graphic Design
                </h3>
                <p className="text-sm text-[#30383D]/70 leading-relaxed mb-4">
                  Superficial logos designed without market research lead to commoditization, discount negotiations, and expensive redesigns within 12 months.
                </p>
                <ul className="space-y-2.5 text-xs font-mono text-[#30383D]/70">
                  <li className="flex items-center gap-2">✕ Generic Canva / Stock Template Marks</li>
                  <li className="flex items-center gap-2">✕ Zero Market Differentiation or Thesis</li>
                  <li className="flex items-center gap-2">✕ Inconsistent Typography Across Touchpoints</li>
                  <li className="flex items-center gap-2">✕ Disconnected from Web Engineering</li>
                </ul>
              </div>
            </div>
          </div>

          {/* The Method */}
          <div className="border-t border-[#7899B0]/25 pt-16 pb-20">
            <div className="max-w-3xl mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#7899B0]/30 text-xs font-mono text-[#3B5B72] uppercase tracking-wider mb-4">
                THE BRAND ARCHITECTURE METHOD
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-[#172B3A] tracking-tight mb-4">
                From Category Insight to Living Identity.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {methodSteps.map((step) => (
                <div key={step.phase} className="p-7 rounded-3xl bg-white border border-[#7899B0]/25 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-mono font-bold text-[#D3A56C] uppercase tracking-widest mb-4">
                      PHASE // {step.phase}
                    </div>
                    <h3 className="font-display font-bold text-lg text-[#172B3A] mb-3 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-sm text-[#30383D] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sectors in Hyderabad */}
          <div className="border-t border-[#7899B0]/25 pt-16 pb-20">
            <div className="max-w-3xl mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#7899B0]/30 text-xs font-mono text-[#3B5B72] uppercase tracking-wider mb-4">
                <MapPin size={12} className="text-[#D3A56C]" />
                REGIONAL ENTERPRISE SECTORS
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-[#172B3A] tracking-tight mb-4">
                Branding for Hyderabad’s Most Demanding Leaders.
              </h2>
              <p className="text-base sm:text-lg text-[#30383D] leading-relaxed">
                We partner with founders, real estate developers, and corporate executives across Telangana seeking to build generational commercial equity.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {hyderabadSectors.map((sector) => (
                <div key={sector.sector} className="p-8 rounded-3xl bg-white border border-[#7899B0]/25 shadow-xs">
                  <h3 className="text-xl font-display font-bold text-[#172B3A] mb-2">
                    {sector.sector}
                  </h3>
                  <p className="text-sm text-[#30383D] leading-relaxed">
                    {sector.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Cross-Service Matrix */}
          <div className="border-t border-[#7899B0]/25 pt-16 pb-12">
            <div className="p-8 sm:p-12 rounded-3xl bg-[#172B3A] text-[#F1F3F1] border border-[#7899B0]/30 shadow-lg">
              <div className="max-w-2xl mb-8">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#D3A56C] block mb-2">
                  THE CONNECTED SYSTEM
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-extrabold mb-3">
                  Translate Your New Brand into Code and Organic Search.
                </h3>
                <p className="text-sm sm:text-base text-[#DCE6EB] leading-relaxed">
                  A timeless brand deserves an ultra-fast Next.js website and compounding organic visibility on Google.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Link
                  href="/digital-marketing-agency-hyderabad"
                  className="p-6 rounded-2xl bg-white/5 border border-[#7899B0]/30 hover:bg-white/10 transition-all group flex flex-col justify-between"
                >
                  <div>
                    <h4 className="font-display font-bold text-base text-white group-hover:text-[#D3A56C] transition-colors mb-1">
                      Digital Marketing Hyderabad →
                    </h4>
                    <p className="text-xs text-[#DCE6EB] font-sans">
                      Owned organic acquisition, GEO, and sustainable pipeline growth.
                    </p>
                  </div>
                  <div className="mt-4 flex justify-end">
                    <ArrowUpRight size={18} className="text-[#93B2C8] group-hover:text-white transition-colors" />
                  </div>
                </Link>

                <Link
                  href="/web-design-company-hyderabad"
                  className="p-6 rounded-2xl bg-white/5 border border-[#7899B0]/30 hover:bg-white/10 transition-all group flex flex-col justify-between"
                >
                  <div>
                    <h4 className="font-display font-bold text-base text-white group-hover:text-[#D3A56C] transition-colors mb-1">
                      Web Design Hyderabad →
                    </h4>
                    <p className="text-xs text-[#DCE6EB] font-sans">
                      Deploy your brand across custom Next.js web applications.
                    </p>
                  </div>
                  <div className="mt-4 flex justify-end">
                    <ArrowUpRight size={18} className="text-[#93B2C8] group-hover:text-white transition-colors" />
                  </div>
                </Link>

                <Link
                  href="/seo-agency-hyderabad"
                  className="p-6 rounded-2xl bg-white/5 border border-[#7899B0]/30 hover:bg-white/10 transition-all group flex flex-col justify-between"
                >
                  <div>
                    <h4 className="font-display font-bold text-base text-white group-hover:text-[#D3A56C] transition-colors mb-1">
                      SEO Agency Hyderabad →
                    </h4>
                    <p className="text-xs text-[#DCE6EB] font-sans">
                      Drive top-tier organic search and AI citations across Google.
                    </p>
                  </div>
                  <div className="mt-4 flex justify-end">
                    <ArrowUpRight size={18} className="text-[#93B2C8] group-hover:text-white transition-colors" />
                  </div>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </main>

      <SelectedWork limit={2} />
      
      <VyomaFaq 
        items={brandingFaqs}
        badge="BRANDING FAQs · HYDERABAD"
        headline={
          <>
            Branding in Hyderabad. <br />
            <span className="text-[#3B5B72]">Strategic Clarifications on Scope & Impact.</span>
          </>
        }
        description="Frequently asked questions about our category positioning method, design systems, and brand deliverables in Hyderabad."
      />
    </>
  );
}
