import { Metadata } from "next";
import FinalCta from "@/components/sections/FinalCta";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Industries | FALAH BRANDHOUSE",
  description: "Digital growth solutions for key industries.",
};

const industries = [
  { title: "REAL ESTATE", href: "/industries/real-estate", desc: "Selling a lifestyle and building trust for high-value transactions." },
  { title: "HEALTHCARE", href: "/industries/healthcare", desc: "Balancing clinical trust with modern brand aesthetics." },
  { title: "EDUCATION", href: "/industries/education", desc: "Driving enrollments through authority and clear communication." },
  { title: "MANUFACTURING", href: "/industries/manufacturing", desc: "Transforming industrial businesses into modern digital leaders." },
];

export default function IndustriesPage() {
  return (
    <>
      <main className="min-h-screen bg-ivory pt-40 pb-24 text-graphite">
        <div className="container mx-auto px-6 md:px-[5vw]">
          
          <div className="mb-24">
            <h1 className="text-5xl md:text-8xl font-primary font-bold tracking-tight mb-8">
              INDUSTRIES.
            </h1>
            <p className="text-xl md:text-2xl text-slate max-w-3xl font-primary">
              We apply our digital system across key sectors, adapting our approach to meet the unique challenges of your market.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-warm-grey pt-16">
            {industries.map(ind => (
              <Link key={ind.title} href={ind.href} className="group border border-warm-grey p-12 bg-white hover:border-graphite transition-all">
                <h2 className="text-4xl font-primary font-bold tracking-tight mb-6 group-hover:text-vermilion transition-colors">{ind.title}</h2>
                <p className="text-slate text-lg mb-12">{ind.desc}</p>
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-graphite">
                  EXPLORE {ind.title} <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

        </div>
      </main>
      <FinalCta />
    </>
  );
}

