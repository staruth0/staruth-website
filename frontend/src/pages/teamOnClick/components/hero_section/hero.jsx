import React from 'react';
import './hero.css';

import twitter_logo from '../../../../assets/icons/prime_twitter_1.svg';
import github_logo from '../../../../assets/icons/github_1.svg';
import linkedin_logo from '../../../../assets/icons/linkedin_1.svg';

const TeamOnClickHeroComponent = ({ member }) => {
  // Check if the member object is defined and has the necessary properties
  if (!member) {
    return <div>No member data available.</div>;
  }

  const {
    name = "Unknown Member",
    role = "No Role Provided",
    image,
    socialMediaLinks = [],
    interests = [],
    description = "No description available."
  } = member;

  return (
    <div className="team-onclick-hero-section">
      <div className="team-onclick-hero-section-left">
        <header>
          <h1>{name}</h1>
          <h3>{role}</h3>
        </header>
        <p>{description}</p>

        <span>Let’s Connect:</span>

        <div className="team-onclick-hero-section-right-socials">
          {socialMediaLinks.map(({ appName, link }) => (
            <a href={link} target="_blank" rel="noopener noreferrer" key={appName}>
              <img src={
                appName === "GitHub" ? github_logo :
                appName === "LinkedIn" ? linkedin_logo :
                twitter_logo // Add additional social media logos here if needed
              } alt={`${name}'s ${appName}`} />
            </a>
          ))}
        </div>

        <div>
          <h4>Interests:</h4>
          <ul>
            {interests.map((interest, index) => (
              <li key={index}>{interest}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="team-onclick-hero-section-right">
        {image ? (
          <img src={image} alt={`${name}'s photo`} />
        ) : (
          <img src="/path/to/default_image.png" alt="Default member" /> // Optional default image
        )}
      </div>
    </div>
  );
};

export default TeamOnClickHeroComponent;





// import React from 'react';
// import './hero.css';

// import twitter_logo from '../../../../assets/icons/prime_twitter_1.svg';
// import github_logo from '../../../../assets/icons/github_1.svg';
// import team_onclick_hero_image from '../../../../assets/images/team_onclick_hero_image.png';
// import linkedin_logo from '../../../../assets/icons/linkedin_1.svg';

// const TeamOnClickHeroComponent = () => {
//   return (
//     <div className="team-onclick-hero-section">
//       <div className="team-onclick-hero-section-left">
//         <header>
//           <h1>Akenji sirri</h1>
//           <h3>Frontend Developer</h3>
//         </header>
//         <p>
//           I am a sooo Lorem ipsum dolor sit amet consectetur. Quis orci ses
//           neque rhoncus. Integer commodo Lorem ipsum dolor sit amet consepsum
//           dolor sit amet consectetur. Quis orci sed fesi egestas neque rhoncus.
//           Integer commodo Lorem ipsum dolor sit amet consctetur. epsum dolor sit
//           amet consectetur. Quis orci sed fesi egestas epsum dolor sit amet
//           consectetur. Quis orci sed fesi egestas neque rhoncus. Integer commodo
//           Lorem ipsum dolor sit amet consectetur.
//         </p>

//         <span>Let’s Connect:</span>

//         <div className="team-onclick-hero-section-right-socials">
//           <a href="">
//             <img src={twitter_logo} alt="" />
//           </a>
//           <a href="">
//             <img src={github_logo} alt="" />
//           </a>
//           <a href="">
//             <img src={linkedin_logo} alt="" />
//           </a>
//         </div>
//       </div>

//       <div className="team-onclick-hero-section-right">
//         <img src={team_onclick_hero_image} alt="" />
//       </div>
//     </div>
//   );
// };

// export default TeamOnClickHeroComponent;