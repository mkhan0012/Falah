import { Metadata } from "next";
import Link from "next/link";
import { 
  ArrowUpRight, 
  Sparkles, 
  BrainCircuit, 
  MapPin, 
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  Zap,
  BarChart3
} from "lucide-react";
import SelectedWork from "@/components/sections/SelectedWork";
import VyomaFaq from "@/components/sections/VyomaFaq";
import { digitalMarketingFaqs } from "@/data/faqs";
import { 
  generateLocalBusinessSchema, 
  generateBreadcrumbSchema,
  generateFaqSchema 
} from "@/lib/seo";

export const metadata: Metadata = {
  title: "Digital Marketing Agency in Hyderabad | Organic Growth & Attribution | VYOMA Media",
  description:
    "VYOMA Media is an elite digital marketing agency in Hyderabad. We build compounding organic search, brand attribution, and high-converting acquisition systems in HITEC City & Gachibowli.",
  keywords: [
    "digital marketing agency hyderabad",
    "digital marketing company in hyderabad",
    "best digital marketing agency in hyderabad",
    "digital marketing agency in madhapur",
    "digital marketing company HITEC city",
    "B2B digital marketing agency hyderabad",
    "organic growth marketing hyderabad",
    "digital marketing services gachibowli",
    "performance marketing agency hyderabad",
    "Generative Engine Optimization Hyderabad",
  ],
  alternates: {
    canonical: "https://vyomamedia.co.in/digital-marketing-agency-hyderabad",
  },
  openGraph: {
    title: "Digital Marketing Agency in Hyderabad | VYOMA Media",
    description:
      "Stop renting attention on paid ad treadmills. We engineer compounding organic digital marketing, Next.js web applications, and AI search discoverability for Hyderabad enterprises.",
    url: "https://vyomamedia.co.in/digital-marketing-agency-hyderabad",
    siteName: "Vyoma Media",
    locale: "en_IN",
    type: "website",
  },
};

