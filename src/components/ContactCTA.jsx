import React, { useState } from "react";
import { siteConfig } from "../config/siteConfig";
import { MessageCircle, Phone, Mail, Send, CheckCircle2, Clock } from "lucide-react";

export default function ContactCTA() {
  const { ctaSection, contact, socialLinks } = siteConfig;

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    venueType: "Hospital",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    // Build WhatsApp URL with the form inputs
    const text = encodeURIComponent(
      `Hello Parkiko, my name is ${formData.name}.\nVenue Type: ${formData.venueType}\nPhone: ${formData.phone}\nEmail: ${formData.email || "N/A"}\nMessage: ${formData.message || "I would like to inquire about your valet parking services."}`
    );
    const whatsappUrl = `https://wa.me/${contact.whatsappNumber}?text=${text}`;

    setSubmitted(true);
    // Open WhatsApp
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background Image with Dark-Green Overlay */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2000&q=80"
          alt="Premium luxury automobile parked at a modern architectural venue"
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
        {/* Dark-Green Overlay matching #00452F */}
        <div className="absolute inset-0 bg-[#00452F]/92 backdrop-blur-[2px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
        
        {/* Main Grid: Info + Headline on Left, Booking Inquiry Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: CTA Messaging */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-6 border border-white/15">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Direct Valet Coordination
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5">
              {ctaSection.headline}
            </h2>

            <p className="text-lg sm:text-xl text-emerald-100/90 leading-relaxed max-w-xl mb-8 font-normal">
              {ctaSection.description}
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href={socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl text-base font-bold text-[#00452F] bg-white hover:bg-emerald-50 shadow-lg hover:shadow-xl transition-all duration-200 active:scale-98 group"
              >
                <MessageCircle className="w-5 h-5 text-[#006B45] fill-[#006B45]/20" />
                <span>{ctaSection.whatsappCta}</span>
              </a>

              <a
                href={`tel:${contact.phoneRaw}`}
                className="inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl text-base font-bold text-white bg-white/10 hover:bg-white/20 border border-white/25 backdrop-blur-md transition-all duration-200 active:scale-98"
              >
                <Phone className="w-5 h-5 text-emerald-300" />
                <span>{ctaSection.callCta} ({contact.phone})</span>
              </a>
            </div>

            {/* Direct Contact Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full pt-8 border-t border-white/15 text-sm text-emerald-100/80">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-emerald-300 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-emerald-300 font-semibold uppercase">Email Us</p>
                  <a href={`mailto:${contact.email}`} className="font-medium hover:text-white transition-colors">
                    {contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-emerald-300 shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-emerald-300 font-semibold uppercase">Availability</p>
                  <p className="font-medium">{contact.operatingHours}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry / Booking Form */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-white text-[#101820] p-6 sm:p-8 rounded-2xl shadow-2xl border border-white/20 relative">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-[#00452F]">
                  Request Valet Proposal
                </h3>
                <p className="text-xs text-[#64748B] mt-1">
                  Connect with our operations manager for customized facility or event pricing.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 rounded-xl bg-[#EAF5EF] border border-[#006B45]/20 text-center">
                  <CheckCircle2 className="w-12 h-12 text-[#006B45] mx-auto mb-3" />
                  <h4 className="text-base font-bold text-[#00452F]">Inquiry Sent to WhatsApp!</h4>
                  <p className="text-xs text-[#64748B] mt-1 mb-4">
                    Thank you, {formData.name}. Our valet operations director will reply promptly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-semibold text-[#006B45] hover:underline"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1" htmlFor="name">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#006B45] focus:border-transparent text-slate-900 placeholder:text-slate-400"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1" htmlFor="phone">
                        Phone / WhatsApp *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        placeholder="+91 96455..."
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#006B45] focus:border-transparent text-slate-900 placeholder:text-slate-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1" htmlFor="venueType">
                        Facility Type
                      </label>
                      <select
                        id="venueType"
                        value={formData.venueType}
                        onChange={(e) => setFormData({ ...formData, venueType: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#006B45] focus:border-transparent text-slate-900"
                      >
                        <option value="Hospital">Hospital / Healthcare</option>
                        <option value="Hotel">Hotel / Luxury Resort</option>
                        <option value="Mall">Shopping Mall / Retail</option>
                        <option value="Private Event">Wedding / Private Event</option>
                        <option value="Commercial Tower">Corporate Tower</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1" htmlFor="message">
                      Details / Requirements (Optional)
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      placeholder="Estimated vehicle volume, location, or preferred start date..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#006B45] focus:border-transparent text-slate-900 placeholder:text-slate-400 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-4 rounded-xl font-bold text-white bg-[#006B45] hover:bg-[#00452F] shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 text-sm"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit & Connect on WhatsApp</span>
                  </button>

                  <p className="text-[11px] text-slate-500 text-center">
                    Instant response from Parkiko Valet Operations. No spam guarantee.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
