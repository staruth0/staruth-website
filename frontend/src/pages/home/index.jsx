import React from 'react';
import HomeContactComponent from './components/contact_section/contact';
import HomeHeroComponent from './components/hero_section/hero';
import HomePageAboutComponent from './components/about_section/about';
import WhatWeDoComponent from './components/what_we_do/what';
import HomeSlidableSection from './components/slidable_section/slidable';
import HomeOurWroksSection from './components/our_works/our_works';
import './home.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <HomeHeroComponent />
      <HomePageAboutComponent />
      <WhatWeDoComponent />
      <HomeSlidableSection />
      <HomeOurWroksSection />
      <HomeContactComponent />
    </div>
  );
};

export default HomePage;
