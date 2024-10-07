import React, { useState } from 'react';
import './HeroImageCarousel.css';

const HeroImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const setSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel">
      {/* Slider Images */}
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-image ${
              index === currentIndex ? 'active' : ''
            }`}
          >
            {index === currentIndex && (
              <div className="image-container">
                <img src={image} alt={`Hero ${index}`} />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Previous and Next buttons */}
      {images.length > 1 && (
        <>
          <button className={`carousel-control prev`} onClick={goToPrevious}>
            &#10094;
          </button>
          <button className={`carousel-control next`} onClick={goToNext}>
            &#10095;
          </button>
        </>
      )}

      {/* Indicators (dots) */}
      {images.length > 1 && (
        <div className="carousel-dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setSlide(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default HeroImageCarousel;
