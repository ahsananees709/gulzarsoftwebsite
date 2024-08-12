import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export default function Page({ objectives }) {
  const objectiveKeys = Object.keys(objectives);

  return (
    <div
      className='flex flex-col md:flex-row h-full min-h-screen mx-4 sm:mx-10 md:mx-20 mt-10 md:mt-16 rounded-t-3xl'
      style={{ backgroundImage: 'url("/image/objective.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className='hidden md:block w-full'></div> {/* Hidden on small screens */}
      <div className='flex flex-col justify-start ml-5 w-full mt-10'>
        <p className='font-semibold text-left text-3xl md:text-5xl mb-5 md:mb-10'>Objectives</p>
        <div className="border-t-4 w-full md:w-[500px] mb-5 md:mb-10"></div>
        {objectiveKeys.map((key, index) => (
          <div key={index} className='flex items-center text-gray-800 text-lg w-full md:w-[600px] mb-5'>
            <div className='flex items-center justify-center p-2 w-8 h-8 bg-[#1A2A68] text-white rounded-full mr-5'>
              <FontAwesomeIcon icon={faCheck} size='lg' />
            </div>
            <p>{objectives[key]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
