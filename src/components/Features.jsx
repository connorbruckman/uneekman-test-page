import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopMedical, faUserDoctor, faMortarPestle } from '@fortawesome/free-solid-svg-icons';

const Feature = ({ icon, title, description, delay }) => (
  <div className="col-12 col-sm-6 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay={delay} data-aos-once="true">
    <div className="feature d-flex my-3">
      <FontAwesomeIcon icon={icon.icon} className="cta-icon-alt" />
      <div>
        <h3 className='text-white'><b>{title}</b></h3>
        <p className="text-white">{description}</p>
      </div>
    </div>
  </div>
);

const FeaturesSection = () => (
  <div className='section sec-features service-alt blue-primary'>

      <div className="container">
        <div className="row my-auto">
          <Feature
            icon={{ icon: faLaptopMedical }}
            title="Discreet doctor visits"
            description="Enjoy doctor appointments that prioritize your convenience and respect your confidentiality, providing a seamless, private healthcare experience."
            delay="100"
          />
          <Feature
            icon={{ icon: faUserDoctor }}
            title="US-licensed physicians"
            description="Our team consists of highly skilled and knowledgeable physicians, ensuring that you receive expert medical care and personalized treatment options."
            delay="300"
          />
          <Feature
            icon={{ icon: faMortarPestle }}
            title="US-licensed pharmacy"
            description="Our pharmacy is licensed in the United States, guaranteeing that all medications and services meet rigorous quality and safety standards."
            delay="500"
          />
        </div>
      </div>

  </div>

);

export default FeaturesSection;