export default function DigitalMarketingAgencyHyderabad() {
  const localSchema = generateLocalBusinessSchema({
    title: "VYOMA Media — Digital Marketing Agency in Hyderabad",
    description:
      "Premier digital marketing agency in Hyderabad delivering compounding organic search visibility, high-speed Next.js web systems, and Generative Engine Optimization (GEO).",
    url: "https://vyomamedia.co.in/digital-marketing-agency-hyderabad",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Digital Marketing Agency Hyderabad", url: "/digital-marketing-agency-hyderabad" },
  ]);

  const faqSchema = generateFaqSchema(digitalMarketingFaqs);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Full-Funnel Digital Marketing & Owned Growth Systems in Hyderabad",
    serviceType: "Digital Marketing Services",
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
      { "@type": "AdministrativeArea", name: "Madhapur" },
      { "@type": "AdministrativeArea", name: "Financial District" },
      { "@type": "AdministrativeArea", name: "Jubilee Hills" },
      { "@type": "AdministrativeArea", name: "Banjara Hills" },
      { "@type": "AdministrativeArea", name: "Kokapet" },
      { "@type": "AdministrativeArea", name: "Telangana" },
    ],
    description:
      "Comprehensive digital marketing architecture for Hyderabad businesses: Technical SEO, Generative Engine Optimization (GEO), high-conversion web development, brand narrative, and closed-loop revenue attribution.",
  };

  const hyderabadHubs = [
    {
      area: "HITEC City & Madhapur",
      desc: "B2B SaaS, cloud architecture, and IT enterprise marketing engineered to capture high-intent procurement searches and venture-backed inquiries.",
    },
    {
      area: "Financial District & Gachibowli",
      desc: "Commercial growth systems for wealth management, global capability centres (GCCs), executive consulting, and modern commercial offices.",
    },
    {
      area: "Jubilee Hills & Banjara Hills",
      desc: "High-net-worth customer acquisition for luxury real estate, healthcare clinics, multi-speciality hospital networks, and premium lifestyle brands.",
    },
    {
      area: "Kokapet, Neopolis & Nanakramguda",
      desc: "High-value lead generation and aspirational brand storytelling for ultra-luxury residential towers and commercial property developers.",
    },
  ];

  const pillars = [
    {
      num: "01",
      icon: TrendingUp,
      title: "Compounding Organic SEO",
      desc: "Zero-cost-per-click inbound traffic. We build topical content architectures and technical search graphs that rank on Google Page 1 and generate inbound pipeline month after month.",
    },
    {
      num: "02",
      icon: BrainCircuit,
      title: "Generative Engine Optimization (GEO)",
      desc: "When enterprise decision-makers prompt ChatGPT, Perplexity, or Gemini for recommended vendors in Hyderabad, our semantic data architecture ensures your company is cited as the authority.",
    },
    {
      num: "03",
      icon: Zap,
      title: "High-Conversion Web Systems",
      desc: "Traffic without conversion is vanity spend. We engineer bespoke Next.js web applications with 100/100 Core Web Vitals that turn qualified visitors into signed enterprise proposals.",
    },
    {
      num: "04",
      icon: BarChart3,
      title: "Closed-Loop Attribution & CAC Reduction",
      desc: "No fluff metrics or inflated impressions. We track qualified opportunities, cost per customer acquisition, and verified pipeline revenue across all digital touchpoints.",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
              <li className="text-[#172B3A] font-bold">DIGITAL MARKETING AGENCY HYDERABAD</li>
            </ol>
          </nav>

          {/* Hero Section */}
          <div className="mb-20 md:mb-28 max-w-5xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#7899B0]/30 text-xs font-mono text-[#172B3A] mb-6 uppercase tracking-widest font-semibold shadow-xs">
              <Sparkles size={12} className="text-[#D3A56C]" />
              <span>HYDERABAD · INDIA // DIGITAL MARKETING & OWNED ACQUISITION</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-[#172B3A] mb-8 uppercase leading-[0.98]">
              Digital Marketing Agency in Hyderabad<span className="text-[#3B5B72]">.</span>
            </h1>

            <p className="text-lg sm:text-2xl text-[#30383D] font-sans leading-relaxed mb-10 max-w-3xl">
              Stop renting attention on perpetual paid ad treadmills. We engineer compounding organic search, brand attribution, and high-converting Next.js web systems that build permanent digital equity for Hyderabad businesses.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link 
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#172B3A] text-white px-8 py-4 rounded-full font-mono text-xs md:text-sm font-bold hover:bg-[#7899B0] transition-all uppercase shadow-md group tracking-wider"
              >
                <span>REQUEST GROWTH AUDIT</span>
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>

              <Link
                href="/keyword-tool"
                className="inline-flex items-center gap-2 bg-white border border-[#7899B0]/30 text-[#172B3A] px-7 py-4 rounded-full font-mono text-xs md:text-sm font-bold hover:border-[#172B3A] transition-all uppercase shadow-xs group tracking-wider"
              >
                <span>EXPLORE KEYWORD TOOL</span>
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform text-[#3B5B72]" />
              </Link>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-3xl bg-white border border-[#7899B0]/25 shadow-xs mb-20">
            <div className="p-4 border-r border-[#7899B0]/15 last:border-none">
              <div className="text-2xl sm:text-3xl font-display font-black text-[#172B3A]">0 ₹</div>
              <div className="text-xs font-mono uppercase text-[#3B5B72] tracking-wider mt-1">Rented Cost-Per-Click</div>
            </div>
            <div className="p-4 md:border-r border-[#7899B0]/15">
              <div className="text-2xl sm:text-3xl font-display font-black text-[#D3A56C]">PAGE 1</div>
              <div className="text-xs font-mono uppercase text-[#3B5B72] tracking-wider mt-1">Commercial Google Inbound</div>
            </div>
            <div className="p-4 border-r border-[#7899B0]/15 last:border-none">
              <div className="text-2xl sm:text-3xl font-display font-black text-[#172B3A]">GEO + AI</div>
              <div className="text-xs font-mono uppercase text-[#3B5B72] tracking-wider mt-1">Perplexity & SGE Citations</div>
            </div>
            <div className="p-4">
              <div className="text-2xl sm:text-3xl font-display font-black text-[#172B3A]">100%</div>
              <div className="text-xs font-mono uppercase text-[#3B5B72] tracking-wider mt-1">Owned Growth Assets</div>
            </div>
          </div>

          {/* The Rented Treadmill vs. Owned Growth Paradigm */}
          <div className="border-t border-[#7899B0]/25 pt-16 pb-20">
            <div className="max-w-3xl mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#7899B0]/30 text-xs font-mono text-[#3B5B72] uppercase tracking-wider mb-4">
                THE COMMERCIAL AUDIT
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-[#172B3A] tracking-tight mb-4">
                Why Hyderabad Businesses Escape The Rented Ad Treadmill.
              </h2>
              <p className="text-base sm:text-lg text-[#30383D] leading-relaxed">
                Most digital marketing agencies in Hyderabad act as media brokers—charging you a monthly retainer simply to burn your cash on Google and Meta Ads. When the budget stops, your traffic disappears. We build owned acquisition engines that compound in enterprise valuation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Typical Agency Card */}
              <div className="rounded-3xl bg-white/70 border border-[#7899B0]/25 p-8 shadow-xs">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#172B3A]/5 text-[#30383D] text-[11px] font-mono font-bold uppercase tracking-wider mb-6">
                  Typical Digital Agency (Rented Traffic)
                </div>
                <ul className="space-y-4 text-sm text-[#30383D]">
                  <li className="flex items-start gap-3">
                    <span className="text-[#D3A56C] font-mono font-bold mt-0.5">✕</span>
                    <div>
                      <strong className="text-[#172B3A] block">Perpetual Ad Spend Dependency:</strong>
                      Customer acquisition cost (CAC) increases every quarter as bidding competition rises in Hyderabad.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#D3A56C] font-mono font-bold mt-0.5">✕</span>
                    <div>
                      <strong className="text-[#172B3A] block">Zero Residual Equity:</strong>
                      The moment you pause ad payments, lead flow instantly drops to zero.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#D3A56C] font-mono font-bold mt-0.5">✕</span>
                    <div>
                      <strong className="text-[#172B3A] block">Vanity Metrics Over Revenue:</strong>
                      Monthly reports filled with impressions and clicks that never show up in your corporate bank account.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#D3A56C] font-mono font-bold mt-0.5">✕</span>
                    <div>
                      <strong className="text-[#172B3A] block">Sluggish WordPress Templates:</strong>
                      Driving expensive traffic to bloated websites that take 4+ seconds to load on mobile.
                    </div>
                  </li>
                </ul>
              </div>

              {/* The VYOMA Owned System Card */}
              <div className="rounded-3xl bg-[#172B3A] text-white border border-[#172B3A] p-8 shadow-md flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#D3A56C] text-[11px] font-mono font-bold uppercase tracking-wider mb-6">
                    The VYOMA System (Owned Growth)
                  </div>
                  <ul className="space-y-4 text-sm text-[#DCE6EB]">
                    <li className="flex items-start gap-3">
                      <ShieldCheck size={18} className="text-[#D3A56C] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block">Compounding Organic Asset Value:</strong>
                        Top-ranking search pages continue delivering qualified B2B leads month after month with zero cost-per-click.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <ShieldCheck size={18} className="text-[#D3A56C] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block">Declining Customer Acquisition Cost (CAC):</strong>
                        As topical search authority grows, blended customer acquisition cost steadily declines over time.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <ShieldCheck size={18} className="text-[#D3A56C] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block">Generative Engine Optimization (GEO):</strong>
                        Direct citations and brand recommendations when high-value clients query ChatGPT, Perplexity, and Gemini.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <ShieldCheck size={18} className="text-[#D3A56C] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block">Sub-Second Next.js Conversion Speed:</strong>
                        Instantaneous mobile rendering that captures maximum buyer intent before visitors bounce.
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="pt-6 border-t border-white/10 mt-6">
                  <span className="text-xs font-mono text-[#93B2C8] uppercase tracking-wider block">
                    THE VYOMA GUARANTEE: Everything we build remains 100% your commercial property.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* The 4 Core Growth Pillars */}
          <div className="border-t border-[#7899B0]/25 pt-16 pb-20">
            <div className="max-w-3xl mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#7899B0]/30 text-xs font-mono text-[#3B5B72] uppercase tracking-wider mb-4">
                PROPRIETARY METHODOLOGY
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-[#172B3A] tracking-tight mb-4">
                The 4-Pillar Digital Marketing Architecture.
              </h2>
              <p className="text-base sm:text-lg text-[#30383D] leading-relaxed">
                We synthesize deep technical SEO, generative AI visibility, editorial brand storytelling, and modern web engineering into an interconnected acquisition machine.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {pillars.map((pillar) => {
                const IconComponent = pillar.icon;
                return (
                  <div key={pillar.num} className="p-7 rounded-3xl bg-white border border-[#7899B0]/25 shadow-xs flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-mono font-bold text-[#D3A56C] uppercase tracking-widest">
                          PILLAR // {pillar.num}
                        </span>
                        <div className="w-8 h-8 rounded-lg bg-[#F1F3F1] flex items-center justify-center text-[#172B3A]">
                          <IconComponent size={16} />
                        </div>
                      </div>
                      <h3 className="font-display font-bold text-lg text-[#172B3A] mb-3 leading-snug">
                        {pillar.title}
                      </h3>
                      <p className="text-sm text-[#30383D] leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Hyderabad Commercial Corridors */}
          <div className="border-t border-[#7899B0]/25 pt-16 pb-20">
            <div className="max-w-3xl mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#7899B0]/30 text-xs font-mono text-[#3B5B72] uppercase tracking-wider mb-4">
                <MapPin size={12} className="text-[#D3A56C]" />
                HYDERABAD REGIONAL FOOTPRINT
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-[#172B3A] tracking-tight mb-4">
                Targeting High-Density Commercial Hubs.
              </h2>
              <p className="text-base sm:text-lg text-[#30383D] leading-relaxed">
                Whether you are a B2B technology firm in HITEC City or an ultra-luxury developer in Kokapet, we engineer custom commercial search funnels tailored to how Hyderabad buyers search and transact.
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

          {/* Cross-Service Linking Matrix */}
          <div className="border-t border-[#7899B0]/25 pt-16 pb-12">
            <div className="p-8 sm:p-12 rounded-3xl bg-[#172B3A] text-[#F1F3F1] border border-[#7899B0]/30 shadow-lg">
              <div className="max-w-2xl mb-8">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#D3A56C] block mb-2">
                  THE CONNECTED SYSTEM
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-extrabold mb-3">
                  Digital Marketing Multiplies When Connected to Code & Brand.
                </h3>
                <p className="text-sm sm:text-base text-[#DCE6EB] leading-relaxed">
                  Explore how our specialized web design, SEO, and brand positioning studios integrate seamlessly with your digital marketing campaigns.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Link
                  href="/seo-agency-hyderabad"
                  className="p-6 rounded-2xl bg-white/5 border border-[#7899B0]/30 hover:bg-white/10 transition-all group flex flex-col justify-between"
                >
                  <div>
                    <h4 className="font-display font-bold text-base text-white group-hover:text-[#D3A56C] transition-colors mb-1">
                      SEO Agency Hyderabad →
                    </h4>
                    <p className="text-xs text-[#DCE6EB] font-sans">
                      Dominate Google rankings, local map packs, and AI search engines.
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
                      Sub-second custom Next.js websites built for high conversion.
                    </p>
                  </div>
                  <div className="mt-4 flex justify-end">
                    <ArrowUpRight size={18} className="text-[#93B2C8] group-hover:text-white transition-colors" />
                  </div>
                </Link>

                <Link
                  href="/branding-studio-hyderabad"
                  className="p-6 rounded-2xl bg-white/5 border border-[#7899B0]/30 hover:bg-white/10 transition-all group flex flex-col justify-between"
                >
                  <div>
                    <h4 className="font-display font-bold text-base text-white group-hover:text-[#D3A56C] transition-colors mb-1">
                      Branding Studio Hyderabad →
                    </h4>
                    <p className="text-xs text-[#DCE6EB] font-sans">
                      Category positioning and visual identities that command authority.
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
        items={digitalMarketingFaqs}
        badge="DIGITAL MARKETING FAQs · HYDERABAD"
        headline={
          <>
            Digital Marketing in Hyderabad. <br />
            <span className="text-[#3B5B72]">Direct Answers on ROI, Ad Spend & Systems.</span>
          </>
        }
        description="Frequently asked questions about our owned digital marketing methodology, customer acquisition cost reduction, and generative AI search citations."
      />
    </>
  );
}