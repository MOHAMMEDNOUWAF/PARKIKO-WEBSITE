import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import WhyChooseUs from "./components/WhyChooseUs";
import Organizations from "./components/Organizations";
import ContactCTA from "./components/ContactCTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#101820] selection:bg-[#EAF5EF] selection:text-[#00452F]">
      {/* A. Navigation Bar */}
      <Navbar />

      <main className="flex-grow">
        {/* B. Hero Section */}
        <Hero />

        {/* C. Our Services */}
        <Services />

        {/* D. How It Works */}
        <HowItWorks />

        {/* E. Why Choose Parkiko */}
        <WhyChooseUs />

        {/* G. Trusted Organizations */}
        <Organizations />

        {/* H. Contact / CTA Section */}
        <ContactCTA />
      </main>

      {/* I. Footer */}
      <Footer />
    </div>
  );
}
