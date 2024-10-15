import React, { useEffect } from 'react';
import './hero.css';

import twitter_logo from '../../../../assets/icons/prime_twitter_1.svg';
import github_logo from '../../../../assets/icons/github_1.svg';
import linkedin_logo from '../../../../assets/icons/linkedin_1.svg';
import AOS from 'aos';

const TeamOnClickHeroComponent = ({ member }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Check if the member object is defined and has the necessary properties
  if (!member) {
    return <div>No member data available.</div>;
  }

  const {
    name = 'Unknown Member',
    role = 'No Role Provided',
    image,
    socialMediaLinks = [],
    interests = [],
    description = 'No description available.',
  } = member;

  return (
    <div className="team-onclick-hero-section">
      <div className="team-onclick-hero-section-left">
        <header>
          <h1 data-aos="fade-up" data-aos-once="true">
            {name}
          </h1>
          <h3 data-aos="fade-up" data-aos-once="true">
            {role}
          </h3>
        </header>
        <p data-aos="fade-up" data-aos-once="true">
          {description}
        </p>

        <span data-aos="fade-up" data-aos-once="true">
          Let’s Connect:
        </span>

        <div
          className="team-onclick-hero-section-right-socials"
          data-aos="fade-up"
          data-aos-once="true"
        >
          {socialMediaLinks.map(({ appName, link }) => (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              key={appName}
            >
              <img
                src={
                  appName === 'GitHub'
                    ? github_logo
                    : appName === 'LinkedIn'
                    ? linkedin_logo
                    : twitter_logo // Add additional social media logos here if needed
                }
                alt={`${name}'s ${appName}`}
              />
            </a>
          ))}
        </div>

        <div className="team-onclick-hero-section-right-Interests">
          <h4 data-aos="fade-up" data-aos-once="true">
            Interests:
          </h4>
          <ul data-aos="fade-up" data-aos-once="true">
            {interests.map((interest, index) => (
              <li key={index}>{interest}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="team-onclick-hero-section-right">
        {image ? (
          <img
            src={image}
            alt={`${name}'s photo`}
            data-aos="zoom-in"
            data-aos-once="true"
          />
        ) : (
          <img src="/path/to/default_image.png" alt="Default member" />
        )}
      </div>
    </div>
  );
};

export default TeamOnClickHeroComponent;
