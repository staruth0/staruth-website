import React from 'react';
import TeamOnClickHeroComponent from './components/hero_section/hero';
import TeamOnClickSkillsComponent from './components/skills/skills';
import './team.css';

const TeamPage = () => {
  return (
    <div className="about-page">
      <TeamOnClickHeroComponent />
      <TeamOnClickSkillsComponent />
    </div>
  );
};

export default TeamPage;
