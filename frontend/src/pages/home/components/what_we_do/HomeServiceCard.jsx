import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';

const ServiceCard = ({ title, description, image }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <Link
      to="/services"
      className="home-what-we-do-section-container-service-cards-container-cards"
      data-aos="zoom-in"
      data-aos-once="true"
    >
      <img src={image} alt={title} />
      <div className="home-what-we-do-section-container-service-cards-container-card-text-n-btn">
        <div className="home-what-we-do-section-container-service-cards-container-card-text-n-btn-text">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
