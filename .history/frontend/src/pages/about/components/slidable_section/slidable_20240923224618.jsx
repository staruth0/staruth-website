import React from "react";
import "./slidable.css";


const HomeSlidableSection = () => {
  return(
  <div className="home-slidable-section">

<div className="home-slidable-section-content-heading">
          <h1>Values that fuel our drive</h1>
        </div>

      <ul id='list'>
        <li><div className='home-slidable-section-value'>passion for solutions </div></li>
       <li>
        <div className="home-slidable-section-value">minimalist design</div>
       </li>
       <li>
        <div className="home-slidable-section-value">growth oriented</div>
       </li>
       <li>
        <div className="home-slidable-section-value">ruthless excellence</div>
       </li>
       <li>
        <div className="home-slidable-section-value">attention to detail</div>
       </li>
      </ul>
    
  </div>
);
};

export default HomeSlidableSection;

