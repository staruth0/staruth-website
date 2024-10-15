import './what.css';
import ServiceCard from './HomeServiceCard';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Skeleton from './skeleton/Skeleton';

import AOS from 'aos';

const WhatWeDoComponent = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getServices();
    AOS.init({ duration: 1000 });
  }, []);

  const getServices = async () => {
    try {
      const response = await axios.get(
        'https://staruthwebsite-api.vercel.app/services/getServices'
      );
      setServices(response.data);
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container home-what-we-do-section-container">
      <div
        className="home-what-we-do-section-container-heading-underline"
        data-aos="fade-up"
        data-aos-once="true"
      >
        <h1 className="display-lg">What we do</h1>
      </div>
      {error && !loading && (
        <p>Something went wrong, failed to load projects</p>
      )}
      {loading ? (
        <Skeleton />
      ) : (
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
      )}
    </div>
  );
};

export default WhatWeDoComponent;
