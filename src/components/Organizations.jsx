import React from "react";
import { siteConfig } from "../config/siteConfig";
import { Stethoscope, Hotel, ShoppingBag, CheckCircle2 } from "lucide-react";

export default function Organizations() {
  const categoryIcons = {
    Hospitals: Stethoscope,
    Hotels: Hotel,
    Malls: ShoppingBag,
  };

  return (
    <section className="py-20 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Minimal Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF5EF] text-[#006B45] text-xs font-bold uppercase tracking-wider mb-3">
            Sectors We Serve
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101820] tracking-tight mb-3">
            Trusted by Premier Organizations
          </h2>
          <p className="text-base text-[#64748B]">
            Providing institutional-grade valet management across key healthcare, hospitality, and commercial hubs.
          </p>
        </div>

        {/* 3 Categories - Minimal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {siteConfig.trustedOrganizations.map((cat) => {
            const Icon = categoryIcons[cat.name] || Hotel;
            return (
              <div
                key={cat.name}
                className="p-8 rounded-2xl border border-slate-200/90 hover:border-[#006B45]/40 bg-[#F8FAF9]/50 hover:bg-white shadow-xs hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#EAF5EF] group-hover:bg-[#006B45] text-[#006B45] group-hover:text-white flex items-center justify-center transition-all duration-300 mb-5 shadow-xs">
                  <Icon className="w-7 h-7" />
                </div>

                <div className="text-xs font-semibold uppercase tracking-wider text-[#006B45] mb-1">
                  {cat.tag}
                </div>
                
                <h3 className="text-xl font-bold text-[#101820] mb-2.5">
                  {cat.name}
                </h3>

                <p className="text-sm text-[#64748B] leading-relaxed max-w-xs">
                  {cat.description}
                </p>

                <div className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-[#00452F]">
                  <CheckCircle2 className="w-4 h-4 text-[#006B45]" />
                  <span>Custom Traffic & SLA Support</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

