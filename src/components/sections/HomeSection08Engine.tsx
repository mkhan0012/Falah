"use client";

import React, { useState } from "react";

export default function HomeSection08Engine() {
  const [activePath, setActivePath] = useState<string[]>([]);
  
  const nodes = [
    { id: "GOOGLE", label: "GOOGLE", x: 10, y: 10 },
    { id: "SEO", label: "SEO", x: 30, y: -20 },
    { id: "WEBSITE", label: "WEBSITE", x: 50, y: -40 },
    { id: "PRODUCTS", label: "PRODUCTS", x: 70, y: -20 },
    { id: "WHATSAPP", label: "WHATSAPP", x: 90, y: 10 },
    { id: "LEADS", label: "LEADS", x: 80, y: 50 },
    { id: "CUSTOMERS", label: "CUSTOMERS", x: 60, y: 80 },
    { id: "ANALYTICS", label: "ANALYTICS", x: 40, y: 80 },
    { id: "INVENTORY", label: "INVENTORY", x: 20, y: 50 },
  ];

  const handleNodeClick = (id: string) => {
    if (id === "GOOGLE") {
      setActivePath([]); // reset
      setTimeout(() => setActivePath(["GOOGLE"]), 100);
      setTimeout(() => setActivePath(["GOOGLE", "WEBSITE"]), 800);
      setTimeout(() => setActivePath(["GOOGLE", "WEBSITE", "WHATSAPP"]), 1600);
      setTimeout(() => setActivePath(["GOOGLE", "WEBSITE", "WHATSAPP", "LEADS"]), 2400);
      setTimeout(() => setActivePath(["GOOGLE", "WEBSITE", "WHATSAPP", "LEADS", "CUSTOMERS"]), 3200);
    } else {
      setActivePath([id]);
    }
  };

  return (
    <section className="py-24 md:py-32 bg-neutral-900 text-white overflow-hidden relative">
      <div className="container mx-auto px-4 text-center relative z-10 mb-16">
        <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-4">
          THE DIGITAL ENGINE
        </h2>
        <p className="text-neutral-400 font-medium tracking-widest uppercase text-sm">
          Click &quot;GOOGLE&quot; to see the flow.
        </p>
      </div>

      <div className="relative w-full max-w-4xl aspect-square md:aspect-video mx-auto">
        
        {/* Center Node */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="px-6 py-4 bg-white text-black font-bold uppercase tracking-widest text-sm md:text-xl rounded-2xl shadow-[0_0_40px_rgba(255,255,255,0.2)]">
            BHARAT HYDRAULICS
          </div>
        </div>
        
        {/* SVG Connections */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ overflow: "visible" }}>
          {/* Default faded lines from center to all nodes */}
          {nodes.map(node => (
            <line 
              key={`line-${node.id}`}
              x1="50%" y1="50%" 
              x2={`${node.x}%`} y2={`${node.y}%`}
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="1"
            />
          ))}
          
          {/* Active Flow Lines */}
          {activePath.map((nodeId, idx) => {
            if (idx === 0) return null; // need pairs
            const prevId = activePath[idx - 1];
            const prevNode = nodes.find(n => n.id === prevId);
            const currNode = nodes.find(n => n.id === nodeId);
            
            if (prevNode && currNode) {
              return (
                <line 
                  key={`flow-${prevId}-${nodeId}`}
                  x1={`${prevNode.x}%`} y1={`${prevNode.y}%`}
                  x2={`${currNode.x}%`} y2={`${currNode.y}%`}
                  stroke="#fff"
                  strokeWidth="2"
                  className="animate-draw-line"
                  strokeDasharray="1000"
                  strokeDashoffset="1000"
                />
              );
            }
            return null;
          })}
        </svg>

        {/* Nodes */}
        {nodes.map(node => {
          const isActive = activePath.includes(node.id);
          return (
            <button
              key={node.id}
              onClick={() => handleNodeClick(node.id)}
              className={`absolute -translate-x-1/2 -translate-y-1/2 z-10 transition-all duration-500 ease-out flex items-center justify-center
                ${isActive ? 'scale-110' : 'hover:scale-105'}
              `}
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
            >
              <div className={`px-4 py-2 rounded-full border text-[10px] md:text-xs font-bold uppercase tracking-widest transition-colors duration-500
                ${isActive 
                  ? 'bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.5)]' 
                  : 'bg-black text-neutral-400 border-neutral-700 hover:border-neutral-500'}
              `}>
                {node.label}
              </div>
            </button>
          );
        })}
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes draw-line {
          to {
            stroke-dashoffset: 0;
          }
        }
        .animate-draw-line {
          animation: draw-line 0.8s ease-in-out forwards;
        }
      `}} />
    </section>
  );
}
