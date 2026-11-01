import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, ArrowRight, CheckCircle2, ChevronRight, Sparkles } from "lucide-react";
import ServiceSelector from "@/components/sections/ServiceSelector";
import { solutions } from "@/data/solutions";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const solution = solutions.find((s) => s.slug === slug);
  if (!solution) return {};

  return {
    title: `${solution.title} | VYOMA Media`,
    description: solution.description,
    alternates: {
      canonical: `https://vyomamedia.com/services/solutions/${slug}`,
    },
  };
}

export default async function SolutionPage({ params }: Props) {
  const { slug } = await params;
  const solution = solutions.find((s) => s.slug === slug);

  if (!solution) {
    notFound();
  }

  return (
    <>
      <main className="min-h-screen bg-[#F1F3F1] text-[#30383D] pt-36 md:pt-44 pb-24 selection:bg-[#7899B0] selection:text-white overflow-hidden relative font-sans">
        <div className="container mx-auto px-5 sm:px-6 md:px-12 max-w-[1360px] relative z-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-mono font-medium tracking-widest text-[#7899B0] hover:text-[#172B3A] transition-colors mb-12 uppercase"
          >
            <ArrowLeft size={15} /> Back to Disciplines Overview
          </Link>

          {/* Hero Header */}
          <div className="mb-20 md:mb-28 max-w-5xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#7899B0]/30 text-[11px] font-mono text-[#172B3A] mb-6 uppercase tracking-widest font-semibold shadow-sm">
              <Sparkles size={12} className="text-[#D3A56C]" />
              <span>{solution.category}</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-[#172B3A] mb-8 uppercase leading-[1.02]">
              {solution.title}
            </h1>

            <p className="text-lg sm:text-2xl text-[#30383D] font-sans leading-relaxed mb-10 max-w-3xl">
              {solution.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#172B3A] text-white px-8 py-4 rounded-full font-mono text-xs md:text-sm font-bold hover:bg-[#20394c] transition-all uppercase shadow-md group"
              >
                <span>DEPLOY THIS SYSTEM</span>
                <ArrowUpRight
                  size={16}
                  className="text-[#7899B0] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-[#7899B0]/30 bg-white text-[#172B3A] px-8 py-4 rounded-full font-mono text-xs md:text-sm font-bold hover:border-[#172B3A] transition-all uppercase shadow-xs"
              >
                DISCUSS SCOPE
              </Link>
            </div>
          </div>

          {/* Strategic Flow Visualization */}
          <div className="rounded-3xl bg-white border border-[#7899B0]/25 p-6 sm:p-8 mb-20 md:mb-24 overflow-x-auto custom-scrollbar shadow-sm">
            <div className="min-w-max flex items-center gap-4 md:gap-6 justify-start lg:justify-center">
              <span className="text-xs font-mono font-semibold tracking-widest text-[#172B3A] uppercase shrink-0">
                ✦ {solution.flowLabel}
              </span>
              {solution.flowNodes.map((node, i) => (
                <div key={node} className="flex items-center gap-4 md:gap-6 shrink-0">
                  <div className="px-5 py-2.5 rounded-full border border-[#7899B0]/25 bg-[#DCE6EB]/40 text-xs font-mono font-semibold tracking-wide text-[#172B3A]">
                    {node}
                  </div>
                  {i !== solution.flowNodes.length - 1 && (
                    <ArrowRight size={15} className="text-[#7899B0]" />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column */}
            <div className="lg:col-span-8 flex flex-col gap-16 md:gap-20">
              {/* Audience Calibration */}
              <section className="rounded-3xl bg-white border border-[#7899B0]/25 p-8 sm:p-10 shadow-sm">
                <h2 className="text-xs font-mono font-bold tracking-widest text-[#7899B0] mb-4 uppercase">
                  AUDIENCE CALIBRATION
                </h2>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#172B3A] mb-8 leading-tight">
                  This architecture is engineered for teams that:
                </h3>
                <ul className="flex flex-col gap-5">
                  {solution.situations.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3.5 text-base sm:text-lg font-sans text-[#30383D] leading-relaxed"
                    >
                      <ChevronRight size={18} className="text-[#7899B0] shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* What we do */}
              <section>
                <h2 className="text-xs font-mono font-bold tracking-widest text-[#7899B0] mb-4 uppercase">
                  CORE DELIVERABLES
                </h2>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#172B3A] mb-8">
                  What VYOMA Builds Inside This System:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {solution.whatWeDo.map((item, i) => (
                    <div
                      key={i}
                      className="rounded-3xl bg-white border border-[#7899B0]/25 p-6 sm:p-8 flex flex-col justify-between hover:border-[#172B3A] shadow-sm transition-all"
                    >
                      <div>
                        <div className="w-8 h-8 rounded-xl bg-[#DCE6EB]/60 border border-[#7899B0]/25 flex items-center justify-center text-xs font-mono font-bold text-[#172B3A] mb-4">
                          0{i + 1}
                        </div>
                        <h4 className="text-lg sm:text-xl font-display font-bold text-[#172B3A] mb-3">
                          {item.title}
                        </h4>
                        <p className="text-sm font-sans text-[#30383D] leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Execution Methodology */}
              <section className="rounded-3xl bg-white border border-[#7899B0]/25 p-8 sm:p-10 shadow-sm">
                <h2 className="text-xs font-mono font-bold tracking-widest text-[#7899B0] mb-4 uppercase">
                  DEPLOYMENT PIPELINE
                </h2>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#172B3A] mb-8">
                  Execution Methodology:
                </h3>
                <div className="flex flex-col border-l-2 border-[#7899B0]/25 ml-2">
                  {solution.process.map((step, i) => (
                    <div key={i} className="relative pl-6 pb-8 last:pb-0">
                      <div className="absolute left-[-9px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-[#172B3A]" />
                      <span className="text-[11px] font-mono text-[#172B3A] font-bold tracking-wider uppercase mb-1 block">
                        Phase 0{i + 1} · {step.title}
                      </span>
                      <p className="text-base sm:text-lg font-sans text-[#30383D] leading-relaxed mt-1">
                        {step.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* FAQ */}
              <section className="rounded-3xl bg-white border border-[#7899B0]/25 p-8 sm:p-10 shadow-sm">
                <h2 className="text-xs font-mono font-bold tracking-widest text-[#7899B0] mb-4 uppercase">
                  FREQUENTLY ASKED QUESTIONS
                </h2>
                <div className="flex flex-col divide-y divide-[#7899B0]/20">
                  {solution.faqs.map((faq, i) => (
                    <div key={i} className="py-6 first:pt-2 last:pb-0">
                      <h4 className="text-lg font-display font-bold text-[#172B3A] mb-2">
                        {faq.q}
                      </h4>
                      <p className="text-sm sm:text-base font-sans text-[#30383D] leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Right Column (Sticky) */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 md:top-36 flex flex-col gap-6 w-full">
                <div className="rounded-3xl bg-white border border-[#7899B0]/25 p-6 sm:p-8 shadow-sm">
                  <h3 className="text-xs font-mono font-bold tracking-widest text-[#172B3A] mb-6 uppercase">
                    WHAT YOU RECEIVE
                  </h3>
                  <ul className="flex flex-col gap-4">
                    {solution.deliverables.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-xs sm:text-sm font-sans text-[#172B3A] leading-relaxed"
                      >
                        <CheckCircle2 size={16} className="text-[#7899B0] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-3xl bg-[#DCE6EB]/40 border border-[#7899B0]/25 p-6 sm:p-8">
                  <h3 className="text-xs font-mono font-bold tracking-widest text-[#172B3A] mb-6 uppercase">
                    WHAT WE MEASURE
                  </h3>
                  <ul className="flex flex-col gap-3.5">
                    {solution.measure.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-xs sm:text-sm font-mono text-[#30383D]"
                      >
                        <span className="text-[#172B3A] font-bold">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
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
