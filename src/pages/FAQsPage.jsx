import React from "react";

import SiteNav from "/src/components/SiteNav";
import FAQs from "../components/FAQs";
import CTASection from "/src/components/CTA";
import Footer from "/src/components/Footer";

function FAQsPage() {
  return (
    <>
      <SiteNav />
      <FAQs />
      <CTASection />
      <Footer />
    </>
  );
}

export default FAQsPage;
