import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import ServiceSelector from "@/components/sections/ServiceSelector";

export const metadata: Metadata = {
  title: "Web Design & Next.js Architecture | VYOMA Media",
  description:
    "Web design and front-end Next.js engineering in Hyderabad. Sub-second performance, headless CMS, and technical SEO built to convert visitors into revenue.",
  alternates: {
    canonical: "https://vyomamedia.com/services/web-development",
  },
};

const situations = [
  "Have a website that doesn't generate qualified commercial enquiries",
  "Are embarrassed by a slow, outdated, or unresponsive digital experience",
  "Rely on rented ad traffic landing on an unoptimized funnel that leaks leads",
  "Need a headless CMS so team members can update content without calling a developer",
  "Need lightning-fast mobile performance measured against Core Web Vitals (100/100)",
];

const whatWeDo = [
  {
    title: "WEB DESIGN",
    desc: "Swiss editorial grid website structure and calls to action built around the questions your buyers really ask.",
  },
  {
    title: "UI/UX DESIGN",
    desc: "Journeys designed so a visitor always knows what to do next without friction or ambiguity.",
  },
  {
    title: "FRONTEND ENGINEERING",
    desc: "Clean, responsive Next.js and TypeScript code that loads in under a second across all devices.",
  },
  {
    title: "HEADLESS CMS",
    desc: "A flexible content system your team can update (listings, doctor profiles, product specs) without slowing the site.",
  },
  {
    title: "WEB PERFORMANCE",
    desc: "Sub-second speed engineered to score 100/100 on Google’s Core Web Vitals benchmark.",
  },
  {
    title: "TECHNICAL SEO",
    desc: "Structured data schema, clean crawl architecture, and indexing pipelines so search engines and AI engines read you accurately.",
  },
];

const deliverables = [
  "Custom Next.js & React High-Performance Architecture",
  "Full Responsive UI/UX Systems (Desktop, Tablet, Mobile)",
  "Headless CMS Integration (Contentful, Sanity, or Strapi)",
  "Complete Technical Schema Markup & Meta Tag Structure",
  "Core Web Vitals 95+ Performance Audit Guarantee",
  "Google Analytics 4 & Custom Conversion Attribution Tracking",
];

const process = [
  {
    title: "RESEARCH",
    desc: "Our rule: nothing gets designed that can't be found, and nothing gets found that can't convert. We research what your customers search for before planning a single page.",
  },
  {
    title: "ARCHITECTURE",
    desc: "We map out the information hierarchy, buying journey questions, and technical URL schema.",
  },
  {
    title: "INTERFACE DESIGN",
    desc: "We craft custom, high-trust visual designs and interactive component systems with Swiss grid discipline.",
  },
  {
    title: "ENGINEERING",
    desc: "We build clean, accessible, ultra-fast Next.js code with headless CMS integration.",
  },
  {
    title: "VERIFICATION & LAUNCH",
    desc: "Rigorous testing across screen resolutions, network throttles, and Core Web Vitals before public release.",
  },
];

const measure = [
  "Google Core Web Vitals (LCP < 1.2s, FID 0, CLS 0)",
  "Inquiry form conversion rate and lead qualification ratio",
  "Organic crawl rate and AI answer engine indexation",
  "Zero downtime and lightning-fast global asset delivery",
];

const faqs = [
  {
    q: "Can you redesign an existing website without losing search rankings?",
    a: "Yes. We audit your existing site, preserve all historical search equity and canonical redirects, and build a dramatically faster, higher-converting experience.",
  },
  {
    q: "What technology stack do you build on?",
    a: "We primarily build custom solutions using Next.js, React, and Tailwind CSS for unmatched speed, paired with modern headless CMS systems.",
  },
  {
    q: "Do you write the website copy?",
    a: "Yes. Your content answers the questions your audience is already typing into Google. We structure every section around buyer psychology.",
  },
  {
    q: "Is technical SEO included?",
    a: "Every site we build comes with native technical SEO: structured JSON-LD schema, dynamic XML sitemaps, semantic HTML5, and OpenGraph tags.",
  },
  {
    q: "Will our internal team be able to update content?",
    a: "Yes. With our headless CMS implementation, anyone on your team can edit text, publish articles, and update listings without touching code.",
  },
];

const flowNodes = ["RESEARCH", "ARCHITECTURE", "PROTOTYPE", "NEXT.JS CODE", "CONVERSION"];

export default function WebDevelopmentServicePage() {
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
              <span>DISCIPLINE 02 · TECHNOLOGY & DIGITAL</span>
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-[#172B3A] mb-6 uppercase leading-[1.02]">
              Web Design & Next.js Systems<span className="text-[#7899B0]">.</span>
            </h1>
            <p className="text-lg sm:text-2xl text-[#30383D] font-sans leading-relaxed max-w-3xl mb-10">
              We engineer ultra-fast digital experiences built on Next.js, headless CMS architecture, and meticulous UI/UX that transform passive browsers into qualified commercial enquiries.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#172B3A] text-white px-8 py-4 font-mono text-xs font-bold hover:bg-[#20394c] transition-colors uppercase rounded-full group shadow-md"
            >
              COMMISSION A WEB SYSTEM{" "}
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
                SYSTEM PIPELINE:
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
                    HIGH-VELOCITY FOUNDATION
                  </div>
                  <p className="text-xs text-[#DCE6EB] leading-relaxed mb-4">
                    A fast, well-tracked website makes every future campaign, paid or organic, work harder and convert at higher margins.
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
