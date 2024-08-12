'use client'
import Image from "next/image";
import { useState, useEffect } from "react";
import Swipe from "react-easy-swipe";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export default function Carousel({ images }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    let newSlide = currentSlide === images.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };

  const handlePrevSlide = () => {
    let newSlide = currentSlide === 0 ? images.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNextSlide();
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentSlide]);

  return (
    <>
      <div className="flex items-center justify-center">
        <p className='p-3 sm:p-5 font-semibold text-center mt-5 bg-yellow-300 text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-5'>
          Take a Look at Project UI
        </p>
      </div>
      <div className="relative mx-4 sm:mx-10 md:mx-20 h-full">
        <AiOutlineLeft
          onClick={handlePrevSlide}
          className="absolute left-0 m-auto text-3xl sm:text-4xl md:text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20"
        />
        <div className="relative flex overflow-hidden w-full max-w-screen-lg h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] m-auto">
          <Swipe
            onSwipeLeft={handleNextSlide}
            onSwipeRight={handlePrevSlide}
            className="relative z-10 w-full h-full"
          >
            {images.map((image, index) => {
              if (index === currentSlide) {
                return (
                  <div className="relative w-full h-full" key={image.id}>
                    <Image
                      src={image.src}
                      fill
                      objectFit="contain"
                      className="animate-fadeIn"
                    />
                  </div>
                );
              }
            })}
          </Swipe>
        </div>
        <AiOutlineRight
          onClick={handleNextSlide}
          className="absolute right-0 m-auto text-3xl sm:text-4xl md:text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20"
        />
      </div>
    </>
  );
}
