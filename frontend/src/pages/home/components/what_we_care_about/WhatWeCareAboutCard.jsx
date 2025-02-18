import React, { useEffect } from 'react';
import AOS from 'aos';

const WhatWeCareAboutCard = ({ item, index }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      className={`home-what-we-care-about-card ${
        index % 2 !== 0 ? '' : 'green'
      }`}
      key={index}
      data-aos="zoom-in"
      data-aos-once="true"
    >
      <img src={item.img} alt="" />
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </div>
  );
};

export default WhatWeCareAboutCard;
