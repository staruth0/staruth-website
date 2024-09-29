import React from 'react';
import './hero.css';

import twitter_logo from '../../../../assets/icons/prime_twitter_1.svg';
import github_logo from '../../../../assets/icons/github_1.svg';
import team_onclick_hero_image from '../../../../assets/images/team_onclick_hero_image.png';
import linkedin_logo from '../../../../assets/icons/linkedin_1.svg';

const TeamOnClickHeroComponent = ({member}) => {
  return (
    <div className="team-onclick-hero-section">
      <div className="team-onclick-hero-section-left">
        <header>
          <h1>{member.name}</h1>
          <h3>{member.title}</h3>
        </header>
        <p>
{member.description}
        </p>

        <span>Let’s Connect:</span>

        <div className="team-onclick-hero-section-right-socials">
          <a href={member.socialMedia.twitter}>
            <img src={twitter_logo} alt="noopener noreferrer" />
          </a>
          <a href={member.socialMedia.github}>
            <img src={github_logo} alt="noopener noreferrer" />
          </a>
          <a href={member.socialMedia.linkedin}>
            <img src={linkedin_logo} alt="noopener noreferrer" />
          </a>
        </div>
      </div>

      <div className="team-onclick-hero-section-right">
        <img src={member.photoUrl} alt="" />
      </div>
    </div>
  );
};

export default TeamOnClickHeroComponent;
