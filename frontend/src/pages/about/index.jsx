import React from "react";
import AboutHeroComponent from "./hero_section/hero";
import MeetTeamComponent from "./meet_team/meet_team";
import "./about.css";

const AboutPage = () => {
  return (
    <div className="about-page">
      <AboutHeroComponent />
      <MeetTeamComponent/>
    </div>
  );
};

export default AboutPage;
