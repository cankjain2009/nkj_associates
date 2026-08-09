"use client";

import { useState } from "react";
import {
  Calculator,
  Globe,
  TrendingUp,
  Award,
  Scale,
  ShieldCheck,
  Briefcase,
  Layers,
  FileCheck,
  ChevronRight,
  CheckCircle2,
  X,
  Search,
  ArrowUpRight
} from "lucide-react";
import { SERVICES, SERVICE_CATEGORIES } from "@/data/servicesData";

const iconComponents = {
  Calculator,
  Globe,
  TrendingUp,
  Award,
  Scale,
  ShieldCheck,
  Briefcase,
  Layers,
  FileCheck
};

export default function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState("All Services");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedService, setSelectedService] = useState(null);

  const filteredServices = SERVICES.filter((service) => {
    const matchesCategory =
      activeCategory === "All Services" || service.category === activeCategory;
    const matchesSearch =
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.highlights.some((h) => h.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="services" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 font-semibold px-3.5 py-1 rounded-full text-xs uppercase tracking-wider mb-3 border border-blue-200">
            Our 9 Core Service Categories
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Comprehensive Accounting, Tax & Advisory Services
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Delivering end-to-end statutory compliance, financial reporting, risk advisory, and strategic transaction support for enterprises across India and globally.
          </p>
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {SERVICE_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeCategory === cat
                    ? "bg-slate-900 text-white shadow-sm"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:border-blue-600 text-slate-800 placeholder-slate-400"
            />
          </div>
        </div>

        {/* Services Grid (3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => {
            const IconComponent = iconComponents[service.iconName] || Calculator;

            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Top */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shadow-2xs border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="bg-blue-50 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-blue-150">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Category */}
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-600 mt-1 uppercase tracking-wider">
                    {service.category}
                  </p>

                  {/* Summary */}
                  <p className="text-slate-600 text-sm mt-3 leading-relaxed">
                    {service.summary}
                  </p>

                  {/* Quick Highlights Preview */}
                  <ul className="mt-4 space-y-2 border-t border-slate-100 pt-4">
                    {service.highlights.slice(0, 3).map((h, i) => (
                      <li key={i} className="text-xs text-slate-700 flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Action */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500 font-medium truncate max-w-[170px]">
                    {service.targetClients.split(",")[0]} & more
                  </span>

                  <button
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-slate-900 hover:text-blue-600 group/btn transition-colors"
                  >
                    <span>Scope Details</span>
                    <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty Search State */}
        {filteredServices.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200">
            <p className="text-slate-500 text-sm">No services match your search phrase or category filter.</p>
            <button
              onClick={() => {
                setActiveCategory("All Services");
                setSearchQuery("");
              }}
              className="mt-3 text-xs font-bold text-blue-600 hover:underline"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Detail Modal Dialog */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
          <div
            className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-slate-900 text-blue-400 flex items-center justify-center shrink-0 shadow-md">
                {(() => {
                  const ModalIcon = iconComponents[selectedService.iconName] || Calculator;
                  return <ModalIcon className="w-7 h-7" />;
                })()}
              </div>
              <div>
                <span className="bg-blue-50 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full border border-blue-200">
                  {selectedService.category}
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mt-1">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            {/* Scope Overview */}
            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Overview & Scope
                </h4>
                <p className="text-slate-700 text-sm leading-relaxed">
                  {selectedService.description}
                </p>
              </div>

              {/* Highlights List */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-3">
                  Key Deliverables
                </h4>
                <div className="space-y-2.5">
                  {selectedService.highlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 text-xs sm:text-sm text-slate-800 flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Target Clients */}
              <div className="pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Target Client Profile
                </h4>
                <p className="text-slate-800 font-medium text-xs sm:text-sm bg-blue-50/60 border border-blue-200 p-3 rounded-xl">
                  {selectedService.targetClients}
                </p>
              </div>
            </div>

            {/* Modal Footer CTA */}
            <div className="mt-8 pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-slate-500">Need customized scope details for your firm?</span>
              <a
                href="#contact"
                onClick={() => setSelectedService(null)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow-md transition-all"
              >
                <span>Consult Our Partners</span>
                <ChevronRight className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
