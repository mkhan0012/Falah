"use client";

import { useState } from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import JobApplicationModal from "@/components/forms/JobApplicationModal";

export default function CareersPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState("");

  const openModal = (role: string) => {
    setSelectedRole(role);
    setIsModalOpen(true);
  };

  return (
    <>
      <main className="min-h-screen bg-cloud-white pt-36 md:pt-44 pb-32 text-deep-atmosphere selection:bg-sky-slate selection:text-white relative overflow-hidden font-sans">
        {/* Subtle atmospheric horizon glows */}
        <div className="pointer-events-none absolute left-1/4 top-20 w-[600px] h-[350px] bg-sky-slate/10 blur-[150px] rounded-full" />
        <div className="pointer-events-none absolute right-10 bottom-1/3 w-[450px] h-[450px] bg-mist-blue/40 blur-[140px] rounded-full" />

        <div className="container mx-auto px-5 sm:px-6 md:px-12 max-w-[1360px] relative z-10">
          
          <div className="mb-20 md:mb-28">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-sky-slate/30 text-[11px] font-mono text-sky-slate mb-6 uppercase tracking-widest font-semibold shadow-xs">
              <Sparkles size={12} />
              <span>CAREERS & PARTNERSHIPS</span>
            </div>

            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display font-bold tracking-tight text-deep-atmosphere mb-8 uppercase leading-[0.95]">
              BUILD WITH <span className="text-sky-slate">VYOMA.</span>
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-mist-blue pt-8">
              <div className="md:col-span-8 lg:col-span-7">
                <p className="text-xl sm:text-2xl text-graphite/80 font-sans leading-relaxed mb-6">
                  Vyoma Media operates at the intersection of Brand Strategy, Next.js Web Systems, and Organic Search Growth. We engineer owned discoverability and compounding value for ambitious businesses.
                </p>
                <p className="text-base sm:text-lg font-sans text-deep-atmosphere">
                  We are always eager to collaborate with exceptional strategists, engineers, and art directors in Hyderabad and worldwide who care deeply about craft and systems.
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-mist-blue pt-16 mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              
              <div className="lg:col-span-4">
                <h2 className="text-2xl sm:text-4xl font-display font-bold mb-4 tracking-tight uppercase text-deep-atmosphere">
                  Open Roles
                </h2>
                <p className="text-sm font-sans text-graphite/80 mb-8 leading-relaxed">
                  Don&apos;t see your exact role? We continuously scout senior talent across design engineering and organic search architecture. Submit a general portfolio application.
                </p>
                <button 
                  onClick={() => openModal("General Application")}
                  className="inline-flex items-center gap-2 border border-mist-blue bg-white text-deep-atmosphere px-6 py-3.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider hover:border-sky-slate hover:text-sky-slate transition-all shadow-xs group"
                >
                  General Application <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>

              <div className="lg:col-span-8 space-y-4">
                
                {/* Role 1 */}
                <div className="p-8 rounded-3xl bg-white shadow-xs border border-mist-blue hover:border-sky-slate/40 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-6 group">
                  <div>
                    <div className="flex items-center gap-3 text-xs font-mono text-graphite/60 mb-2 uppercase">
                      <span>Full-Time</span>
                      <span className="text-sky-slate">/</span>
                      <span>Hyderabad or Remote</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-deep-atmosphere mb-2 group-hover:text-sky-slate transition-colors">
                      Senior Design Engineer (Next.js / Tailwind)
                    </h3>
                    <p className="text-sm font-sans text-graphite/80 max-w-xl leading-relaxed">
                      Bridge editorial design and React engineering. Craft sub-second web applications with fluid motion, Core Web Vitals perfection, and clean typography.
                    </p>
                  </div>
                  <button 
                    onClick={() => openModal("Senior Design Engineer")}
                    className="shrink-0 bg-deep-atmosphere text-white px-6 py-3 rounded-full font-mono text-xs font-bold uppercase tracking-wider hover:bg-sky-slate transition-all shadow-sm"
                  >
                    Apply Now
                  </button>
                </div>

                {/* Role 2 */}
                <div className="p-8 rounded-3xl bg-white shadow-xs border border-mist-blue hover:border-sky-slate/40 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-6 group">
                  <div>
                    <div className="flex items-center gap-3 text-xs font-mono text-graphite/60 mb-2 uppercase">
                      <span>Full-Time</span>
                      <span className="text-sky-slate">/</span>
                      <span>Hyderabad · Onsite</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-deep-atmosphere mb-2 group-hover:text-sky-slate transition-colors">
                      Technical SEO & Generative Search Lead
                    </h3>
                    <p className="text-sm font-sans text-graphite/80 max-w-xl leading-relaxed">
                      Architect programmatic keyword clusters, technical site performance audits, and GEO strategies across Google and AI Answer Engines.
                    </p>
                  </div>
                  <button 
                    onClick={() => openModal("Technical SEO & Generative Search Lead")}
                    className="shrink-0 bg-deep-atmosphere text-white px-6 py-3 rounded-full font-mono text-xs font-bold uppercase tracking-wider hover:bg-sky-slate transition-all shadow-sm"
                  >
                    Apply Now
                  </button>
                </div>

                {/* Role 3 */}
                <div className="p-8 rounded-3xl bg-white shadow-xs border border-mist-blue hover:border-sky-slate/40 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-6 group">
                  <div>
                    <div className="flex items-center gap-3 text-xs font-mono text-graphite/60 mb-2 uppercase">
                      <span>Full-Time</span>
                      <span className="text-sky-slate">/</span>
                      <span>Hyderabad or Remote</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-deep-atmosphere mb-2 group-hover:text-sky-slate transition-colors">
                      Brand Strategist & Creative Director
                    </h3>
                    <p className="text-sm font-sans text-graphite/80 max-w-xl leading-relaxed">
                      Direct market research, category thesis definition, naming, and visual identity systems for industrial, healthcare, and high-growth clients.
                    </p>
                  </div>
                  <button 
                    onClick={() => openModal("Brand Strategist & Creative Director")}
                    className="shrink-0 bg-deep-atmosphere text-white px-6 py-3 rounded-full font-mono text-xs font-bold uppercase tracking-wider hover:bg-sky-slate transition-all shadow-sm"
                  >
                    Apply Now
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </main>

      <JobApplicationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        roleTitle={selectedRole} 
      />
    </>
  );
}
