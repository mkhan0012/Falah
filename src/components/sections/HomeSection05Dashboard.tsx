"use client";

import React, { useState } from "react";
import { BarChart3, Users, MousePointerClick, MessageCircle, TrendingUp } from "lucide-react";

type Tab = "VISIBILITY" | "TRAFFIC" | "ENQUIRIES" | "QUALIFIED_LEADS" | "CUSTOMERS";

export default function HomeSection05Dashboard() {
  const [activeTab, setActiveTab] = useState<Tab>("VISIBILITY");

  const tabs: { id: Tab; label: string; icon: React.ReactNode }[] = [
    { id: "VISIBILITY", label: "VISIBILITY", icon: <BarChart3 className="w-4 h-4" /> },
    { id: "TRAFFIC", label: "TRAFFIC", icon: <MousePointerClick className="w-4 h-4" /> },
    { id: "ENQUIRIES", label: "ENQUIRIES", icon: <MessageCircle className="w-4 h-4" /> },
    { id: "QUALIFIED_LEADS", label: "QUALIFIED LEADS", icon: <TrendingUp className="w-4 h-4" /> },
    { id: "CUSTOMERS", label: "CUSTOMERS", icon: <Users className="w-4 h-4" /> },
  ];

  const content = {
    VISIBILITY: {
      value: "12K+",
      unit: "/ month",
      label: "Google impressions",
      status: "TRACKING",
      type: "metric"
    },
    TRAFFIC: {
      value: "6K+",
      unit: "/ month",
      label: "Website visits",
      status: "TRACKING",
      type: "metric"
    },
    ENQUIRIES: {
      value: "DATA COLLECTION",
      unit: "",
      label: "Website • WhatsApp • Phone",
      status: "BEING TRACKED",
      type: "collection"
    },
    QUALIFIED_LEADS: {
      value: "DATA COLLECTION",
      unit: "",
      label: "Enquiries with genuine purchase intent that match the target customer profile.",
      status: "IN PROGRESS",
      type: "definition"
    },
    CUSTOMERS: {
      value: "DATA COLLECTION",
      unit: "",
      label: "Customers attributable to tracked digital activity.",
      status: "IN PROGRESS",
      type: "definition"
    }
  };

  const current = content[activeTab];

  return (
    <section className="py-24 md:py-32 bg-white dark:bg-black text-black dark:text-white">
      <div className="container mx-auto px-4 max-w-6xl">
        
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight">
            THE NUMBERS <br />
            WE&apos;RE WATCHING.
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          
          {/* Sidebar Tabs */}
          <div className="w-full lg:w-1/3 flex flex-col gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-4 px-6 py-4 rounded-xl text-left font-bold uppercase tracking-widest text-xs transition-all ${
                  activeTab === tab.id
                    ? "bg-neutral-100 dark:bg-neutral-900 text-black dark:text-white"
                    : "text-neutral-500 hover:bg-neutral-50 dark:hover:bg-neutral-950"
                }`}
              >
                <div className={`${activeTab === tab.id ? "text-black dark:text-white" : "text-neutral-400"}`}>
                  {tab.icon}
                </div>
                {tab.label}
              </button>
            ))}
          </div>
          
          {/* Dashboard Panel */}
          <div className="w-full lg:w-2/3">
            <div className="bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-3xl p-8 md:p-12 h-full flex flex-col justify-center min-h-[400px]">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-full text-[10px] font-bold tracking-widest uppercase mb-12 self-start">
                <span className={`w-2 h-2 rounded-full ${
                  current.status.includes("TRACK") ? "bg-green-500 animate-pulse" : "bg-amber-500"
                }`} />
                {current.status}
              </div>

              {current.type === "metric" ? (
                <div>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-7xl md:text-9xl font-bold tracking-tighter">
                      {current.value}
                    </span>
                    <span className="text-xl md:text-2xl font-medium text-neutral-500 uppercase tracking-widest">
                      {current.unit}
                    </span>
                  </div>
                  <p className="text-xl text-neutral-600 dark:text-neutral-400 font-medium">
                    {current.label}
                  </p>
                </div>
              ) : (
                <div>
                  <h3 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
                    {current.value}
                  </h3>
                  {current.type === "collection" ? (
                    <div className="flex gap-4 text-sm font-medium uppercase tracking-widest text-neutral-500">
                      {current.label.split(" • ").map((item, i) => (
                        <div key={i} className="px-4 py-2 bg-neutral-200 dark:bg-neutral-800 rounded-lg">
                          {item}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-lg border-l-2 border-neutral-300 dark:border-neutral-700 pl-6">
                      {current.label}
                    </p>
                  )}
                </div>
              )}
              
            </div>
          </div>
          
        </div>

      </div>
    </section>
  );
}
