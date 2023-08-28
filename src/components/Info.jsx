import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { faMobileScreenButton } from "@fortawesome/free-solid-svg-icons";
import { faHandHoldingHeart } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

const couplePic = import.meta.env.VITE_COUPLE;

function Info() {
  return (
    <div className="section off-white">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-7 ps-lg-2 my-auto">
            <div className="">
              <h4 className="text-black">
                Men's healthcare, without the waiting rooms.
              </h4>
              <p>
                From the online visit to contact-free delivery with ongoing
                care, expect a seamless experience.
              </p>
            </div>

            <div
              className="d-flex mb-3 service-alt feature"
              data-aos="fade-right"
              data-aos-once="true"
            >
              <div className="d-flex">
                <FontAwesomeIcon
                  icon={faMobileScreenButton}
                  className="cta-icon px-3"
                />
                <div className="my-auto">
                  <h3 className="my-auto">Built for your convenience</h3>
                  <p className="text-black my-auto">
                    Remote telehealth consultations, from the privacy of your
                    home.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="d-flex mb-3 service-alt feature"
              data-aos="fade-right"
              data-aos-delay="100"
              data-aos-once="true"
            >
              <div className="d-flex">
                <span>
                  <FontAwesomeIcon
                    icon={faTruckFast}
                    className="cta-icon px-3"
                  />
                </span>

                <div className="my-auto">
                  <h3 className="my-auto">Built for your discretion</h3>
                  <p className="text-black my-auto">
                    Your medication, delivered in discreet packaging.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="d-flex mb-3 service-alt feature"
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <div className="d-flex">
                <FontAwesomeIcon
                  icon={faHandHoldingHeart}
                  className="cta-icon px-3"
                />
                <div className="my-auto">
                  <h3 className="my-auto">Built for your well-being</h3>
                  <p className="text-black my-auto">
                    Men's health solutions, at your fingertips.
                  </p>
                </div>
              </div>
            </div>

            <div className="row mt-3 justify-content-center">
              <div
                className="col-md-4 col-12 mb-3"
                data-aos="fade-right"
                data-aos-delay="500"
                data-aos-once="true"
              >
                <Link to="/erectile-dysfunction">
                  <a href="#" className="btn btn-outline-primary">
                    Learn More about ED
                  </a>
                </Link>
              </div>

              <div
                className="col-md-8 col-12 mb-3"
                data-aos="fade-right"
                data-aos-delay="700"
                data-aos-once="true"
              >
                <Link to="/mens-health">
                  <a href="#" className="btn btn-outline-primary">
                    Learn More about Men's Health
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 mb-4 mb-lg-0"
            data-aos="fade-in"
            data-aos-once="true"
          >
            <img
              src={couplePic}
              alt="Image"
              className="img-fluid info-img shadow"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
