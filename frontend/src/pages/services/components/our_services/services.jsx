import ServiceCard from './serviceCard/ServiceCard';
import './our_services.css';

const OurServicesSection = ({ services }) => {
  return (
    <div className="container services-our-services-section">
      <h2>Our services</h2>
      <div className="services-our-services-section-cards">
        {services.map((service) => (
          <ServiceCard service={service} key={service._id} />
        ))}
      </div>
    </div>
  );
};

export default OurServicesSection;
