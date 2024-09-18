import React from 'react';
import ServicesHeroSection from './components/hero_section/hero';
import OurServicesSection from './components/our_services/services';
import './services.css';

const ServicesPage = () => {
  return (
    <div className="service-page-container">
      <ServicesHeroSection />
      <OurServicesSection />
    </div>
  );
};

export default ServicesPage;
