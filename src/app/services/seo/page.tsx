import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import ServiceSelector from "@/components/sections/ServiceSelector";

export const metadata: Metadata = {
  title: "SEO & Search Visibility | FALAH BRANDHOUSE",
  description: "We improve your technical health, relevance, and visibility to help the right people discover your business organically.",
};

const situations = [
        "Are not ranking for your core business services",
      "Are losing traffic to competitors",
      "Have a new website that isn't being found",
      "Need to dominate local search in Hyderabad or your region",
      "Want to reduce reliance on paid advertising"
];

const whatWeDo = [
        { title: "TECHNICAL SEO", desc: "Optimizing site architecture, core web vitals, and crawlability for search engines." },
      { title: "ON-PAGE SEO", desc: "Aligning your content, metadata, and headings with actual search intent." },
      { title: "CONTENT STRATEGY", desc: "Creating targeted content clusters that answer your audience's questions." },
      { title: "LOCAL SEO", desc: "Optimizing Google Business profiles and local citations for regional authority." }
];

const deliverables = [
        "Comprehensive Technical SEO Audit",
      "Keyword Strategy and Mapping",
      "On-Page Optimization Implementation",
      "Google Business Profile Optimization",
      "Monthly Performance and Visibility Reports"
];

const process = [
        { title: "AUDIT", desc: "We analyze technical health, content gaps, and current rankings." },
      { title: "STRATEGY", desc: "We define keyword priorities and content roadmaps." },
      { title: "OPTIMIZE", desc: "We fix technical issues and optimize existing pages." },
      { title: "PUBLISH", desc: "We create and deploy search-focused content." },
      { title: "MEASURE", desc: "We track visibility, traffic, and business KPIs continually." }
];

const measure = [
        "Organic search impressions and clicks",
      "Keyword ranking improvements",
      "Qualified organic traffic and leads"
];

const faqs = [
        { q: "Do you guarantee #1 Google rankings?", a: "No. SEO depends on the website, market, competition, search demand, and algorithmic factors. We focus on improving technical health, relevance, and measurable organic performance." },
      { q: "How long does SEO take?", a: "SEO is a long-term strategy. While technical fixes can show quick results, significant ranking and traffic growth typically takes 3 to 6 months." },
      { q: "Do you provide SEO with new websites?", a: "New websites include foundational technical SEO. Ongoing organic growth requires a dedicated SEO campaign." },
      { q: "What is Local SEO?", a: "Local SEO focuses on optimizing your presence for location-based searches (e.g., 'branding agency Hyderabad'), heavily utilizing Google Business profiles." },
      { q: "How do we know if it's working?", a: "We provide transparent monthly reports tracking impressions, traffic, keyword movement, and ultimately, the leads generated from organic search." }
];

const flowNodes = [
        "SEARCH", "INTENT", "CONTENT", "VISIBILITY"
];

