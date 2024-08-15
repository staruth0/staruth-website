import anisha from '../../../assets/images/about/anisha lee.svg';
import cheng from '../../../assets/images/about/cheng wei.svg';
import xhang from '../../../assets/images/about/xhang mei.svg';
import TestimonialSkeleton from '../../../commons/skeletons/TestimonialSkeleton';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'John Doe',
      image: anisha,
      content:
        "I absolutely love this product! It has made a significant difference in my life and I can't recommend it enough. The quality is top-notch and the results are amazing. Thank you!",
    },
    {
      name: 'Jane Smith',
      image: cheng,
      content:
        "This product exceeded my expectations! The innovative features and user-friendly design have made it a game-changer for me. I'm so glad I found it and now I can't imagine my life without it.",
    },
    {
      name: 'David Johnson',
      image: xhang,
      content:
        "I was skeptical at first, but this product has proven to be worth every penny. It has simplified my daily routine and the results have been remarkable. I've recommended it to all my friends and family.",
    },
  ];

  return (
    <section id="testimonials">
      <div className="container">
        <h2>What Our Customers Are Saying</h2>
        <div className="testimonial-container">
          {testimonials ? (
            testimonials.map((testimonial, index) => (
              <div className="testimonial-box" key={index}>
                <img src={testimonial.image} alt="" />
                <h3 className="name">{testimonial.name}</h3>
                <p className="content">{testimonial.content}</p>
              </div>
            ))
          ) : (
            <TestimonialSkeleton />
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

// import { useState, useEffect } from 'react';

// import anisha from '../../../assets/images/about/anisha lee.svg';
// import cheng from '../../../assets/images/about/cheng wei.svg';
// import xhang from '../../../assets/images/about/xhang mei.svg';
// const Testimonials = () => {

//   const [testimonials, setTestimonials] = useState([]);

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//       .then((response) => response.json())
//       .then((data) => {
//         setTestimonials(data);
//       });
//   }, []);

//   return (
//     <section id="testimonials">
//       <div className="container">
//         <h2>What Our Customers Are Saying</h2>
//         <div className="testimonial-container">
//           {testimonials.map((testimonial) => (
//             <div className="testimonial-box" key={testimonial.id}>
//               <img src={xhang} alt="" />
//               <h3 className="name">{testimonial.title}</h3>
//               <p className="content">{testimonial.body}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;
