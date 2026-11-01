import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import ServiceSelector from "@/components/sections/ServiceSelector";

export const metadata: Metadata = {
  title: "Content Strategy & Distribution | VYOMA Media",
  description:
    "Content that answers the questions your audience is already typing into Google. Strategic storytelling and distribution that compound in Hyderabad.",
  alternates: {
    canonical: "https://vyomamedia.com/services/social-media",
  },
};

const situations = [
  "Are publishing disconnected social posts that fail to generate commercial pipeline",
  "Lack an organized, buyer-stage content strategy mapped to real search intent",
  "Need consistent creative direction across film, property, or clinic campaigns",
  "Want content that ranks in search and educates prospective enterprise decision-makers",
  "Need multi-lingual distribution in English, Telugu, Hindi, or Urdu for regional impact",
];

const whatWeDo = [
  {
    title: "CONTENT STRATEGY",
    desc: "Every page and article mapped to a stage of the buying journey: awareness, consideration, or commercial decision.",
  },
  {
    title: "ART DIRECTION",
    desc: "One disciplined creative thread across your website, editorial publications, print, and physical posters.",
  },
  {
    title: "EDITORIAL PRODUCTION",
    desc: "Articles, case studies, and application guides written to answer what buyers actually search for.",
  },
  {
    title: "DISTRIBUTION ARCHITECTURE",
    desc: "Syndicating your core insights across search, newsletters, LinkedIn, and specialized sector networks.",
  },
];

const deliverables = [
  "Comprehensive Topic Cluster Map & Editorial Calendar",
  "High-Resolution Visual Assets & Social Creative Master Templates",
  "Long-Form Technical Buying Guides & Buyer Persona FAQs",
  "Campaign Visual Architecture (Posters, Carousels, Deck Assets)",
  "Quarterly Content Attribution & Organic Engagement Reports",
];

const process = [
  {
    title: "RESEARCH",
    desc: "We research what your customers search for before planning a single page or campaign asset.",
  },
  {
    title: "STRUCTURE",
    desc: "We map each asset to a specific stage of the buying decision so nothing is created without purpose.",
  },
  {
    title: "CRAFT",
    desc: "We write and design with premium editorial care: calm for health, aspirational for property, sharp for industry.",
  },
  {
    title: "DISTRIBUTE",
    desc: "We publish and syndicate across owned and search channels to maximize lifetime discoverability.",
  },
  {
    title: "EVALUATE",
    desc: "We judge performance on qualified enquiries and commercial outcomes, never vanity metrics.",
  },
];

const measure = [
  "Organic dwell time and multi-page journey progression",
  "Content-assisted lead generation and inbound form completions",
  "Search impressions for long-tail informational and commercial queries",
  "Brand sentiment and executive citation frequency",
];

const faqs = [
  {
    q: "Do you provide traditional social media management?",
    a: "We focus on high-impact strategic content systems rather than daily vanity posting. Every piece we create is designed to build brand equity and drive organic discoverability.",
  },
  {
    q: "Can you produce content in regional Indian languages?",
    a: "Yes. In Hyderabad and regional markets, we produce content in Telugu, Hindi, and Urdu where your audience searches and reads in those languages.",
  },
  {
    q: "Do you create film and entertainment campaign assets?",
    a: "Yes. We build anticipation from the first poster reveal to opening week, then keep your search presence alive after release.",
  },
  {
    q: "How does content strategy link directly with SEO?",
    a: "Your content answers the questions your audience is already typing into Google. When content is clear and credible, search engines rank it and AI tools cite it.",
  },
];

const flowNodes = ["RESEARCH", "STRUCTURE", "CRAFT", "DISTRIBUTE"];

export default function SocialMediaServicePage() {
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
              <span>DISCIPLINE 04 · CONTENT & DISTRIBUTION</span>
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-[#172B3A] mb-6 uppercase leading-[1.02]">
              Content Strategy & Distribution<span className="text-[#7899B0]">.</span>
            </h1>
            <p className="text-lg sm:text-2xl text-[#30383D] font-sans leading-relaxed max-w-3xl mb-10">
              Content that answers the questions your audience is already typing into Google. Strategic storytelling, art direction, and multi-channel distribution that compound over time.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#172B3A] text-white px-8 py-4 font-mono text-xs font-bold hover:bg-[#20394c] transition-colors uppercase rounded-full group shadow-md"
            >
              START A CONTENT STRATEGY{" "}
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
                CONTENT PIPELINE:
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
                  This service is built for brands that:
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
                    COMPOUNDING NARRATIVE
                  </div>
                  <p className="text-xs text-[#DCE6EB] leading-relaxed mb-4">
                    Tactical posts expire in 24 hours. Evergreen search content and authoritative thought leadership compound for years.
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
