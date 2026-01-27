import { useState, useRef, useEffect } from 'react';
import left_navigator from '../../../../../assets/icons/expand_circle_left.png';
import right_navigator from '../../../../../assets/icons/expand_circle_right.png';
import AOS from 'aos';

function ServiceCard({ service }) {
  const { title, longDescription, gallery, icon } = service;

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const imageContainerRef = useRef(null);

  const scrollImages = (direction) => {
    if (imageContainerRef.current) {
      const container = imageContainerRef.current;
      const imageWidth = container.querySelector('img').offsetWidth;
      if (direction === 'left') {
        setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
      } else if (direction === 'right') {
        setCurrentIndex((prevIndex) =>
          Math.min(prevIndex + 1, gallery.length - 1)
        );
      }

      container.scrollTo({
        left: imageWidth * currentIndex,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div
      className="services-our-services-section-container"
      data-aos="zoom-in"
      data-aos-once="true"
    >
      <div className="services-our-services-section-header">
        <div>
          <img src={icon} alt="service icon" className="service-icon" />
          <h3>{title}</h3>
        </div>
        <p>{longDescription}</p>
      </div>

      <div className="services-our-services-section-main">
        <div
          className="services-our-services-section-main-images"
          ref={imageContainerRef}
        >
          {gallery.map((image, index) => (
            <img key={index} src={image} alt="image" />
          ))}
        </div>

        <div className="navigations">
          <img
            src={left_navigator}
            alt="Previous"
            width={40}
            onClick={() => scrollImages('left')}
            style={{ opacity: currentIndex === 0 ? 0.5 : 1 }}
          />
          <img
            src={right_navigator}
            alt="Next"
            width={40}
            onClick={() => scrollImages('right')}
            style={{ opacity: currentIndex === gallery.length - 1 ? 0.5 : 1 }}
          />
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
