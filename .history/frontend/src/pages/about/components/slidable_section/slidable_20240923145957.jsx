import React from "react";
import "./slidable.css";

const AboutSlidableSection = () => {
  return (
    <div className="about-slidable-section">
      <div className="about-slidable-section-underlinedHeading">
        <p>
          Values that fuel <br /> our drive
        </p>
        <hr className="about-slidable-section-underline" />
      </div>
      <div className="about-slidable-section-ValueSlide">
        <div className="about-slidable-section-ValueCardSlide">
            <div className="about-slidable-section-ValueCardSlide1-ValueContent">
              <p>
                Passion for <br /> solutions
              </p>
            </div>
          </div>
         
        </div>
    </div>
  );
};

export default AboutSlidableSection;
