import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

export default function Page() {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <p className="font-bold text-4xl md:text-5xl lg:text-6xl tracking-wider text-center">Over 10+ Years Of</p>
      <p className="font-bold text-4xl md:text-5xl lg:text-6xl mb-10 tracking-wider text-center">Consistently Delivering Excellence</p>
      <p className="font-semibold text-xl md:text-2xl lg:text-3xl mb-20 text-gray-500 text-center">500+ Professionals | 300+ Projects Completed | 100% Success Rate</p>
      <div className="flex items-center mt-20">
        <div className="border-t-4 w-full md:w-[600px]"></div>
        <FontAwesomeIcon icon={faArrowDown} className="text-2xl w-6 text-black mx-4" />
        <div className="border-t-4 w-full md:w-[600px]"></div>
      </div>
    </div>
  )
}
