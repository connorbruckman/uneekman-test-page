import React from "react";
import Carousel from "react-bootstrap/Carousel";
import PageHeader from "./PageHeader";

const WhatWeTreat = () => {
  const combinedBottles = import.meta.env.VITE_COMBINED_BOTTLES;
  const infographic1 = import.meta.env.VITE_INFOGRAPHIC_1;
  const infographic2 = import.meta.env.VITE_INFOGRAPHIC_2;
  const infographic3 = import.meta.env.VITE_INFOGRAPHIC_3;
  const infographic4 = import.meta.env.VITE_INFOGRAPHIC_4;
  const infographic5 = import.meta.env.VITE_INFOGRAPHIC_5;
  const infographic6 = import.meta.env.VITE_INFOGRAPHIC_6;
  const infographic7 = import.meta.env.VITE_INFOGRAPHIC_7;
  const infographic8 = import.meta.env.VITE_INFOGRAPHIC_8;
  const infographic9 = import.meta.env.VITE_INFOGRAPHIC_9;

  return (
    <div>
      <PageHeader
        header="What We Treat"
        description="Learn more about what Uneekman can offer you."
      />

      <div>
        <div className="">
          <div className="half-content d-lg-flex align-items-center container">
            <div className="order-md-2">
              <img className="w-100" src={combinedBottles} alt="" />
            </div>
            <div className="text">
              <h2 className="heading text-primary mb-3">
                Erectile Dysfunction Treatment
              </h2>
              <p className="mb-3">
                What sets UneekMan apart from the rest? We provide unique
                customer service than our competitors. Our erectile dysfunction
                products are created with you in mind. We make it simple,
                discreet, and efficient. Our U.S-licensed physicians are
                dedicated to getting you the right care as fast as possible.
              </p>
              <a href="#" className="btn btn-outline-dark">
                Our Products
              </a>
            </div>
          </div>

          <div className="container py-2">
            <hr />
          </div>

          <div className="d-lg-flex align-items-center container py-3">
            <div className="row">
              <div className="text col-md-6 col-12">
                <h2 className="heading text-primary mb-3">
                  What is Erectile Dysfunction?
                </h2>
                <p className="pb-3">
                  Finding it difficult to keep an erection? Erectile dysfunction
                  (ED) is something you're not facing alone. Millions of others
                  from all different ages are going through the same thing. ED
                  ultimately occurs when there is too little blood flow into the
                  penis and too much blood flow out, partially due to an enzyme
                  called PDE5. Our oral ED medications block PDE5 to increase
                  blood flow into the penis and decrease blood flow out.
                </p>
              </div>
              <div className="text col-md-6 col-12">
                <h2 className="heading text-primary mb-3">What causes ED?</h2>
                <p className="pb-3">
                  With today's research, there are several ways to take care of
                  erectile dysfunction. Luckily, UneekMan has all the latest and
                  greatest treatment plans. ED medication interferes with the
                  breakdown of chemicals required to obtain and maintain an
                  erection. This interference keeps more of those chemicals in
                  action longer, improving the ability to get and maintain an
                  erection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section py-0 blue-primary text-white">
        <div className="container">
          <div className="row py-5">
            <div className="col-md-6 col-12 my-auto">
              <div className="text">
                <h5 className="text-white mt-5">Did you know?</h5>
                <h2 className="heading text-white">
                  ED affects about 30 million men in the United States.
                </h2>
                <a
                  href="https://www.singlecare.com/blog/news/erectile-dysfunction-statistics/"
                  className="text-white mb-3"
                >
                  Source
                </a>

                <hr />
                <p className="mb-3">
                  Nurturing a healthy relationship with your partner is
                  challenging on its own. When dealing with issues related to
                  men's health, it can become even more complex. Achieving and
                  maintaining optimal well-being requires harmony between your
                  body and mind, involving various factors that can seem
                  overwhelming at times.
                </p>
                <p className="mb-3">
                  A significant portion of men in America will face health
                  challenges, yet only a small fraction seek guidance from
                  healthcare professionals. By taking the step to prioritize
                  your health with us, you're already moving ahead on a path to
                  improved well-being.
                </p>
                <p className="mb-3">
                  Thankfully, UneekMan offers accessible and effective solutions
                  that are both affordable and easy to incorporate into your
                  routine, empowering you to address health concerns and enhance
                  your quality of life.
                </p>
                <a href="#" className="btn btn-outline-white mb-5">
                  Our Products
                </a>
              </div>
            </div>
            <div className="col-md-1 col-12"></div>
            <div className="d-lg-flex align-items-center col-md-5 col-12">
              {/* This image stinks, will need to replace */}
              <div className="img order-md-2">
                <Carousel>
                  <Carousel.Item interval={4000}>
                    <img
                      className="w-100"
                      src={infographic1}
                      alt=""
                      style={{
                        borderRadius: "8px",
                      }}
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={4000}>
                    <img
                      className="w-100"
                      src={infographic2}
                      alt=""
                      style={{
                        borderRadius: "8px",
                      }}
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={4000}>
                    <img
                      className="w-100"
                      src={infographic3}
                      alt=""
                      style={{
                        borderRadius: "8px",
                      }}
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={4000}>
                    <img
                      className="w-100"
                      src={infographic4}
                      alt=""
                      style={{
                        borderRadius: "8px",
                      }}
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={4000}>
                    <img
                      className="w-100"
                      src={infographic5}
                      alt=""
                      style={{
                        borderRadius: "8px",
                      }}
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={4000}>
                    <img
                      className="w-100"
                      src={infographic6}
                      alt=""
                      style={{
                        borderRadius: "8px",
                      }}
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={4000}>
                    <img
                      className="w-100"
                      src={infographic7}
                      alt=""
                      style={{
                        borderRadius: "8px",
                      }}
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={4000}>
                    <img
                      className="w-100"
                      src={infographic8}
                      alt=""
                      style={{
                        borderRadius: "8px",
                      }}
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={4000}>
                    <img
                      className="w-100"
                      src={infographic9}
                      alt=""
                      style={{
                        borderRadius: "8px",
                      }}
                    />
                  </Carousel.Item>
                </Carousel>
                <div className="my-2">
                  <p className="text-center text-white">
                    Infographics are provided courtesy of{" "}
                    <a
                      className="text-white"
                      href="https://onlinedoctor.superdrug.com/"
                    >
                      Superdrug
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeTreat;
