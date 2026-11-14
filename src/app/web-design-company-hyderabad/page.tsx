import { Metadata } from "next";
import Link from "next/link";
import { 
  ArrowUpRight, 
  CheckCircle2, 
  Sparkles, 
  MapPin, 
  ArrowRight
} from "lucide-react";
import SelectedWork from "@/components/sections/SelectedWork";
import VyomaFaq from "@/components/sections/VyomaFaq";
import { webDesignFaqs } from "@/data/faqs";
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Web Design Company in Hyderabad | Custom Next.js Development | VYOMA Media",
  description:
    "VYOMA Media is an elite web design company in Hyderabad. We build sub-second, conversion-engineered Next.js websites for enterprises, tech firms, and luxury brands.",
  keywords: [
    "web design company Hyderabad",
    "web design Hyderabad",
    "website development company in Hyderabad",
    "Next.js web development Hyderabad",
    "UI UX design studio Hyderabad",
    "custom web design HITEC City",
    "corporate website designers Gachibowli",
  ],
  alternates: {
    canonical: "https://vyomamedia.co.in/web-design-company-hyderabad",
  },
  openGraph: {
    title: "Web Design Company in Hyderabad | VYOMA Media",
    description:
      "We design and engineer high-speed Next.js web applications focused on buyer psychology, sub-second latency, and qualified lead conversion.",
    url: "https://vyomamedia.co.in/web-design-company-hyderabad",
    siteName: "VYOMA Media",
    locale: "en_IN",
    type: "website",
  },
};

