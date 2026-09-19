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
      <main className="pt-40 pb-24 min-h-screen bg-ivory text-graphite">
        <div className="container mx-auto px-6 md:px-[5vw] mb-24">
          <h1 className="text-5xl md:text-8xl font-primary font-bold tracking-tight mb-8">
            SELECTED WORK.
          </h1>
          <p className="text-xl md:text-2xl text-slate max-w-2xl font-primary">
            We build digital presence systems for ambitious brands.
          </p>
        </div>
        
        <WorkGallery />
      </main>
      <FinalCta />
    </>
  );
}

