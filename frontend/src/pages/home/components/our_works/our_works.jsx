import React from 'react';
import './our_works.css';
import { ButtonOutlinedBlack } from '../../../../commons/Button';
import { Link } from 'react-router-dom';

const HomeOurWroksSection = () => {
  return (
    <div className="container home-our-work-section">
      <h1>Our Works</h1>
      <div className="home-our-work-container">Works</div>
      <Link to="/portfolio/id">
        <ButtonOutlinedBlack title="more about us" />
      </Link>
    </div>
  );
};

export default HomeOurWroksSection;
