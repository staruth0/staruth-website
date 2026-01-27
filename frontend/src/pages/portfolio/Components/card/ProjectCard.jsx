import React, { useEffect } from 'react';
import './ProjectCard.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import AOS from 'aos';

const PortfolioCard = ({ project, longDesc }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      className="portfolio-card-dark"
      data-aos="zoom-in"
      data-aos-once="true"
    >
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        pagination={{ clickable: true }}
      >
        {project.heroImages.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              className="swiper-image"
              src={image}
              alt={`Slide ${index + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="portfolio-details">
        <div className="portfolio-info">
          <h3>{project.title}</h3>
          <p>{longDesc}</p>
          <p style={{ marginBottom: '-8px' }}>How we helped:</p>
          <div className="portfolio-info-departments">
            {project.category.map((cat, index) => (
              <span key={index}>{cat}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
