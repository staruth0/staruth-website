import React from 'react';
import { Link } from 'react-router-dom';
import './meet_team.css';
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
             
                <svg
                  className="twitter"
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20 0.75C9.36852 0.75 0.75 9.36852 0.75 20C0.75 30.6315 9.36852 39.25 20 39.25C30.6315 39.25 39.25 30.6315 39.25 20C39.25 9.36852 30.6315 0.75 20 0.75ZM29.6989 10.0308H26.325L20.7637 16.4013L15.9614 10.0323H9L17.3144 20.9333L9.43214 29.969H12.8091L18.8906 22.9998L24.2114 29.969H31L22.3289 18.4756L29.6989 10.0308ZM27.0086 27.945H25.1386L12.9349 11.9495H14.94L27.0086 27.945Z"
                    fill="#E7E7E7"
                  />
                </svg>
              </div>
            </div>
          </div>
        
    </div>
  );
};

export default MeetTeamComponent;
