import React from 'react';
import { Link } from 'react-router-dom';
import './meet_team.css';
import linkedin from  '../../../../assets/icons'
import aboutMeetTeamSectionImage1 from '../../../../assets/images/aboutMeetTeamSectionImage1.jpeg';
import teamOnClickHeroImage from '../../../../assets/images/teamOnClickHeroImage.png';

const MeetTeamComponent = () => {
  return (
    <div className="about-meet-team-section">
      <div className="about-meet-team-section-content">
        <div className="about-meet-team-section-content-heading">
          <h1>Meet the Team</h1>
          <hr />
        </div>
        <div className="about-meet-team-section-content-description">
          <p>
            We are a team of creative and dedicated young people passionate about seeing things work in our hands. We each share a
            devotion to helping budding businesses thrive with the
            application of modern soft tech
          </p>
        </div>
        <div className="about-meet-team-section-content-membersInfo">
          <div className="about-meet-team-section-content-membersProfile">
            <Link to={'/about/team'}>
              <img
                src={aboutMeetTeamSectionImage1}
                className="about-meet-team-section-content-membersPhotoOne"
                alt="Nfor Glenn"
              />
            </Link>
            <div className="about-meet-team-section-content-membersProfileBox">
              <div className="about-meet-team-section-content-membersRole">
                <h4>Nfor Glenn</h4>
                <p></p>
              </div>
              <div className="about-meet-team-section-content-membersSocials">
               
              </div>
            </div>
          </div>
        </div>
    </div>
    </div>
  );
};

export default MeetTeamComponent;
