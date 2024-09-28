import React from "react";
import { Link } from "react-router-dom";
import linkedin from "../../../../../assets/icons/linkedin.svg";
import github from "../../../../../assets/icons/github.svg";
import aboutMeetTeamSectionImage1 from "../../../../../assets/images/aboutMeetTeamSectionImage1.jpeg";
import "./pf_card.css";
// function Card({ data }) {
//   return (
//     <div className="pf_card">
//       <h2>{data.pf_name}</h2>
//       <p>{data.pf_role}</p>
//       <img src={data.pf_image} alt={data.pf_name} />
//     </div>
//   );
// }
const pf_card = () => {
  return (
        <div className="about-meet-team-section-content-membersProfile">
        <Link to={"/about/team"}>
          <img
            src={aboutMeetTeamSectionImage1}
            className="about-meet-team-section-content-membersPhotoOne"
            alt="Nfor Glenn"
          />
        </Link>
        <div className="about-meet-team-section-content-membersProfileBox">
          <div className="about-meet-team-section-content-membersRole">
            <h4>Nfor Glenn</h4>
            <p>Frontend Developer</p>
          </div>
          <div className="about-meet-team-section-content-membersSocials">
            <img src={linkedin} alt="" />
            <img src={github} alt="" />
          </div>
        </div>
      </div>
  );
};
export default pf_card;
