import React from "react";
import HomeContactComponent from "./contact_section/contact";
import HomeHeroComponent from "./hero_section/hero";
import HomePageAboutComponent from "./about_section/about";
import WhatWeDoComponent from "./what_we_do/what";
import "./home.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <HomeHeroComponent />
      <HomePageAboutComponent />
      <WhatWeDoComponent />
      <HomeContactComponent />
    </div>
  );
};

export default HomePage;
