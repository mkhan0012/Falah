"use client";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

const nodes = [
  { id: "google", label: "GOOGLE", desc: "Help potential customers discover Bharat Hydraulics when searching for relevant hydraulic products and services." },
  { id: "website", label: "WEBSITE", desc: "Give customers product information, credibility and a direct path to enquiry." },
  { id: "catalogue", label: "PRODUCT CATALOGUE", desc: "Detailed specifications for specialized hydraulic equipment." },
  { id: "whatsapp", label: "WHATSAPP", desc: "Reduce friction between interest and conversation." },
  { id: "enquiry", label: "ENQUIRY", desc: "Structured data collection to understand customer needs instantly." },
  { id: "quotation", label: "QUOTATION", desc: "Rapid response system to secure the deal before competitors." },
  { id: "order", label: "ORDER", desc: "Streamlined processing and fulfillment tracking." },
  { id: "customer", label: "CUSTOMER", desc: "A successful transaction and a satisfied client." },
  { id: "repeat", label: "REPEAT BUSINESS", desc: "Create a system so enquiries and outstanding opportunities don't get forgotten." },
];

export default function Section04DigitalEngine() {
  const [activeNode, setActiveNode] = useState(nodes[0]);

  return (
    <section className="py-32 bg-[#F4F1EA] text-[#171717]">
      <div className="container mx-auto px-6 md:px-[5vw]">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-primary uppercase tracking-tight font-bold mb-4">
            <span className="block">One Business.</span>
            <span className="block text-vermilion">Many Digital Touchpoints.</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
          {/* Visual System Diagram */}
          <div className="flex-1 w-full bg-white rounded-3xl p-8 border border-gray-200 shadow-sm relative">
            <div className="flex flex-wrap justify-center gap-3">
              {nodes.map((node, i) => (
                <div key={node.id} className="flex items-center gap-3">
                  <button
                    onMouseEnter={() => setActiveNode(node)}
                    onClick={() => setActiveNode(node)}
                    className={`px-4 py-3 rounded-xl font-mono text-xs md:text-sm tracking-widest font-bold transition-all border ${activeNode.id === node.id ? 'bg-vermilion text-white border-vermilion scale-105 shadow-md' : 'bg-gray-50 text-gray-600 border-gray-200 hover:border-vermilion/50 hover:bg-vermilion/5'}`}
                  >
                    {node.label}
                  </button>
                  {i < nodes.length - 1 && (
                    <ArrowRight size={16} className="text-gray-300 hidden md:block" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Hover Details */}
          <div className="w-full lg:w-1/3 bg-charcoal text-[#F4F1EA] rounded-3xl p-8 shadow-xl min-h-[250px] flex flex-col justify-center transition-all duration-300">
            <h3 className="text-vermilion font-mono text-sm tracking-widest font-bold mb-4 uppercase">{activeNode.label}</h3>
            <p className="font-primary text-xl leading-relaxed text-[#F4F1EA]/90">{activeNode.desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
