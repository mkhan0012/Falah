import { Metadata } from "next";
import { services } from "@/data/services";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Services | FALAH BRANDHOUSE",
  description: "Brand, Digital, Visibility, and Growth services.",
};

export default function ServicesPage() {
  return (
    <>
      <main className="pt-40 pb-24 min-h-screen bg-ivory text-graphite">
        <div className="container mx-auto px-6 md:px-[5vw] mb-32">
          <h1 className="text-5xl md:text-8xl font-primary font-bold tracking-tight mb-8">
            SERVICES.
          </h1>
          <p className="text-xl md:text-2xl text-slate max-w-3xl font-primary">
            We build complete digital systems. Strategy, design, technology, and growth â€” integrated into a single offering.
          </p>
        </div>

        <div className="container mx-auto px-6 md:px-[5vw]">
          {services.map((service) => {
            let link = "/services";
            if (service.title === "BRAND") link = "/services/branding";
            if (service.title === "DIGITAL") link = "/services/web-development";
            if (service.title === "VISIBILITY") link = "/services/seo";
            if (service.title === "GROWTH") link = "/services/digital-marketing";

            return (
              <div key={service.id} className="py-24 border-t border-warm-grey grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
                <div className="lg:col-span-5">
                  <div className="text-xs font-mono font-bold tracking-widest text-slate mb-6">
                    {service.id}
                  </div>
                  <h2 className="text-5xl md:text-6xl font-primary font-bold tracking-tight mb-8">
                    {service.title}
                  </h2>
                  <p className="text-lg text-slate leading-relaxed font-primary mb-12">
                    {service.description}
                  </p>
                  
                  <Link 
                    href={link}
                    className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-graphite border-b border-graphite pb-1 hover:text-vermilion hover:border-vermilion transition-colors group"
                  >
                    EXPLORE {service.title} CAPABILITIES <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
                
                <div className="lg:col-span-7 bg-white p-8 md:p-16 border border-warm-grey shadow-sm">
                  <h3 className="text-xs font-mono font-bold tracking-widest uppercase mb-12 text-slate">Core Capabilities</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">
                    {service.items.map(item => (
                      <li key={item} className="flex items-center gap-4 text-xl font-primary font-bold text-graphite">
                        <div className="w-1.5 h-1.5 bg-vermilion rounded-full shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </main>
          </>
  );
}

