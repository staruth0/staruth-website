import React from "react";
import HomeContactComponent from "./contact_section/contact";
import HomeHeroComponent from "./hero_section/hero";
import HomePageAboutComponent from "./about_section/about";
import WhatWeDoComponent from "./what_we_do/what";
import HomeSlidableSection from "./slidable_section/slidable";
import HomeOurWroksSection from "./our_works/our_works";
import "./home.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <HomeHeroComponent />
      <HomePageAboutComponent />
      <WhatWeDoComponent />
      <HomeSlidableSection />
      <HomeOurWroksSection/>
      <HomeContactComponent />
    </div>
  );
};

export default HomePage;
