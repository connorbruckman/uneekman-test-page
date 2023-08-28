import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

const uneekmanLogo = import.meta.env.VITE_UNEEKMAN_LOGO;

const SiteNav = () => (
  <div>
    <div className="site-mobile-menu site-navbar-target">
      <div className="site-mobile-menu-header">
        <div className="site-mobile-menu-close">
          <span className="icofont-close js-menu-toggle"></span>
        </div>
      </div>
      <div className="site-mobile-menu-body"></div>
    </div>
    <nav className="site-nav">
      <div className="container">
        <div className="menu-bg-wrap">
          <div className="site-navigation">
            <div className="row g-0 align-items-center">
              <div className="col-2">
                <a href="" className="logo m-0 float-start">
                  <Link to="/">
                    <img src={uneekmanLogo} className="nav-logo" alt="" />
                  </Link>
                </a>
              </div>
              <div className="col-8 text-center">
                <ul className="js-clone-nav d-none d-lg-inline-block text-start site-menu mx-auto">
                  <li className="has-children">
                    <a href="#">What We Treat</a>
                    <ul className="dropdown">
                      <li>
                        <Link to="/erectile-dysfunction">
                          <a href="#">Erectile Dysfunction</a>
                        </Link>
                      </li>
                      <li>
                        <Link to="/mens-health">
                          <a href="#">Men's Health</a>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="">
                    <Link to="/get-started">
                      <a>Get Started</a>
                    </Link>
                  </li>
                  <li className="">
                    <a href="">Pricing</a>
                  </li>
                  <li className="">
                    <a href="">Let's Talk</a>
                  </li>

                  <li className="has-children">
                    <a href="#">Learn More</a>
                    <ul className="dropdown">
                      <li>
                        <Link to="/blog">
                          <a href="#">Blog</a>
                        </Link>
                      </li>
                      <li>
                        <Link to="/comparison-chart">
                          <a href="#">Comparison Chart</a>
                        </Link>
                      </li>
                      <li>
                        <Link to="/edu-videos">
                          <a>Educational Videos</a>
                        </Link>
                      </li>
                      <li>
                        <Link to="/faqs">
                          <a href="#">FAQs</a>
                        </Link>
                      </li>
                      <li>
                        <Link to="/product-faqs">
                          <a>Product FAQs</a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div className="col-2 m-0 float-end">
                <a
                  href="#"
                  className="burger ms-auto float-end site-menu-toggle js-menu-toggle d-inline-block d-lg-none light"
                >
                  <span></span>
                </a>

                <a href="" className="call-us m-0 float-end">
                  <span className="icon-phone d-none d-md-block">
                    <FontAwesomeIcon icon={faShoppingCart} />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
);

export default SiteNav;
