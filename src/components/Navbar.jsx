"use client";

import { useState, useEffect } from "react";
import { Phone, Mail, Menu, X, ShieldCheck, ChevronRight } from "lucide-react";
import { FIRM_INFO } from "@/data/firmInfo";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "About Us", href: "#about" },
    { name: "Why Choose Us", href: "#why-us" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 transition-all duration-300">
      {/* Top Banner - Hotline & PAN India notice */}
      <div className="bg-slate-950 text-slate-300 text-xs py-2 px-4 border-b border-slate-850">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 bg-blue-500/10 text-blue-400 px-2.5 py-0.5 rounded-full border border-blue-500/20 font-medium text-[11px]">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
              PAN India Practice
            </span>
            <span className="hidden md:inline text-slate-700">|</span>
            <span className="hidden md:inline text-slate-300 font-normal">
              16+ Years Experience • US GAAP, IND AS & Tax Advisory
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a href={`tel:${FIRM_INFO.phone}`} className="flex items-center gap-1.5 hover:text-blue-400 transition-colors">
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span>{FIRM_INFO.phone}</span>
            </a>
            <span className="text-slate-700">|</span>
            <a href={`mailto:${FIRM_INFO.email}`} className="flex items-center gap-1.5 hover:text-blue-400 transition-colors">
              <Mail className="w-3.5 h-3.5 text-blue-400" />
              <span className="hidden sm:inline">{FIRM_INFO.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm py-3 border-b border-slate-200"
            : "bg-white/90 backdrop-blur-xs py-4 border-b border-slate-150"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-900 via-slate-900 to-blue-950 text-white flex items-center justify-center font-extrabold text-lg shadow-md border border-blue-500/20 group-hover:scale-105 transition-transform">
              NKJ
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-snug tracking-tight text-slate-900 group-hover:text-blue-900 transition-colors">
                {FIRM_INFO.name}
              </span>
              <span className="text-xs font-semibold text-blue-700 tracking-wide">
                Chartered Accountants • US CPA
              </span>
            </div>
          </a>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-md shadow-blue-500/10 hover:shadow-blue-500/20 transition-all border border-blue-500/30"
            >
              <span>Schedule Advisory</span>
              <ChevronRight className="w-4 h-4 text-white" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-lg">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-base font-semibold text-slate-800 hover:text-blue-600 py-2 border-b border-slate-100"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-bold py-3 rounded-xl text-sm shadow-md"
              >
                <span>Book Advisory Call</span>
                <ChevronRight className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
