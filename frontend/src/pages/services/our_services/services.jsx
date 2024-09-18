import React from "react";
import "./our_services.css";
import service_default_image from "../../../assets/images/ServiceImageDefault.png";
import service_icon from "../../../assets/images/ServiceIconDefault.png";
import left_navigator from "../../../assets/icons/expand_circle_left.png";
import right_navigator from "../../../assets/icons/expand_circle_right.png";

const OurServicesSection = () => {
  return (
    <div className="services-our-services-section">
      <h2>Our services</h2>

      <div className="services-our-services-section-container">
        <div className="services-our-services-section-header">
          <div>
            <img
              src={service_icon}
              alt="service icon"
              className="service-icon"
            />
            <h1>User Interface/Experience Design(UI/UX)</h1>
          </div>
          <p>
            We deeply understand that usefulness of every tech product designed
            or developed for you, only yields results when your end client or
            audience is attracted or satisfied with the product. We invest time
            and resources in research to unveil your users’ needs and we
            carefully design solutions that directly meet those needs with both
            detailed functionalities and captivating aesthetics
          </p>
        </div>

        <div className="services-our-services-section-main">
          <div className="services-our-services-section-main-images">
            <img src={service_default_image} alt="" />
            <img src={service_default_image} alt="" />
            <img src={service_default_image} alt="" />
          </div>

          <div className="navigations">
            <img src={left_navigator} alt="" />
            <img src={right_navigator} alt="" />
          </div>
        </div>
      </div>

      <div className="services-our-services-section-container">
        <div className="services-our-services-section-header">
          <div>
            <img
              src={service_icon}
              alt="service icon"
              className="service-icon"
            />
            <h1>Web Design and Development</h1>
          </div>
          <p>
            We deeply understand that usefulness of every tech product designed
            or developed for you, only yields results when your end client or
            audience is attracted or satisfied with the product. We invest time
            and resources in research to unveil your users’ needs and we
            carefully design solutions that directly meet those needs with both
            detailed functionalities and captivating aesthetics
          </p>
        </div>

        <div className="services-our-services-section-main">
          <div className="services-our-services-section-main-images">
            <img src={service_default_image} alt="" />
            <img src={service_default_image} alt="" />
            <img src={service_default_image} alt="" />
          </div>

          <div className="navigations">
            <img src={left_navigator} alt="" />
            <img src={right_navigator} alt="" />
          </div>
        </div>
      </div>

      <div className="services-our-services-section-container">
        <div className="services-our-services-section-header">
          <div>
            <img
              src={service_icon}
              alt="service icon"
              className="service-icon"
            />
            <h1>Mobile Development</h1>
          </div>
          <p>
            We deeply understand that usefulness of every tech product designed
            or developed for you, only yields results when your end client or
            audience is attracted or satisfied with the product. We invest time
            and resources in research to unveil your users’ needs and we
            carefully design solutions that directly meet those needs with both
            detailed functionalities and captivating aesthetics
          </p>
        </div>

        <div className="services-our-services-section-main">
          <div className="services-our-services-section-main-images">
            <img src={service_default_image} alt="" />
            <img src={service_default_image} alt="" />
            <img src={service_default_image} alt="" />
          </div>

          <div className="navigations">
            <img src={left_navigator} alt="" />
            <img src={right_navigator} alt="" />
          </div>
        </div>
      </div>

      <div className="services-our-services-section-container">
        <div className="services-our-services-section-header">
          <div>
            <img
              src={service_icon}
              alt="service icon"
              className="service-icon"
            />
            <h1>Software Development</h1>
          </div>
          <p>
            We deeply understand that usefulness of every tech product designed
            or developed for you, only yields results when your end client or
            audience is attracted or satisfied with the product. We invest time
            and resources in research to unveil your users’ needs and we
            carefully design solutions that directly meet those needs with both
            detailed functionalities and captivating aesthetics
          </p>
        </div>

        <div className="services-our-services-section-main">
          <div className="services-our-services-section-main-images">
            <img src={service_default_image} alt="" />
            <img src={service_default_image} alt="" />
            <img src={service_default_image} alt="" />
          </div>

          <div className="navigations">
            <img src={left_navigator} alt="" />
            <img src={right_navigator} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServicesSection;
