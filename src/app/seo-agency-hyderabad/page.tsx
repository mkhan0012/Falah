import { Metadata } from "next";
import Link from "next/link";
import { 
  ArrowUpRight, 
  Sparkles, 
  BrainCircuit, 
  MapPin, 
  ArrowRight
} from "lucide-react";
import SelectedWork from "@/components/sections/SelectedWork";
import VyomaFaq from "@/components/sections/VyomaFaq";
import { seoFaqs } from "@/data/faqs";
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "SEO Agency in Hyderabad | Organic Search & GEO Studio | VYOMA Media",
  description:
    "VYOMA Media is an elite SEO agency in Hyderabad. We engineer local SEO, technical Next.js architecture, and Generative Engine Optimization (GEO) for compounding pipeline.",
  keywords: [
    "SEO agency in Hyderabad",
    "SEO company Hyderabad",
    "local SEO Hyderabad",
    "technical SEO agency Hyderabad",
    "Generative Engine Optimization Hyderabad",
    "Google map pack ranking Hyderabad",
    "B2B SEO services HITEC City",
    "organic growth studio Hyderabad",
  ],
  alternates: {
    canonical: "https://vyomamedia.co.in/seo-agency-hyderabad",
  },
  openGraph: {
    title: "SEO Agency in Hyderabad | VYOMA Media",
    description:
      "Dominate category search across Google and AI Answer Engines. We engineer high-velocity SEO and GEO pipelines that put your brand directly in front of enterprise B2B buyers.",
    url: "https://vyomamedia.co.in/seo-agency-hyderabad",
    siteName: "VYOMA Media",
    locale: "en_IN",
    type: "website",
  },
};

