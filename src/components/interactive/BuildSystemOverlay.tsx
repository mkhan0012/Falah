"use client";

import { useState, useEffect } from "react";
import { X, ArrowRight, ArrowLeft } from "lucide-react";
import clsx from "clsx";
import Link from "next/link";

const steps = [
  {
    id: 1,
    question: "WHAT ARE YOU BUILDING?",
    options: ["Business", "Startup", "Product", "Personal Brand", "Professional Service"]
  },
  {
    id: 2,
    question: "WHAT DO YOU NEED?",
    options: ["Branding", "Website", "SEO", "Social Media", "Marketing", "Complete Digital Presence"]
  },
  {
    id: 3,
    question: "WHERE ARE YOU NOW?",
    options: ["Starting", "Already Online", "Growing", "Established"]
  },
  {
    id: 4,
    question: "WHAT IS YOUR MAIN GOAL?",
    options: ["Look More Professional", "Get More Visibility", "Generate Leads", "Build Authority", "Grow Faster"]
  }
];

export default function BuildSystemOverlay({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      // Reset after close animation
      setTimeout(() => {
        setCurrentStep(1);
        setAnswers({});
        setIsGenerating(false);
      }, 500);
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleOptionSelect = (option: string) => {
    setAnswers(prev => ({ ...prev, [currentStep]: option }));
    
    if (currentStep < 4) {
      setTimeout(() => setCurrentStep(prev => prev + 1), 300);
    } else {
      setIsGenerating(true);
      setTimeout(() => {
        setIsGenerating(false);
        setCurrentStep(5); // Results step
      }, 2000);
    }
  };

  const getSystemNodes = () => {
    // Dynamically generate based on answers (simple illustrative logic)
    const goal = answers[4];
    const need = answers[2];
    
    const nodes = ["BRAND", "WEBSITE"];
    
    if (need === "SEO" || goal === "Get More Visibility") nodes.push("SEO", "CONTENT");
    if (need === "Social Media" || goal === "Build Authority") nodes.push("SOCIAL", "CONTENT");
    if (goal === "Generate Leads") nodes.push("SEO", "LEADS", "CONVERSION");
    
    nodes.push("GROWTH");
    
    // Deduplicate
    return [...new Set(nodes)];
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal text-ivory overflow-y-auto">
      
      {/* Abstract Background Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-10" style={{ backgroundImage: 'radial-gradient(var(--color-ivory) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      
      <button 
        onClick={onClose}
        className="absolute top-8 right-8 text-ivory/50 hover:text-vermilion transition-colors z-50 flex items-center gap-2 font-mono text-xs tracking-widest uppercase"
      >
        Close <X size={24} />
      </button>

      <div className="container mx-auto px-6 md:px-[5vw] relative z-10 w-full max-w-4xl py-24">
        
        {currentStep <= 4 && !isGenerating && (
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-500">
            <div className="flex items-center gap-4 mb-12 border-b border-ivory/20 pb-8">
              <span className="font-mono text-sm text-vermilion">STEP 0{currentStep}</span>
              <span className="font-mono text-sm text-ivory/40">/ 04</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-primary font-bold tracking-tight mb-16">
              {steps[currentStep - 1].question}
            </h2>

            <div className="flex flex-col gap-4">
              {steps[currentStep - 1].options.map((option) => {
                const isSelected = answers[currentStep] === option;
                return (
                  <button
                    key={option}
                    onClick={() => handleOptionSelect(option)}
                    className={clsx(
                      "text-left px-8 py-6 text-xl md:text-2xl font-primary border transition-all duration-300 group flex items-center justify-between",
                      isSelected ? "border-vermilion bg-vermilion/10 text-ivory" : "border-ivory/20 text-ivory/70 hover:border-ivory hover:text-ivory"
                    )}
                  >
                    {option}
                    <ArrowRight size={24} className={clsx(
                      "transition-transform duration-300",
                      isSelected ? "translate-x-0 opacity-100 text-vermilion" : "-translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                    )} />
                  </button>
                );
              })}
            </div>
            
            {currentStep > 1 && (
              <button 
                onClick={() => setCurrentStep(prev => prev - 1)}
                className="mt-12 flex items-center gap-2 font-mono text-xs text-ivory/50 hover:text-ivory transition-colors uppercase tracking-widest"
              >
                <ArrowLeft size={16} /> Previous Step
              </button>
            )}
          </div>
        )}

        {isGenerating && (
          <div className="flex flex-col items-center justify-center text-center animate-in fade-in duration-500 min-h-[50vh]">
            <div className="w-16 h-16 border-2 border-ivory/20 border-t-vermilion rounded-full animate-spin mb-8" />
            <h3 className="text-2xl font-primary font-bold tracking-widest uppercase mb-4">Analyzing Requirements</h3>
            <p className="font-mono text-sm text-ivory/50">Architecting your digital system...</p>
          </div>
        )}

        {currentStep === 5 && (
          <div className="animate-in fade-in slide-in-from-bottom-12 duration-700">
            <p className="font-mono text-xs tracking-widest text-vermilion mb-6 uppercase">YOUR FALAH SYSTEM</p>
            <h2 className="text-4xl md:text-6xl font-primary font-bold tracking-tight mb-8">
              Based on your answers, these are the areas we can build for you.
            </h2>
            
            <div className="mt-16 bg-ivory/5 border border-ivory/20 p-8 md:p-16 flex flex-col md:flex-row items-start md:items-center justify-center gap-4 md:gap-8 flex-wrap">
              {getSystemNodes().map((node, index, arr) => (
                <div key={node} className="flex items-center gap-4 md:gap-8">
                  <div className="text-2xl md:text-4xl font-primary font-bold text-ivory">
                    {node}
                  </div>
                  {index < arr.length - 1 && (
                    <ArrowRight className="text-vermilion rotate-90 md:rotate-0" size={24} />
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-16 flex justify-center">
              <Link 
                href={`/contact?need=${encodeURIComponent(answers[2] || '')}&context=${encodeURIComponent(`${answers[1] || ''} | ${answers[3] || ''} | ${answers[4] || ''}`)}`}
                onClick={onClose}
                className="inline-flex items-center gap-2 bg-ivory text-graphite px-8 py-5 text-sm font-mono font-bold uppercase hover:bg-vermilion hover:text-ivory transition-colors group tracking-wider"
              >
                START A CONVERSATION <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

