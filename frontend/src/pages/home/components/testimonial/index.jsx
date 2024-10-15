import React, { useEffect, useRef, useState } from 'react';
import './testimonial.css';
import TestimonialCard from './TestimonialCard';
import axios from 'axios';
import Skeleton from './skeleton/Skeleton';
import AOS from 'aos';

const HomeTestimonial = () => {
  const listRef = useRef(null);
  const [scrollDirection, setScrollDirection] = useState(1); // 1 for forward, -1 for reverse
  const [isScrolling, setIsScrolling] = useState(true); // Track whether scrolling is active
  const [loading, setLoading] = useState(true);
  const [testimonial, setTestimonial] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    getTestimonials();
  }, []);

  async function getTestimonials() {
    try {
      const { data } = await axios.get(
        'https://staruthwebsite-api.vercel.app/testimonials/getTestimonials'
      );
      console.log(data);
      setTestimonial(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const list = listRef.current;
    const scrollSpeed = 2; // Scroll speed
    let scrollInterval;

    const startScrolling = () => {
      if (!isScrolling) return; // Only scroll if scrolling is active

      scrollInterval = setInterval(() => {
        if (list) {
          list.scrollLeft += scrollSpeed * scrollDirection;

          // Reverse direction at the edges
          if (list.scrollLeft + list.clientWidth >= list.scrollWidth) {
            setScrollDirection(-1); // Scroll back to the left
          } else if (list.scrollLeft <= 0) {
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
    <div className="container home-testimonial-section">
      <div
        className="home-testimonial-header"
        data-aos="fade-up"
        data-aos-once="true"
      >
        <h1>What clients say about us</h1>
      </div>
      <div className="home-testimonial-btn-review-text">
        <p data-aos="fade-up" data-aos-once="true">
          Client Reviews
        </p>
      </div>
      {loading ? (
        <Skeleton />
      ) : (
        <div
          className="home-testimonial-items"
          ref={listRef}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp} // Ensure resume if the user drags the mouse out
        >
          {testimonial.map((testimonial, index) => (
            <TestimonialCard testimonial={testimonial} key={index} />
          ))}
        </div>
      )}
      <div className="home-sponsors-icons">
        <div className="home-sponsors-icon">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomeTestimonial;
