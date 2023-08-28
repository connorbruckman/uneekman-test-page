import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faTwitter,
  faFacebook,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import { Link } from "react-router-dom";

const currentYear = new Date().getFullYear();
const qrCode = import.meta.env.VITE_QR_CODE;

const Footer = () => (
  <div className="site-footer shadow">
    <div className="container">
      <div className="row">
        <div className="col-lg-3">
          <div className="widget">
            <h3>Contact Us</h3>
            <ul className="list-unstyled links">
              <li>
                <a href="tel://13177898004">(317)-789-8004</a>
              </li>
              <li>
                <a href="mailto:info@uneekman.com">info@uneekman.com</a>
              </li>
            </ul>
            <h3>Social</h3>
            <ul className="list-unstyled social">
              <li>
                <a href="https://www.instagram.com/uneekmen/">
                  {" "}
                  <div style={{ fontSize: "1.5rem" }} className="text-center">
                    {" "}
                    <FontAwesomeIcon icon={faInstagram} />
                  </div>{" "}
                </a>
              </li>
              <li>
                <div style={{ width: ".5rem" }}></div>
              </li>
              <li>
                <a href="https://twitter.com/UneekRX">
                  {" "}
                  <div style={{ fontSize: "1.5rem" }} className="text-center">
                    {" "}
                    <FontAwesomeIcon icon={faTwitter} />{" "}
                  </div>{" "}
                </a>
              </li>
              <li>
                <div style={{ width: ".5rem" }}></div>
              </li>
              <li>
                <a href="https://www.facebook.com/uneekrx/">
                  {" "}
                  <div style={{ fontSize: "1.5rem" }} className="text-center">
                    {" "}
                    <FontAwesomeIcon icon={faFacebook} />{" "}
                  </div>{" "}
                </a>
              </li>
              <li>
                <div style={{ width: ".5rem" }}></div>
              </li>
              <li>
                <a href="https://www.youtube.com/channel/UCihQpH3aPq6xTsaFQMg5s4g">
                  {" "}
                  <div style={{ fontSize: "1.5rem" }} className="text-center">
                    {" "}
                    <FontAwesomeIcon icon={faYoutube} />{" "}
                  </div>{" "}
                </a>
              </li>
              <li>
                <div style={{ width: ".5rem" }}></div>
              </li>
              <li>
                <a href="mailto:info@uneekman.com">
                  {" "}
                  <div
                    style={{ fontSize: "1.5rem" }}
                    className="text-center my-auto "
                  >
                    {" "}
                    <FontAwesomeIcon icon={faEnvelope} />{" "}
                  </div>{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="widget">
            <h3>About Us</h3>
            <ul className="list-unstyled float-start links">
              <li>
                <Link to="/blog">
                  <a href="#">Blog</a>
                </Link>
              </li>
              <li>
                <Link to="/edu-videos">
                  <a href="#">Educational Videos</a>
                </Link>
              </li>
              <li>
                <a href="#">How it Works</a>
              </li>
              <li>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="widget">
            <h3>Navigation</h3>
            <ul className="list-unstyled links mb-4">
              <li>
                <Link to="/get-started">
                  <a href="#">Get Started</a>
                </Link>
              </li>
              <li>
                <a href="#">Our Products</a>
              </li>
              <li>
                <Link to="/faqs">FAQs</Link>
              </li>
              <li>
                <Link to="/product-fa">
                  <a href="#">Product FAQs</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="widget">
            <h3>Download the App</h3>
            <a href="https://www.youtube.com/watch?v=OnOWW422Jyc">
              <img src={qrCode} className="qr-code w-50" alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-12 text-center">
          <p>
            Copyright &copy;{currentYear}. All Rights Reserved. Powered by
            Softbir.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
