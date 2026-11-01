"use client";
import { ArrowUpRight } from "lucide-react";

export default function Section09Work() {
  const projects = [
    {
      name: "Bharat Hydraulics",
      problem: "Traditional offline business losing market share to modern competitors. No digital visibility or systematic lead generation.",
      built: "Complete digital foundation: Website, product catalogue, Local SEO, Google Business profile, and integrated WhatsApp enquiry system.",
      matters: "Transforms a physical business into a discoverable digital entity, creating a measurable pipeline for new leads.",
      link: "#"
    },
    {
      name: "NovaZen",
      problem: "Innovative product without a clear brand narrative or professional online presence to attract early adopters.",
      built: "Brand identity, messaging strategy, and a high-performance landing page focused on conversion.",
      matters: "Establishes immediate credibility and provides a clear path for user acquisition.",
      link: "#"
    },
    {
      name: "Velora",
      problem: "E-commerce brand struggling with low conversion rates and poor customer retention.",
      built: "E-commerce platform overhaul, email automation flows, and a cohesive visual system.",
      matters: "Improves the customer journey from discovery to repeat purchase, maximizing lifetime value.",
      link: "#"
    }
  ];

  return (
    <section className="py-32 bg-charcoal text-[#F4F1EA]">
      <div className="container mx-auto px-6 md:px-[5vw]">
        <h2 className="text-4xl md:text-6xl font-primary uppercase tracking-tight font-bold mb-20 text-center">
          Work
        </h2>

        <div className="max-w-5xl mx-auto space-y-16">
          {projects.map((project, i) => (
            <div key={i} className="group relative border border-white/10 bg-white/5 rounded-3xl p-8 md:p-12 transition-all hover:bg-white/10 hover:border-vermilion/30">
              <div className="flex justify-between items-start mb-8">
                <h3 className="text-3xl md:text-4xl font-primary font-bold">{project.name}</h3>
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-vermilion group-hover:border-vermilion group-hover:text-white transition-all">
                  <ArrowUpRight />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h4 className="font-mono text-xs tracking-widest text-[#F4F1EA]/50 uppercase mb-3">The Problem</h4>
                  <p className="text-[#F4F1EA]/80 font-primary text-sm leading-relaxed">{project.problem}</p>
                </div>
                <div>
                  <h4 className="font-mono text-xs tracking-widest text-vermilion uppercase mb-3">What We Built</h4>
                  <p className="text-[#F4F1EA]/80 font-primary text-sm leading-relaxed">{project.built}</p>
                </div>
                <div>
                  <h4 className="font-mono text-xs tracking-widest text-[#F4F1EA]/50 uppercase mb-3">Why It Matters</h4>
                  <p className="text-[#F4F1EA]/80 font-primary text-sm leading-relaxed">{project.matters}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
