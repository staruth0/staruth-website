import React from "react";
import "./slidable.css";


const HomeSlidableSection = () => {
  return(
  <div className="home-slidable-section">

<div className="home-slideable-section-content-heading">
          <h1>Meet the Team</h1>
        </div>

      <ul id='list'>
        <li><div className='home-slideable-section-value'>passion for solutions </div></li>
       <li>
        <div className="home-slideable-section-value">minimalist design</div>
       </li>
       <li>
        <div className="home-slideable-section-value">growth oriented</div>
       </li>
       <li>
        <div className="home-slideable-section-value">ruthless excellence</div>
       </li>
       <li>
        <div className="home-slideable-section-value">attention to detail</div>
       </li>
      </ul>
    
  </div>
);
};

export default HomeSlidableSection;

