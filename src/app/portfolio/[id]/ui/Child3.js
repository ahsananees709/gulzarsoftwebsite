import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export default function Page({ solutions }) {
  const solutionKeys = Object.keys(solutions);

  return (
    <div
      className='flex flex-col h-full min-h-screen mx-4 sm:mx-10 md:mx-20 mt-10 md:mt-16 rounded-t-3xl'
      style={{ backgroundImage: 'url("/image/solution.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className='flex flex-col justify-start ml-5 w-full mt-10'>
        <p className='font-semibold text-left text-3xl md:text-5xl mb-5 md:mb-10'>Solutions Proposed</p>
        <div className="border-t-4 w-full md:w-[500px] mb-5 md:mb-10"></div>
        {solutionKeys.map((key, index) => (
          <div key={index} className='flex items-center text-gray-800 text-lg mb-5'>
            <div className='flex items-center justify-center p-2 w-8 h-8 bg-[#1A2A68] text-white rounded-full mr-5'>
              <FontAwesomeIcon icon={faCheck} size='lg' />
            </div>
            <p>{solutions[key]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
