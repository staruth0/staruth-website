import React, { useEffect, useRef, useState } from 'react';
import './slidable.css';
import Slide from './Slide';
import slide1 from '../../../../assets/images/slide_1.png';
import slide2 from '../../../../assets/images/slide_2.png';
import slide3 from '../../../../assets/images/slide_3.png';
import slide4 from '../../../../assets/images/slide_4.png';
import slide5 from '../../../../assets/images/slide_5.png';
import AOS from 'aos';

const HomeSlidableSection = () => {
  const sliderRef = useRef(null);
  const [scrollDirection, setScrollDirection] = useState(1); // 1 for forward, -1 for reverse
  const [isScrolling, setIsScrolling] = useState(true); // Track whether scrolling is active

  // Array of slide content
  const slidesData = [
    {
      imgSrc: slide1,
      text: 'We build systems that scale your work and solve real problems.',
    },
    {
      imgSrc: slide2,
      text: 'systems to manage enterprise, inistitute data and processes.',
    },
    {
      imgSrc: slide3,
      text: 'build your online brand with an excellently designed portfolio website.',
    },
    {
      imgSrc: slide4,
      text: 'rebrand and reinvent your existing platforms with converting UX.',
    },
    {
      imgSrc: slide5,
      text: 'customised e-commerce platforms for your products.',
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

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleMouseDown = (e) => {
    if (e.button === 0) {
      setIsScrolling(false); // Pause scrolling
    }
  };

  const handleMouseUp = () => {
    setIsScrolling(true); // Resume scrolling
  };

  return (
    <div
      className="container home-slidable-section"
      data-aos="fade-up"
      data-aos-once="true"
    >
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
