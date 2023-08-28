import React from "react";
import { Link } from "react-router-dom";

const couple = import.meta.env.VITE_COUPLE;

function CTASection() {
  return (
    <div
      className="section sec-cta overlay"
      style={{
        backgroundImage: `url(${couple})`,
      }}
    >
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-5">
            <h2 className="heading" data-aos="fade-right" data-aos-once="true">
              Ready to make a hard decision?
            </h2>
            <p data-aos="fade-right" data-aos-delay="200" data-aos-once="true">
              We've got the tools to put your healthcare journey back into your
              hands.
            </p>
          </div>
          <div
            className="col-lg-5 text-end"
            data-aos="fade-left"
            data-aos-delay="500"
            data-aos-once="true"
          >
            <Link to="/get-started">
              <a href="#" className="btn btn-outline-white">
                Get Started
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CTASection;
