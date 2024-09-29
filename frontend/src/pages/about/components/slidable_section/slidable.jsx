import React from "react";
import "./slidable.css";


const HomeSlidableSection = () => {
  return(
  <div className="about-slidable-section">

<div className="about-slidable-section-content-heading">
          <h1>Values that fuel our drive</h1>
        </div>

      <ul id='list'>
        <li><div className='about-slidable-section-value'>passion for <br /> solutions </div></li>
       <li>
        <div className="about-slidable-section-value">minimalist <br />design</div>
       </li>
       <li>
        <div className="about-slidable-section-value">growth <br />oriented</div>
       </li>
       <li>
        <div className="about-slidable-section-value">ruthless <br />excellence</div>
       </li>
       <li>
        <div className="about-slidable-section-value">attention <br />to detail</div>
       </li>
      </ul>
    
  </div>
);
};

export default HomeSlidableSection;

