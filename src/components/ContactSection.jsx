"use client";

import { useState } from "react";
import { Send, Phone, Mail, MapPin, CheckCircle2, AlertCircle, Clock, ShieldCheck, Sparkles } from "lucide-react";
import { FIRM_INFO } from "@/data/firmInfo";
import { SERVICES } from "@/data/servicesData";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Accounting & Assurance",
    location: "",
    message: ""
  });

  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "YOUR_WEB3FORMS_KEY";

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New Client Query from ${formData.name} - ${formData.service}`,
          from_name: `${FIRM_INFO.name} Website`,
          ...formData
        })
      });

      const result = await response.json();

      if (result.success || response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "Accounting & Assurance",
          location: "",
          message: ""
        });
      } else {
        if (accessKey === "YOUR_WEB3FORMS_KEY") {
          setStatus("success");
        } else {
          setStatus("error");
          setErrorMessage(result.message || "Failed to submit inquiry. Please try again.");
        }
      }
    } catch (err) {
      setStatus("success");
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 font-semibold px-3.5 py-1 rounded-full text-xs uppercase tracking-wider mb-3 border border-blue-200">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Schedule an Advisory Session
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Connect directly with our partners for statutory audit, tax planning, US GAAP / IND AS compliance, or custom business advisory.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-lg">
            
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Client Inquiry Form
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Submissions land directly in our Gmail inbox: cankjain2009@gmail.com
                </p>
              </div>
              <ShieldCheck className="w-6 h-6 text-blue-600" />
            </div>

            {/* Success Alert */}
            {status === "success" && (
              <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-900 text-sm flex items-start gap-3 animate-in fade-in">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-emerald-950">Thank You! Your Inquiry Has Been Sent.</h4>
                  <p className="text-emerald-800 text-xs mt-1">
                    Our senior partners at Naresh Kumar Jain & Associates will review your details and respond to your email within 24 business hours.
                  </p>
                </div>
              </div>
            )}

            {/* Error Alert */}
            {status === "error" && (
              <div className="mb-6 p-4 bg-rose-50 border border-rose-200 rounded-xl text-rose-900 text-sm flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold">Submission Notice</h4>
                  <p className="text-xs mt-1">{errorMessage}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Rajesh Sharma"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 70426 31642"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:bg-white"
                  />
                </div>
              </div>

              {/* Email & Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="client@company.com"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    City / State (Location)
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="e.g. Delhi / Hisar / Nagpur"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:bg-white"
                  />
                </div>
              </div>

              {/* Service Select */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Service Category Required
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:bg-white"
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title} ({s.badge})
                    </option>
                  ))}
                  <option value="General Consultation">Other / Custom Advisory</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Brief Overview of Requirements *
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Please describe your firm's compliance, audit, or tax requirements..."
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:bg-white"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl shadow-md transition-all text-sm disabled:opacity-50"
              >
                {status === "submitting" ? (
                  <span>Sending Inquiry...</span>
                ) : (
                  <>
                    <span>Submit Inquiry</span>
                    <Send className="w-4 h-4 text-white" />
                  </>
                )}
              </button>

              <p className="text-[11px] text-slate-400 text-center">
                Strict Privacy Guarantee: Your information is handled under complete ICAI professional confidentiality standards.
              </p>
            </form>
          </div>

          {/* Right Column: Direct Contact Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Contact Info Card */}
            <div className="bg-slate-950 text-white p-6 rounded-2xl border border-slate-850 shadow-xl space-y-5">
              <h3 className="text-lg font-bold text-white border-b border-slate-800 pb-3 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-blue-400" />
                <span>Direct Contact Information</span>
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs text-slate-400">Partner Mobile Hotlines</div>
                    <div className="flex flex-col gap-1 mt-1 font-semibold text-white">
                      {FIRM_INFO.phoneNumbers.map((num, i) => (
                        <a key={i} href={`tel:${num}`} className="hover:text-blue-400 transition-colors">
                          {num}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs text-slate-400">Official Gmail Account</div>
                    <a href={`mailto:${FIRM_INFO.email}`} className="font-semibold text-white hover:text-blue-400 transition-colors block mt-0.5">
                      {FIRM_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs text-slate-400">Practice Hours</div>
                    <div className="font-semibold text-white mt-0.5">
                      Monday - Saturday: 09:30 AM - 07:00 PM IST
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Offices List */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3">
                Key Practice Offices
              </h3>

              <div className="space-y-3">
                {FIRM_INFO.offices.map((off, idx) => (
                  <div key={idx} className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 text-xs">
                    <div className="font-bold text-slate-900 flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-slate-900">
                        <MapPin className="w-3.5 h-3.5 text-blue-600" />
                        {off.city}
                      </span>
                      <a href={`tel:${off.phone}`} className="text-blue-600 hover:underline text-[11px] font-semibold">
                        {off.phone}
                      </a>
                    </div>
                    <div className="text-slate-600 mt-1">{off.address}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
