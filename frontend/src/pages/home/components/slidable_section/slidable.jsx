import React, { useEffect, useRef, useState } from 'react';
import './slidable.css';
import Slide from './Slide';

const HomeSlidableSection = () => {
  const sliderRef = useRef(null);
  const [scrollDirection, setScrollDirection] = useState(1); // 1 for forward, -1 for reverse
  const [isScrolling, setIsScrolling] = useState(true); // Track whether scrolling is active

  // Array of slide content
  const slidesData = [
    {
      imgSrc:
        'https://www.shutterstock.com/image-photo/welcome-on-board-handsome-young-260nw-192136085.jpg',
      text: 'Slide 1: We build systems that scale your work and solve real problems.',
    },
    {
      imgSrc:
        'https://www.shutterstock.com/image-photo/young-successful-handsome-african-man-600w-529660027.jpg',
      text: 'Slide 2: Innovating solutions for real-world challenges.',
    },
    {
      imgSrc:
        'https://www.shutterstock.com/image-photo/modern-young-african-man-formalwear-260nw-1593019852.jpg',
      text: 'Slide 3: Efficiency through technology.',
    },
    {
      imgSrc:
        'https://www.shutterstock.com/image-photo/choose-you-handsome-young-african-600w-495634114.jpg',
      text: 'Slide 4: Collaboration made easy.',
    },
    {
      imgSrc:
        'https://www.shutterstock.com/image-photo/young-successful-handsome-african-man-600w-529660027.jpg',
      text: 'Slide 5: Transforming ideas into reality.',
    },
  ];

  useEffect(() => {
    const slider = sliderRef.current;
    const scrollSpeed = 2; // Scroll speed
    let scrollInterval;

    const startScrolling = () => {
      if (!isScrolling) return; // Only scroll if scrolling is active

      scrollInterval = setInterval(() => {
        if (slider) {
          slider.scrollLeft += scrollSpeed * scrollDirection;

          // Reverse direction at the edges
          if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
            setScrollDirection(-1); // Scroll back to the left
          } else if (slider.scrollLeft <= 0) {
            setScrollDirection(1); // Scroll forward again
          }
        }
      }, 16); // Approx 60fps for smooth scrolling
    };

    startScrolling();

    return () => clearInterval(scrollInterval); // Cleanup on unmount
  }, [scrollDirection, isScrolling]); // React on direction or scroll state changes

  const handleMouseDown = (e) => {
    if (e.button === 0) {
      setIsScrolling(false); // Pause scrolling
    }
  };

  const handleMouseUp = () => {
    setIsScrolling(true); // Resume scrolling
  };

  return (
    <div className="container home-slidable-section">
      <h1 className="container">
        We build systems that scale your work and solve real problems
      </h1>
      <div
        className="home-slidable-section-slider"
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp} // Ensure resume if the user drags the mouse out
      >
        {slidesData.map((slide, index) => (
          <Slide key={index} imgSrc={slide.imgSrc} text={slide.text} />
        ))}
      </div>
    </div>
  );
};

export default HomeSlidableSection;
