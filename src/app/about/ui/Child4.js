import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTwitter, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Page() {
  // Dummy data array
  const leaders = [
    { id: 1, name: 'John Doe', image: '/image/carousel-1.jpg' },
    { id: 2, name: 'Jane Doe', image: '/image/carousel-2.jpg' },
    { id: 3, name: 'Alice Smith', image: '/image/carousel-3.jpg' },
    { id: 4, name: 'Bob Johnson', image: '/image/carousel-4.jpg' },
  ];

  return (
    <div className='mt-8 mb-20 p-5 md:p-10'>
      <div className='flex flex-col items-center justify-center'>
        <p className="text-3xl font-bold text-center mb-4">Meet Our Dynamic Leadership</p>
        <p className="text-lg text-gray-800 text-center w-[400px] md:w-[600px]">
          Take a closer look at the faces behind our success! Meet our accomplished leaders who inspire, empower, and drive us towards excellence, every day!
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-center items-center mt-8">
        {leaders.map((leader) => (
          <div key={leader.id} className="relative w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full overflow-hidden bg-gray-300 border-[10px] border-white hover:border-[#2176FF] transition duration-300">
            <Image
              src={leader.image}
              width={144}
              height={144}
              className="object-cover w-full h-full grayscale transition duration-300 hover:grayscale-0"
              alt={leader.name}
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
              <div className="flex items-center justify-center space-x-5">
                <a href="#" className="text-white hover:text-[#2176FF]">
                  <FontAwesomeIcon icon={faEnvelope} className="h-10 w-10" />
                </a>
                <a href="#" className="text-white hover:text-[#2176FF]">
                  <FontAwesomeIcon icon={faPhone} className="h-10 w-10" />
                </a>
                <a href="#" className="text-white hover:text-[#2176FF]">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="h-10 w-10" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
