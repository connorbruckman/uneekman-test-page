import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const blobImg = import.meta.env.VITE_BLOB_SVG;
const uneekmanLogo = import.meta.env.VITE_UNEEKMAN_LOGO;
const uneekmanVideo2 = import.meta.env.VITE_UNEEKMAN_VIDEO_2;
const heroPillsGuy = import.meta.env.VITE_HERO_GUY_HOLDING_PILLS;

function Hero() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="hero overlay">
      <img src={blobImg} alt="" className="img-fluid blob" />
      <div class="iframe-wrapper">
        <iframe
          src="https://player.vimeo.com/video/858782545?h=d2bd3c64c3?background=1&muted=1&autoplay=1&dnt=1&loop=1&title=0&sidedock=0&controls=0&app_id=58479"
          // Swap out the string of numbers above to change the video
          // 858782545 for UneekMan video
          // 27488412 for Rodney Mullen test video
          frameborder="0"
          allow="autoplay; fullscreen"
          title="phmnk_video_1.mp4"
        ></iframe>
      </div>
      <div className="container">
        <div className="row align-items-center justify-content-between pt-5">
          <div className="col-lg-6 text-center text-lg-start pe-lg-5">
            <img
              src={uneekmanLogo}
              alt=""
              className="w-100 d-none d-lg-block"
              data-aos="fade-right"
              data-aos-once="true"
            />
            <h1
              className="heading text-white mb-3"
              data-aos="fade-right"
              data-aos-once="true"
              data-aos-delay="200"
            >
              Prescribed online, delivered to your door.
            </h1>
            <h4
              className="text-white mb-3"
              data-aos="fade-right"
              data-aos-once="true"
              data-aos-delay="400"
            >
              UneekMan offers telehealth visits over the phone, allowing you to
              get the men's healthcare you need at your own pace.
            </h4>
            <div
              className="mb-5 mm"
              data-aos="fade-right"
              data-aos-once="true"
              data-aos-delay="600"
            >
              <Link to="/erectile-dysfunction">
                <a className="btn btn-outline-white me-4">Learn More</a>
              </Link>
              <a href={uneekmanVideo2} className="text-white">
                Watch the video
              </a>
            </div>
          </div>
          <div
            className="col-lg-6 align-items-end"
            data-aos="fade-up"
            data-aos-delay="800"
            data-aos-once="true"
          >
            <div className="img-wrap">
              <img src={heroPillsGuy} alt="Image" className="hero-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
