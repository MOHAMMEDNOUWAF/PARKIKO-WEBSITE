import React from "react";
import { siteConfig } from "../config/siteConfig";
import { Stethoscope, Hotel, ShoppingBag, ArrowRight, Check, Sparkles } from "lucide-react";

export default function Services() {

  // Map service ID to an appropriate Lucide icon
  const getServiceIcon = (id) => {
    switch (id) {
      case "hospital-valet":
        return Stethoscope;
      case "hotel-valet":
        return Hotel;
      case "mall-valet":
        return ShoppingBag;
      default:
        return Sparkles;
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#FFFFFF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF5EF] text-[#006B45] text-xs font-bold uppercase tracking-wider mb-3">
            Specialized Operations
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#101820] tracking-tight mb-4">
            Our Services
          </h2>
          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
            Tailored, insured, and professional valet management engineered for high-traffic environments where efficiency and guest care matter most.
          </p>
        </div>

        {/* 3 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.services.map((service) => {
            const Icon = getServiceIcon(service.id);
            return (
              <div
                key={service.id}
                className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#006B45]/40 transition-all duration-300 transform hover:-translate-y-1.5"
              >
                {/* Card Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={service.image}
                    alt={service.alt || service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Sector Tag */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/95 text-[#00452F] shadow-sm backdrop-blur-md">
                      {service.category}
                    </span>
                  </div>

                  {/* Icon Badge */}
                  <div className="absolute bottom-4 right-4 w-11 h-11 rounded-xl bg-white shadow-md flex items-center justify-center text-[#006B45] border border-slate-100 group-hover:bg-[#006B45] group-hover:text-white transition-colors duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-[#101820] mb-2.5 group-hover:text-[#006B45] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[#64748B] leading-relaxed mb-5">
                      {service.description}
                    </p>

                    {/* Features list */}
                    <div className="pt-4 border-t border-slate-100 space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                          <Check className="w-4 h-4 text-[#006B45] shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Link to Contact */}
                  <div className="pt-2">
                    <a
                      href={`#contact`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#006B45] group-hover:text-[#00452F] transition-colors"
                    >
                      <span>Inquire for Your Facility</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#EAF5EF] border border-[#006B45]/20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#006B45] text-white flex items-center justify-center shrink-0 shadow-md">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#00452F]">
                Need a Custom Valet Solution for an Event or Commercial Space?
              </h4>
              <p className="text-sm text-[#00452F]/80">
                We design specialized traffic dispatch and valet management plans for private events, corporate towers, and exhibitions.
              </p>
            </div>
          </div>
          <a
            href={siteConfig.socialLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-[#006B45] hover:bg-[#00452F] shadow-sm transition-all"
          >
            Request Custom Quote
          </a>
        </div>

      </div>
    </section>
  );
}
