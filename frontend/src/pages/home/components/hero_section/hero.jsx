import React, { useEffect } from 'react';
import './hero.css';
import heroimg from '../../../../assets/images/hero-image.png';
import clients from '../../../../assets/images/clients.png';
import rating from '../../../../assets/images/rating.png';
import { ButtonOutlinedWhite, ButtonPrimary } from '../../../../commons/Button';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomeHeroComponent = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container home-hero-section">
      <div className="home-hero-section-container">
        <div className="home-hero-section-container-text-n-btns" data-aos="fade-up">
          <h1 className="display-lg">Helping you and your work break out with tech</h1>
          <p className="body-lg">
            We build top quality soft tech solutions and systems that take you
            and your work to new heights in the digital space
          </p>
          <div className="home-hero-section-container-btn-grp" data-aos="fade-up" data-aos-delay="200">
            <Link to={`/contact`}>
              <ButtonPrimary title="Let's collaborate" />
            </Link>
            <Link to={`/portfolio`}>
              <ButtonOutlinedWhite title="See our works" />
            </Link>
          </div>
        </div>
        <div className="home-hero-section-container-heroimg" data-aos="zoom-in">
          <img src={heroimg} alt="hero image" />
        </div>
      </div>
    </div>
  );
};

export default HomeHeroComponent;
