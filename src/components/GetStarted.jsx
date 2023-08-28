import React from "react";
import CTASection from "/src/components/CTA.jsx";
import PageHeader from "./PageHeader";

const GetStarted = () => {
  const phoneUrl1 = import.meta.env.VITE_PHONE_URL_1;
  const phoneUrl2 = import.meta.env.VITE_PHONE_URL_2;
  const step3Img = import.meta.env.VITE_STEP_3_IMG;
  const step4Img = import.meta.env.VITE_STEP_4_IMG;
  const step5Img = import.meta.env.VITE_STEP_5_IMG;
  const step6Img = import.meta.env.VITE_STEP_6_IMG;

  return (
    <div>
      <PageHeader
        header="Get Started"
        description="Begin your men's healthcare journey with Uneekman."
      />
      {/* The first two pictures in this look really stupid, will need to make new ones anyway to match the mobile app once it's available */}
      <div className="container">
        <div className="section">
          {/*  */}
          <div className="d-lg-flex">
            <div className="col-md-6 col-sm-12">
              <img className="w-50 d-block mx-auto" src={phoneUrl1} alt="" />
            </div>
            <div className="col-md-6 col-sm-12 my-auto px-5">
              <div className="text">
                <h5 className="mt-5">Step One - Select your preference</h5>
                <h2 className="heading text-primary mb-3">
                  Become a Uneekman member
                </h2>
                <p className="mb-5">
                  Add products to your shopping cart. Complete checkout.
                </p>
              </div>
            </div>
          </div>

          <div className="d-lg-flex">
            <div className="order-md-2 col-md-6 col-sm-12">
              <img className="w-50 d-block mx-auto" src={phoneUrl2} alt="" />
            </div>
            <div className="col-md-6 col-sm-12 my-auto px-5">
              <div className="text">
                <h5 className="mt-5">Step Two - do an online visit</h5>
                <h2 className="heading text-primary mb-3">
                  Enter your medical history and demographics
                </h2>
                <p className="mb-5">
                  We'll ask about your medical history, symptoms, current
                  medications, and allergies. For erectile dysfunction, we'll
                  need to know your blood pressure history as well.
                </p>
              </div>
            </div>
          </div>

          <div className="d-lg-flex">
            <div className="col-md-6 col-sm-12">
              <img className="w-100" src={step3Img} alt="" />
            </div>
            <div className=" col-md-6 col-sm-12 my-auto px-5">
              <div className="text">
                <h5 className="mt-5">
                  Step Three - personalize your treatment
                </h5>
                <h2 className="heading text-primary mb-3">
                  Reviewed by a licensed U.S. physician
                </h2>
                <p className="mb-5">
                  A licensed physician will review your medical history and
                  determine if the medications are safe and appropriate for you.
                  The physician may request a video or audio conference.
                </p>
              </div>
            </div>
          </div>

          <div className="d-lg-flex align-items-center">
            <div className="order-md-2 col-md-6 col-sm-12">
              <img className="w-100" src={step4Img} alt="" />
            </div>
            <div className="col-md-6 col-sm-12 my-auto px-5">
              <div className="text">
                <h5 className="mt-5">Step Four - discreet delivery</h5>
                <h2 className="heading text-primary mb-3">
                  Get your medication shipped to your door
                </h2>
                <p className="mb-5">
                  At UneekMan, we believe in keeping your life private. If
                  approved, you can get your medications discreetly by mail to
                  your door.
                </p>
              </div>
            </div>
          </div>

          <div className="d-lg-flex align-items-center">
            <div className="col-md-6 col-sm-12">
              <img className="w-100" src={step5Img} alt="" />
            </div>
            <div className="col-md-6 col-sm-12 my-auto px-5">
              <div className="text">
                <h5 className="mt-5">
                  Here's what you need before you do your online visit
                </h5>
                <h2 className="heading text-primary">Pre-visit Checklist</h2>
                <ul className="mb-5">
                  <li>Access to a functioning desktop or cell phone</li>
                  <li>
                    Knowledge of your recent blood pressure (within 6 months)
                  </li>
                  <li>Valid driver's license or other identification</li>
                  <li>
                    Complete list of all your medications including OTC (For
                    drug test)
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="d-lg-flex align-items-center">
            <div className="order-md-2 col-md-6 col-sm-12">
              <img className="w-100" src={step6Img} alt="" />
            </div>
            <div className="col-md-6 col-sm-12 my-auto px-5">
              <div className="text">
                <h2 className="heading text-primary mb-3 mt-5">Requirements</h2>
                <ul className="mb-5">
                  <li>
                    You must be 18 years or older to qualify for Uneekman.
                  </li>
                  <li>
                    You are required to have undergone a comprehensive physical
                    examination within the past five years.
                  </li>
                  <li>You must know your blood pressure.</li>
                  <li>
                    You must not have any conditions where sex is not advised.
                  </li>
                  <li>
                    You must not be taking nitroglycerin or any other
                    medications that contain nitrates.
                  </li>
                  <li>
                    You must not be taking poppers, rush, amyl nitrate, butyl,
                    nitrate, or other recreational drugs (excluding medical
                    marijuana).
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CTASection />
    </div>
  );
};

export default GetStarted;
