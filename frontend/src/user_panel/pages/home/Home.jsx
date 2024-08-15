import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/free-mode';
import HeroComponent from './components/Hero';
import PopularComponent from './components/PopularPoducts';
import PopularCategory from './components/PopularCategory';
import LawEnforcement from '../../commons/LawEnforcement';
import './components/home.css';

const HomeComponent = () => {
  return (
    <div className="main-home-container">
      <HeroComponent />
      <PopularComponent />
      <PopularCategory />
      <LawEnforcement />
    </div>
  );
};

export default HomeComponent;
