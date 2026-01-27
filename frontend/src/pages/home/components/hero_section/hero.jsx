import React, { useEffect } from 'react';
import './hero.css';
import heroimg from '../../../../assets/images/hero-image.png';
import { ButtonOutlinedWhite, ButtonPrimary } from '../../../../commons/Button';
import { Link } from 'react-router-dom';
import AOS from 'aos';

const HomeHeroComponent = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container home-hero-section">
      <div className="home-hero-section-container">
        <div className="home-hero-section-container-text-n-btns">
          <h1 className="display-lg" data-aos="fade-up" data-aos-once="true">
            Helping you and your work break out with tech
          </h1>
          <p className="body-lg" data-aos="fade-up" data-aos-once="true">
            We build top quality soft tech solutions and systems that take you
            and your work to new heights in the digital space
          </p>
          <div
            className="home-hero-section-container-btn-grp"
            data-aos="fade-up"
            data-aos-once="true"
          >
            <Link to={`/contact`}>
              <ButtonPrimary title="Let's collaborate" />
            </Link>
            <Link to={`/portfolio`}>
              <ButtonOutlinedWhite title="See our works" />
            </Link>
          </div>
        </div>
        <div
          className="home-hero-section-container-heroimg"
          data-aos="zoom-in"
          data-aos-once="true"
        >
          <img src={heroimg} alt="hero image" />
        </div>
      </div>
    </div>
  );
};

export default HomeHeroComponent;
