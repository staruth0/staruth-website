import React from "react";
import AboutHeroComponent from "./hero_section/hero";
import MeetTeamComponent from "./meet_team/meet_team";
import AboutSlidableSection from "./slidable_section/slidable";
import "./about.css";

const AboutPage = () => {
  return (
    <div className="about-page">
      <AboutHeroComponent />
      <MeetTeamComponent />
      <AboutSlidableSection />
    </div>
  );
};

export default AboutPage;
