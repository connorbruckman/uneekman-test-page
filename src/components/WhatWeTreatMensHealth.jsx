import React from "react";
import Carousel from "react-bootstrap/Carousel";
import PageHeader from "./PageHeader";

const WhatWeTreatMensHealth = () => {
  const dietPills = import.meta.env.VITE_MENS_HEALTH_PRODUCT_1;
  const focusEnergy = import.meta.env.VITE_MENS_HEALTH_PRODUCT_2;
  const hairRegrowth = import.meta.env.VITE_MENS_HEALTH_PRODUCT_3;
  const hangover101 = import.meta.env.VITE_MENS_HEALTH_PRODUCT_4;
  const jointPain = import.meta.env.VITE_MENS_HEALTH_PRODUCT_5;
  const ultraVedic = import.meta.env.VITE_MENS_HEALTH_PRODUCT_6;

  class ProductCard extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <div className="card text-center mb-2">
          <img
            className="d-block w-50 mx-auto mt-4"
            src={this.props.productImage}
            alt="Product"
          />
          <hr className="mx-5" />
          <h4>{this.props.productTitle}</h4>
          <p className="px-3">{this.props.productDescription}</p>
          <h5
            className="mx-auto px-2 text-white"
            style={{
              background: "rgb(134,192,255)",
              background:
                "linear-gradient(152deg, rgba(110,128,255,1) 0%, rgba(48,99,232,1) 100%)",
              fontWeight: "bold",
              borderRadius: "8px",
            }}
          >
            {this.props.productPrice}
          </h5>
          <button className="btn btn-outline-primary mx-auto mt-2 mb-4">
            Add to Cart
          </button>
        </div>
      );
    }
  }

  return (
    <div>
      <PageHeader
        header="What We Treat"
        description="Learn more about what Uneekman can offer you."
      />

      <div>
        <div className="container py-4">
          <div className="row d-lg-flex align-items-center">
            <div className="text col-md-8 col-sm-12">
              <h5 className="">Prioritize Your Health</h5>
              <h2 className="heading">Enhance Your Well-being with UneekMan</h2>

              <hr />
              <p className="mb-3">
                Taking care of your health is crucial, especially when it comes
                to men's well-being. At UneekMan, we understand the importance
                of maintaining your vitality, and our products are designed to
                support your overall health.
              </p>
              <p className="mb-3">
                When it comes to nutritional supplements, we're here to help you
                achieve optimal health. Don't let concerns hold you back —
                prioritize your well-being with UneekMan.
              </p>
              <p className="mb-3">
                Whether you're in your prime or looking to stay active as you
                age, our products are tailored to meet your needs and enhance
                your journey towards a healthier life.
              </p>
              <a href="#" className="btn btn-outline-dark">
                Our Products
              </a>
            </div>

            {/* These pictures will likely need a second pass. Current ones are too low-res for my liking. */}
            <div className="my-4">
              <Carousel>
                <Carousel.Item interval={4000}>
                  <div className="row">
                    <div className="col-md-4 col-sm-12">
                      <ProductCard
                        productImage={dietPills}
                        productTitle="Diet Pills"
                        productDescription="We created an industry-leading product line-up that inspires growth in all aspects of life. Our Weight Loss solution uses only natural ingredients to provide science-backed support so you can control your day."
                        productPrice="$27.00"
                      />
                    </div>
                    <div className="col-md-4 col-sm-12">
                      <ProductCard
                        productImage={focusEnergy}
                        productTitle="Focus Energy"
                        productDescription="Focus Energy ingredients work to complement cognitive functions through critical nutrient supplementation. Each capsule contains highly active ingredients that may improve memory, focus, mental clarity & alertness."
                        productPrice="$31.50"
                      />
                    </div>
                    <div className="col-md-4 col-sm-12">
                      <ProductCard
                        productImage={hairRegrowth}
                        productTitle="Hair Regrowth"
                        productDescription="Hair Regrowth treatment supports addressing hair loss, maintaining hair density, and facilitating the regrowth of fuller hair by providing critical nutrient supplementation."
                        productPrice="$40.50"
                      />
                    </div>
                  </div>
                </Carousel.Item>

                <Carousel.Item interval={4000}>
                  <div className="row">
                    <div className="col-md-4 col-sm-12">
                      <ProductCard
                        productImage={hangover101}
                        productTitle="Hangover 101"
                        productDescription="Hangover 101 is a natural hangover support supplement that helps to lessen the likelihood and severity of hangovers, using ingredients that have been used for centuries as natural remedies."
                        productPrice="$38.25"
                      />
                    </div>
                    <div className="col-md-4 col-sm-12">
                      <ProductCard
                        productImage={jointPain}
                        productTitle="Joint Pain"
                        productDescription="Joint Pain ingredients work to complement your motor functions through critical nutrient supplementation. Each capsule contains ingredients that may help alleviate cartilage functionality that’s associated with joint and back pain."
                        productPrice="$45.00"
                      />
                    </div>
                    <div className="col-md-4 col-sm-12">
                      <ProductCard
                        productImage={ultraVedic}
                        productTitle="Ultra-Vedic Pain Relief Patch"
                        productDescription="Experience enhanced training and recovery with Ultra-Vedic, the patch that reduces muscle fatigue, aids in joint mobility, and supports healthy recovery. Enriched with potent vegan essential oils, Ultra-Vedic offers up to 8-12 hours of refreshing relief."
                        productPrice="$6.00"
                      />
                    </div>
                  </div>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeTreatMensHealth;
