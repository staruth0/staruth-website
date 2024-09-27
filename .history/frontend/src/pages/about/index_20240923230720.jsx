import React from 'react';
import AboutHeroComponent from './components/hero_section/hero';
import MeetTeamComponent from './components/meet_team/meet_team';
import AboutSlidableSection from './components/slidable_section/slidable';
import './about.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <AboutHeroComponent />
      <MeetTeamComponent />
      <AboutSlidableSection />
      </?
    </div>
  );
};

export default AboutPage;
