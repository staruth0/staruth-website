import React from 'react';

const WhatWeCareAboutCard = ({ item, index }) => {
  return (
    <div
      className={`home-what-we-care-about-card ${
        index % 2 !== 0 ? "" : "green"
      }`}
      key={index}
    >
      <img src={item.img} alt="" />
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </div>
  );
};

export default WhatWeCareAboutCard;
