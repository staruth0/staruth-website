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