export default function SeoAgencyHyderabad() {
  const localSchema = generateLocalBusinessSchema({
    title: "VYOMA Media — SEO Agency in Hyderabad",
    description:
      "Premier SEO and Generative Engine Optimization agency in Hyderabad delivering technical crawl architecture and local map pack dominance.",
    url: "https://vyomamedia.co.in/seo-agency-hyderabad",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "SEO Agency Hyderabad", url: "/seo-agency-hyderabad" },
  ]);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Technical SEO & Generative Engine Optimization (GEO) in Hyderabad",
    serviceType: "Search Engine Optimization",
    provider: {
      "@type": "LocalBusiness",
      name: "VYOMA Media",
      url: "https://vyomamedia.co.in",
      telephone: "+917008472069",
    },
    areaServed: [
      { "@type": "City", name: "Hyderabad" },
      { "@type": "AdministrativeArea", name: "HITEC City" },
      { "@type": "AdministrativeArea", name: "Gachibowli" },
      { "@type": "AdministrativeArea", name: "Jubilee Hills" },
      { "@type": "AdministrativeArea", name: "Banjara Hills" },
      { "@type": "AdministrativeArea", name: "Financial District" },
      { "@type": "AdministrativeArea", name: "Telangana" },
    ],
    description:
      "Full-funnel search engine optimization, entity schema markup, programmatic keyword architecture, and Generative Engine Optimization for AI citations on ChatGPT and Google SGE.",
  };

  const hyderabadHubs = [
    {
      area: "HITEC City & Madhapur",
      desc: "Topical authority clusters for enterprise software, cloud infrastructure, and AI engineering platforms.",
    },
    {
      area: "Financial District & Gachibowli",
      desc: "Commercial intent rankings for corporate consultancies, investment groups, and executive B2B services.",
    },
    {
      area: "Jubilee Hills & Banjara Hills",
      desc: "Local Google Map Pack dominance for high-value real estate developers, private clinics, and luxury hospitality.",
    },
    {
      area: "Balanagar, Sanathnagar & Cherlapally",
      desc: "Export-oriented B2B keyword architecture for heavy manufacturing, pharmaceuticals, and industrial supply chains.",
    },
  ];

  const pillars = [
    {
      num: "01",
      title: "Technical Foundation & Core Web Vitals",
      desc: "Sub-second server response times, schema entity graphs, zero crawl budget waste, and perfect mobile render hygiene.",
    },
    {
      num: "02",
      title: "Topical Authority & Content Hubs",
      desc: "Comprehensive topic coverage that signals undeniable domain mastery to Google’s Helpful Content and Quality Rater algorithms.",
    },
    {
      num: "03",
      title: "Generative Engine Optimization (GEO)",
      desc: "Architecting machine-readable facts and brand citations so ChatGPT, Perplexity, and Gemini cite your company as the top recommendation.",
    },
    {
      num: "04",
      title: "Local Map Pack & High-Intent Enquiries",
      desc: "Google Business Profile optimization, localized citation networks, and direct enquiry tracking to measure bottom-line revenue impact.",
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
            <ol className="flex items-center gap-2 text-xs font-mono text-[#7899B0]">
              <li>
                <Link href="/" className="hover:text-[#172B3A] transition-colors">
                  HOME
                </Link>
              </li>
              <li>/</li>
              <li className="text-[#172B3A] font-bold">SEO AGENCY HYDERABAD</li>
            </ol>
          </nav>

          {/* Hero Section */}
          <div className="mb-20 md:mb-28 max-w-5xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#7899B0]/30 text-xs font-mono text-[#172B3A] mb-6 uppercase tracking-widest font-semibold shadow-xs">
              <Sparkles size={12} className="text-[#D3A56C]" />
              <span>HYDERABAD · INDIA // LOCAL & GLOBAL SEARCH AUTHORITY</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-[#172B3A] mb-8 uppercase leading-[0.98]">
              SEO Agency in Hyderabad<span className="text-[#7899B0]">.</span>
            </h1>

            <p className="text-lg sm:text-2xl text-[#30383D] font-sans leading-relaxed mb-10 max-w-3xl">
              Dominate category search across Google and AI Answer Engines. We engineer high-velocity SEO and GEO pipelines that put your brand directly in front of enterprise B2B buyers without recurring ad spend.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link 
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#172B3A] text-white px-8 py-4 rounded-full font-mono text-xs md:text-sm font-bold hover:bg-[#7899B0] transition-all uppercase shadow-md group tracking-wider"
              >
                <span>REQUEST SEARCH AUDIT</span>
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>

              <Link
                href="/keyword-tool"
                className="inline-flex items-center gap-2 bg-white border border-[#7899B0]/30 text-[#172B3A] px-7 py-4 rounded-full font-mono text-xs md:text-sm font-bold hover:border-[#172B3A] transition-all uppercase shadow-xs group tracking-wider"
              >
                <span>EXPLORE KEYWORD TOOL</span>
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform text-[#7899B0]" />
              </Link>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-3xl bg-white border border-[#7899B0]/25 shadow-xs mb-20">
            <div className="p-4 border-r border-[#7899B0]/15 last:border-none">
              <div className="text-2xl sm:text-3xl font-display font-black text-[#172B3A]">PAGE 1</div>
              <div className="text-xs font-mono uppercase text-[#7899B0] tracking-wider mt-1">High-Intent Rankings</div>
            </div>
            <div className="p-4 md:border-r border-[#7899B0]/15">
              <div className="text-2xl sm:text-3xl font-display font-black text-[#D3A56C]">GEO + AI</div>
              <div className="text-xs font-mono uppercase text-[#7899B0] tracking-wider mt-1">Perplexity & SGE Ready</div>
            </div>
            <div className="p-4 border-r border-[#7899B0]/15 last:border-none">
              <div className="text-2xl sm:text-3xl font-display font-black text-[#172B3A]">100%</div>
              <div className="text-xs font-mono uppercase text-[#7899B0] tracking-wider mt-1">Owned Organic Traffic</div>
            </div>
            <div className="p-4">
              <div className="text-2xl sm:text-3xl font-display font-black text-[#7899B0]">0 ₹</div>
              <div className="text-xs font-mono uppercase text-[#7899B0] tracking-wider mt-1">Rented Cost-Per-Click</div>
            </div>
          </div>

          {/* The Shift to Generative Engine Optimization (GEO) */}
          <div className="border-t border-[#7899B0]/25 pt-16 pb-20">
            <div className="max-w-3xl mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#7899B0]/30 text-xs font-mono text-[#7899B0] uppercase tracking-wider mb-4">
                THE 2026 SEARCH PARADIGM
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-[#172B3A] tracking-tight mb-4">
                Google Rankings + AI Answer Engine Citations.
              </h2>
              <p className="text-base sm:text-lg text-[#30383D] leading-relaxed">
                Modern B2B buyers no longer just click blue links. They ask ChatGPT, Perplexity, and Google AI Overviews: <em>&quot;Who are the top web design companies in Hyderabad?&quot;</em> We optimize your brand to be cited and recommended at every touchpoint.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-3xl bg-white border border-[#172B3A] p-8 shadow-md">
                <div className="w-10 h-10 rounded-xl bg-[#172B3A] text-white flex items-center justify-center mb-4">
                  <BrainCircuit size={20} className="text-[#D3A56C]" />
                </div>
                <h3 className="text-xl font-display font-bold text-[#172B3A] mb-3">
                  Generative Engine Optimization (GEO)
                </h3>
                <p className="text-sm text-[#30383D] leading-relaxed mb-4">
                  We structure your company data, technical schema, and verifiable facts so LLMs index your business as the definitive answer for your sector.
                </p>
                <ul className="space-y-2.5 text-xs font-mono text-[#172B3A]">
                  <li className="flex items-center gap-2">✓ Entity Schema & Knowledge Graph Verification</li>
                  <li className="flex items-center gap-2">✓ Direct Brand Citations on Perplexity & Gemini</li>
                  <li className="flex items-center gap-2">✓ Information Gain Content Architecture</li>
                </ul>
              </div>

              <div className="rounded-3xl bg-white border border-[#7899B0]/25 p-8 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-[#7899B0]/20 text-[#172B3A] flex items-center justify-center mb-4">
                  <MapPin size={20} className="text-[#172B3A]" />
                </div>
                <h3 className="text-xl font-display font-bold text-[#172B3A] mb-3">
                  Hyper-Local Hyderabad Map Pack SEO
                </h3>
                <p className="text-sm text-[#30383D] leading-relaxed mb-4">
                  Capture high-intent searches from decision-makers searching locally in Hyderabad. We optimize your Google Business profile and localized geo-landing pages.
                </p>
                <ul className="space-y-2.5 text-xs font-mono text-[#30383D]">
                  <li className="flex items-center gap-2">✓ Top-3 Google Local 3-Pack Placement</li>
                  <li className="flex items-center gap-2">✓ Geo-Targeted Schemas for Hyderabad Corridors</li>
                  <li className="flex items-center gap-2">✓ Verified Local NAP Citation Consistency</li>
                </ul>
              </div>
            </div>
          </div>

          {/* The 4 Pillars */}
          <div className="border-t border-[#7899B0]/25 pt-16 pb-20">
            <div className="max-w-3xl mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#7899B0]/30 text-xs font-mono text-[#7899B0] uppercase tracking-wider mb-4">
                THE COMPOUNDING ENGINE
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-[#172B3A] tracking-tight mb-4">
                Our 4-Pillar Organic Authority System.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {pillars.map((pillar) => (
                <div key={pillar.num} className="p-7 rounded-3xl bg-white border border-[#7899B0]/25 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-mono font-bold text-[#D3A56C] uppercase tracking-widest mb-4">
                      PILLAR // {pillar.num}
                    </div>
                    <h3 className="font-display font-bold text-lg text-[#172B3A] mb-3 leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-[#30383D] leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hyderabad Corridors */}
          <div className="border-t border-[#7899B0]/25 pt-16 pb-20">
            <div className="max-w-3xl mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#7899B0]/30 text-xs font-mono text-[#7899B0] uppercase tracking-wider mb-4">
                <MapPin size={12} className="text-[#D3A56C]" />
                REGIONAL SEARCH INTELLIGENCE
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-[#172B3A] tracking-tight mb-4">
                Targeting Commercial Demand Across Hyderabad.
              </h2>
              <p className="text-base sm:text-lg text-[#30383D] leading-relaxed">
                Search behavior in Hyderabad is deeply localized by business district. We build targeted search architecture for each key commercial hub.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {hyderabadHubs.map((hub) => (
                <div key={hub.area} className="p-8 rounded-3xl bg-white border border-[#7899B0]/25 shadow-xs">
                  <h3 className="text-xl font-display font-bold text-[#172B3A] mb-2 flex items-center gap-2">
                    <MapPin size={16} className="text-[#7899B0]" />
                    <span>{hub.area}</span>
                  </h3>
                  <p className="text-sm text-[#30383D] leading-relaxed">
                    {hub.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Cross-Service Linking Matrix */}
          <div className="border-t border-[#7899B0]/25 pt-16 pb-12">
            <div className="p-8 sm:p-12 rounded-3xl bg-[#172B3A] text-[#F1F3F1] border border-[#7899B0]/30 shadow-lg">
              <div className="max-w-2xl mb-8">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#D3A56C] block mb-2">
                  THE CONNECTED SYSTEM
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-extrabold mb-3">
                  Rankings Mean Nothing Without Conversion & Brand Authority.
                </h3>
                <p className="text-sm sm:text-base text-[#DCE6EB] leading-relaxed">
                  Topical search rankings require a high-converting Next.js website and distinguished brand positioning to convert inbound visitors into high-ticket clients.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link
                  href="/web-design-company-hyderabad"
                  className="p-6 rounded-2xl bg-white/5 border border-[#7899B0]/30 hover:bg-white/10 transition-all group flex items-center justify-between"
                >
                  <div>
                    <h4 className="font-display font-bold text-base text-white group-hover:text-[#D3A56C] transition-colors">
                      Web Design Company in Hyderabad →
                    </h4>
                    <p className="text-xs text-[#DCE6EB] mt-1 font-sans">
                      Engineer a sub-second Next.js website that converts traffic.
                    </p>
                  </div>
                  <ArrowUpRight size={18} className="text-[#7899B0] group-hover:text-white transition-colors" />
                </Link>

                <Link
                  href="/branding-studio-hyderabad"
                  className="p-6 rounded-2xl bg-white/5 border border-[#7899B0]/30 hover:bg-white/10 transition-all group flex items-center justify-between"
                >
                  <div>
                    <h4 className="font-display font-bold text-base text-white group-hover:text-[#D3A56C] transition-colors">
                      Branding Studio in Hyderabad →
                    </h4>
                    <p className="text-xs text-[#DCE6EB] mt-1 font-sans">
                      Command industry authority with category-defining brand strategy.
                    </p>
                  </div>
                  <ArrowUpRight size={18} className="text-[#7899B0] group-hover:text-white transition-colors" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </main>

      <SelectedWork limit={2} />
      
      <VyomaFaq 
        items={seoFaqs}
        badge="SEO FAQs · HYDERABAD"
        headline={
          <>
            SEO in Hyderabad. <br />
            <span className="text-[#7899B0]">Honest Answers on Rankings & Timelines.</span>
          </>
        }
        description="Frequently asked questions about our technical search methodology, Google Map Pack rankings, and generative engine optimization."
      />
    </>
  );
}
