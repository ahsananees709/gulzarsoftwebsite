'use client';
import React, { useState, useEffect } from 'react';

const images = [
  "/image/testimonial1.png",
  "/image/testimonial1.png",
  "/image/testimonial1.png",
  "/image/testimonial1.png",
  "/image/testimonial1.png",
  "/image/testimonial1.png",
];

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

    return (
        <>
            <p className=" ml-20 font-bold text-[39px] mb-10">
        Testimonials
      </p>
             <div className="flex flex-col justify-center items-center mb-20">
          <div>
          <p className="font-bold text-2xl md:text-[39px] mb-10">
        What Our Client Say About Us
      </p>
          </div>
      <div
        className="relative w-[400px] h-[300px] md:w-[700px] md:h-[500px]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Testimonial ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out transform ${
              index === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
            }`}
          />
        ))}
      </div>
    </div>
      </>
     
  );
};

export default TestimonialsCarousel;
