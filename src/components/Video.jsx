import React from "react";
import ReactPlayer from "react-player";

const VideoSection = () => {
  const uneekmanVideo1 = import.meta.env.VITE_UNEEKMAN_VIDEO_1;

  return (
    <div style={{ backgroundColor: "#cdeef9" }}>
      <div className="d-lg-flex align-items-center container ">
        <div className="text py-3 col-md-6">
          <h2
            className="heading text-primary"
            data-aos="fade-right"
            data-aos-once="true"
          >
            <b>What's unique about Uneekman?</b>
          </h2>
          {/* Copy courtesy of ChatGPT. Most likely placeholder. */}
          <p data-aos="fade-right" data-aos-delay="200" data-aos-once="true">
            Our product line is centered around our exclusive offering of
            lozenges. What sets our lozenges apart is their ability to
            effectively reduce a wide range of side effects. Notably, these
            lozenges are designed to take effect swiftly, ensuring a prompt and
            efficient experience.
          </p>
          <a href="#" className="btn btn-outline-primary me-4">
            Learn More
          </a>
        </div>
        <div className="col-md-1 d-sm-none d-md-block"></div>
        {/* This video doesn't really fit with the content on the left. Recommend replacing with Nathan's Uneekman video once it's available */}
        <div
          className="py-3 col-md-5"
          data-aos="fade-left"
          data-aos-delay="500"
          data-aos-once="true"
        >
          <ReactPlayer
            url={uneekmanVideo1}
            width="100%"
            height="100%"
            controls="true"
          />
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
