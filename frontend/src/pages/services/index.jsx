import React from "react";
import ServicesHeroSection from "./hero_section/hero";
import OurServicesSection from "./our_services/services";
import "./services.css";

const ServicesPage = () => {
  return (
    <div className="service-page-container">
      <ServicesHeroSection />
      <ourServicesSection/>
    </div>
  );
};

export default ServicesPage;
