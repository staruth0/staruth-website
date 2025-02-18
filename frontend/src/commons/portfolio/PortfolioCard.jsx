import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import arrowLeft from '../../assets/icons/arrow-left-dark.png';

import { useEffect } from 'react';
import AOS from 'aos';

import './portfolio.css';
import { Link } from 'react-router-dom';

const PortfolioCard = ({
  _id,
  title,
  shortDescription,
  category,
  heroImages,
}) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      className="portfolio-card-white"
      data-aos="zoom-in"
      data-aos-once="true"
    >
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        pagination={{ clickable: true }}
      >
        {heroImages.map((image, index) => (
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
          <h3>{title}</h3>
          <p>{shortDescription}</p>
          <p style={{ marginBottom: '-8px' }}>How we helped:</p>
          <div className="portfolio-info-departments">
            {category.map((cat, index) => (
              <span key={index}>{cat}</span>
            ))}
          </div>
        </div>
        <Link
          to={`/portfolio/detail/${_id}`}
          className="portfolio-see-more-button"
        >
          <span>See More</span>{' '}
          <img src={arrowLeft} alt="arrow-left" width={'40px'} />
        </Link>
      </div>
    </div>
  );
};

export default PortfolioCard;
