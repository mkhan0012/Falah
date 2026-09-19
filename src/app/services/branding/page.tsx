import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import ServiceSelector from "@/components/sections/ServiceSelector";
import FinalCta from "@/components/sections/FinalCta";

export const metadata: Metadata = {
  title: "Brand Strategy & Identity | FALAH BRANDHOUSE",
  description: "We build distinct identities that help businesses stand out, communicate clearly, and command premium positioning in their market.",
};

const situations = [
        "Are launching a new brand or company",
      "Are repositioning to target a different market tier",
      "Have an inconsistent visual identity across channels",
      "Have outgrown their current brand aesthetic",
      "Need clearer market positioning to justify premium pricing"
];

const whatWeDo = [
        { title: "STRATEGY", desc: "Brand positioning, audience definition, competitive direction, and brand messaging." },
      { title: "IDENTITY", desc: "Logo systems, typography selection, color systems, and visual direction." },
      { title: "COMMUNICATION", desc: "Tone of voice guidelines and messaging frameworks." },
      { title: "GUIDELINES", desc: "Comprehensive brand guidelines, digital applications, and usage rules." }
];

const deliverables = [
        "Comprehensive Brand Strategy Document",
      "Primary and Secondary Logo Formats",
      "Color Palette and Typography Rules",
      "Brand Guidelines (PDF)",
      "Social Media and Presentation Templates"
];

const process = [
        { title: "DISCOVER", desc: "We understand your business, audience, and market position." },
      { title: "DEFINE", desc: "We define the strategy, positioning, and visual direction." },
      { title: "DESIGN", desc: "We build the premium visual identity and brand system." },
      { title: "REFINE", desc: "We collaborate and perfect the identity." },
      { title: "DELIVER", desc: "You receive all brand assets and usage guidelines." }
];

const measure = [
        "Brand consistency across all touchpoints",
      "Clarity of market positioning",
      "Professional perception and trust metrics"
];

const faqs = [
        { q: "Can you work with an existing brand?", a: "Yes. We often perform brand evolutions where we refine and modernize an existing identity without losing its established equity." },
      { q: "How long does a branding project take?", a: "Typically 4 to 8 weeks, depending on the complexity of the strategy and the number of deliverables required." },
      { q: "Do you provide naming services?", a: "Yes, brand naming can be included as an initial phase before visual identity design." },
      { q: "Will I own the final logo files?", a: "Absolutely. Upon completion and final payment, you receive full ownership and source files for all brand assets." },
      { q: "Do you design physical marketing collateral?", a: "Yes, we can extend the digital brand guidelines to business cards, packaging, and physical collateral upon request." }
];

const flowNodes = [
        "POSITION", "IDENTITY", "MESSAGE", "PERCEPTION"
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
              Brand Strategy & Identity
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-slate font-primary leading-relaxed font-medium mb-10 md:mb-12 max-w-3xl">
              We build distinct identities that help businesses stand out, communicate clearly, and command premium positioning in their market.
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
                BRAND SYSTEM:
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
      <FinalCta />
    </>
  );
}