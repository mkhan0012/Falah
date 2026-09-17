import { Metadata } from "next";
import { services } from "@/data/services";
import FinalCta from "@/components/sections/FinalCta";

export const metadata: Metadata = {
  title: "Services | FALAH BRANDHOUSE",
  description: "Brand, Digital, Visibility, and Growth services.",
};

export default function ServicesPage() {
  return (
    <>
      <main className="pt-32 pb-24 min-h-screen">
        <div className="container mx-auto px-6 md:px-12 mb-32">
          <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-serif tracking-tight mb-8">
            OUR <span className="text-foreground/40 italic">SERVICES</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/60 max-w-3xl font-light">
            We build complete digital systems. Strategy, design, technology, and growthÃ¢â‚¬â€integrated into a single offering.
          </p>
        </div>

        <div className="container mx-auto px-6 md:px-12">
          {services.map((service) => (
            <div key={service.id} className="py-24 border-t border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
              <div className="lg:col-span-5">
                <div className="text-xl font-serif text-accent mb-6">{service.id}</div>
                <h2 className="text-5xl md:text-6xl font-serif mb-8">{service.title}</h2>
                <p className="text-xl text-foreground/70 leading-relaxed font-light">
                  {service.description}
                </p>
              </div>
              
              <div className="lg:col-span-7 bg-white/5 p-8 md:p-16 rounded-3xl">
                <h3 className="text-xl font-bold tracking-widest uppercase mb-12 text-foreground/50">Core Capabilities</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                  {service.items.map(item => (
                    <li key={item} className="flex items-center gap-4 text-xl font-medium">
                      <div className="w-2 h-2 bg-accent rounded-full shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </main>
      <FinalCta />
    </>
  );
}