import React from 'react';
import './hero.css';
import heroimg from '../../../../assets/images/hero-image.png';
import clients from '../../../../assets/images/clients.png';
import rating from '../../../../assets/images/rating.png';
import { ButtonOutlinedWhite, ButtonPrimary } from '../../../../commons/Button';
import { Link } from 'react-router-dom';

const HomeHeroComponent = () => {
  return (
    <div className="container home-hero-section">
      <div className="home-hero-section-container">
        <div className="home-hero-section-container-text-n-btns">
          <h1 className="display-lg">
            Helping you and your work break out with tech
          </h1>
          <p className="body-lg">
            We build top quality soft tech solutions and systems that take you
            and your work to new heights in the digital space
          </p>
          <div className="home-hero-section-container-btn-grp">
            <Link to={`/contact`}>
              <ButtonPrimary title="Let's collaborate" />
            </Link>
            <Link to={`/portfolio`}>
              <ButtonOutlinedWhite title="see our works" />
            </Link>
          </div>
        </div>
        <div className="home-hero-section-container-heroimg">
          <img src={heroimg} alt="hero image" />
        </div>
      </div>
    </div>
  );
};

export default HomeHeroComponent;
