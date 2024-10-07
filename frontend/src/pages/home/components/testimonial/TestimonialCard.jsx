import React from 'react';
import fullStar from '../../../../assets/icons/full_star.png';
import halfStar from '../../../../assets/icons/half_star.png';
import emptyStar from '../../../../assets/icons/empty_star.png';

const TestimonialCard = ({ testimonial }) => {
  const { title, image, name, message } = testimonial;

  // const fullStars = Math.floor(rating);
  // const hasHalfStar = rating % 1 !== 0;
  // const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="home-testimonial-card">
      <div className="home-testimonial-img-rating">
        <img src={image} alt="" width={70} />
        {/* <div className="ratings-container">
          {Array.from({ length: fullStars }, (_, index) => (
            <img key={`full-${index}`} src={fullStar} alt="Full Star" />
          ))}
          {hasHalfStar && <img src={halfStar} alt="Half Star" />}
          {Array.from({ length: emptyStars }, (_, index) => (
            <img key={`empty-${index}`} src={emptyStar} alt="Empty Star" />
          ))}
        </div> */}
      </div>
      <h3 className="name">{name}</h3>
      <p className="title">{title}</p>
      <p>{` " ${message} " `}</p>
    </div>
  );
};

export default TestimonialCard;