export default function ServicePage() {
  return (
    <>
      <main className="min-h-screen bg-ivory pt-32 pb-24 text-graphite overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 md:px-[5vw]">
          
          <Link 
            href="/services" 
            className="inline-flex items-center gap-2 text-[10px] md:text-xs font-mono font-bold tracking-widest text-slate hover:text-vermilion transition-colors mb-12 uppercase"
          >
            <ArrowLeft size={16} /> Back to Services
          </Link>

          {/* Hero */}
          <div className="mb-20 md:mb-32 max-w-5xl">
            <h1 className="text-4xl md:text-6xl lg:text-[6vw] leading-[1] font-primary font-bold tracking-tight text-graphite mb-6 md:mb-8 uppercase">
              SEO & Search Visibility
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-slate font-primary leading-relaxed font-medium mb-10 md:mb-12 max-w-3xl">
              We improve your technical health, relevance, and visibility to help the right people discover your business organically.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 bg-vermilion text-ivory px-6 md:px-8 py-3 md:py-4 font-mono text-xs md:text-sm font-bold hover:bg-graphite transition-colors uppercase group"
            >
              START A PROJECT <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
          
          {/* Strategic Visualization (Responsive Scroll) */}
          <div className="border-y border-warm-grey py-12 md:py-16 mb-20 md:mb-24 -mx-4 sm:-mx-6 md:mx-0 px-4 sm:px-6 md:px-0 overflow-x-auto custom-scrollbar">
            <div className="min-w-max flex items-center gap-4 md:gap-8 justify-start lg:justify-center opacity-80">
              <span className="text-[10px] md:text-xs font-mono tracking-widest text-vermilion uppercase mr-2 md:mr-4 shrink-0">
                SEARCH VISIBILITY:
              </span>
              {flowNodes.map((node, i) => (
                <div key={node} className="flex items-center gap-4 md:gap-8 shrink-0">
                  <div className="px-4 md:px-6 py-2 md:py-3 border border-graphite rounded-full text-xs md:text-sm font-mono font-bold tracking-widest text-graphite bg-warm-grey/30">
                    {node}
                  </div>
                  {i !== flowNodes.length - 1 && (
                    <ArrowRight size={16} className="text-slate md:w-5 md:h-5" />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            
            {/* Left Column */}
            <div className="lg:col-span-8 flex flex-col gap-16 md:gap-24">
              
              {/* Is this for you? */}
              <section>
                <h2 className="text-[10px] md:text-xs font-mono font-bold tracking-widest text-slate mb-6 md:mb-8 uppercase">IS THIS FOR YOU?</h2>
                <h3 className="text-2xl md:text-3xl font-primary font-bold mb-6 md:mb-8 leading-tight">This service is for businesses that:</h3>
                <ul className="flex flex-col gap-4 md:gap-6">
                  {situations.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 md:gap-4 text-lg md:text-xl font-primary text-graphite leading-relaxed">
                      <ChevronRight size={20} className="text-vermilion shrink-0 mt-1 md:mt-0.5 md:w-6 md:h-6" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              {/* What we do */}
              <section>
                <h2 className="text-[10px] md:text-xs font-mono font-bold tracking-widest text-slate mb-6 md:mb-8 uppercase">WHAT WE DO</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                  {whatWeDo.map((item, i) => (
                    <div key={i} className="border border-warm-grey p-6 md:p-8 bg-white h-full flex flex-col">
                      <h3 className="text-lg md:text-xl font-primary font-bold mb-3 md:mb-4">{item.title}</h3>
                      <p className="text-base md:text-lg text-slate font-primary leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* How it works */}
              <section>
                <h2 className="text-[10px] md:text-xs font-mono font-bold tracking-widest text-slate mb-6 md:mb-8 uppercase">HOW IT WORKS</h2>
                <div className="flex flex-col border-l-2 border-warm-grey ml-2 md:ml-4">
                  {process.map((step, i) => (
                    <div key={i} className="relative pl-6 md:pl-8 pb-10 md:pb-12 last:pb-0">
                      <div className="absolute left-[-9px] top-1 w-4 h-4 rounded-full bg-ivory border-2 border-vermilion" />
                      <span className="text-[10px] md:text-xs font-mono text-slate tracking-widest uppercase mb-1 md:mb-2 block">
                        0{i + 1} / {step.title}
                      </span>
                      <p className="text-lg md:text-xl font-primary text-graphite leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* FAQ */}
              <section>
                <h2 className="text-[10px] md:text-xs font-mono font-bold tracking-widest text-slate mb-6 md:mb-8 uppercase">FREQUENTLY ASKED QUESTIONS</h2>
                <div className="flex flex-col gap-6 md:gap-8">
                  {faqs.map((faq, i) => (
                    <div key={i} className="border-b border-warm-grey pb-6 md:pb-8">
                      <h3 className="text-lg md:text-xl font-primary font-bold mb-3 md:mb-4">{faq.q}</h3>
                      <p className="text-base md:text-lg text-slate font-primary leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </section>

            </div>

            {/* Right Column (Sticky) */}
            <div className="lg:col-span-4">
              <div className="sticky top-24 md:top-32 flex flex-col gap-8 md:gap-12 w-full">
                
                <div className="bg-charcoal text-ivory p-6 md:p-8">
                  <h3 className="text-[10px] md:text-xs font-mono font-bold tracking-widest text-ivory/60 mb-4 md:mb-6 uppercase">WHAT YOU GET</h3>
                  <ul className="flex flex-col gap-3 md:gap-4">
                    {deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm md:text-base font-primary leading-relaxed">
                        <CheckCircle2 size={16} className="text-vermilion shrink-0 mt-1 md:mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-warm-grey p-6 md:p-8">
                  <h3 className="text-[10px] md:text-xs font-mono font-bold tracking-widest text-slate mb-4 md:mb-6 uppercase">WHAT WE MEASURE</h3>
                  <ul className="flex flex-col gap-3 md:gap-4">
                    {measure.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm md:text-base font-primary text-graphite leading-relaxed">
                        <ChevronRight size={16} className="text-graphite shrink-0 mt-1 md:mt-0.5" />
                        {item}
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