import React from "react";
import { siteConfig } from "../config/siteConfig";
import { KeyRound, ShieldCheck, BellRing, CarFront } from "lucide-react";

export default function HowItWorks() {
  const stepIcons = [KeyRound, ShieldCheck, BellRing, CarFront];

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-[#F8FAF9] relative border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF5EF] text-[#006B45] text-xs font-bold uppercase tracking-wider mb-3">
            Simple 4-Step Process
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#101820] tracking-tight mb-4">
            How It Works
          </h2>
          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
            From the moment you arrive to the moment you depart, experience effortless vehicle handover with Parkiko.
          </p>
        </div>

        {/* 4 Steps - Horizontal on Desktop, Vertical on Mobile */}
        <div className="relative">
          {/* Desktop Connecting Line (hidden on mobile) */}
          <div className="hidden lg:block absolute top-14 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-[#006B45]/20 via-[#006B45]/40 to-[#006B45]/20 -z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
            {siteConfig.howItWorks.map((item, index) => {
              const Icon = stepIcons[index] || KeyRound;
              return (
                <div
                  key={item.step}
                  className="flex flex-col items-center text-center group bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-[#006B45]/30 transition-all duration-300"
                >
                  {/* Step Number + Icon Badge */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-[#EAF5EF] group-hover:bg-[#006B45] text-[#006B45] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="absolute -top-2.5 -right-2.5 w-7 h-7 rounded-full bg-[#00452F] text-white text-xs font-bold flex items-center justify-center border-2 border-white shadow-xs">
                      {item.step}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#101820] mb-2 group-hover:text-[#006B45] transition-colors">
                    {item.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-sm font-semibold text-[#00452F] mb-2">
                    {item.short}
                  </p>

                  {/* Detailed Explanation */}
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {item.details}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quick assurance info */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-[#64748B] inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-200">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            Every vehicle is handled by certified drivers and logged with instant digital receipts.
          </p>
        </div>

      </div>
    </section>
  );
}
