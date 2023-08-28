import React, { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Accordion from "react-bootstrap/Accordion";

const ServiceCard = ({
  imageSrc,
  title,
  amount,
  price,
  bgColor,
  textColor,
  btnOutlineColor,
}) => (
  <div className={`service text-center animated fadeInRight shadow ${bgColor}`}>
    <img src={imageSrc} alt="image" className="pill-img" />
    <div>
      <h3 className={`pill-card-title ${textColor}`}>{title}</h3>
      <h5>{amount} Pills</h5>
      <h5 className={`py-3 ${textColor}`}>
        As low as{" "}
        <b>
          $<u>{price}</u>
        </b>{" "}
        per month
      </h5>
      <p>
        <a
          href="#"
          className={`btn ${btnOutlineColor} py-2 px-3`}
          style={{ borderColor: textColor }}
        >
          Order Now
        </a>
      </p>
    </div>
  </div>
);

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState("Viagra"); // Initial selection

  const viagraBottle1 = import.meta.env.VITE_VIAGRA_TIER_TWO;
  const viagraBottle2 = import.meta.env.VITE_VIAGRA_TIER_THREE;
  const viagraBottle3 = import.meta.env.VITE_VIAGRA_TIER_FOUR;
  const cialisBottle1 = import.meta.env.VITE_CIALIS_TIER_TWO;
  const cialisBottle2 = import.meta.env.VITE_CIALIS_TIER_THREE;
  const cialisBottle3 = import.meta.env.VITE_CIALIS_TIER_FOUR;
  const levitraBottle1 = import.meta.env.VITE_LEVITRA_TIER_TWO;
  const levitraBottle2 = import.meta.env.VITE_LEVITRA_TIER_THREE;
  const levitraBottle3 = import.meta.env.VITE_LEVITRA_TIER_FOUR;
  const mixedPills = import.meta.env.VITE_MIXED_PILLS;

  const handleServiceChange = (serviceName) => {
    setSelectedService(serviceName);
  };

  const renderServiceCards = () => {
    switch (selectedService) {
      case "Viagra":
        return (
          <div className="row">
            {/* Render Viagra ServiceCards */}
            {
              <div className="container">
                <div className="row">
                  <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                    <ServiceCard
                      imageSrc={viagraBottle1}
                      amount="10"
                      title="Weekend Warrior"
                      price="17.50"
                      bgColor="service-viagra"
                      btnOutlineColor="btn-outline-dark"
                    />
                  </div>
                  <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                    <ServiceCard
                      imageSrc={viagraBottle2}
                      title="Marathon Man"
                      amount="17"
                      price="29.75"
                      bgColor="service-viagra"
                      btnOutlineColor="btn-outline-dark"
                    />
                  </div>
                  <div className="col-12 col-sm-6 col-md-6 col-lg-4 text-white">
                    <ServiceCard
                      imageSrc={viagraBottle3}
                      title="Ultimate Uneekman"
                      amount="30"
                      price="52.50"
                      textColor="text-white"
                      bgColor="service-viagra-prime"
                      btnOutlineColor="btn-outline-white"
                    />
                  </div>
                </div>
              </div>
            }
          </div>
        );
      case "Cialis":
        return (
          <div className="row">
            {/* Render Cialis ServiceCards */}
            {
              <div className="container">
                <div className="row">
                  <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                    <ServiceCard
                      imageSrc={cialisBottle1}
                      amount="10"
                      title="Weekend Warrior"
                      price="50.00"
                      bgColor="service-cialis"
                      btnOutlineColor="btn-outline-dark"
                    />
                  </div>
                  <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                    <ServiceCard
                      imageSrc={cialisBottle2}
                      title="Marathon Man"
                      amount="17"
                      price="85.00"
                      bgColor="service-cialis"
                      btnOutlineColor="btn-outline-dark"
                    />
                  </div>
                  <div className="col-12 col-sm-6 col-md-6 col-lg-4 text-white">
                    <ServiceCard
                      imageSrc={cialisBottle3}
                      title="Ultimate Uneekman"
                      amount="30"
                      price="150.00"
                      textColor="text-white"
                      bgColor="service-cialis-prime"
                      btnOutlineColor="btn-outline-white"
                    />
                  </div>
                </div>
              </div>
            }
          </div>
        );
      case "Levitra":
        return (
          <div className="row">
            {/* Render Levitra ServiceCards */}
            {
              <div className="container">
                <div className="row">
                  <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                    <ServiceCard
                      imageSrc={levitraBottle1}
                      amount="10"
                      title="Weekend Warrior"
                      price="50.00"
                      bgColor="service-levitra"
                      btnOutlineColor="btn-outline-dark"
                    />
                  </div>
                  <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                    <ServiceCard
                      imageSrc={levitraBottle2}
                      title="Marathon Man"
                      amount="17"
                      price="85.00"
                      bgColor="service-levitra"
                      btnOutlineColor="btn-outline-dark"
                    />
                  </div>
                  <div className="col-12 col-sm-6 col-md-6 col-lg-4 text-white">
                    <ServiceCard
                      imageSrc={levitraBottle3}
                      title="Ultimate Uneekman"
                      amount="30"
                      price="150.00"
                      textColor="text-white"
                      bgColor="service-levitra-prime"
                      btnOutlineColor="btn-outline-white"
                    />
                  </div>
                </div>
              </div>
            }
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="section off-white">
      <div className="container">
        <div className="row mb-2">
          <div className="col-lg-5 mx-auto text-center">
            <h2 className="heading text-primary">Choose Your Plan</h2>
            <p>
              All plans include digital physician consultation, Rx-only chewable
              tablets, monthly refills, and medical support.
            </p>

            {/* These both lead to dead links in the original dev instance. Further guidance needed, but in the meantime, they lead to two great albums. */}
            <a
              className="text-black"
              href="https://www.youtube.com/watch?v=lmSBSwDLyVI"
            >
              What's the difference?
            </a>
            <br />
            <a
              className="text-black"
              href="https://www.youtube.com/watch?v=SfFCiYtlQCg"
            >
              Why should I pick compounded troches?
            </a>

            <hr />
          </div>
          <div className="">
            <Accordion defaultActiveKey="1">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  Safety Information Disclaimer
                </Accordion.Header>
                <Accordion.Body>
                  <h6>
                    Do not take Sildenafil (sildenafil citrate) or Tadalafil if
                    you:
                  </h6>

                  <ul>
                    <li>
                      Take medication containing nitrates or guanylate cyclase
                      stimulators for pulmonary hypertension as this could cause
                      an unsafe drop in blood pressure.
                    </li>
                    <li>
                      Are allergic to sildenafil, tadalafil or any ingredients
                      in either medication.
                    </li>
                  </ul>

                  <p>
                    Discuss your health with your doctor to ensure that you are
                    healthy enough for sex.
                  </p>
                  <p>
                    If you experience chest pain, dizziness, or nausea during
                    sex, seek immediate medical help.
                  </p>

                  <h6>
                    Sildenafil and Tadalafil can cause serious side effects.
                    Some side effects include:
                  </h6>
                  <ul>
                    <li>
                      An erection lasting more than 4 hours. If you experience
                      this get medical help right away as this can cause
                      permanent damage if not treated.
                    </li>
                    <li>
                      Sudden vision loss in one or both eyes. This can be a sign
                      of a serious eye problem. Stop taking the medication and
                      call your healthcare provider right away if you experience
                      this.- Sudden hearing decrease, hearing loss, ringing in
                      their ears (tinnitus) or dizziness. If you have these
                      symptoms, stop taking the medication and contact a doctor
                      right away.
                    </li>
                  </ul>

                  <h6>
                    Before you take Sildenafil, tell your healthcare provider if
                    you:
                  </h6>

                  <ul>
                    <li>
                      Have or have had heart problems such as a heart attack,
                      irregular heartbeat, angina, chest pain, narrowing of the
                      aortic valve, or heart failure
                    </li>
                    <li>Have had heart surgery within the last 6 months</li>
                    <li>Have pulmonary hypertension</li>
                    <li>Have had a stroke</li>
                    <li>
                      Have low blood pressure, or high blood pressure that is
                      not controlled
                    </li>
                    <li>Have a deformed penis shape</li>
                    <li>
                      Have had an erection that lasted for more than 4 hours
                    </li>
                    <li>
                      Have problems with your blood cells such as sickle cell
                      anemia, multiple myeloma, or leukemia
                    </li>
                    <li>
                      Have retinitis pigmentosa, a rare genetic (runs in
                      families) eye disease
                    </li>
                    <li>
                      Have ever had severe vision loss, including an eye problem
                      called NAION
                    </li>
                    <li>Have bleeding problems</li>
                    <li>Have or have had stomach ulcers</li>
                    <li>Have liver problems</li>
                    <li>
                      Have kidney problems or are having kidney dialysis have
                      any other medical conditions
                    </li>
                  </ul>

                  <p>
                    Tell your healthcare provider about all the medicines you
                    take, including prescription and over-the-counter medicines,
                    vitamins, and herbal supplements.
                  </p>
                  <h6>
                    Sildenafil may affect the way other medicines work, and
                    other medicines may affect the way Sildenafil works, causing
                    side effects. Especially tell your healthcare provider if
                    you take any of the following:
                  </h6>

                  <ul>
                    <li>
                      Nitrates - Guanylate cyclase stimulators such as Adempas
                      (riociguat)
                    </li>
                    <li>
                      Alpha-blockers such as Hytrin (terazosin HCl), Flomax
                      (tamsulosin HCl), Cardura (doxazosin mesylate), Minipress
                      (prazosin HCl), Uroxatral (alfuzosin HCl), Jalyn
                      (dutasteride and tamsulosin HCl), or Rapaflo (silodosin).
                    </li>
                    <li>
                      HIV protease inhibitors, such as ritonavir (Norvir),
                      indinavir sulfate (Crixivan), saquinavir (Fortovase or
                      Invirase), or atazanavir sulfate (Reyataz)
                    </li>
                    <li>
                      Some types of oral antifungal medicines, such as
                      ketoconazole (Nizoral) and itraconazole (Sporanox)
                    </li>
                    <li>
                      Some types of antibiotics, such as clarithromycin
                      (Biaxin), telithromycin (Ketek), or erythromycin
                    </li>
                    <li>Other medicines that treat high blood pressure</li>
                    <li>Other medicines or treatments for ED</li>
                    <li>
                      Sildenafil and Tadalafil should not be used with REVATIO
                      or with other PAH treatments containing sildenafil,
                      tadalafil or any other PDE5 inhibitors (such as Adcirca
                      tadalafil)
                    </li>
                  </ul>

                  <p>
                    Sildenafil and Tadalafil do not protect against sexually
                    transmitted diseases, including HIV.
                  </p>

                  <h6>
                    The most common side effects of Sildenafil and Tadalafil
                    include headache; flushing; upset stomach; abnormal vision,
                    such as changes in color vision(such as having a blue color
                    tinge) and blurred vision; stuffy or runny nose; back pain;
                    muscle pain; nausea; dizziness; rash.
                  </h6>

                  <p>H2 INDICATION</p>

                  <h6>
                    Sildenafil (sildenafil citrate) and Tadalafil are
                    prescription medications used to treat erectile dysfunction
                    (ED). They are not for women or children.
                  </h6>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>

        <div>
          <div>
            <div className="row my-4">
              {/* Viagra button */}
              <div className="col-md-4 text-center mb-2">
                <button
                  type="button"
                  className={`w-100 ${
                    selectedService === "Viagra"
                      ? "active service-viagra-btn-active shadow"
                      : "service-viagra-btn-inactive"
                  }`}
                  onClick={() => handleServiceChange("Viagra")}
                >
                  Viagra (Sildenafil)
                </button>
              </div>

              {/* Cialis button */}
              <div className="col-md-4 text-center mb-2">
                <button
                  type="button"
                  className={`w-100 ${
                    selectedService === "Cialis"
                      ? "active service-cialis-btn-active shadow"
                      : " service-cialis-btn-inactive"
                  }`}
                  onClick={() => handleServiceChange("Cialis")}
                >
                  Cialis (Tadalafil)
                </button>
              </div>

              {/* Levitra button */}
              <div className="col-md-4 text-center mb-2">
                <button
                  type="button"
                  className={`w-100 ${
                    selectedService === "Levitra"
                      ? "active service-levitra-btn-active shadow"
                      : " service-levitra-btn-inactive"
                  }`}
                  onClick={() => handleServiceChange("Levitra")}
                >
                  Levitra (Vardenafil)
                </button>
              </div>
            </div>
          </div>
        </div>

        <TransitionGroup component={null}>
          <CSSTransition key={selectedService} classNames="fade-up">
            {renderServiceCards()}
          </CSSTransition>
        </TransitionGroup>

        <div className="d-flex justify-content-center">
          <div className="card py-3" data-aos="fade-in" data-aos-once="true">
            <div className="row">
              <div className="col-md-4 col-sm-12 d-block">
                <img className="" src={mixedPills} alt="" />
              </div>
              <div className="col-md-8 col-sm-12 my-auto px-5">
                <h4>Can't decide?</h4>
                <h5>Compounded Sublingual Variety Pack</h5>
                <h5
                  className="text-white py-1 px-2 mx-auto d-inline-block"
                  style={{
                    background: "rgb(134,192,255)",
                    background:
                      "linear-gradient(152deg, rgba(110,128,255,1) 0%, rgba(48,99,232,1) 100%)",
                    fontWeight: "bold",
                    borderRadius: "8px",
                  }}
                >
                  $75.00
                </h5>
                <h6>Our variety pack includes:</h6>
                <ul>
                  <li>2 Compounded Sildenafil 105mg Soft Tabs</li>
                  <li>2 Compunded Tadalafil 22mg Soft Tabs</li>
                  <li>2 Compunded Vardenafil 22mg Soft Tabs</li>
                </ul>
                <p>
                  <a href="#" className={`btn btn-outline-dark py-2 px-3`}>
                    Order Now
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
