import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import ServiceSelector from "@/components/sections/ServiceSelector";

export const metadata: Metadata = {
  title: "Organic Search & Technical SEO | VYOMA Media",
  description:
    "Earning top positions on Google and generative AI engine citations without paying per click. Technical SEO and content clusters that compound in Hyderabad.",
  alternates: {
    canonical: "https://vyomamedia.com/services/seo",
  },
};

const situations = [
  "Are tired of rented traffic disappearing the moment ad spend pauses",
  "Rank poorly for high-intent commercial keywords your buyers actually search for",
  "Have a website that search engine crawlers struggle to index or parse correctly",
  "Are invisible to modern AI search summaries (ChatGPT, Google AI Overviews, Perplexity)",
  "Need regional dominance across clinics, developments, or industrial manufacturing zones",
];

const whatWeDo = [
  {
    title: "ORGANIC SEARCH",
    desc: "Earning top positions on Google without paying per click, by covering your subject thoroughly and credibly, in English, Telugu, Hindi, and Urdu.",
  },
  {
    title: "TECHNICAL SEO",
    desc: "The behind-the-scenes setup (site structure, schema markup, redirects, sitemaps) that lets search engines and AI tools read and understand you properly.",
  },
  {
    title: "LOCAL SEO",
    desc: "Google Business Profile, localized schema, and location pages so nearby customers find clinics, builders, and neighbourhood enterprises.",
  },
  {
    title: "CONTENT STRATEGY",
    desc: "Every page and article mapped to a stage of the buying journey: awareness, consideration, or commercial decision.",
  },
];

const deliverables = [
  "Complete Technical Crawl, Core Web Vitals & Indexation Audit",
  "High-Intent Commercial Keyword & Entity Topic Map",
  "Rich Schema Architecture (Medical, RealEstate, Organization, FAQ)",
  "Quarterly Content Cluster Strategy & Buyer-Stage Briefs",
  "Live Visibility Dashboard & Google Search Console Integration",
];

const process = [
  {
    title: "AUDIT",
    desc: "We identify crawling bottlenecks, toxic links, slow server response times, and content gaps.",
  },
  {
    title: "ARCHITECT",
    desc: "We build clean URL taxonomies, schema markup, and internal linking structures that search bots prioritize.",
  },
  {
    title: "AUTHOR",
    desc: "We write authoritative, comprehensive content addressing the exact queries your buyers type into Google.",
  },
  {
    title: "OPTIMIZE",
    desc: "We tune for Core Web Vitals, speed, and mobile responsiveness to ensure maximum index priority.",
  },
  {
    title: "COMPOUND",
    desc: "As topical authority builds, your rankings climb and organic enquiries arrive automatically every month.",
  },
];

const measure = [
  "Page 1 keyword rankings in target commercial categories",
  "Qualified organic inbound enquiries and consultation bookings",
  "Citation frequency in AI Answer Engines (ChatGPT, Gemini, Perplexity)",
  "Decreasing blended customer acquisition cost (CAC)",
];

const faqs = [
  {
    q: "How long does organic SEO take to show results?",
    a: "SEO compounds over time. Early technical and content improvements can show movement within a few months, but ranking in competitive categories usually takes longer, and we'll tell you honestly what to expect before starting.",
  },
  {
    q: "Do you guarantee number 1 rankings?",
    a: "No honest agency guarantees #1 spots because algorithms change continuously. We guarantee rigorous technical execution, high-density editorial content, and a proven compounding methodology.",
  },
  {
    q: "Do you support regional Indian languages?",
    a: "Yes. In Hyderabad and across India, we optimize search presence in Telugu, Hindi, and Urdu where your audience searches in those languages.",
  },
  {
    q: "What is AI Engine / GEO Optimization?",
    a: "More people now get answers from AI tools and search summaries. Those tools draw on clear, credible, well-structured sources. We build content and site structure so you are easy to find and easy to cite.",
  },
];

const flowNodes = ["DEMAND AUDIT", "TECH FOUNDATION", "CONTENT CLUSTERS", "OWNED REVENUE"];

