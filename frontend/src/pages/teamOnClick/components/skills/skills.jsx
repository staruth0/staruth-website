import React, { useEffect } from 'react';
import AOS from 'aos';
import './skills.css';

const TeamOnClickSkillsComponent = ({ member }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Check if member data exists
  if (!member) {
    return <p>No member data available.</p>;
  }

  return (
    <div className="team-on-click-skills-container">
      <div className="team-on-click-skills-container-tools">
        <h1 data-aos="fade-up" data-aos-once="true">
          Expertise and Tools
        </h1>
        <span data-aos="fade-up" data-aos-once="true">
          {member.role ? `${member.role}: ` : 'Role not specified'}{' '}
        </span>
        {/* Ensure expertise is defined and not empty before displaying */}
        <p data-aos="fade-up" data-aos-once="true">
          {member.expertise && member.expertise.length > 0
            ? member.expertise.map((exp) => exp.name).join(', ')
            : 'No expertise listed.'}
        </p>
      </div>

      <div className="team-on-click-skills-container-Qualifications">
        <h3 data-aos="fade-up" data-aos-once="true">
          Qualifications:
        </h3>
        {/* Ensure qualifications is defined and not empty before rendering */}
        {member.qualifications && member.qualifications.length > 0 ? (
          <ul data-aos="fade-up" data-aos-once="true">
            {member.qualifications.map((qualification, index) => (
              <li key={index}>
                {qualification.certificateName} - {qualification.issuedBy}
              </li>
            ))}
          </ul>
        ) : (
          <p data-aos="fade-up" data-aos-once="true">
            No qualifications available.
          </p>
        )}
      </div>

      <div className="team-on-click-skills-container-Achievements">
        <h1 data-aos="fade-up" data-aos-once="true">
          Key Achievements
        </h1>
        {/* Ensure achievements is defined and not empty before rendering */}
        {member.achievements && member.achievements.length > 0 ? (
          <ul data-aos="fade-up" data-aos-once="true">
            {member.achievements.map((achievement, index) => (
              <li key={index}>
                <strong>{achievement.name}:</strong> {achievement.description}
              </li>
            ))}
          </ul>
        ) : (
          <p data-aos="fade-up" data-aos-once="true">
            No achievements available.
          </p>
        )}
      </div>
    </div>
  );
};

export default TeamOnClickSkillsComponent;
