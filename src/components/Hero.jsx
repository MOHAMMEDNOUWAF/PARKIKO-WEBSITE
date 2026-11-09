import React from "react";
import { siteConfig } from "../config/siteConfig";
import { ShieldCheck, Clock, UserCheck, ArrowRight, MessageCircle, CheckCircle2, Star } from "lucide-react";

export default function Hero() {
  const { hero } = siteConfig;

  // Selected icon map for benefit badges
  const benefitIcons = {
    "Safe & Secure": ShieldCheck,
    "Quick & Hassle-free": Clock,
    "Professional Team": UserCheck,
  };

  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-b from-[#EAF5EF]/40 via-white to-white">
      {/* Subtle decorative background blur blobs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-tr from-[#EAF5EF] to-transparent rounded-full filter blur-3xl opacity-60 -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Copy, Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Top Tag / Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF5EF] border border-[#006B45]/15 text-[#006B45] text-xs sm:text-sm font-semibold mb-6 shadow-xs animate-in fade-in duration-500">
              <span className="w-2 h-2 rounded-full bg-[#006B45] animate-pulse" />
              <span>{hero.badge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#101820] tracking-tight leading-[1.12] mb-6">
              Park Smart. <br className="hidden sm:inline" />
              <span className="text-[#006B45] inline-block relative">
                Live Stress Free.
                <svg
                  className="absolute -bottom-2 left-0 w-full h-2.5 text-[#006B45]/20 hidden sm:block"
                  viewBox="0 0 260 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 9C60 3 180 3 257 9"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-[#64748B] leading-relaxed max-w-2xl mb-8 font-normal">
              {hero.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-10">
              <a
                href={hero.primaryCta.href}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-base font-semibold text-white bg-[#006B45] hover:bg-[#00452F] shadow-md hover:shadow-lg transition-all duration-200 active:scale-98 group"
              >
                <span>{hero.primaryCta.label}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href={hero.secondaryCta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-base font-semibold text-[#00452F] bg-[#EAF5EF] hover:bg-[#d8eedf] border border-[#006B45]/20 transition-all duration-200 active:scale-98"
              >
                <MessageCircle className="w-5 h-5 text-[#006B45]" />
                <span>{hero.secondaryCta.label}</span>
              </a>
            </div>

            {/* Three Benefit Indicators */}
            <div className="pt-6 border-t border-slate-100 w-full grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              {hero.benefits.map((benefit) => {
                const IconComponent = benefitIcons[benefit.title] || ShieldCheck;
                return (
                  <div key={benefit.title} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#EAF5EF] text-[#006B45] flex items-center justify-center shrink-0 mt-0.5">
                      <IconComponent className="w-4 h-4 text-[#006B45]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#101820]">
                        {benefit.title}
                      </h4>
                      <p className="text-xs text-[#64748B] mt-0.5 leading-snug">
                        {benefit.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Hero Visual with Valet Attendant Handling Premium Vehicle */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Background accent ring */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#006B45]/20 to-[#EAF5EF] rounded-3xl filter blur-xl opacity-70 -z-10" />

              {/* Main Card Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200/80 bg-white">
                <div className="relative aspect-[4/3] sm:aspect-[5/4] w-full overflow-hidden bg-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80"
                    alt="Professional valet attendant holding keys to a premium vehicle"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Floating Overlay Badge on the image */}
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-white/95 backdrop-blur-md shadow-lg border border-white/40 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#006B45] text-white flex items-center justify-center font-bold text-sm">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#101820]">Verified Valet Attendants</p>
                        <p className="text-[11px] text-[#64748B]">Background-checked & trained</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-amber-500 text-xs font-bold bg-amber-50 px-2 py-1 rounded-md">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>5.0</span>
                    </div>
                  </div>
                </div>

                {/* Bottom micro-strip */}
                <div className="p-4 bg-white flex items-center justify-between text-xs text-[#64748B] border-t border-slate-100">
                  <span className="flex items-center gap-1.5 font-medium text-[#00452F]">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    Now Serving 15+ Locations
                  </span>
                  <a
                    href="#services"
                    className="font-semibold text-[#006B45] hover:underline"
                  >
                    Explore Sectors &rarr;
                  </a>
                </div>
              </div>

              {/* Floating Key Delivery Mini Card */}
              <div className="hidden sm:flex absolute -top-4 -right-4 p-3 rounded-xl bg-white shadow-xl border border-slate-100 items-center gap-2.5 animate-bounce-subtle">
                <div className="w-8 h-8 rounded-lg bg-[#EAF5EF] flex items-center justify-center text-[#006B45]">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-semibold uppercase">Avg Retrieval Time</p>
                  <p className="text-xs font-bold text-[#00452F]">&lt; 3 Minutes</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
