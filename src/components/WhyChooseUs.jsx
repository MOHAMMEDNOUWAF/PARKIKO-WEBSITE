import React from "react";
import { siteConfig } from "../config/siteConfig";
import { ShieldCheck, Clock, UserCheck, Sparkles, Award, CheckCircle } from "lucide-react";

export default function WhyChooseUs() {
  const iconMap = {
    ShieldCheck: ShieldCheck,
    Clock: Clock,
    UserCheck: UserCheck,
    Sparkles: Sparkles,
  };

  return (
    <section id="about" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF5EF] text-[#006B45] text-xs font-bold uppercase tracking-wider mb-3">
            Why Choose Parkiko
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#101820] tracking-tight mb-4">
            Setting the Standard in Valet Parking
          </h2>
          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
            We combine rigorous hospitality training, accountable operational management, and smart logistics to provide a first-class arrival experience for every visitor.
          </p>
        </div>

        {/* 4 Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {siteConfig.whyChooseUs.map((benefit) => {
            const Icon = iconMap[benefit.icon] || ShieldCheck;
            return (
              <div
                key={benefit.title}
                className="group p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 hover:border-[#006B45]/40 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-[#EAF5EF] group-hover:bg-[#006B45] text-[#006B45] group-hover:text-white flex items-center justify-center transition-all duration-300 mb-5">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-[#101820] mb-2 group-hover:text-[#006B45] transition-colors">
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#64748B] leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-[#006B45]">
                  <CheckCircle className="w-3.5 h-3.5 text-[#006B45]" />
                  <span>Parkiko Certified</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Company Mission / Ethos Banner */}
        <div className="mt-16 rounded-2xl bg-gradient-to-br from-[#00452F] to-[#006B45] p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          {/* Subtle watermark / pattern */}
          <div className="absolute right-0 bottom-0 translate-x-10 translate-y-10 opacity-10 pointer-events-none">
            <Award className="w-80 h-80 text-white" />
          </div>

          <div className="max-w-3xl relative z-10">
            <span className="text-xs uppercase tracking-widest font-semibold text-emerald-300 bg-white/10 px-3 py-1 rounded-full">
              Our Commitment
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold mt-4 mb-3 tracking-tight">
              Valet Services for Commercial Landmarks
            </h3>
            <p className="text-emerald-100/90 text-sm sm:text-base leading-relaxed mb-6 font-normal">
              At Parkiko, we understand that valet staff are the very first and last impression of your venue. Our chauffeurs and supervisors undergo extensive defensive driving drills, vehicle care training, and professional etiquette coaching so your patrons feel valued from arrival to departure.
            </p>
            <div className="flex flex-wrap items-center gap-6 text-xs sm:text-sm text-emerald-200">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-300"></span>
                Comprehensive Liability Protection
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-300"></span>
                Strict Key Custody Control
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-300"></span>
                Real-Time Supervisor Monitoring
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

