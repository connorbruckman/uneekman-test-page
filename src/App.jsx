import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";

import HomePage from "/src/pages/HomePage.jsx";
import PrivacyPolicyPage from "/src/pages/PrivacyPolicyPage";
import GetStartedPage from "/src/pages/GetStartedPage";
import WhatWeTreatPage from "/src/pages/WhatWeTreatPage";
import WhatWeTreatMensHealthPage from "/src/pages/WhatWeTreatMensHealthPage";
import ProductFAQsPage from "/src/pages/ProductFAQsPage";
import FAQsPage from "/src/pages/FAQsPage";
import EduVideosPage from "/src/pages/EduVideosPage";
import ComparisonChartPage from "/src/pages/ComparisonChartPage";
import BlogPage from "/src/pages/blog-pages/BlogPage";
import BlogSildenafil from "/src/pages/blog-pages/BlogSildenafil";
import BlogTadalafil from "/src/pages/blog-pages/BlogTadalafil";
import BlogVardenafil from "/src/pages/blog-pages/BlogVardenafil";
import BlogAthletes from "/src/pages/blog-pages/BlogAthletes";
import BlogBodybuilding from "/src/pages/blog-pages/BlogBodybuilding";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/get-started" element={<GetStartedPage />} />
        <Route path="/erectile-dysfunction" element={<WhatWeTreatPage />} />
        <Route path="/mens-health" element={<WhatWeTreatMensHealthPage />} />
        <Route path="/product-faqs" element={<ProductFAQsPage />} />
        <Route path="/faqs" element={<FAQsPage />} />
        <Route path="/edu-videos" element={<EduVideosPage />} />
        <Route path="/comparison-chart" element={<ComparisonChartPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/sildenafil" element={<BlogSildenafil />} />
        <Route path="/blog/tadalafil" element={<BlogTadalafil />} />
        <Route path="/blog/vardenafil" element={<BlogVardenafil />} />
        <Route path="/blog/athletes-sildenafil" element={<BlogAthletes />} />
        <Route
          path="/blog/bodybuilding-sildenafil"
          element={<BlogBodybuilding />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
