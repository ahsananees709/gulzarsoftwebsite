'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState,useEffect } from "react";
import Swipe from "react-easy-swipe";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";


export default function Carousel() {
  const router = useRouter()
    const [currentSlide, setCurrentSlide] = useState(0);
    const images = [
        {
            src: "/image/carousel-1.jpg",
            alt: "image1"
        },
        {
            src: "/image/carousel-2.jpg",
            alt: "image2"
        },
        {
            src: "/image/carousel-3.jpg",
            alt: "image3"
        },
        {
            src: "/image/carousel-4.jpg",
            alt: "image4"
        }
    ]

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
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(intervalId);
    }, [currentSlide]);

  return (
    <div className="relative">
      <AiOutlineLeft
        onClick={handlePrevSlide}
        className="absolute left-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20"
      />
      <div className="w-full h-[100vh] flex overflow-hidden relative m-auto">
        <Swipe
          onSwipeLeft={handleNextSlide}
          onSwipeRight={handlePrevSlide}
          className="relative z-10 w-full h-full"
        >
          {images.map((image, index) => {
            if (index === currentSlide) {
                return (
                <div>
                <Image
                    key={image.id}
                    src={image.src}
                    fill
                    object-fit="contain"
                    className="animate-fadeIn"
                        />
                         <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold text-center">
                                        Software Development Consulting For Next-Gen Solutions
                        </p>
                        <ul className="flex absolute bottom-[200px] left-1/2 transform -translate-x-1/2 text-white text-sm font-semibold text-center">
        <li className="flex items-center text-white text-xl">
            Enterprises
        </li>
        <li className="flex items-center text-white text-xl">
            <span className="inline-block w-2 h-2 bg-white rounded-full mr-2 ml-2"></span>Startups
        </li>
        <li className="flex items-center text-white text-xl">
            <span className="inline-block w-2 h-2 bg-white rounded-full mr-2 ml-2"></span>Innovations
        </li>
    </ul>
                        <button onClick={()=>router.push('/contact')} className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-black font-semibold bg-yellow-300 py-3 px-6 rounded-full hover:bg-[#FFC800]">
                                        Claim Your Free Consultation
                                    </button>
                    </div>
                   
                  
                    
              );
            }
          })}
        </Swipe>
      </div>
      <AiOutlineRight
        onClick={handleNextSlide}
        className="absolute right-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20"
      />

 
    </div>
  );
}
