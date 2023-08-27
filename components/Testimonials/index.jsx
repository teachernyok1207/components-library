import React from "react"
import Testimonials from "./Testimonials"
import TestimonialWithImage from "./TestimonialWithImage"
import TestimonialNoImage from "./TestimonialsNoImage"

Testimonials.Image = TestimonialWithImage
Testimonials.Plain = TestimonialNoImage

export default Testimonials