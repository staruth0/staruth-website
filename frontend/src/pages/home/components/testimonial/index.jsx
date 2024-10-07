import React, { useEffect, useRef, useState } from 'react';
import './testimonial.css';
import TestimonialCard from './TestimonialCard';
import testimonial_avatar from '../../../../assets/images/testimonial_avatar.png';
import axios from 'axios';

const HomeTestimonial = () => {
  const listRef = useRef(null);
  const [scrollDirection, setScrollDirection] = useState(1); // 1 for forward, -1 for reverse
  const [isScrolling, setIsScrolling] = useState(true); // Track whether scrolling is active

  const [testimonial, setTestimonial] = useState([]);

  const testimonials = [
    {
      name: 'Alice Johnson',
      rating: 4.5,
      img: testimonial_avatar,
      text: 'Staruth has transformed our development process. Their tools are intuitive and make collaboration seamless. Highly recommend!',
    },
    {
      name: 'Mark Smith',
      rating: 4,
      img: testimonial_avatar,
      text: 'The software is robust and reliable. Staruth support is top-notch, making it easy to resolve any issues quickly.',
    },
    {
      name: 'Emily Davis',
      rating: 5,
      img: testimonial_avatar,
      text: 'I absolutely love using Staruth! It has everything we need to manage our projects effectively and efficiently.',
    },
    {
      name: 'James Wilson',
      rating: 3.5,
      img: testimonial_avatar,
      text: 'Great software, but there are a few features I wish were more customizable. Overall, a solid choice for teams.',
    },
    {
      name: 'Sophia Brown',
      rating: 4.2,
      img: testimonial_avatar,
      text: 'Staruth has been a game-changer for our team. The interface is user-friendly, and it has really improved our workflow.',
    },
  ];

  useEffect(() => {
    getTestimonials();
  },[])

  async function getTestimonials() {
    try {
      
      const { data } = await axios.get(
        "https://staruthwebsite-api.vercel.app/testimonials/getTestimonials"
      );
      console.log(data)
      setTestimonial(data);
    } catch (error) {
      console.error(error);
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
      <div className="home-testimonial-header">
        <h1>What clients say about us</h1>
      </div>
      <div className="home-testimonial-btn-review-text">
        <p>Client Reviews</p>
      </div>
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
      <div className="home-sponsors-icons">
        <div className="home-sponsors-icon">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomeTestimonial;
