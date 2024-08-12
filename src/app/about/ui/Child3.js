import React from 'react'
import Image from 'next/image'

export default function Page() {
  return (
      <div className='mt-4 md:mt-32 flex flex-row-reverse items-center justify-center gap-16 p-5 md:p-10'>
          <div className='hidden md:block'>
          <Image
                  src="/image/carousel-1.jpg"
                  width={500}
                  height={300}
                  className='rounded-3xl w-full'
          objectFit="cover"
          alt="Image"
        />
          </div>
          <div className='md:w-1/2 md:pl-4 md:mt-0 w-[500px] md:w-[600px]'>
              <p className="text-[39px] font-bold w-full mb-10">Our Impactful Mission</p>
              <p className="text-lg text-gray-800 mt-3">At the core of our mission lies empowering businesses with transformative technology solutions. Through our proficiency in custom software development, Cloud Services, AI/ML/AL, DevOps, and cybersecurity, we craft personalized solutions that propel growth, optimize operations, and spur innovation.</p>
              <p className="text-lg text-gray-800 mt-3">By prioritizing our clients' needs, we consistently surpass expectations, nurturing enduring partnerships grounded in trust and mutual collaboration. Join us in shaping the future of business.</p>
      
          </div>
     </div>
  )
}
