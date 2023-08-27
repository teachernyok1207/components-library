import React from 'react';

export default function TestimonialWithImage() {
  return (
    <div className="testimonials-with-pic">
      <img className="testimonial-profile-pic" src="/Profile-Pic.jpeg" />

      <div className="testimonial-message">
        <img className="testimonial-icon" src="/Icon.png" />

        <p className="testimonial-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna
          nulla vitae laoreet augue. Amet feugiat est integer dolor auctor
          adipiscing nunc urna, sit.
        </p>

        <p className="testimonial-author">May Andersons</p>
        <p className="testimonial-closing">Workcation, CTO</p>
      </div>
    </div>
  );
}
