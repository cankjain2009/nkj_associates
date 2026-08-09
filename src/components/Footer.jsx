"use client";

import { ArrowUp, ShieldCheck, Phone, Mail, MapPin } from "lucide-react";
import { FIRM_INFO } from "@/data/firmInfo";
import { SERVICES } from "@/data/servicesData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-850 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1 & 2: Firm Branding & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-900 via-slate-900 to-blue-950 text-white flex items-center justify-center font-extrabold text-lg border border-blue-500/20 shadow-md">
                NKJ
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-base text-white">
                  {FIRM_INFO.name}
                </span>
                <span className="text-xs font-semibold text-blue-400">
                  Chartered Accountants • US CPA
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Professionally managed Chartered Accountancy practice with 16+ years of practice, serving corporate, institutional, and high-growth clients on a PAN India basis.
            </p>

            <div className="pt-2 text-xs space-y-1.5 text-slate-300">
              <div><strong className="text-white">Founder:</strong> {FIRM_INFO.foundedBy}</div>
              <div><strong className="text-white">Leadership:</strong> 4 Experienced Partners</div>
              <div><strong className="text-white">Key Standards:</strong> US GAAP, IND AS, IFRS, Direct & Indirect Tax</div>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Core Services</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#why-us" className="hover:text-blue-400 transition-colors">Why Choose Us</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Schedule Advisory</a></li>
            </ul>
          </div>

          {/* Col 4: Services Overview */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Service Categories
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-blue-400 transition-colors">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Contact Summary */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              HQ Contact
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>{FIRM_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={`tel:${FIRM_INFO.phone}`} className="hover:text-blue-400">{FIRM_INFO.phone}</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={`mailto:${FIRM_INFO.email}`} className="hover:text-blue-400">{FIRM_INFO.email}</a>
              </div>
            </div>
          </div>

        </div>

        {/* ICAI Disclaimer Note */}
        <div className="mt-12 pt-6 border-t border-slate-900 text-[11px] text-slate-400 leading-relaxed space-y-2">
          <p>
            <strong className="text-slate-300">Statutory Disclaimer:</strong> This website is intended solely for informational purposes regarding the professional services of NK Jain & Associates, Chartered Accountants. As per the guidelines issued by the Institute of Chartered Accountants of India (ICAI), this site does not constitute solicitation or advertisement of services.
          </p>
        </div>

        {/* Bottom Copyright & Scroll Top */}
        <div className="mt-6 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} NK Jain & Associates. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 bg-slate-900 hover:bg-slate-850 text-slate-300 hover:text-blue-400 px-3 py-1.5 rounded-lg border border-slate-800 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
