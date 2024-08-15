import React from "react";
import "./hero.css";
//import {NavbarComponent} from "../../../components/navbar";
import heroimg from "../../../assets/images/hero-image.png";
import clients from "../../../assets/images/clients.png";
import rating from "../../../assets/images/rating.png";

{/* <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" /> */}

const HomeHeroComponent = () => {
    return (
        
        <div className="home-hero-section">
            {/* <NavbarComponent /> */}
            <div className="home-hero-section-container">
                <img className="home-hero-section-container-rating abs" src={rating} alt="" />
                <img className="home-hero-section-container-clients abs" src={clients} alt=""  />
               
                <div className="home-hero-section-container-text-n-btns">
                    <h1 className="display-lg">
                        Helping you and your work break out with tech
                    </h1>
                    <p className="body-lg">
                    We build top quality soft tech solutions and systems that take you and your work to new heights in the digital space
                    </p>
                    <div className="home-hero-section-container-btn-grp">
                        {/* could we use components  rather */}
                        <button className="btn-regular body-lg">
                            Let's collaborate
                        </button>
                        <button className="underline-link body-lg-heavy">
                            <span>see our works</span><span className="material-symbols-outlined">arrow_right_alt</span>
                        </button>

                    </div>
                </div>
                <div className="home-hero-section-container-heroimg">
                    <img src={heroimg} alt="hero image" />
                </div>
            </div>
        </div>
    );
};

export default HomeHeroComponent;
