import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import arrowLeft from '../../assets/icons/arrow-left-white.png';

import './portfolio.css';
import { Link } from 'react-router-dom';

const PortfolioCard = ({ id, title, description, category, images }) => {
  return (
    <div className="portfolio-card">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        pagination={{ clickable: true }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="portfolio-details">
        <div className="portfolio-info">
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="portfolio-info-departments">
            {category.map((cat, index) => (
              <span key={index}>{cat}</span>
            ))}
          </div>
        </div>
        <Link to={`/portfolio/${id}`} className="portfolio-see-more-button">
          <span>See more about this work</span>{' '}
          <img src={arrowLeft} alt="arrow-left" width={'40px'} />
        </Link>
      </div>
    </div>
  );
};

export default PortfolioCard;
