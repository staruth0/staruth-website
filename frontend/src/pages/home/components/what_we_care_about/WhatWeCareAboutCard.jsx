import React from 'react';

const WhatWeCareAboutCard = ({ item, index }) => {
  return (
    <div
      className={`home-what-we-care-about-card ${
        index % 2 !== 0 ? '' : 'green'
      }`}
      key={index}
    >
      <img src={item.img} alt="" />
      <h3>{item.title}</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
        blanditiis illo dolorem laborum corporis!
      </p>
    </div>
  );
};

export default WhatWeCareAboutCard;
