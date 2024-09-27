import React from 'react';
import './meet_team.css';
import pf_card from './profile_card/pf_card';


const MeetTeamComponent = () => {
  return (
    <div className="about-meet-team-section">
      <div className="about-meet-team-section-content">
        <div className="about-meet-team-section-content-heading">
          <h1>Meet the Team</h1>
        </div>
        <div className="about-meet-team-section-content-description">
          <p>
            We are a team of creative and dedicated young people passionate about seeing things work in our hands. We each share a
            devotion to helping budding businesses thrive with the
            application of modern soft tech
          </p>
        </div>
       <pf_card />
    </div>
    </div>
  );
};

export default MeetTeamComponent;
