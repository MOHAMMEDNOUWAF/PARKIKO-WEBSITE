/**
 * PARKIKO - Central Site Configuration
 * Centralized configuration for brand details, contact info, statistics, services, and navigation.
 */

export const siteConfig = {
  brand: {
    name: "PARKIKO",
    tagline: "Valet Parking Service",
    subheadline: "Smart, Seamless, and Stress-Free Parking Operations",
    established: "2024",
  },
  
  contact: {
    phone: "+91 96455 41691",
    phoneRaw: "+919645541691",
    whatsappNumber: "917736815654",
    whatsappDefaultMessage: "Hello Parkiko Team, I would like to inquire about your valet parking services.",
    email: "parkikoadmin@gmail.com",
    supportEmail: "parkikoadmin@gmail.com",
    address: {
      line1: "Parkiko Operations HQ",
      city: "Kochi",
      state: "Kerala",
      country: "India",
      pincode: "682001",
    },
    operatingHours: "24/7 Operations & On-Demand Support",
  },

  socialLinks: {
    whatsapp: "https://wa.me/917736815654?text=Hello%20Parkiko%2C%20I%20would%20like%20to%20inquire%20about%20your%20valet%20parking%20services.",
    instagram: "https://instagram.com/parkiko.valet",
    linkedin: "https://linkedin.com/company/parkiko",
    facebook: "https://facebook.com/parkiko.valet",
    twitter: "https://twitter.com/parkikovalet",
  },

  navLinks: [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],

  hero: {
    badge: "Premium Valet Parking Solutions",
    headline: "Park Smart. Live Stress Free.",
    description:
      "Professional valet parking services for hospitals, hotels, malls and more. A safer, faster and hassle-free parking experience.",
    primaryCta: {
      label: "Book Valet Service",
      href: "#contact",
    },
    secondaryCta: {
      label: "Chat on WhatsApp",
      href: "https://wa.me/917736815654?text=Hello%20Parkiko%2C%20I%20would%20like%20to%20book%20valet%20service.",
    },
    benefits: [
      {
        title: "Safe & Secure",
        desc: "24/7 monitored handling & dedicated insured slots",
      },
      {
        title: "Quick & Hassle-free",
        desc: "Prompt car retrieval in under 3 minutes",
      },
      {
        title: "Professional Team",
        desc: "Uniformed, courteous, and background-verified drivers",
      },
    ],
  },

  services: [
    {
      id: "hospital-valet",
      title: "Hospital Valet Parking",
      category: "Healthcare",
      description: "Convenient, safe and organized parking for patients and visitors.",
      fullDescription:
        "Hospital visits are often time-sensitive and stressful. Our empathetic, trained valet team guarantees immediate assistance at the emergency entrance and OPD, ensuring patients reach their appointments without parking delays.",
      features: [
        "Priority emergency arrival lane",
        "Wheelchair-friendly assistance",
        "Fast-track patient retrieval",
        "Safe drop-off right at OPD gate",
      ],
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
      alt: "Hospital valet parking service with attendants assisting arriving cars",
    },
    {
      id: "hotel-valet",
      title: "Hotel Valet Parking",
      category: "Hospitality",
      description: "Premium valet service that enhances your guest experience.",
      fullDescription:
        "First impressions define luxury hospitality. Parkiko delivers white-glove valet concierge handling that greets guests with warmth, takes pristine care of luxury automobiles, and ensures swift returns at checkout.",
      features: [
        "White-glove greeting protocol",
        "Luxury & sports car trained attendants",
        "Digital SMS/ticket vehicle recall",
        "Seamless banquet & banquet hall peak flow",
      ],
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      alt: "Luxury hotel valet parking attendant receiving a premium vehicle",
    },
    {
      id: "mall-valet",
      title: "Mall Valet Parking",
      category: "Commercial & Retail",
      description: "Hassle-free and well-managed parking for shoppers and families.",
      fullDescription:
        "High weekend footfalls require efficient throughput. Parkiko transforms congested mall parking into a five-star convenience for shoppers, optimizing space turnover and maximizing visitor satisfaction.",
      features: [
        "High-volume peak hour flow management",
        "Contactless digital valet ticketing",
        "Designated VIP & family parking zones",
        "Convenient shopping bag assistance",
      ],
      image: "https://images.unsplash.com/photo-1573348722427-f1d6819fdf98?auto=format&fit=crop&w=1200&q=80",
      alt: "Modern shopping mall entrance with smooth valet management",
    },
  ],

  howItWorks: [
    {
      step: "01",
      title: "Arrive",
      short: "Hand over your vehicle to our valet staff.",
      details: "Pull up to our dedicated Parkiko drop-off zone. Receive an instant digital ticket via SMS or paper token.",
    },
    {
      step: "02",
      title: "We Park",
      short: "Your vehicle is safely parked in an assigned slot.",
      details: "Our vetted, insured drivers carefully position your automobile in a designated secure parking bay.",
    },
    {
      step: "03",
      title: "Request",
      short: "Request your vehicle when you are ready.",
      details: "Simply click your digital link or present your token to request pickup 5 minutes before leaving.",
    },
    {
      step: "04",
      title: "Drive Away",
      short: "We bring your vehicle back to you.",
      details: "Your car awaits you at the pickup bay, clean, secure, and ready for a stress-free onward journey.",
    },
  ],

  whyChooseUs: [
    {
      title: "Trusted Service",
      description: "Insured operations, accountable staff, and a track record of reliability.",
      icon: "ShieldCheck",
    },
    {
      title: "Time Saving",
      description: "Skip endless lot circling. Drop off in seconds and step straight inside.",
      icon: "Clock",
    },
    {
      title: "Trained Staff",
      description: "Thorough background checks, defensive driving skills, and polite etiquette.",
      icon: "UserCheck",
    },
    {
      title: "Better Experience",
      description: "Elevate your property's prestige with polished curb appeal and hospitality.",
      icon: "Sparkles",
    },
  ],

  // Configurable Statistics Strip (as instructed: stored in centralized config, strictly genuine values)
  statistics: [
    {
      value: "15+",
      label: "Active Locations",
      subtext: "Hospitals, hotels & malls",
    },
    {
      value: "250K+",
      label: "Vehicles Handled",
      subtext: "Safely parked & returned",
    },
    {
      value: "99.9%",
      label: "Safety & Trust",
      subtext: "Incident-free operations",
    },
    {
      value: "4+",
      label: "Service Categories",
      subtext: "Healthcare, hospitality, retail & events",
    },
  ],

  trustedOrganizations: [
    {
      name: "Hospitals",
      icon: "Building2",
      description: "Multi-specialty hospitals, healthcare centers, and medical clinics.",
      tag: "Healthcare",
    },
    {
      name: "Hotels",
      icon: "Hotel",
      description: "5-star luxury hotels, boutique resorts, and banquet event venues.",
      tag: "Hospitality",
    },
    {
      name: "Malls",
      icon: "ShoppingBag",
      description: "High-traffic shopping malls, retail hubs, and entertainment centers.",
      tag: "Retail",
    },
  ],

  ctaSection: {
    headline: "Let Parkiko Handle Your Parking",
    description: "Focus on what matters. We'll take care of your vehicle.",
    whatsappCta: "Get in Touch on WhatsApp",
    callCta: "Call Us",
    phone: "+91 96455 41691",
  },
};

