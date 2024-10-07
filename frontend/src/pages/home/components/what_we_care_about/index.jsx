import React from 'react';
import WhatWeCareAboutCard from './WhatWeCareAboutCard';
import './WhatWeCareAbout.css';
import quality from '../../../../assets/images/quality.png';
import time from '../../../../assets/images/time.png';
import budget from '../../../../assets/images/budget.png';

const HomeWhatWeCareAbout = () => {
  const items = [
    {
      id: 1,
      img: quality,
      title: "Quality",
      description:
        "We deliver top-notch solutions, focusing on precision, innovation, and excellence in every detail.",
    },
    {
      id: 2,
      img: time,
      title: "Time",
      description:
        "Efficient project management ensures we meet your deadlines without compromising quality.",
    },
    {
      id: 3,
      img: budget,
      title: "Budget",
      description:
        "Our cost-effective strategies guarantee maximum value, tailored to fit within your budget.",
    },
  ];
  return (
    <div className="container home-what-we-care-about-section">
      <h1>
        When you are looking to grow, we are the 'A' team right by your side
      </h1>
      <p>For your projects, we at Staruth care about</p>
      <div className="home-what-we-care-about-items">
        {items.map((item, index) => (
          <WhatWeCareAboutCard item={item} key={item.id} index={index} />
        ))}
      </div>
    </div>
  );
};

export default HomeWhatWeCareAbout;
