import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTwitter, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Page() {
  return (
    <div className='flex justify-center gap-5 md:gap-48 z-10 mt-36 mb-28 md:mb-0 md:mt-48 h-screen p-5 md:p-0'>
    <div className='flex flex-col max-w-[600px] mt-20 md:mt-12'>
      <p className="text-[39px] font-bold">Message From The CEO</p>
      <p className="text-lg text-gray-800 mt-10 md:mt-10">Welcome to InvoZone, your trusted partner for software development and consultancy. I'm Furqan Aziz, the CEO of this esteemed company, and I'm excited to share our story and vision with you.</p>
      <p className="text-lg text-gray-800 mt-3">At InvoZone, we believe in the power of software to transform industries and unlock boundless possibilities. Our team of exceptional professionals, specializing in technologies like Elixir, Laravel, ROR, AI/ML, and more, is here to drive your digital transformation journey.</p>
      <p className="text-lg text-gray-800 mt-3">We go beyond being just developers; we're your strategic partners. We tailor solutions to ensure your success, foster long-lasting partnerships, and deliver top-notch software. Our innovative mindset keeps us at the forefront of the ever-evolving tech landscape.</p>
      <p className="text-lg text-gray-800 mt-3">Integrity and transparency are the cornerstones of our culture. We earn your trust by delivering excellence and practicing open communication. Moreover, we actively support social causes and embrace sustainable practices to make a positive impact on our world.</p>
      <p className="text-lg text-gray-800 mt-3">Let's shape the future together through technology. Choose InvoZone for exceptional results and leverage our resource augmentation or remote teams of software developers.</p>
    </div>
    <div className='hidden md:block  bg-[#2176FF] mt-20 rounded-3xl w-[400px] flex flex-col items-center justify-center text-center text-white p-5'>
      <div className="relative w-[300px] h-[300px] items-center mb-5 ml-8 mt-8">
        <Image
          src="/image/carousel-1.jpg"
          layout="fill"
          objectFit="cover"
          className="rounded-full"
          alt="Ch. Wasi Ullah"
        />
      </div>
      <p className="text-[39px] font-bold w-full mt-2">Ch. Wasi Ullah</p>
      <p className="text-xl font-semibold w-full mt-2">CEO of Gulzar Soft</p>
      <div className="flex items-center justify-center space-x-4 mt-5">
        <a href="https://www.instagram.com" className="p-2 rounded-full">
          <FontAwesomeIcon icon={faInstagram} className="text-white w-7 text-xl" />
        </a>
        <a href="https://www.twitter.com" className="p-2 rounded-full">
          <FontAwesomeIcon icon={faTwitter} className="text-white w-7 text-xl" />
        </a>
        <a href="https://www.youtube.com" className="p-2 rounded-full">
          <FontAwesomeIcon icon={faYoutube} className="text-white w-7 text-xl" />
        </a>
        <a href="https://www.linkedin.com" className="p-2 rounded-full">
          <FontAwesomeIcon icon={faLinkedin} className="text-white w-7 text-xl" />
        </a>
      </div>
    </div>
  </div>
  
  )
}
