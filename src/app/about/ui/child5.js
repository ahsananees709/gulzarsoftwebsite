'use client'
import React from 'react';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();
  const content = {
    imageurl: "/image/carousel-1.jpg",
    title: "Accelerate Your Business Growth With Us",
    description: "Your business is only as good as the technology behind it. We have the expertise. You have the vision. We make technology happen! Our team of world-class engineers and innovators will build your next software project, leaving you to focus on running your business.",
    question:"Got an idea?Bring it to Life with GuzarSoft!"
  }
  return (
    <div className='h-screen mt-16'>
      <div
        className='flex flex-col sm:flex-row h-full rounded-t-3xl'
        style={{ backgroundImage: 'url("/image/nymcard.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
     <div className='flex flex-col justify-start p-5 md:p-0 mx-auto md:ml-10 w-full mt-24 md:mt-32'>
  <p className="text-[39px] font-bold text-center md:text-left">{content.title}</p>
  <p className="text-lg text-gray-900 mt-3 text-center md:text-left">{content.description}</p>
  <p className="text-sm font-bold mt-5 text-center md:text-left">{content.question}</p>
  <button className="mt-5 text-white w-64 font-semibold bg-[#2176FF] py-4 px-10 rounded-full hover:bg-[#217FFF] mx-auto md:ml-0">
    Step Into Innovation
  </button>
</div>


        <div className='hidden sm:flex w-full'></div> {/* Hidden on small screens */}
      </div>
      <div className='flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 bg-[#FFDB53] px-4 md:px-4 sm:py-7 py-6 md:py-16 mt-5'>
      <p className="text-lg md:text-2xl lg:text-[39px] font-bold text-center md:text-left">
      Ready To Explore Our Services & Client Stories?
    </p>
    <button onClick={()=>router.push('/portfolio')} className="text-sm md:text-base lg:text-lg text-white font-semibold bg-[#000000] py-2 px-5 md:py-2 md:px-10 rounded-full hover:bg-[#FFFFFF] hover:text-black">
      Dive Into Our Portfolio
    </button>
</div>
    </div>
  );
}
