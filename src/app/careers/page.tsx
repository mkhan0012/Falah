"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
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
      <main className="min-h-screen bg-ivory pt-40 pb-24 text-graphite">
        <div className="container mx-auto px-6 md:px-[5vw]">
          
          <div className="mb-24 md:mb-32">
            <h1 className="text-6xl md:text-[8vw] leading-[0.9] font-primary font-bold tracking-tight text-graphite mb-12 uppercase">
              BUILD WITH <span className="text-slate">FALAH.</span>
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-warm-grey pt-12">
              <div className="md:col-span-8 lg:col-span-6">
                <p className="text-2xl md:text-3xl text-slate font-primary leading-relaxed font-medium mb-8">
                  FALAH operates across Brand, Design, Technology, and Growth. We&apos;re building premium digital presence systems for ambitious businesses.
                </p>
                <p className="text-xl font-primary text-graphite">
                  We&apos;re always interested in meeting exceptional people who care deeply about craft and systems.
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-warm-grey pt-24 mb-32">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              
              <div className="lg:col-span-4">
                <h2 className="text-3xl md:text-5xl font-primary font-bold mb-8 tracking-tight uppercase text-graphite">Open Roles</h2>
                <p className="text-lg font-primary text-slate mb-8">
                  Don't see your exact role? We are always looking for exceptional talent. Drop us your resume anyway.
                </p>
                <button 
                  onClick={() => openModal("General Application")}
                  className="inline-flex items-center gap-2 border border-graphite text-graphite px-8 py-4 text-sm font-mono font-bold uppercase tracking-wider hover:bg-graphite hover:text-ivory transition-colors group"
                >
                  PITCH YOURSELF <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>

              <div className="lg:col-span-8 flex flex-col gap-6">
                
                {/* Job Card 1 */}
                <div className="bg-white border border-warm-grey p-8 md:p-10 hover:border-vermilion transition-colors group flex flex-col md:flex-row md:items-center justify-between gap-8">
                  <div>
                    <div className="flex gap-4 items-center mb-4 text-xs font-mono font-bold tracking-widest text-slate uppercase">
                      <span>REMOTE</span>
                      <span className="text-vermilion">/</span>
                      <span>FULL-TIME</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-primary font-bold text-graphite mb-2 group-hover:text-vermilion transition-colors">
                      Senior SEO Strategist
                    </h3>
                    <p className="text-slate font-primary text-lg">Lead enterprise organic growth campaigns.</p>
                  </div>
                  <button 
                    onClick={() => openModal("Senior SEO Strategist")}
                    className="shrink-0 bg-graphite text-ivory px-6 py-4 font-mono text-xs font-bold uppercase tracking-widest hover:bg-vermilion transition-colors"
                  >
                    APPLY NOW
                  </button>
                </div>

                {/* Job Card 2 */}
                <div className="bg-white border border-warm-grey p-8 md:p-10 hover:border-vermilion transition-colors group flex flex-col md:flex-row md:items-center justify-between gap-8">
                  <div>
                    <div className="flex gap-4 items-center mb-4 text-xs font-mono font-bold tracking-widest text-slate uppercase">
                      <span>HYDERABAD</span>
                      <span className="text-vermilion">/</span>
                      <span>FULL-TIME</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-primary font-bold text-graphite mb-2 group-hover:text-vermilion transition-colors">
                      React / GSAP Engineer
                    </h3>
                    <p className="text-slate font-primary text-lg">Build premium, high-performance web experiences.</p>
                  </div>
                  <button 
                    onClick={() => openModal("React / GSAP Engineer")}
                    className="shrink-0 bg-graphite text-ivory px-6 py-4 font-mono text-xs font-bold uppercase tracking-widest hover:bg-vermilion transition-colors"
                  >
                    APPLY NOW
                  </button>
                </div>

                {/* Job Card 3 */}
                <div className="bg-white border border-warm-grey p-8 md:p-10 hover:border-vermilion transition-colors group flex flex-col md:flex-row md:items-center justify-between gap-8">
                  <div>
                    <div className="flex gap-4 items-center mb-4 text-xs font-mono font-bold tracking-widest text-slate uppercase">
                      <span>REMOTE</span>
                      <span className="text-vermilion">/</span>
                      <span>CONTRACT</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-primary font-bold text-graphite mb-2 group-hover:text-vermilion transition-colors">
                      Copywriter (Conversion)
                    </h3>
                    <p className="text-slate font-primary text-lg">Write direct-response copy that prints money.</p>
                  </div>
                  <button 
                    onClick={() => openModal("Copywriter (Conversion)")}
                    className="shrink-0 bg-graphite text-ivory px-6 py-4 font-mono text-xs font-bold uppercase tracking-widest hover:bg-vermilion transition-colors"
                  >
                    APPLY NOW
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

