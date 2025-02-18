import React, { useEffect } from 'react';
import './meet_team.css';
import ProfileCard from './profile_card/pf_card';
import AOS from 'aos';

const MeetTeamComponent = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="about-meet-team-section">
      <div className="about-meet-team-section-content">
        <div
          className="about-meet-team-section-content-heading"
          data-aos="fade-up"
          data-aos-once="true"
        >
          <h1>Meet the Team</h1>
        </div>
        <div className="about-meet-team-section-content-description">
          <p data-aos="fade-up" data-aos-once="true">
            We are a team of creative and dedicated young people passionate
            about seeing things work in our hands. We each share a devotion to
            helping budding businesses thrive with the application of modern
            soft tech
          </p>
        </div>
        <div className="about-meet-team-section-content-membersInfo">
          <ProfileCard />
        </div>
      </div>
    </div>
  );
};

export default MeetTeamComponent;