export default function WebDesignHyderabad() {
  const localSchema = generateLocalBusinessSchema({
    title: "VYOMA Media — Web Design Company in Hyderabad",
    description:
      "Premier web design and Next.js engineering company based in Hyderabad, building sub-second commercial digital experiences.",
    url: "https://vyomamedia.co.in/web-design-company-hyderabad",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Web Design Company Hyderabad", url: "/web-design-company-hyderabad" },
  ]);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design & Next.js Web Systems in Hyderabad",
    serviceType: "Web Design & Development",
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
      "Bespoke web design, high-craft UI/UX architecture, and modern Next.js serverless engineering engineered for fast mobile rendering and high lead conversion.",
  };

  const hyderabadHubs = [
    {
      area: "HITEC City & Madhapur",
      desc: "B2B SaaS platforms, deep tech enterprises, and venture-backed startups needing high-speed frontend architecture.",
    },
    {
      area: "Financial District & Gachibowli",
      desc: "Corporate headquarters, asset management institutions, and fintech entities requiring bank-grade security and prestige design.",
    },
    {
      area: "Jubilee Hills & Banjara Hills",
      desc: "Luxury real estate developers, aesthetic healthcare clinics, and premier lifestyle brands seeking editorial aesthetics.",
    },
    {
      area: "Secunderabad & Sanathnagar",
      desc: "Industrial engineering exporters, heavy manufacturing conglomerates, and commercial logistics firms modernizing sales pipelines.",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Commercial Intent & Information Architecture",
      desc: "We analyze buyer psychology, category competitors, and conversion pathways before opening Figma. Every page has a single commercial objective.",
    },
    {
      step: "02",
      title: "Editorial UI/UX Design & Design Systems",
      desc: "Crafted in Figma with Swiss typographic discipline, high-contrast layouts, custom micro-interactions, and accessible design tokens.",
    },
    {
      step: "03",
      title: "Next.js App Router Engineering",
      desc: "Clean TypeScript code, server components, automated image optimization, and zero third-party plugin overhead.",
    },
    {
      step: "04",
      title: "Core Web Vitals & GEO Technical Launch",
      desc: "Rigorous 100/100 Lighthouse audits, schema verification, security header hardening, and analytics attribution setup.",
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
              <li className="text-[#172B3A] font-bold">WEB DESIGN HYDERABAD</li>
            </ol>
          </nav>

          {/* Hero Section */}
          <div className="mb-20 md:mb-28 max-w-5xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#7899B0]/30 text-xs font-mono text-[#172B3A] mb-6 uppercase tracking-widest font-semibold shadow-xs">
              <Sparkles size={12} className="text-[#D3A56C]" />
              <span>HYDERABAD · INDIA // NEXT.JS DIGITAL SYSTEMS</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-[#172B3A] mb-8 uppercase leading-[0.98]">
              Web Design Company in Hyderabad<span className="text-[#3B5B72]">.</span>
            </h1>

            <p className="text-lg sm:text-2xl text-[#30383D] font-sans leading-relaxed mb-10 max-w-3xl">
              We design and engineer high-speed Next.js web applications focused on buyer psychology, sub-second latency, and qualified lead conversion for Hyderabad enterprises and global brands.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link 
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#172B3A] text-white px-8 py-4 rounded-full font-mono text-xs md:text-sm font-bold hover:bg-[#7899B0] transition-all uppercase shadow-md group tracking-wider"
              >
                <span>ENGINEER YOUR WEB SYSTEM</span>
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>

              <Link
                href="/work"
                className="inline-flex items-center gap-2 bg-white border border-[#7899B0]/30 text-[#172B3A] px-7 py-4 rounded-full font-mono text-xs md:text-sm font-bold hover:border-[#172B3A] transition-all uppercase shadow-xs group tracking-wider"
              >
                <span>EXPLORE WORK</span>
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform text-[#3B5B72]" />
              </Link>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-3xl bg-white border border-[#7899B0]/25 shadow-xs mb-20">
            <div className="p-4 border-r border-[#7899B0]/15 last:border-none">
              <div className="text-2xl sm:text-3xl font-display font-black text-[#172B3A]">100/100</div>
              <div className="text-xs font-mono uppercase text-[#3B5B72] font-semibold tracking-wider mt-1">Core Web Vitals</div>
            </div>
            <div className="p-4 md:border-r border-[#7899B0]/15">
              <div className="text-2xl sm:text-3xl font-display font-black text-[#D3A56C]">&lt; 0.8s</div>
              <div className="text-xs font-mono uppercase text-[#3B5B72] font-semibold tracking-wider mt-1">First Contentful Paint</div>
            </div>
            <div className="p-4 border-r border-[#7899B0]/15 last:border-none">
              <div className="text-2xl sm:text-3xl font-display font-black text-[#172B3A]">0%</div>
              <div className="text-xs font-mono uppercase text-[#3B5B72] font-semibold tracking-wider mt-1">Plugin / Theme Bloat</div>
            </div>
            <div className="p-4">
              <div className="text-2xl sm:text-3xl font-display font-black text-[#3B5B72]">SSR + ISR</div>
              <div className="text-xs font-mono uppercase text-[#3B5B72] font-semibold tracking-wider mt-1">Next.js Edge Delivery</div>
            </div>
          </div>

          {/* Comparison Matrix: Why Custom Next.js Architecture Wins */}
          <div className="border-t border-[#7899B0]/25 pt-16 pb-20">
            <div className="max-w-3xl mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#7899B0]/30 text-xs font-mono text-[#3B5B72] font-semibold uppercase tracking-wider mb-4">
                COMMERCIAL ARCHITECTURE COMPARISON
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-[#172B3A] tracking-tight mb-4">
                Why Hyderabad Businesses Choose Custom Next.js Over WordPress.
              </h2>
              <p className="text-base sm:text-lg text-[#30383D] leading-relaxed">
                In competitive markets across HITEC City and Gachibowli, slow websites hemorrhage high-value leads. Here is how modern Next.js engineering outperforms legacy template builders.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-3xl bg-white border border-[#172B3A] p-8 shadow-md relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-[#172B3A] text-white text-[10px] font-mono px-4 py-1.5 rounded-bl-xl font-bold uppercase tracking-widest">
                  VYOMA STANDARD
                </div>
                <h3 className="text-xl font-display font-bold text-[#172B3A] mb-4">
                  Custom Next.js Web Systems
                </h3>
                <ul className="space-y-4 text-sm text-[#30383D]">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-[#172B3A] shrink-0 mt-0.5" />
                    <span><strong>Sub-second TTFB:</strong> Hosted on global serverless edges with automated image compression and zero render-blocking scripts.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-[#172B3A] shrink-0 mt-0.5" />
                    <span><strong>100% Bespoke Code:</strong> Written in modular TypeScript and Tailwind CSS, tailored directly to your commercial conversion flow.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-[#172B3A] shrink-0 mt-0.5" />
                    <span><strong>Native SEO & GEO:</strong> Schema.org entity graphs, automatic XML sitemaps, OpenGraph tags, and semantic HTML built directly into the codebase.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-[#172B3A] shrink-0 mt-0.5" />
                    <span><strong>Impenetrable Security:</strong> No exposed SQL databases or vulnerable WordPress plugins. Zero maintenance downtime.</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-3xl bg-white/70 border border-[#7899B0]/25 p-8 shadow-xs">
                <div className="text-[10px] font-mono text-[#3B5B72] uppercase font-bold tracking-widest mb-2">
                  LEGACY APPROACH
                </div>
                <h3 className="text-xl font-display font-bold text-[#30383D]/80 mb-4">
                  Off-The-Shelf WordPress / Elementor
                </h3>
                <ul className="space-y-4 text-sm text-[#30383D]/70">
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold shrink-0 mt-0.5">✕</span>
                    <span><strong>4-6 Second Load Latency:</strong> Dragged down by 40+ plugins, uncompressed assets, and heavy database queries that fail Core Web Vitals.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold shrink-0 mt-0.5">✕</span>
                    <span><strong>Template Clutter:</strong> Looks identical to dozens of other Hyderabad agency sites with no brand differentiation.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold shrink-0 mt-0.5">✕</span>
                    <span><strong>Fragile SEO Plugins:</strong> Inconsistent metadata, broken canonical tags, and crawling traps that hurt rankings during updates.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold shrink-0 mt-0.5">✕</span>
                    <span><strong>Frequent Vulnerabilities:</strong> Constant security breaches, brute-force spam, and unexpected plugin compatibility breakage.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Process Section */}
          <div className="border-t border-[#7899B0]/25 pt-16 pb-20">
            <div className="max-w-3xl mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#7899B0]/30 text-xs font-mono text-[#3B5B72] font-semibold uppercase tracking-wider mb-4">
                THE ENGINEERING METHOD
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-[#172B3A] tracking-tight mb-4">
                How We Build Category-Dominant Web Systems.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step) => (
                <div key={step.step} className="p-7 rounded-3xl bg-white border border-[#7899B0]/25 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-mono font-bold text-[#D3A56C] uppercase tracking-widest mb-4">
                      PHASE // {step.step}
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

          {/* Hyderabad Business Hubs We Serve */}
          <div className="border-t border-[#7899B0]/25 pt-16 pb-20">
            <div className="max-w-3xl mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#7899B0]/30 text-xs font-mono text-[#3B5B72] font-semibold uppercase tracking-wider mb-4">
                <MapPin size={12} className="text-[#D3A56C]" />
                HYDERABAD COMMERCIAL CORRIDORS
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-[#172B3A] tracking-tight mb-4">
                Web Systems Built for Hyderabad’s Flagship Sectors.
              </h2>
              <p className="text-base sm:text-lg text-[#30383D] leading-relaxed">
                Whether you are a B2B SaaS startup in Madhapur or a legacy industrial manufacturing enterprise in Secunderabad, we build the digital infrastructure that elevates your commercial credibility.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {hyderabadHubs.map((hub) => (
                <div key={hub.area} className="p-8 rounded-3xl bg-white border border-[#7899B0]/25 shadow-xs">
                  <h3 className="text-xl font-display font-bold text-[#172B3A] mb-2 flex items-center gap-2">
                    <MapPin size={16} className="text-[#3B5B72]" />
                    <span>{hub.area}</span>
                  </h3>
                  <p className="text-sm text-[#30383D] leading-relaxed">
                    {hub.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Cross-Service Internal Linking Matrix */}
          <div className="border-t border-[#7899B0]/25 pt-16 pb-12">
            <div className="p-8 sm:p-12 rounded-3xl bg-[#172B3A] text-[#F1F3F1] border border-[#7899B0]/30 shadow-lg">
              <div className="max-w-2xl mb-8">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#D3A56C] block mb-2">
                  THE CONNECTED SYSTEM
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-extrabold mb-3">
                  A High-Speed Website Is Only 1 Part of the Equation.
                </h3>
                <p className="text-sm sm:text-base text-[#DCE6EB] leading-relaxed">
                  Combine your custom web design with our proprietary search engine dominance and category brand positioning for compounding market leadership.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link
                  href="/seo-agency-hyderabad"
                  className="p-6 rounded-2xl bg-white/5 border border-[#7899B0]/30 hover:bg-white/10 transition-all group flex items-center justify-between"
                >
                  <div>
                    <h4 className="font-display font-bold text-base text-white group-hover:text-[#D3A56C] transition-colors">
                      SEO Agency in Hyderabad →
                    </h4>
                    <p className="text-xs text-[#DCE6EB] mt-1 font-sans">
                      Drive compounding organic pipeline from Google & AI search.
                    </p>
                  </div>
                  <ArrowUpRight size={18} className="text-[#93B2C8] group-hover:text-white transition-colors" />
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
                      Build visual identity systems and brand positioning that command respect.
                    </p>
                  </div>
                  <ArrowUpRight size={18} className="text-[#93B2C8] group-hover:text-white transition-colors" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </main>

      <SelectedWork limit={2} />
      
      <VyomaFaq 
        items={webDesignFaqs}
        badge="WEB DESIGN FAQs · HYDERABAD"
        headline={
          <>
            Web Design in Hyderabad. <br />
            <span className="text-[#3B5B72]">Clear Answers on Pricing & Delivery.</span>
          </>
        }
        description="Frequently asked questions about our custom Next.js engineering, timelines, and commercial web deliverables in Hyderabad."
      />
    </>
  );
}
