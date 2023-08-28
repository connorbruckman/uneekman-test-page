import React from "react";
import ReactPlayer from "react-player";
import PageHeader from "./PageHeader";

function EduVideos() {
  const EduVideoComponent = (props) => {
    return (
      <div className="py-2">
        <div className="">
          <div className="">
            <h4
              className="text-white py-2 px-3 mx-auto"
              style={{
                background: "#a7cced",
                background: "linear-gradient(140deg, #306ee8 0%, #3038e8 100%)",
                fontWeight: "bold",
                borderRadius: "8px 8px 0 0",
                marginBottom: "0",
              }}
            >
              {props.title}
            </h4>
            <div>
              <ReactPlayer
                url={props.url}
                width="100%"
                controls={true}
                style={{ borderRadius: "0 0 8px 8px" }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  const eduVideo1 = import.meta.env.VITE_EDU_VIDEO_1;
  const eduVideo2 = import.meta.env.VITE_EDU_VIDEO_2;
  const eduVideo3 = import.meta.env.VITE_EDU_VIDEO_3;
  const eduVideo4 = import.meta.env.VITE_EDU_VIDEO_4;
  const eduVideo5 = import.meta.env.VITE_EDU_VIDEO_5;
  const eduVideo6 = import.meta.env.VITE_EDU_VIDEO_6;
  const eduVideo7 = import.meta.env.VITE_EDU_VIDEO_7;
  const eduVideo8 = import.meta.env.VITE_EDU_VIDEO_8;
  const eduVideo9 = import.meta.env.VITE_EDU_VIDEO_9;
  const eduVideo10 = import.meta.env.VITE_EDU_VIDEO_10;
  const eduVideo11 = import.meta.env.VITE_EDU_VIDEO_11;
  const eduVideo12 = import.meta.env.VITE_EDU_VIDEO_12;
  const eduVideo13 = import.meta.env.VITE_EDU_VIDEO_13;
  const eduVideo14 = import.meta.env.VITE_EDU_VIDEO_14;
  const eduVideo15 = import.meta.env.VITE_EDU_VIDEO_15;
  const eduVideo16 = import.meta.env.VITE_EDU_VIDEO_16;

  return (
    <div style={{ backgroundColor: "#fefefe" }}>
      <PageHeader
        header="Educational Videos"
        description="Take a look at some videos to
        learn more about erectile dysfunction and other men's health issues."
      />

      <div className="container py-5">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <EduVideoComponent title="General Education" url={eduVideo1} />
          </div>

          <div className="col-md-6 col-sm-12">
            <EduVideoComponent
              title="Common Side Effects of Viagra"
              url={eduVideo2}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 col-sm-12">
            <EduVideoComponent
              title="Effective Medication for ED"
              url={eduVideo3}
            />
          </div>
          <div className="col-md-6 col-sm-12">
            <EduVideoComponent
              title="How effective is Viagra?"
              url={eduVideo4}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 col-sm-12">
            <EduVideoComponent
              title="Talking to your Doctor About ED"
              url={eduVideo5}
            />
          </div>
          <div className="col-md-6 col-sm-12">
            <EduVideoComponent title="Causes of ED" url={eduVideo6} />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 col-sm-12">
            <EduVideoComponent title="ED Statistics" url={eduVideo7} />
          </div>
          <div className="col-md-6 col-sm-12">
            <EduVideoComponent
              title="Counterfeit ED Medication"
              url={eduVideo8}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 col-sm-12">
            <EduVideoComponent title="Viagra Approval" url={eduVideo9} />
          </div>
          <div className="col-md-6 col-sm-12">
            <EduVideoComponent title="Cialis Approval" url={eduVideo10} />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 col-sm-12">
            <EduVideoComponent title="Sildenafil vs. Viagra" url={eduVideo11} />
          </div>
          <div className="col-md-6 col-sm-12">
            <EduVideoComponent title="Tadalafil vs. Cialis" url={eduVideo12} />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 col-sm-12">
            <EduVideoComponent
              title="Generic vs. Brand Medications"
              url={eduVideo13}
            />
          </div>
          <div className="col-md-6 col-sm-12">
            <EduVideoComponent
              title="Sublingual Medications"
              url={eduVideo14}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 col-sm-12">
            <EduVideoComponent title="Peroral Medications" url={eduVideo15} />
          </div>
          <div className="col-md-6 col-sm-12">
            <EduVideoComponent title="The Three Pills" url={eduVideo16} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EduVideos;
