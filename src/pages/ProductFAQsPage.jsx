import React from "react";

import SiteNav from "/src/components/SiteNav";
import ProductFAQs from "../components/ProductFAQs";
import CTASection from "/src/components/CTA";
import Footer from "/src/components/Footer";

function ProductFAQsPage() {
  return (
    <>
      <SiteNav />
      <ProductFAQs />
      <CTASection />
      <Footer />
    </>
  );
}

export default ProductFAQsPage;
