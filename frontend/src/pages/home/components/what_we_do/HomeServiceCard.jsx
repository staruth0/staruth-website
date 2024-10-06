import arrow_circle_right from '../../../../assets/icons/arrow_circle_right.svg';
import { Link } from 'react-router-dom';

const ServiceCard = ({ title, description, image }) => {
  return (
    <Link
      to="/services"
      className="home-what-we-do-section-container-service-cards-container-cards"
      data-aos="fade-up"
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
