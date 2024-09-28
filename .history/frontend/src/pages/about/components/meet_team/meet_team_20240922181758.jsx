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
                  className="linkedIn"
                  xmlns="http://www.w3.org/2000/svg"
                  width="44"
                  height="44"
                  viewBox="0 0 44 44"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M22 2.75C11.3685 2.75 2.75 11.3685 2.75 22C2.75 32.6315 11.3685 41.25 22 41.25C32.6315 41.25 41.25 32.6315 41.25 22C41.25 11.3685 32.6315 2.75 22 2.75ZM17.3505 13.3267C17.3505 14.6117 16.2367 15.6534 14.8628 15.6534C13.4888 15.6534 12.375 14.6117 12.375 13.3267C12.375 12.0417 13.4888 11 14.8628 11C16.2367 11 17.3505 12.0417 17.3505 13.3267ZM12.7152 17.3636H16.9678V30.25H12.7152V17.3636ZM19.5619 17.3636H23.8144V19.0169C24.5282 18.1088 25.8987 17.1051 28.1095 17.1051C31.8324 17.1051 32.964 19.1061 33 23.4489V30.25H28.7474C28.7474 29.4095 28.7416 28.5646 28.7358 27.7199V27.7198V27.7198C28.7275 26.5218 28.7192 25.3243 28.7276 24.141C28.7385 22.5975 28.7526 20.6051 26.4085 20.6051C24.3343 20.6051 23.8144 22.1342 23.8144 23.6567V30.25H19.5619V17.3636Z"
                    fill="#E7E7E7"
                  />
                </svg>
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
