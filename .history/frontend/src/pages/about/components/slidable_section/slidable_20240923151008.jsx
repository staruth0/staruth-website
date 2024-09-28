import React from "react";
import "./slidable.css";


const HomeSlidableSection = () => {
  return(
  <div className="home-slidable-section">

      <h1 className="display-lg">
      We build systems that scale your work and solve real problems
      </h1>

      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li><img src={manphone} alt="" /></li>
        <li><img src={girlbox} alt="" /></li>
      </ul>
    
  </div>
);
};

export default HomeSlidableSection;

