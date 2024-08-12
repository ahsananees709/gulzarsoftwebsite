import React from 'react'
import Image from 'next/image'

export default function Page() {
  return (
      <div className='mt-[420px] md:mt-32 flex items-center justify-center gap-16 p-5 md:p-10'>
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
              <p className="text-[39px] font-bold w-full mb-10 ">Our Inspiring Vision</p>
              <p className="text-lg text-gray-800 mt-3">We envision a future where innovation knows no bounds, where groundbreaking ideas transform industries, and where technological advancements create positive change. We strive to create disruptive AI-driven solutions that redefine the landscape of the digital world.</p>
              <p className="text-lg text-gray-800 mt-3">With unwavering determination, we leverage the power of our collective imagination to shape a world filled with endless possibilities. Together, we dare to dream, innovate fearlessly, and pave the way for a brighter tomorrow.</p>
      
          </div>
     </div>
  )
}
