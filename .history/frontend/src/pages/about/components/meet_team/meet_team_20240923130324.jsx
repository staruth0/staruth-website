import React from 'react';
import { Link } from 'react-router-dom';
import './meet_team.css';
import linkedin from  '../../../../assets/icons/linkedin.svg'
import github from  '../../../../assets/icons/github.svg'
import aboutMeetTeamSectionImage1 from '../../../../assets/images/aboutMeetTeamSectionImage1.jpeg';
import teamOnClickHeroImage from '../../../../assets/images/teamOnClickHeroImage.png';

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
       
    </div>
    </div>
  );
};

export default MeetTeamComponent;
