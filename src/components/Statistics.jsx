import React from "react";
import { siteConfig } from "../config/siteConfig";
import { MapPin, Car, Shield, Layers } from "lucide-react";

export default function Statistics() {
  const statIcons = [MapPin, Car, Shield, Layers];

  return (
    <section className="bg-[#00452F] text-white py-14 sm:py-16 relative overflow-hidden">
      {/* Decorative subtle ambient circles */}
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-[#006B45] rounded-full filter blur-3xl opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-[#006B45] rounded-full filter blur-3xl opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {siteConfig.statistics.map((stat, idx) => {
            const Icon = statIcons[idx] || Shield;
            return (
              <div
                key={stat.label}
                className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-white/5 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-emerald-300 mb-3 border border-white/10">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-1 font-sans">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base font-bold text-emerald-200 mb-0.5">
                  {stat.label}
                </div>
                <div className="text-xs text-white/70 max-w-[180px]">
                  {stat.subtext}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

