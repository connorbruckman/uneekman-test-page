import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function PageHeader({ header, description }) {
  const blobUrl = import.meta.env.VITE_BLOB_SVG;
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="hero overlay inner-page shadow">
      <img src={blobUrl} alt="" className="img-fluid blob" />
      <div className="container">
        <div className="row align-items-center justify-content-center text-center pt-5">
          <div className="col-lg-6">
            <h1 className="heading text-white mb-3" data-aos="fade-up">
              {header}
            </h1>
            <p data-aos="fade-up" data-aos-delay="500">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageHeader;
