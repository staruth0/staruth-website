import React from "react";
import TeamOnClickHeroComponent from "./hero_section/hero";
import TeamOnClickSkillsComponent from "./skills/skills";
import "./team.css";

const TeamPage = () => {
  return (
    <div className="about-page">
      <TeamOnClickHeroComponent />
      <TeamOnClickSkillsComponent/>
    </div>
  );
};

export default TeamPage;
