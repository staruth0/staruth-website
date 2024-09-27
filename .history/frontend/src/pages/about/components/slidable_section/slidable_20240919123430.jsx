import React from "react";
import "./slidable.css";

const AboutSlidableSection = () => {
  return (
    <div className="about-slidable-section">
      <div className="about-slidable-section-underlinedHeading">
        {" "}
        <p>
          Values that fuel <br /> our drive{" "}
        </p>{" "}
        <hr className="about-slidable-section-underline" />
      </div>
      <div className="about-slidable-section-ValueSlide">
        <div className="about-slidable-section-ValueCardSlide">
          <div className="about-slidable-section-ValueCardSlide1">
            <div className="about-slidable-section-ValueCardSlide1-ValueContent">
              <p>
                Passion for <br /> solutions
              </p>
            </div>
          </div>
          <div className="about-slidable-section-ValueCardSlide2">
            <div className="about-slidable-section-ValueCardSlide2-ValueContent">
              <p>
                Minimalist <br /> design
              </p>
            </div>
          </div>
          <div className="about-slidable-section-ValueCardSlide3">
            <div className="about-slidable-section-ValueCardSlide3-ValueContent">
              <p>
                Growth <br /> oriented
              </p>
            </div>
          </div>
          <div className="about-slidable-section-ValueCardSlide4">
            <div className="about-slidable-section-ValueCardSlide4-ValueContent">
              <p>
                Ruthless <br /> excellence
              </p>
            </div>
          </div>
          <div className="about-slidable-section-ValueCardSlide5">
            <div className="about-slidable-section-ValueCardSlide5-ValueContent">
              <p>
                Attention to <br /> detail
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSlidableSection;
