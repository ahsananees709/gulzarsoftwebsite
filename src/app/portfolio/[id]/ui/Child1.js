'use client'
import React from 'react';
import { useRouter } from 'next/navigation';

export default function Page({ project }) {
  const router = useRouter();
  return (
    <div className='h-screen mx-4 sm:mx-10 md:mx-20 mt-16 sm:mt-36'>
      <div
        className='flex flex-col sm:flex-row h-full rounded-t-3xl bg-gradient-to-r from-purple-200 to-pink-200'
        style={{ backgroundImage: 'url("/image/nymcard.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className='flex flex-col justify-start ml-5 w-full mt-5'>
          <button onClick={() => router.push('/portfolio')} className="px-2 py-3 w-32 bg-[#2176FF] font-semibold text-white rounded-lg mb-10">
            {project.title}
          </button>
          <p className='font-semibold text-left text-2xl sm:text-4xl md:text-5xl mb-10'>{project.companyInfo}</p>
          <div className="border-t-4 w-full sm:w-[500px] mb-10"></div>
          <p className='text-left text-lg sm:text-xl md:text-2xl text-gray-500 w-full sm:w-[550px] mb-5'>{project.problemDescription.s1}</p>
          <p className='text-left text-lg sm:text-xl md:text-2xl text-gray-500 w-full sm:w-[550px]'>{project.problemDescription.s2}</p>
        </div>
        <div className='hidden sm:flex w-full'></div> {/* Hidden on small screens */}
      </div>
      <div className='flex flex-col sm:flex-row justify-between items-center bg-black px-4 sm:px-10 md:px-20 py-7 rounded-b-3xl'>
  <div className='mb-5 sm:mb-0 text-center sm:text-left'> {/* Center text on small screens */}
    <p className='text-white text-lg sm:text-xl mb-2 sm:mb-5'>Industry</p>
    <p className='font-bold text-white text-lg sm:text-xl'>{project.industry}</p>
  </div>
  <div className='mb-5 sm:mb-0 text-center sm:text-left'> {/* Center text on small screens */}
    <p className='text-white text-lg sm:text-xl mb-2 sm:mb-5'>Service</p>
    <p className='font-bold text-white text-lg sm:text-xl'>{project.service}</p>
  </div>
  <div className='text-center sm:text-left'> {/* Center text on small screens */}
    <p className='text-white text-lg sm:text-xl mb-2 sm:mb-5'>Technologies We Use</p>
    <p className='font-bold text-white text-lg sm:text-xl'>{project.technologies}</p>
  </div>
</div>
    </div>
  );
}
