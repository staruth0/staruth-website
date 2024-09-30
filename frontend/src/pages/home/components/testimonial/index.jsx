import React from 'react';
import './testimonial.css';
import TestimonialCard from './TestimonialCard';
import testimonial_avatar from '../../../../assets/images/testimonial_avatar.png';

const HomeTestimonial = () => {
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

  return (
    <div className="container home-testimonial-section">
      <div className="home-testimonial-header">
        <h1>What clients say about us</h1>
      </div>
      <div className="home-testimonial-btn-review-text">
        <p>Client Reviews</p>
      </div>
      <div className="home-testimonial-items">
        {testimonials.map((testimonial) => (
          <TestimonialCard testimonial={testimonial} key={testimonial.id} />
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
