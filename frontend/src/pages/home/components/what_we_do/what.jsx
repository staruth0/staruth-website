import './what.css';
import ServiceCard from './HomeServiceCard';
import { useState, useEffect } from 'react';
import axios from 'axios';

const WhatWeDoComponent = () => {
   const [services, setServices] = useState([]);


   useEffect(() => {
     getServices();
   }, []);

   const getServices = async () => {
     try {
       const { data } = await axios.get(
         "https://staruthwebsite-api.vercel.app/services/getServices"
       );
       setServices(data);
     } catch (error) {
       console.error(error);
     } 
   };

  return (
    <div className="container home-what-we-do-section-container">
      <div className="home-what-we-do-section-container-heading-underline">
        <h1 className="display-lg">What we do</h1>
      </div>
      <div className="home-what-we-do-section-container-service-cards-container">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.shortDescription}
            image={service.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default WhatWeDoComponent;
