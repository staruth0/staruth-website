import React from 'react';

const Slide = ({ imgSrc, text }) => {
  return (
    <div className="home-slidable-section-slides">
      <div style={{ backgroundImage: `url(${imgSrc})` }}>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Slide;
