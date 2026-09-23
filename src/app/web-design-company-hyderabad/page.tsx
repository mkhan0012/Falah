import { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import SelectedWork from "@/components/sections/SelectedWork";
import FaqSection from "@/components/sections/FaqSection";

export const metadata: Metadata = {
  title: "Web Design Company in Hyderabad | FALAH BRANDHOUSE",
  description: "FALAH BRANDHOUSE is a premium web design company in Hyderabad. We build AI-optimized, high-converting websites for ambitious businesses.",
  alternates: {
    canonical: "https://falahbrandhouse.com/web-design-company-hyderabad",
  },
};

export default function WebDesignHyderabad() {
  return (
    <>
      <main className="min-h-screen bg-ivory pt-32 pb-24 text-graphite overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 md:px-[5vw]">
          
          <div className="mb-20 md:mb-32 max-w-5xl">
            <div className="text-[10px] md:text-xs font-mono font-bold tracking-widest text-vermilion mb-4 uppercase">
              HYDERABAD, INDIA
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-[6vw] leading-[1] font-primary font-bold tracking-tight text-graphite mb-6 md:mb-8 uppercase">
              Web Design Company in Hyderabad
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-slate font-primary leading-relaxed font-medium mb-10 md:mb-12 max-w-3xl">
              We design and develop premium, AI-optimized digital homes focused on user experience and lead conversion for businesses across Hyderabad and globally.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 bg-vermilion text-ivory px-6 md:px-8 py-3 md:py-4 font-mono text-xs md:text-sm font-bold hover:bg-graphite transition-colors uppercase group"
            >
              START A PROJECT <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-y border-warm-grey py-16">
            <div>
              <h2 className="text-2xl font-bold mb-6">Why Choose Us in Hyderabad?</h2>
              <p className="text-lg text-slate mb-4">
                Your website is your most important digital asset. In a competitive market like Hyderabad, a slow or confusing website means lost leads. We build Next.js powered, ultra-fast websites that dominate Core Web Vitals and rank highly on Google.
              </p>
            </div>
            <div className="bg-charcoal text-ivory p-8">
              <h3 className="text-xs font-mono font-bold tracking-widest text-ivory/60 mb-6 uppercase">WHAT YOU GET</h3>
              <ul className="flex flex-col gap-4">
                <li className="flex items-start gap-3"><CheckCircle2 size={16} className="text-vermilion shrink-0 mt-1" /> Custom UI/UX Design</li>
                <li className="flex items-start gap-3"><CheckCircle2 size={16} className="text-vermilion shrink-0 mt-1" /> Next.js High-Performance Development</li>
                <li className="flex items-start gap-3"><CheckCircle2 size={16} className="text-vermilion shrink-0 mt-1" /> Local SEO & Technical SEO Built-in</li>
                <li className="flex items-start gap-3"><CheckCircle2 size={16} className="text-vermilion shrink-0 mt-1" /> Analytics & Lead Tracking Integration</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      
      <SelectedWork limit={2} />
      <FaqSection />
    </>
  );
}
