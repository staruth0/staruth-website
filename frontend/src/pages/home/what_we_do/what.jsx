import React from "react";
import "./what.css";
import mobilescreens from "../../../assets/images/mobilescreens.png";
import arrow_circle_right from "../../../assets/icons/arrow_circle_right.svg";
import { Link } from "react-router-dom";

const WhatWeDoComponent = () => {
  return (
    <div className="home-what-we-do-section-container">
      <div className="home-what-we-do-section-container-heading-underline">
        <h1 className="display-lg">Who we do</h1>
      </div>
      <div className="home-what-we-do-section-container-service-cards-container">
        <div className="home-what-we-do-section-container-service-cards-container-cards">
          <img src={mobilescreens} alt="mobile screens" />
          <div className="home-what-we-do-section-container-service-cards-container-card-text-n-btn">
            <div className="home-what-we-do-section-container-service-cards-container-card-text-n-btn-text">
              <h3>Mobile Development</h3>
              <p>
                We build functional and secure mobile applications for Android
                and iOS devices. From basic apps to complex systems, we are in
                to help you.
              </p>
            </div>
            <div className="home-what-we-do-section-container-service-cards-container-card-text-n-btn-btn">
              <Link to={"/services"}>
                {/* <span className="material-symbols-outlined">
                arrow_circle_right
              </span> */}
                <span>
                  <img src={arrow_circle_right} alt="" />
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="home-what-we-do-section-container-service-cards-container-cards">
          <img src={mobilescreens} alt="mobile screens" />
          <div className="home-what-we-do-section-container-service-cards-container-card-text-n-btn">
            <div className="home-what-we-do-section-container-service-cards-container-card-text-n-btn-text">
              <h3>Mobile Development</h3>
              <p>
                We build functional and secure mobile applications for Android
                and iOS devices. From basic apps to complex systems, we are in
                to help you.
              </p>
            </div>
            <div className="home-what-we-do-section-container-service-cards-container-card-text-n-btn-btn">
              <Link to={"/services"}>
                {/* <span className="material-symbols-outlined">
                arrow_circle_right
              </span> */}
                <span>
                  <img src={arrow_circle_right} alt="" />
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="home-what-we-do-section-container-service-cards-container-cards">
          <img src={mobilescreens} alt="mobile screens" />
          <div className="home-what-we-do-section-container-service-cards-container-card-text-n-btn">
            <div className="home-what-we-do-section-container-service-cards-container-card-text-n-btn-text">
              <h3>Mobile Development</h3>
              <p>
                We build functional and secure mobile applications for Android
                and iOS devices. From basic apps to complex systems, we are in
                to help you.
              </p>
            </div>
            <div className="home-what-we-do-section-container-service-cards-container-card-text-n-btn-btn">
              <Link to={"/services"}>
                {/* <span className="material-symbols-outlined">
                arrow_circle_right
              </span> */}
                <span>
                  <img src={arrow_circle_right} alt="" />
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="home-what-we-do-section-container-service-cards-container-cards">
          <img src={mobilescreens} alt="mobile screens" />
          <div className="home-what-we-do-section-container-service-cards-container-card-text-n-btn">
            <div className="home-what-we-do-section-container-service-cards-container-card-text-n-btn-text">
              <h3>Mobile Development</h3>
              <p>
                We build functional and secure mobile applications for Android
                and iOS devices. From basic apps to complex systems, we are in
                to help you.
              </p>
            </div>
            <div className="home-what-we-do-section-container-service-cards-container-card-text-n-btn-btn">
              <Link to={"/services"}>
                {/* <span className="material-symbols-outlined">
                arrow_circle_right
              </span> */}
                <span>
                  <img src={arrow_circle_right} alt="" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDoComponent;
