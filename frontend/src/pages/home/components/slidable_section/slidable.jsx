import React from 'react';
import './slidable.css';
import Slide from './Slide';

const HomeSlidableSection = () => {
  return (
    <div className="container home-slidable-section">
      <h1 className="container">
        We build systems that scale your work and solve real problems
      </h1>
      <div className="home-slidable-section-slider">
        <Slide />
        <Slide />
        <Slide />
        <Slide />
        <Slide />
        <Slide />
        <Slide />
      </div>
    </div>
  );
};

export default HomeSlidableSection;
