import React from "react";
import PageHeader from "./PageHeader";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToolbox } from "@fortawesome/free-solid-svg-icons";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faTablets } from "@fortawesome/free-solid-svg-icons";
import { faWineGlass } from "@fortawesome/free-solid-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";

const ComparisonChart = () => {
  const timeScaleChart = import.meta.env.VITE_TIME_SCALE_CHART;
  const viagraComp = import.meta.env.VITE_COMP_VIAGRA;
  const cialisComp = import.meta.env.VITE_COMP_CIALIS;
  const levitraComp = import.meta.env.VITE_COMP_LEVITRA;

  return (
    <div className="off-white">
      <PageHeader
        header="Comparison Chart"
        description="Learn the differences between sildenafil, tadalafil and vardenafil."
      />
      {/* Section 1: Erectile Dysfunction Comparison Chart */}
      <div
        className="container shadow"
        style={{ backgroundColor: "#d4e4f1" }}
        data-aos="fade-up"
        data-aos-once="true"
      >
        <div className="py-2">
          <h2 style={{ fontWeight: "bold" }}>
            Erectile Dysfunction Comparison Chart
          </h2>
        </div>
        <div
          style={{
            height: "1px",
            backgroundColor: "grey",
            margin: "0 60% 0 0 ",
          }}
        ></div>
        <div className="py-2">
          <h3>
            How do I select the right medication to treat erectile dysfunction?
          </h3>
          <p>
            The following chart compares the top FDA-approved medications for
            patients with erectile dysfunction: Sildenafil, Tadalafil, and
            Vardenafil. If you have erectile dysfunction, you may have questions
            about the available treatments. With so many choices, it isn’t
            always easy to understand your options.
          </p>
          <p>
            We prepared this chart to help you compare the top 5 erectile
            dysfunction medications on the market.
          </p>
        </div>
      </div>
      {/* Section 2: Erectile Dysfunction Medications */}
      <div
        className="container shadow"
        style={{ backgroundColor: "#a7cced" }}
        data-aos="fade-up"
        data-aos-once="true"
      >
        <div>
          <div className="py-2">
            <h2 style={{ fontWeight: "bold" }}>
              <FontAwesomeIcon
                icon={faToolbox}
                style={{ marginRight: ".5rem" }}
              />
              Erectile Dysfunction Medications
            </h2>
          </div>
          <div>
            <div className="row py-3">
              <div className="col-md-4 col-sm-12">
                <div className="card py-3 px-3 mb-3 service-viagra-prime text-white">
                  <div className="text-center">
                    <h4 style={{ fontWeight: "bold" }}>Sildenafil</h4>
                    <h5>25mg, 50mg, 100mg</h5>
                    <img src={viagraComp} alt="" className="w-100" />
                  </div>
                  <hr />
                  <div>
                    <p className="text-center">
                      Sildenafil is the generic blue pill. Each pill shows the
                      manufacturer’s name on one side. The other side shows the
                      dosage information in milligrams. Sildenafil is one of the
                      first FDA-approved treatment for erectile dysfunction.
                      It’s still popular today because it’s an effective
                      treatment for most men.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-12">
                <div className="card py-3 px-3 mb-3 service-cialis-prime text-white">
                  <div className="text-center">
                    <h4 style={{ fontWeight: "bold" }}>Tadalafil</h4>
                    <h5>10mg, 20mg</h5>
                    <img src={cialisComp} alt="" className="w-100" />
                  </div>
                  <hr />
                  <div>
                    <p className="text-center">
                      Tadalafil is the generic orange pill. Each pill shows the
                      strength in milligrams on one side. The other side of
                      authentic Tadalafil is blank. This medication is unique
                      because each dose lasts approximately 36 hours. Many men
                      can achieve more than one erection per dose.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-12">
                <div className="card py-3 px-3 mb-3 service-levitra-prime text-white">
                  <div className="text-center">
                    <h4 style={{ fontWeight: "bold" }}>Vardenafil</h4>
                    <h5>10mg, 20mg</h5>
                    <img src={levitraComp} alt="" className="w-100" />
                  </div>
                  <hr />
                  <div>
                    <p className="text-center">
                      Vardenafil is the generic pink pill. Authentic Vardenafil
                      shows the manufacturer’s name on the front. The other side
                      contains the dosage strength in milligrams. It is popular
                      because it’s a fast-acting treatment for erectile
                      dysfunction. Clinical studies have shown that it works
                      well for most men.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section 3: Side Effects */}
      <div
        className="container shadow text-white"
        style={{ backgroundColor: "#ff4e3a" }}
        data-aos="fade-up"
        data-aos-once="true"
      >
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className="py-2">
              <h2 style={{ fontWeight: "bold", color: "yellow" }}>
                <FontAwesomeIcon
                  icon={faTriangleExclamation}
                  style={{ marginRight: ".5rem" }}
                />
                Side Effects
              </h2>
            </div>
            <p>
              Erectile dysfunction medications are usually well-tolerated among
              patients. However, serious side effects are possible. Contact your
              doctor if you experience any of the following:
            </p>
            <ul>
              <li>Vision changes or impairment</li>
              <li>Ringing in the ears</li>
              <li>Hearing loss or impairment</li>
              <li>Chest pain that can spread throughout the torso</li>
              <li>Flu-like symptoms, including nausea and sweating</li>
              <li>Heart arrhythmia</li>
              <li>Swelling in the extremities</li>
              <li>Shortness of breath or trouble breathing</li>
              <li>Dizziness or fainting</li>
              <li>Convulsions or seizures</li>
              <li>An erection that persists for 4 hours or more</li>
            </ul>
            <p>
              You may also experience more common, but less severe side effects,
              including:
            </p>
            <ul>
              <li>Redness in the face, neck, or chest</li>
              <li>Runny or stuffy nose</li>
              <li>Headaches</li>
              <li>Nausea</li>
              <li>Muscle pain or soreness</li>
            </ul>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="py-2">
              <h2 style={{ fontWeight: "bold", color: "yellow" }}>
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ marginRight: ".5rem" }}
                />
                Important
              </h2>
            </div>
            <div>
              <p>
                Wait 24 hours between each dose.If you have erectile
                dysfunction, only take one dose of medication every 24 hours.
              </p>
              <hr />
              <p>
                Don’t drink alcohol or grapefruit juice.When taking an erectile
                dysfunction medication, don’t drink alcohol or grapefruit juice.
                Alcohol and grapefruit juice can interact with erectile
                dysfunction medications and cause side effects.
              </p>
            </div>
            <div className="py-2" style={{ fontWeight: "bold" }}>
              <div className="py-2" style={{ fontWeight: "bold" }}>
                <h2 style={{ fontWeight: "bold", color: "yellow" }}>
                  <FontAwesomeIcon
                    icon={faTablets}
                    style={{ marginRight: ".5rem" }}
                  />
                  Benefits of Compounded Troches
                </h2>
              </div>
            </div>
            <div>
              <p>
                Compunded troches come with advantages over standard pills, such
                as:
              </p>
              <ul>
                <li>Medicine enters blood stream faster</li>
                <li>Chewable troche can be made specially for you</li>
                <li>Troche dosage is customizable to your body's need</li>
                <li>Eliminates the nausea experienced with non-troche forms</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Section 4: Food and Drink */}
      <div
        className="container shadow"
        style={{ backgroundColor: "#d5e5f2" }}
        data-aos="fade-up"
        data-aos-once="true"
      >
        <div>
          <div className="py-2">
            <h2 style={{ fontWeight: "bold" }}>
              {" "}
              <FontAwesomeIcon
                icon={faWineGlass}
                style={{ marginRight: ".5rem" }}
              />
              Food and Drink
            </h2>
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-12">
              <div className="mx-2 text-center">
                <p style={{ fontWeight: "bold" }}>
                  Sildenafil can be taken with or without food.
                </p>
                <p>
                  When taking Sildenafil, avoid high-fat meals. Fatty foods can
                  prevent Sildenafil from working right away. It’s best to avoid
                  alcohol when taking Sildenafil. Alcohol can cause negative
                  side effects and make it more difficult for you to get and
                  maintain a hard erection.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="mx-2 text-center">
                <p style={{ fontWeight: "bold" }}>
                  Tadalafil can be taken with or without food.
                </p>
                <p>
                  You can take Tadalafil with a meal or on an empty stomach.
                  When taking Tadalafil, you may consume a moderate amount of
                  alcohol. Limit yourself to 5 alcoholic drinks. If you have
                  more than 5 alcoholic beverages, you may experience negative
                  side effects.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="mx-2 text-center">
                <p style={{ fontWeight: "bold" }}>
                  Vardenafil can be taken with or without food.
                </p>
                <p>
                  You can take Vardenafil with any type of food or if your
                  stomach is empty. Do not drink alcohol with Vardenafil.
                  Alcohol may interact with your medication and produce
                  additional side effects. If you drink alcohol, you may not be
                  able to get or maintain an erection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section 5: Drug Interaction Information */}
      <div
        className="container shadow"
        style={{ backgroundColor: "#a7cced" }}
        data-aos="fade-up"
        data-aos-once="true"
      >
        <div>
          <div className="py-2">
            <h2 style={{ fontWeight: "bold" }}>
              {" "}
              <FontAwesomeIcon
                icon={faCircleInfo}
                style={{ marginRight: ".5rem" }}
              />
              Drug Interaction Information
            </h2>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <p style={{ fontWeight: "bold" }}>
                Erectile dysfunction medications can interact with other
                prescription medications, including:
              </p>
              <ul>
                <li>Medications used to treat ulcers.</li>
                <li>Medications used to treat leukemia.</li>
                <li>Medications used to treat depression and anxiety.</li>
                <li>
                  Medications used to treat cardiovascular conditions. Common
                  examples include amiodarone, nicardipine, bosentan,
                  amlodipine, and quinidine.
                </li>
                <li>
                  Certain antibiotics. Common examples include erythromycin,
                  clarithromycin, and telithromycin.
                </li>
                <li>
                  Certain antifungal medications. Common examples include
                  ketoconazole, miconazole, posaconazole, fluconazole,
                  itraconazole, and voriconazole.
                </li>
                <li>Treatments for Hepatitis C.</li>
                <li>
                  Treatments for HIV/AIDS. Common examples include atazanavir,
                  fosamprenavir, indinavir, nelfinavir, delavirdine, efavirenz,
                  nevirapine, ritonavir, and saquinavir.
                </li>
                <li>
                  Medications used to treat seizures. Common examples include
                  oxcarbazepine, phenobarbital, phenytoin, carbamazepine,
                  fosphenytoin, and primidone.
                </li>
                <li>
                  Medications used to treat tuberculosis. Common examples
                  include rifabutin, rifampin, isoniazid, and rifapentine.
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-sm-12">
              <p style={{ fontWeight: "bold" }}>
                You may not be able to take erectile dysfunction medications if
                you have one of the following conditions:
              </p>
              <ul>
                <li>
                  High blood pressure, low blood pressure, heart disease,
                  arrhythmia, or chest pain.
                </li>
                <li>Heart attack in the last 90 days.</li>
                <li>Stroke in the last 6 months.</li>
                <li>Sickle cell anemia, leukemia, or multiple myeloma.</li>
                <li>Hemophilia or bleeding disorders.</li>
                <li>Penile abnormalities or deformities.</li>
                <li>Liver, kidney, or stomach problems.</li>
                <li>Retinitis pigmentosa.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Section 6: Time Scale */}
      {/* I want it on the record that this thing sucked ass to put together */}
      <div
        className="container shadow"
        style={{ backgroundColor: "#d5e5f2" }}
        data-aos="fade-up"
        data-aos-once="true"
      >
        <div>
          <div className="py-2">
            <h2 style={{ fontWeight: "bold" }}>
              {" "}
              <FontAwesomeIcon
                icon={faClock}
                style={{ marginRight: ".5rem" }}
              />
              Time Scale
            </h2>
          </div>

          <div className="mx-auto">
            <div className="d-inline-block pb-2">
              <div className="d-flex align-items-center">
                <div
                  style={{
                    height: "1.5rem",
                    width: "1.5rem",
                    backgroundColor: "#ffc334",
                    borderRadius: "20%",
                    marginRight: ".5rem",
                  }}
                ></div>

                <div className="d-inline-block">
                  <h6 className="my-auto py-2">Duration of Effectiveness</h6>
                </div>
                <div style={{ width: ".5rem" }}></div>
                <div
                  style={{
                    height: "1.5rem",
                    width: "1.5rem",
                    backgroundColor: "#ff5240",
                    borderRadius: "20%",
                    marginRight: ".5rem",
                  }}
                ></div>
                <div className="d-inline-block">
                  <h6 className="my-auto py-2">Maximum Waiting Time</h6>
                </div>
              </div>
            </div>
          </div>

          <div className="py-2">
            <div className="card">
              <img src={timeScaleChart} className="w-100" />
            </div>
          </div>
        </div>
      </div>
      {/* Section 6: Other Information */}
      <div
        className="container shadow"
        style={{ backgroundColor: "#a7cced" }}
        data-aos="fade-up"
        data-aos-once="true"
      >
        <div>
          <div className="py-2">
            <h2 style={{ fontWeight: "bold" }}>
              {" "}
              <FontAwesomeIcon
                icon={faCircleQuestion}
                style={{ marginRight: ".5rem" }}
              />
              Other Information
            </h2>
            <p>
              UneekMan only sells authentic, brand name medications manufactured
              in the United States. A US-licensed physician prescribes each
              medication sold in our online store. All medications ship from
              US-licensed pharmacies.
            </p>
            <p>
              We sell the top FDA-approved medications used to treat erectile
              dysfunction: Sildenafil, Tadalafil, and Vardenafil. Erectile
              dysfunction medications share many similarities. However, each
              medication works slightly differently.
            </p>
            <p>
              A US-licensed doctor can help you determine which erectile
              dysfunction treatment is best for you. Always tell your doctor
              about your medical history and current health status before taking
              a new medication.
            </p>
            <p>
              We hope this information will help you make an informed decision.
              If you have questions about these medications, please contact a
              member of our staff via email, online chat, or telephone.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonChart;
