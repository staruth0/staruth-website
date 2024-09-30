import React from "react";
import "./skills.css";

const TeamOnClickSkillsComponent = ({member}) => {
    return (
        <div className="team-on-click-skills-container">
            <div className="team-on-click-skills-container-tools">
                <h1>Expertise and tools</h1>
               <span>{member.title}:  </span>
               <p>{member.skills.join(', ')}</p>
            </div>

            <div className="team-on-click-skills-container-Qualifications">

                <h3>Qualifications:</h3>
      {member.qualifications && member.qualifications.length > 0 ? (
        <ul>
            {/*Render each qualification of a member given it is an array of different qualifications*/}
          {member.qualifications.map((qualification, index) => (
            <li key={index}>{qualification}</li>
          ))}
        </ul>
      ) : (
        <p>No qualifications available.</p>
      )}
            </div>
            <div className="team-on-click-skills-container-Achievements">
                <h1>Key Achievements</h1>
                <p>
                    {member.achievements}
                </p>
            </div>
        </div>
    )
}

export default TeamOnClickSkillsComponent;

