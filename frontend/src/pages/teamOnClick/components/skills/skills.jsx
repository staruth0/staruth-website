import React from "react";
import "./skills.css";

const TeamOnClickSkillsComponent = ({ member }) => {
  // Check if member data exists
  if (!member) {
    return <p>No member data available.</p>;
  }

  return (
    <div className="team-on-click-skills-container">
      <div className="team-on-click-skills-container-tools">
        <h1>Expertise and Tools</h1>
        <span>{member.role ? `${member.role}: ` : 'Role not specified'} </span>
        {/* Ensure expertise is defined and not empty before displaying */}
        <p>
          {member.expertise && member.expertise.length > 0 
            ? member.expertise.map(exp => exp.name).join(', ') 
            : 'No expertise listed.'}
        </p>
      </div>

      <div className="team-on-click-skills-container-Qualifications">
        <h3>Qualifications:</h3>
        {/* Ensure qualifications is defined and not empty before rendering */}
        {member.qualifications && member.qualifications.length > 0 ? (
          <ul>
            {member.qualifications.map((qualification, index) => (
              <li key={index}>
                {qualification.certificateName} - {qualification.issuedBy}
              </li>
            ))}
          </ul>
        ) : (
          <p>No qualifications available.</p>
        )}
      </div>

      <div className="team-on-click-skills-container-Achievements">
        <h1>Key Achievements</h1>
        {/* Ensure achievements is defined and not empty before rendering */}
        {member.achievements && member.achievements.length > 0 ? (
          <ul>
            {member.achievements.map((achievement, index) => (
              <li key={index}>
                <strong>{achievement.name}:</strong> {achievement.description}
              </li>
            ))}
          </ul>
        ) : (
          <p>No achievements available.</p>
        )}
      </div>
    </div>
  );
}

export default TeamOnClickSkillsComponent;




// import React from "react";
// import "./skills.css";

// const TeamOnClickSkillsComponent = () => {
//     return (
//         <div className="team-on-click-skills-container">
//             <div className="team-on-click-skills-container-tools">
//                 <h1>Expertise and tools</h1>
//                <span>Frontend Development:  </span>
//                <p>ReactJs, JQuery, Boostrap, Tailwind</p>
//             </div>

//             <div className="team-on-click-skills-container-Qualifications">
//                 <h1>Qualifications</h1>
//                 <ul>
//                     <li>BEng Computer Engineering</li>
//                     <li>Google so so and so certification</li>
//                     <li>Google so so and so certification</li>
//                     <li>Google so so and so certification</li>
//                 </ul>
//             </div>

//             <div className="team-on-click-skills-container-Achievements">
//                 <h1>Key Achievements</h1>
//                 <p>
//                 rci sed fesi egestas neque rhoncus. Integer commodo Lorem ipsum 
//                 dolor sit amet consctetur. Qepsum dolor sit amet consectetur. Quorci sed fesi egestas 
//                 epsum dolor sit amet consectetur. Quis orci sed fesi egestas 
//                 </p>
//             </div>
//         </div>
//     )
// }

// export default TeamOnClickSkillsComponent;