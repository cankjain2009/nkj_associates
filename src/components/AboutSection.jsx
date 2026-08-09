"use client";

import { Award, ShieldCheck, Users, CheckCircle2, Building2, Globe2, Sparkles } from "lucide-react";
import { FIRM_INFO } from "@/data/firmInfo";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-800 font-semibold px-3.5 py-1 rounded-full text-xs uppercase tracking-wider mb-3 border border-slate-200">
            About Our Firm
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            NK Jain & Associates
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg font-medium">
            Over 16 Years of Technical Excellence, Integrity & Financial Leadership
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Narrative Copy */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Highlighted Intro Card */}
            <div className="p-6 bg-slate-950 text-white rounded-2xl shadow-xl relative overflow-hidden border border-slate-850">
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-600/15 rounded-full blur-2xl pointer-events-none" />
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 border border-blue-500/30">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white leading-snug">
                    {FIRM_INFO.about.headline}
                  </h3>
                  <p className="text-xs text-blue-400 font-semibold mt-1">
                    Founded by {FIRM_INFO.foundedBy} • 4 Partner Practice
                  </p>
                  <p className="text-slate-300 text-sm mt-3 leading-relaxed">
                    {FIRM_INFO.about.intro}
                  </p>
                </div>
              </div>
            </div>

            {/* Narrative Paragraphs */}
            <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p className="p-4 bg-slate-50 rounded-xl border border-slate-200/80">
                <strong className="text-slate-900 font-semibold">Leadership & Practice Structure: </strong>
                {FIRM_INFO.about.founder}
              </p>

              <p className="p-4 bg-slate-50 rounded-xl border border-slate-200/80">
                <strong className="text-slate-900 font-semibold">Multi-Industry Exposure: </strong>
                {FIRM_INFO.about.experience}
              </p>

              <p className="p-4 bg-slate-50 rounded-xl border border-slate-200/80">
                <strong className="text-slate-900 font-semibold">Comprehensive Technical Standards: </strong>
                {FIRM_INFO.about.standards}
              </p>

              <div className="p-5 bg-blue-50/70 rounded-2xl border border-blue-200/80 text-slate-900 font-medium leading-relaxed">
                <span className="text-blue-800 font-bold block mb-1">Our Core Objective & Philosophy:</span>
                "{FIRM_INFO.about.philosophy}"
              </div>
            </div>

          </div>

          {/* Right Column: 4 Strategic Pillars & Credentials Card */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <h3 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-3 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-blue-600" />
                <span>Our Core Operating Pillars</span>
              </h3>

              <div className="space-y-4">
                {FIRM_INFO.about.pillars.map((pillar, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs hover:border-blue-300 transition-colors">
                    <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>{pillar.title}</span>
                    </h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed pl-6">
                      {pillar.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Credentials Summary Box */}
            <div className="bg-slate-950 text-white p-6 rounded-2xl border border-slate-800 shadow-lg">
              <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-3">
                Key Technical Domain Mastery
              </h4>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800 text-slate-200 font-medium">
                  ✓ US GAAP & US CPA
                </div>
                <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800 text-slate-200 font-medium">
                  ✓ IND AS & IFRS
                </div>
                <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800 text-slate-200 font-medium">
                  ✓ Direct & Indirect Tax
                </div>
                <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800 text-slate-200 font-medium">
                  ✓ Statutory & Internal Audit
                </div>
                <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800 text-slate-200 font-medium">
                  ✓ IPO Readiness Process
                </div>
                <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800 text-slate-200 font-medium">
                  ✓ M&A Deal Advisory
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
