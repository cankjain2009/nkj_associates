"use client";

import { ShieldCheck, MapPin, Clock, Award, Lock, FileText, Check } from "lucide-react";
import { FIRM_INFO } from "@/data/firmInfo";

export default function WhyUsSection() {
  const reasons = [
    {
      title: "PAN India Service Network",
      description: "Seamless advisory and audit execution across all Indian states and Union Territories, supported by active offices in Delhi, Hisar (Haryana), Nagpur (Maharashtra), and Deoghar (Jharkhand).",
      icon: MapPin
    },
    {
      title: "US CPA & ICAI Quad-Partner Expertise",
      description: "Led by CA Naresh Kumar Jain, CPA (US), our 4 partners bring specialized domain mastery across US GAAP, IND AS, IFRS, Tax litigation, and IPO processes.",
      icon: Award
    },
    {
      title: "Partner-Led Personal Engagement",
      description: "Direct involvement of senior partners on all client engagements ensures prompt decision-making, technical accuracy, and tailored solutions.",
      icon: Clock
    },
    {
      title: "Strict Confidentiality & Data Security",
      description: "Bank-grade data privacy protocols ensuring secure handling of sensitive financial records, corporate documents, and tax filings.",
      icon: Lock
    },
    {
      title: "End-to-End Growth Lifecycle Support",
      description: "From early-stage company incorporation and GST/Tax filings to Virtual CFO, IFC risk framework, M&A due diligence, and IPO readiness.",
      icon: FileText
    },
    {
      title: "Proven Track Record Across Sectors",
      description: "Trusted by MNCs, listed enterprises, fast-growing tech startups, manufacturing giants, and real estate groups across 16+ years of practice.",
      icon: ShieldCheck
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 font-semibold px-3.5 py-1 rounded-full text-xs uppercase tracking-wider mb-3 border border-blue-500/20">
            Why Naresh Kumar Jain & Associates
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Why Enterprises Choose Us as Their Trusted Financial Partner
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed">
            Combining national reach with deep technical precision to safeguard compliance and accelerate business growth.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <div
                key={idx}
                className="bg-slate-900/90 p-6 rounded-2xl border border-slate-800 hover:border-blue-500/40 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-5 border border-blue-500/20 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                  {reason.title}
                </h3>
                <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Metro Hub Locations Footprint Banner */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-925 to-slate-900 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <MapPin className="w-5 h-5 text-blue-400" />
              <span>PAN India Practice Locations & Hubs</span>
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">
              Active offices across Delhi, Hisar (Haryana), Nagpur (Maharashtra), and Deoghar (Jharkhand).
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {FIRM_INFO.offices.map((office, i) => (
              <div key={i} className="bg-slate-950/90 border border-slate-800 px-4 py-2 rounded-xl text-xs text-slate-300 font-semibold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                <span>{office.city}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
