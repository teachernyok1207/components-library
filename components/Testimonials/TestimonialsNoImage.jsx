import React from 'react';

export default function TestimonialNoImage() {
  return (
    <div className="testimonials-no-pic">
      <img className="testimonial-logo" src="/workcation.png" />
      <p className="testimonial-desc">
        “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita
        voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed
        rerum et corporis.”
      </p>
      <p className="testimonial-closing">
        <span className="testimonial-author">May Andersons</span> / Workcation,
        CTO
      </p>
    </div>
  );
}
