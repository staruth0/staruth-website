import React, { useEffect } from 'react';
import './hero.css';
import AOS from 'aos';

const ServicesHeroSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div
      className="container service-hero-section-container"
      data-aos="fade-up"
      data-aos-once="true"
    >
      <p>
        We critically design and build products that convert for your desired
        purpose. Every input we make is to realize progressive turnarounds in
        your work
      </p>
    </div>
  );
};

export default ServicesHeroSection;
