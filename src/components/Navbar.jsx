import React, { useState, useEffect } from "react";
import { siteConfig } from "../config/siteConfig";
import { Menu, X, Phone, ChevronRight, MessageCircle } from "lucide-react";
import logoImg from "../assets/images/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Determine active section for nav highlight
      const sections = ["home", "services", "how-it-works", "about", "contact"];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 py-3"
          : "bg-white py-4 sm:py-5 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none"
            aria-label="PARKIKO Home"
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden bg-[#006B45]/10 flex items-center justify-center p-1 border border-[#006B45]/20 group-hover:border-[#006B45] transition-colors">
              <img
                src={logoImg}
                alt="PARKIKO Logo"
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
              <div className="hidden w-full h-full items-center justify-center font-bold text-[#006B45] text-lg">
                P
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-[#00452F]">
                  PARKIKO
                </span>
                <span className="text-[10px] font-semibold tracking-wider uppercase px-1.5 py-0.5 rounded bg-[#EAF5EF] text-[#006B45]">
                  Valet
                </span>
              </div>
              <span className="text-[11px] text-[#64748B] font-medium tracking-wide -mt-0.5">
                Valet Parking Service
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {siteConfig.navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? "text-[#006B45] bg-[#EAF5EF] font-semibold"
                      : "text-[#101820]/80 hover:text-[#006B45] hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Action Buttons (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${siteConfig.contact.phoneRaw}`}
              className="flex items-center gap-2 text-xs font-semibold text-[#00452F] hover:text-[#006B45] px-3 py-2 rounded-lg hover:bg-[#EAF5EF] transition-colors"
              title={`Call ${siteConfig.contact.phone}`}
            >
              <Phone className="w-3.5 h-3.5 text-[#006B45]" />
              <span>{siteConfig.contact.phone}</span>
            </a>
            
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-sm font-semibold text-white bg-[#006B45] hover:bg-[#00452F] shadow-sm hover:shadow transition-all duration-200 active:scale-95"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={`tel:${siteConfig.contact.phoneRaw}`}
              className="p-2 rounded-lg text-[#006B45] bg-[#EAF5EF] hover:bg-[#006B45] hover:text-white transition-colors"
              aria-label="Call Parkiko"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-[#006B45] hover:bg-slate-100 focus:outline-none"
              aria-label={isOpen ? "Close Menu" : "Open Menu"}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 shadow-xl transition-all animate-in slide-in-from-top-2 duration-200">
          <div className="px-4 pt-3 pb-6 space-y-2">
            {siteConfig.navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={closeMenu}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? "bg-[#EAF5EF] text-[#006B45] font-semibold"
                      : "text-slate-700 hover:bg-slate-50 hover:text-[#006B45]"
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </a>
              );
            })}

            <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5">
              <a
                href={siteConfig.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg text-sm font-semibold text-[#00452F] bg-[#EAF5EF] hover:bg-[#d8eedf] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#006B45]" />
                <span>Chat on WhatsApp</span>
              </a>
              <a
                href="#contact"
                onClick={closeMenu}
                className="flex items-center justify-center w-full py-2.5 px-4 rounded-lg text-sm font-semibold text-white bg-[#006B45] hover:bg-[#00452F] shadow-sm transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
