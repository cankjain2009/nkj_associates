"use client";

import { ShieldCheck, ArrowRight, Building2, Globe, CheckCircle2 } from "lucide-react";
import { FIRM_INFO } from "@/data/firmInfo";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-slate-50 via-blue-50/20 to-white text-slate-900 overflow-hidden py-16 md:py-24 border-b border-slate-200/80">
      {/* Subtle Background Pattern & Light Radial Glow */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-400/10 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-indigo-400/10 rounded-full filter blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Main Copy (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Trusted Financial, Audit & Tax Advisory on a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700">
                PAN India Basis
              </span>
            </h1>

            {/* Sub-headline / Core Intro */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              <strong className="text-slate-900 font-semibold">NK Jain & Associates</strong> is a professionally managed Chartered Accountancy firm bringing together 4 experienced partners. We deliver complete statutory compliance, audit, tax strategy, and global financial advisory under US GAAP, IND AS & IFRS.
            </p>

            {/* Service Chips */}
            <div className="flex flex-wrap gap-2 pt-2">
              {[
                "US GAAP & IND AS",
                "Direct & Indirect Taxation",
                "Internal Financial Controls (IFC)",
                "M&A Deal Advisory",
                "Virtual CFO Services"
              ].map((chip) => (
                <span
                  key={chip}
                  className="bg-white text-slate-700 text-xs px-3 py-1.5 rounded-xl border border-slate-200 shadow-2xs flex items-center gap-1.5 font-medium"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                  {chip}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3.5 rounded-xl shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30 transition-all text-sm tracking-wide border border-blue-500/30"
              >
                <span>Explore Our 9 Core Services</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 font-semibold px-6 py-3.5 rounded-xl border border-slate-300 hover:border-slate-400 transition-all text-sm shadow-2xs"
              >
                <span>Request Advisory Call</span>
              </a>
            </div>
          </div>

          {/* Right Visual Stats Card Grid (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xl relative">
              
              <div className="absolute -top-3 -right-3 bg-blue-600 text-white font-bold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full shadow-md border border-blue-400/30">
                Institutional Quality
              </div>

              <h3 className="text-slate-900 font-bold text-base border-b border-slate-100 pb-3 mb-6 flex items-center justify-between">
                <span>Firm Metrics & Standards</span>
                <Globe className="w-4 h-4 text-blue-600" />
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {FIRM_INFO.stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-50/80 p-4 rounded-xl border border-slate-200/80 hover:border-blue-300 transition-colors"
                  >
                    <div className="text-2xl sm:text-3xl font-extrabold text-blue-700">
                      {stat.value}
                    </div>
                    <div className="text-xs font-bold text-slate-900 mt-1">
                      {stat.label}
                    </div>
                    <div className="text-[11px] text-slate-500 mt-1 leading-snug">
                      {stat.description}
                    </div>
                  </div>
                ))}
              </div>

              {/* PAN India Reach Note */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-start gap-3 bg-blue-50/50 p-3.5 rounded-xl border border-blue-100">
                <Building2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <p className="text-xs text-slate-700 leading-relaxed font-medium">
                  Serving clients seamlessly across Delhi, Hisar, Nagpur, Deoghar, and industrial corridors with deep compliance expertise.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
