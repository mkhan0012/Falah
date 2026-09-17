import { Metadata } from "next";
import WorkGallery from "@/components/sections/WorkGallery";
import FinalCta from "@/components/sections/FinalCta";

export const metadata: Metadata = {
  title: "Work | FALAH BRANDHOUSE",
  description: "Explore our selected projects across branding, websites, SEO, and digital growth.",
};

export default function WorkPage() {
  return (
    <>
      <main className="pt-32 pb-24 min-h-screen">
        <div className="container mx-auto px-6 md:px-12 mb-16">
          <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-serif tracking-tight mb-8">
            OUR <span className="text-foreground/40 italic">WORK</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/60 max-w-2xl font-light">
            We build digital presence systems for ambitious brands.
          </p>
        </div>
        
        <WorkGallery />
      </main>
      <FinalCta />
    </>
  );
}