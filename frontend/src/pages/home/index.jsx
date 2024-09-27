import React from 'react';
import HomeHeroComponent from './components/hero_section/hero';
import HomePageAboutComponent from './components/about_section/about';
import WhatWeDoComponent from './components/what_we_do/what';
import HomeSlidableSection from './components/slidable_section/slidable';
import HomeOurWroksSection from './components/our_works/our_works';
import './home.css';
import HomeTestimonial from './components/testimonial/';
import HomeWhatWeCareAbout from './components/what_we_care_about';

const HomePage = () => {
  return (
    <div className="home-page">
      <HomeHeroComponent />
      <HomePageAboutComponent />
      <WhatWeDoComponent />
      <HomeSlidableSection />
      <HomeOurWroksSection />
      <HomeWhatWeCareAbout />
      <HomeTestimonial />
    </div>
  );
};

export default HomePage;
