import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import linkedinIcon from '../../../../../assets/icons/linkedin.svg';
import githubIcon from '../../../../../assets/icons/github.svg';
import twitterX from '../../../../../assets/images/twitter-x.svg';
import defaultProfileImage from '../../../../../assets/images/defaultProfileImage.svg'; // Fallback image
import './pf_card.css';
import TeamSkeleton from '../skeleton/TeamSkeleton';
import AOS from 'aos';

const ProfileCard = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch team members data from the API
  useEffect(() => {
    AOS.init({ duration: 1000 });
    const fetchTeamMembers = async () => {
      try {
        const response = await fetch(
          'https://staruthwebsite-api.vercel.app/teams/getTeamMembers'
        );
        if (!response.ok) {
          throw new Error('Failed to fetch team members');
        }
        const data = await response.json();
        setTeamMembers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setTimeout(() => {}, 100000);
        setLoading(false);
      }
    };

    fetchTeamMembers();
  }, []);

  if (loading) {
    return <TeamSkeleton />;
  }

  if (error) {
    return <p>Something went wrong</p>;
  }

  if (teamMembers.length === 0) {
    return <p>No team members found.</p>;
  }

  return (
    <div className="team-members-grid">
      {teamMembers.map((member) => (
        <div
          key={member._id}
          className="pf_card"
          data-aos="zoom-in"
          data-aos-once="true"
        >
          <Link to={`/about/team/${member._id}`}>
            <img
              src={member.image || defaultProfileImage}
              className="pf_card_image"
              alt={member.name}
              onError={(e) => (e.target.src = defaultProfileImage)} // Fallback image if there's an error loading
            />
          </Link>
          <div className="pf_card_member_details">
            <div className="pf_card_info">
              <span>{member.name}</span>
              <br />
              <p>{member.role}</p>
            </div>
            <div className="pf_card_socials">
              {member.socialMediaLinks?.map((social) => {
                let icon;
                if (social.appName === 'LinkedIn') {
                  icon = linkedinIcon;
                } else if (social.appName === 'GitHub') {
                  icon = githubIcon;
                } else {
                  icon = twitterX;
                }
                return (
                  <a
                    key={social._id}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={icon} alt={social.appName} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProfileCard;
