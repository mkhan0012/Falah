import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import ServiceSelector from "@/components/sections/ServiceSelector";

export const metadata: Metadata = {
  title: "Personal Branding & Executive Presence | VYOMA Media",
  description:
    "Founders, doctors, and specialists positioned as recognized category authorities, because people trust people before logos. Based in Hyderabad, India.",
  alternates: {
    canonical: "https://vyomamedia.com/services/personal-branding",
  },
};

const situations = [
  "Are a founder, executive, or physician who needs high-trust market authority",
  "Want to establish industry thought leadership without corporate generic buzzwords",
  "Need to shorten sales and partnership cycles through authentic personal credibility",
  "Are publishing irregularly across fragmented channels with no compounding presence",
  "Want your expertise recognized and cited by search engines and AI answer tools",
];

const whatWeDo = [
  {
    title: "POSITIONING & THESIS",
    desc: "The core commercial philosophy and distinct point of view that sets your voice apart in your sector.",
  },
  {
    title: "EDITORIAL GHOSTWRITING",
    desc: "Long-form insights, commentary, and essays written in your genuine cadence, not PR corporate speech.",
  },
  {
    title: "EXECUTIVE PLATFORMS",
    desc: "Optimizing your digital flagship, LinkedIn presence, and speaking portfolios to reflect authority.",
  },
  {
    title: "SEARCH & CITATION PRESENCE",
    desc: "Structuring knowledge entity markup so you are cited across AI engines and search overviews.",
  },
];

const deliverables = [
  "Executive Narrative, Bio & Positioning Master Document",
  "Digital Profile Optimization (LinkedIn, Bio Pages, Author Markup)",
  "Monthly Editorial Publication Strategy & Thought Leadership Sprints",
  "Podcast & Speaking Keynote One-Sheet Collateral",
  "Personal Domain Web Architecture & Entity Schema Integration",
];

const process = [
  {
    title: "INTERVIEW",
    desc: "We interview you to capture your real philosophy, operational stories, and distinct industry perspective.",
  },
  {
    title: "EXTRACT",
    desc: "We extract the key ideas and structure them into clear frameworks that educate and persuade.",
  },
  {
    title: "ARTICULATE",
    desc: "We draft authoritative, high-density articles and essays matched exactly to your natural voice.",
  },
  {
    title: "DISTRIBUTE",
    desc: "We distribute across the specific channels that actually reach your target decision-makers.",
  },
  {
    title: "AMPLIFY",
    desc: "Your authority compounds over time, making every commercial negotiation smoother and faster.",
  },
];

const measure = [
  "High-intent incoming consultation and partnership enquiries",
  "Executive profile engagement and industry peer citations",
  "Speaking invitations, media commentary quotes, and direct inbound dealflow",
  "Shortened enterprise procurement cycles",
];

const faqs = [
  {
    q: "How much time is required from the founder or specialist?",
    a: "Typically 60 to 90 minutes of interview time per month. Our team handles the extraction, structuring, drafting, and distribution.",
  },
  {
    q: "Will the writing actually sound like me?",
    a: "Yes. We transcribe and analyze your natural cadence, vocabulary, and core beliefs to ensure every piece sounds genuinely authentic.",
  },
  {
    q: "Does personal branding directly impact business revenue?",
    a: "People buy from people they trust. An authoritative founder or specialist voice significantly shortens decision cycles and builds immediate goodwill.",
  },
  {
    q: "What sectors do you work with for personal branding?",
    a: "Clinic founders, real estate developers, industrial enterprise leaders, political candidates, and technical founders in Hyderabad and nationwide.",
  },
];

const flowNodes = ["INTERVIEW", "POSITION", "EDITORIAL", "AUTHORITY"];

export default function PersonalBrandingServicePage() {
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
              <span>DISCIPLINE 04 · EXECUTIVE AUTHORITY</span>
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-[#172B3A] mb-6 uppercase leading-[1.02]">
              Personal Branding & Authority<span className="text-[#7899B0]">.</span>
            </h1>
            <p className="text-lg sm:text-2xl text-[#30383D] font-sans leading-relaxed max-w-3xl mb-10">
              Founders, doctors, and specialists positioned as recognized category voices, because high-stakes decision-makers trust people before logos.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#172B3A] text-white px-8 py-4 font-mono text-xs font-bold hover:bg-[#20394c] transition-colors uppercase rounded-full group shadow-md"
            >
              COMMISSION EXECUTIVE POSITIONING{" "}
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
                AUTHORITY FLOW:
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
                  This service is built for leaders that:
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
                    EXECUTIVE EQUITY
                  </div>
                  <p className="text-xs text-[#DCE6EB] leading-relaxed mb-4">
                    People trust people before logos. When your leadership voice commands authority, enterprise sales cycles collapse.
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
