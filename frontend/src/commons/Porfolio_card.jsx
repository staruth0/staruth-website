import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../pages/portfolio/portfolio.css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Link } from 'react-router-dom';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Card(props) {


  return (
    <section className="portfolio-card">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="swiper"
      >
        <SwiperSlide>
          <div className="slide">
            <div className="swiper-text">
              <h1>Apple Watch</h1>
              <p>SERIES 9</p>
              <a href="#">Learn More</a>
            </div>
            <img src={props.imageURL} alt="Apple Watch" />
          </div>
        </SwiperSlide>


        <SwiperSlide>
          <div className="slide">
            <div className="swiper-text">
              <h1>Apple Watch</h1>
              <p>SERIES 9</p>
              <a href="#">Learn More</a>
            </div>
            <img src={props.imageURL} alt="Apple Watch" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide">
            <div className="swiper-text">
              <h1>Apple Watch</h1>
              <p>SERIES 9</p>
              <a href="#">Learn More</a>
            </div>
            <img src={props.imageURL} alt="Apple Watch" />
          </div>
        </SwiperSlide>
        {/* More SwiperSlides here */}
        
      </Swiper>

      <section className="card-bottom">
        <div className="card-bottom-text">
          <h2>Apple Niche Store</h2>
          <span>
            A fully functional e-commerce platform developed for the sale of
            custom electronic devices.
          </span>
          <span>How we helped: </span>
          <div>
            <a className="card-bottom-link">UI/UX Design</a>
            <a className="card-bottom-link">Web Development</a>
          </div>
        </div>

        {/* Link to dynamic portfolio page */}
        <Link to={`/portfolio/${portfolioId}`} className="see-more-btn">See More</Link>
      </section>
    </section>
  );
}
