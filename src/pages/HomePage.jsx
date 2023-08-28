import React from "react";

import SiteNav from "/src/components/SiteNav.jsx";
import Hero from "/src/components/Hero.jsx";
import Info from "/src/components/Info.jsx";
import FeaturesSection from "/src/components/Features.jsx";
import ServicesSection from "/src/components/Services.jsx";
import VideoSection from "/src/components/Video.jsx";
import CTASection from "/src/components/CTA.jsx";
import Footer from "/src/components/Footer.jsx";

function HomePage() {
  return (
    <>
      <SiteNav />
      <Hero />
      <Info />
      <FeaturesSection />
      <ServicesSection />
      <VideoSection />
      <CTASection />
      <Footer />
    </>
  );
}

export default HomePage;
