import './what.css';
import ServiceCard from './HomeServiceCard';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Skeleton from './skeleton/Skeleton';

const WhatWeDoComponent = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getServices();
  }, []);

  const getServices = async () => {
    try {
      const { data } = await axios.get(
        'https://staruthwebsite-api.vercel.app/services/getServices'
      );
      setServices(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container home-what-we-do-section-container">
      <div className="home-what-we-do-section-container-heading-underline">
        <h1 className="display-lg">What we do</h1>
      </div>
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
