"use client"
import React, { useState } from 'react';
import './Testimonials.scss'; // Make sure to import your SCSS file for styling

const testimonialsData = [
  {
    id: 1,
    title: 'Great Experience!',
    rating: 5,
    review: 'I had a fantastic experience as an intern here. The team was supportive, and I learned a lot.',
    image: '/founder.jpg' // Add the image file name or URL here
  },
  {
    id: 2,
    title: 'Amazing Opportunity!',
    rating: 4,
    review: 'Interning here was an amazing opportunity. The work environment was friendly, and I gained valuable skills. ',
    image: '/rayyan.jpg'
  },
  {
    id: 3,
    title: 'Incredible Learning!',
    rating: 5,
    review: 'My internship experience exceeded my expectations. I learned so much and met incredible people. loreneueu jehuwhe heuwhe uwhewhei iwheihwei uweuwhe uwhewhe9 iwhehw iehiwhe wehiwhei wiehiwhe',
    image: '/founder.jpg'
  }
];

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handleNextTestimonial = () => {
    setCurrentTestimonial((currentTestimonial + 1) % testimonialsData.length);
  };

  const handlePrevTestimonial = () => {
    setCurrentTestimonial((currentTestimonial - 1 + testimonialsData.length) % testimonialsData.length);
  };

  return (
    <div className="testimonials-container">
      <h2>Happy Internee Reviews</h2>
      <div className="testimonial-card">
        <div className="testimonial-content">
          <div className="testimonial-title">{testimonialsData[currentTestimonial].title}</div>
          <div className="testimonial-rating">
            {[...Array(testimonialsData[currentTestimonial].rating)].map((star, index) => (
              <span key={index} className="star">&#9733;</span>
            ))}
          </div>
          <div className="testimonial-review">"{testimonialsData[currentTestimonial].review}"</div>
          <div className="testimonial-image">
            <img src={testimonialsData[currentTestimonial].image} alt="Person" />
          </div>
        </div>
        <div className="navigation">
          <button className="prev" onClick={handlePrevTestimonial}>
            &#8249;
          </button>
          <button className="next" onClick={handleNextTestimonial}>
            &#8250;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

