'use client'
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBrain, 
  faLaptopCode, 
  faMobileAlt,
  faRobot,
  faNetworkWired,
  faServer,
  faDatabase,
  faCloud,
  faCode,
  faGamepad,
    faCube,
} from '@fortawesome/free-solid-svg-icons';
import {
    faReact, faVuejs, faAngular, faNode, faLaravel,
    faAndroid, faApple, faSwift, faJava,
    faEthereum, faBitcoin, faHive,
    faUnity
 } from '@fortawesome/free-brands-svg-icons';
const cardData = [
    { id: 1, icon: faBrain, title: 'AI/ML', description: 'Automate business operations with our tailor-made AI/ML/ChatGPT solutions to save time, reduce errors and improve efficiency — freeing up your resources to focus on profit-making decisions while enjoying increased accuracy & productivity.  ', technologies: [
      { icon: faRobot, name: 'Machine Learning' },
      { icon: faNetworkWired, name: 'Neural Networks' },
      { icon: faServer, name: 'Deep Learning' },
      { icon: faDatabase, name: 'Data Mining' },
      { icon: faCloud, name: 'Cloud AI' },
      { icon: faCode, name: 'AI Programming' },
      { icon: faBrain, name: 'NLP' },
      { icon: faLaptopCode, name: 'AI Software' },
      { icon: faServer, name: 'AI Infrastructure' },
      { icon: faNetworkWired, name: 'AI Automation' }
    ] },
    { id: 2, icon: faLaptopCode, title: 'Web App', description: 'Scalable web product development at any stage and ongoing support after launch.', technologies: [
      { icon: faReact, name: 'React' },
      { icon: faVuejs, name: 'Vue' },
      { icon: faAngular, name: 'Angular' },
      { icon: faNode, name: 'Node.js' },
      { icon: faCode, name: 'Django' },
      { icon: faLaravel, name: 'Laravel' },
    ] },
    { id: 3, icon: faMobileAlt, title: 'Mobile App', description: 'Consultation on updating existing mobile applications and development of apps that look and perform great on both iOS and Android.', technologies: [
      { icon: faAndroid, name: 'Android' },
      { icon: faApple, name: 'iOS' },
      { icon: faMobileAlt, name: 'Flutter' },
      { icon: faSwift, name: 'Swift' },
      { icon: faMobileAlt, name: 'Kotlin' },
      { icon: faJava, name: 'Java' },
    ] },
    { id: 4, icon: faBrain, title: 'Scrapy', description: 'Step into the world of web data extraction and analysis with GulzarSoft Scrapy consultancy and development services. With GulzaSoft, you will receive expert guidance and tailored solutions to maximize the potential of your web scraping projects. From custom spider development to data pipeline optimization, our Scrapy services cover every aspect of your web data journey.', technologies: [
      { icon: faRobot, name: 'Web Scraping' },
      { icon: faNetworkWired, name: 'Data Extraction' },
      { icon: faServer, name: 'Scrapy Framework' },
      { icon: faDatabase, name: 'Data Analysis' },
      { icon: faCloud, name: 'Cloud Scraping' },
      { icon: faCode, name: 'Python' },
      { icon: faBrain, name: 'Scrapy Middleware' },
      { icon: faLaptopCode, name: 'Scrapy Pipelines' },
      { icon: faServer, name: 'Scrapy Deploy' },
      { icon: faNetworkWired, name: 'Scrapy Spiders' }
    ] },

    { id: 6, icon: faHive, title: 'Blockchain', description: 'Become a part of a trustless and borderless distributed network with GulzarSoft real-world blockchain consultancy and development services. ', technologies: [
      { icon: faEthereum, name: 'Ethereum' },
      { icon: faHive, name: 'Hexagon' },
    { icon: faCube, name: 'Chainlink' },
        { icon: faBitcoin, name: 'Bitcoin' },
        { icon: faCube, name: 'Tron' },
        { icon: faDatabase, name: 'HyperLedger' },
      { icon: faCube, name: 'EOS' }
    ] }
  ];

const Card = ({ card, isActive, onClick }) => (
  <div
    className={`p-5 border rounded-xl cursor-pointer flex flex-col justify-center items-center ${isActive ? 'bg-[#2176FF] text-white' : 'bg-white text-black'} transition-colors`}
    onClick={() => onClick(card)}
  >
    <FontAwesomeIcon icon={card.icon} className="text-4xl mb-4" style={{ color: `#${Math.floor(Math.random()*16777215).toString(16)}` }} />
    <h3 className="text-sm font-semibold whitespace-no-wrap">{card.title}</h3>
  </div>
);

export default function HomeChild1() {
  const [activeCard, setActiveCard] = useState(cardData[0]);

  const handleCardClick = (card) => {
    setActiveCard(card);
  };

  return (
    <>
      <div className='flex-col mt-20'>
        <div className="container mx-auto flex flex-col justify-center items-center mb-10 text-center px-4">
          <p className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[39px]">
            Software Consulting &<br /> Development Services
          </p>
          <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-lg">
            ...with the perfect blend of technology, expertise and innovation.
          </p>
        </div>
        <div className='container p-10 mx-auto flex flex-col justify-center items-center sm:flex-row sm:justify-center'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4 mb-4 sm:mb-0 w-full'>
            {cardData.map((card, index) => (
              <div key={card.id} className={index === 0 ? 'col-span-1.5' : ''}>
                <Card
                  card={card}
                  isActive={activeCard && activeCard.id === card.id}
                  onClick={handleCardClick}
                />
              </div>
            ))}
          </div>
          <div className='w-full p-10 rounded-xl text-center text-white'>
            {activeCard ? (
              <>
                <h3 className="text-2xl text-black font-bold mb-4 text-left">{activeCard.title} Development</h3>
                <p className="mb-4 text-black text-left">{activeCard.description}</p>
                <div className="flex flex-wrap justify-start items-center gap-2 mt-10">
                  {activeCard.technologies.map((tech, index) => (
                   <div key={index} className="flex flex-col items-center w-16 relative group">
                   <FontAwesomeIcon icon={tech.icon} className="text-3xl mb-2 cursor-pointer" style={{ color: `#${Math.floor(Math.random()*16777215).toString(16)}` }} />
                   <p className="absolute bottom-full w-40 left-1/2 transform -translate-x-1/2 p-2 bg-gray-800 text-white rounded-md transition-opacity opacity-0 group-hover:opacity-100">{tech.name}</p>
                 </div>
                  ))}
                </div>
              </>
            ) : (
              <p>Select a card to see the details</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
