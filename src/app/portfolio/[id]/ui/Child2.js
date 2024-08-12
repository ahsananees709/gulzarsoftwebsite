import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

export default function Page({ challenges }) {
  const challengeKeys = Object.keys(challenges);

  return (
    <div
      className='flex flex-col md:flex-row h-full min-h-screen mx-4 sm:mx-10 md:mx-20 mt-72 md:mt-48 rounded-t-3xl'
      style={{ backgroundImage: 'url("/image/challenge.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className='flex flex-col justify-start ml-5 w-full mt-10'>
        <p className='font-semibold text-left text-3xl md:text-5xl mb-5 md:mb-10'>Challenges</p>
        <div className="border-t-4 w-full md:w-[500px] mb-5 md:mb-10"></div>
        {challengeKeys.map((key, index) => (
          <div key={index} className='flex items-center text-gray-800 text-lg w-full md:w-[800px] mb-5'>
            <FontAwesomeIcon icon={faExclamationTriangle} className='text-red-600 mr-5' />
            <p>{challenges[key]}</p>
          </div>
        ))}
      </div>
      <div className='hidden md:block w-full'></div>
    </div>
  );
}
