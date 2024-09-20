import './what.css';
import mobilescreens from '../../../../assets/images/mobilescreens.png';
import ServiceCard from './HomeServiceCard';

const WhatWeDoComponent = () => {
  const services = [
    {
      title: 'Mobile Development',
      description:
        'We build functional and secure mobile applications for Android and iOS devices. From basic apps to complex systems, we are in to help you.',
      image: mobilescreens,
    },
    {
      title: 'Web Development',
      description:
        'We create responsive and high-performance websites that engage users and drive conversions.',
      image: mobilescreens,
    },
    {
      title: 'UI/UX Design',
      description:
        'Our design team creates user-friendly interfaces and engaging experiences that keep users coming back.',
      image: mobilescreens,
    },
    {
      title: 'Cloud Solutions',
      description:
        'We provide scalable and secure cloud solutions tailored to your business needs.',
      image: mobilescreens,
    },
  ];

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
            description={service.description}
            image={service.image}
          />
        ))}
      </div>
    </div>
  );
};

export default WhatWeDoComponent;