export default function SeoServicePage() {
  return (
    <>
      <main className="min-h-screen bg-[#F1F3F1] pt-36 md:pt-44 pb-24 text-[#30383D] selection:bg-[#7899B0] selection:text-white overflow-hidden relative font-sans">
        <div className="container mx-auto px-5 sm:px-6 md:px-12 max-w-[1360px]">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-mono font-medium tracking-widest text-[#7899B0] hover:text-[#172B3A] transition-colors mb-12 uppercase"
          >
            <ArrowLeft size={16} /> Back to Services
          </Link>

          {/* Hero */}
          <div className="mb-20 md:mb-24 max-w-5xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#7899B0]/30 text-[11px] font-mono text-[#172B3A] mb-6 uppercase tracking-widest font-semibold shadow-sm">
              <span>DISCIPLINE 03 · VISIBILITY & ORGANIC SEARCH</span>
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-[#172B3A] mb-6 uppercase leading-[1.02]">
              Organic Search & Technical SEO<span className="text-[#7899B0]">.</span>
            </h1>
            <p className="text-lg sm:text-2xl text-[#30383D] font-sans leading-relaxed max-w-3xl mb-10">
              Earning top positions on Google and AI engine citations without paying per click. Technical SEO and content clusters that compound into lasting commercial visibility.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#172B3A] text-white px-8 py-4 font-mono text-xs font-bold hover:bg-[#20394c] transition-colors uppercase rounded-full group shadow-md"
            >
              START AN SEO PROJECT{" "}
              <ArrowUpRight
                size={16}
                className="text-[#7899B0] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </Link>
          </div>

          {/* Strategic Visualization */}
          <div className="border-y border-[#7899B0]/20 py-8 mb-20 overflow-x-auto custom-scrollbar">
            <div className="min-w-max flex items-center gap-4 md:gap-8 justify-start lg:justify-center">
              <span className="text-xs font-mono font-semibold tracking-widest text-[#172B3A] uppercase mr-2 shrink-0">
                SEO PIPELINE:
              </span>
              {flowNodes.map((node, i) => (
                <div key={node} className="flex items-center gap-4 md:gap-8 shrink-0">
                  <div className="px-5 py-2.5 border border-[#7899B0]/25 rounded-full text-xs font-mono font-bold tracking-widest text-[#172B3A] bg-white shadow-xs">
                    {node}
                  </div>
                  {i !== flowNodes.length - 1 && (
                    <ArrowRight size={16} className="text-[#7899B0]" />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column */}
            <div className="lg:col-span-8 flex flex-col gap-16 md:gap-20">
              {/* Is this for you? */}
              <section className="bg-white rounded-3xl border border-[#7899B0]/25 p-8 sm:p-10 shadow-sm">
                <h2 className="text-xs font-mono font-bold tracking-widest text-[#7899B0] mb-4 uppercase">
                  IS THIS FOR YOU?
                </h2>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#172B3A] mb-6 leading-tight">
                  This service is built for businesses that:
                </h3>
                <ul className="flex flex-col gap-4">
                  {situations.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-base sm:text-lg font-sans text-[#30383D] leading-relaxed"
                    >
                      <ChevronRight size={20} className="text-[#7899B0] shrink-0 mt-1" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              {/* What we do */}
              <section>
                <h2 className="text-xs font-mono font-bold tracking-widest text-[#7899B0] mb-4 uppercase">
                  CAPABILITIES DELIVERED
                </h2>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#172B3A] mb-8">
                  What We Build:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {whatWeDo.map((item, i) => (
                    <div
                      key={i}
                      className="rounded-2xl border border-[#7899B0]/25 p-6 sm:p-8 bg-white shadow-sm h-full flex flex-col justify-between"
                    >
                      <h4 className="text-base sm:text-lg font-display font-bold mb-3 text-[#172B3A] uppercase">
                        {item.title}
                      </h4>
                      <p className="text-sm sm:text-base text-[#30383D] font-sans leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* How it works */}
              <section className="bg-white rounded-3xl border border-[#7899B0]/25 p-8 sm:p-10 shadow-sm">
                <h2 className="text-xs font-mono font-bold tracking-widest text-[#7899B0] mb-6 uppercase">
                  PROCESS ARCHITECTURE
                </h2>
                <div className="flex flex-col border-l-2 border-[#7899B0]/25 ml-2">
                  {process.map((step, i) => (
                    <div key={i} className="relative pl-6 sm:pl-8 pb-10 last:pb-0">
                      <div className="absolute left-[-9px] top-1 w-4 h-4 rounded-full bg-white border-2 border-[#172B3A]" />
                      <span className="text-xs font-mono text-[#172B3A] font-bold tracking-widest uppercase mb-1 block">
                        0{i + 1} / {step.title}
                      </span>
                      <p className="text-base sm:text-lg font-sans text-[#30383D] leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* FAQ */}
              <section className="bg-white rounded-3xl border border-[#7899B0]/25 p-8 sm:p-10 shadow-sm">
                <h2 className="text-xs font-mono font-bold tracking-widest text-[#7899B0] mb-6 uppercase">
                  FREQUENTLY ASKED QUESTIONS
                </h2>
                <div className="flex flex-col gap-6">
                  {faqs.map((faq, i) => (
                    <div
                      key={i}
                      className="border-b border-[#7899B0]/20 pb-6 last:border-0 last:pb-0"
                    >
                      <h4 className="text-base sm:text-lg font-display font-bold text-[#172B3A] mb-2">
                        {faq.q}
                      </h4>
                      <p className="text-sm sm:text-base text-[#30383D] font-sans leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Right Column (Sticky) */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 flex flex-col gap-6 w-full">
                <div className="bg-white border border-[#7899B0]/25 rounded-3xl p-6 sm:p-8 shadow-sm">
                  <h3 className="text-xs font-mono font-bold tracking-widest text-[#172B3A] mb-6 uppercase">
                    WHAT YOU RECEIVE
                  </h3>
                  <ul className="flex flex-col gap-3.5">
                    {deliverables.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm font-sans text-[#172B3A] leading-relaxed"
                      >
                        <CheckCircle2 size={16} className="text-[#7899B0] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-[#DCE6EB]/40 border border-[#7899B0]/25 rounded-3xl p-6 sm:p-8">
                  <h3 className="text-xs font-mono font-bold tracking-widest text-[#172B3A] mb-4 uppercase">
                    WHAT WE MEASURE
                  </h3>
                  <ul className="flex flex-col gap-3">
                    {measure.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm font-sans text-[#30383D] leading-relaxed"
                      >
                        <ChevronRight size={16} className="text-[#7899B0] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 rounded-3xl bg-[#172B3A] text-white border border-[#7899B0]/30 shadow-md">
                  <div className="font-mono text-xs uppercase tracking-widest text-[#D3A56C] font-semibold mb-2">
                    COMPOUNDING EQUITY
                  </div>
                  <p className="text-xs text-[#DCE6EB] leading-relaxed mb-4">
                    A page that ranks keeps bringing qualified enquiries month after month, with zero cost per click.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#7899B0] hover:text-white transition-colors uppercase"
                  >
                    <span>START CONVERSATION ↗</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <ServiceSelector />
    </>
  );
}
