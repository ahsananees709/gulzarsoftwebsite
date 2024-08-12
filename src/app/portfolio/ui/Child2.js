'use client'
import React from 'react'
import { useRouter } from 'next/navigation';

const cards = [
  { id: 1, title: "Nymcard", description: "APIs and launch solutions like prepaid cards, Multi-currency, Charge and Credit cards, and Buy Now Pay Later.", imageBefore:"https://invozone-backend.s3.us-east-1.amazonaws.com/nymcard_854cd064ec.webp", imageUrl: "https://invozone-backend.s3.us-east-1.amazonaws.com/Group_1000006969_a47e359bb9.webp", sectors: ["Banking", "Financial Service", "Fintech", "Payments"] },
  { id: 2, title: "Project 2",  description: "APIs and launch solutions like prepaid cards, Multi-currency, Charge and Credit cards, and Buy Now Pay Later.", imageBefore:"https://invozone-backend.s3.us-east-1.amazonaws.com/nymcard_854cd064ec.webp", imageUrl: "https://invozone-backend.s3.us-east-1.amazonaws.com/Group_1000006969_a47e359bb9.webp", sectors: ["Banking", "Financial Service", "Fintech", "Payments"] },
  { id: 3, title: "Project 3",  description: "APIs and launch solutions like prepaid cards, Multi-currency, Charge and Credit cards, and Buy Now Pay Later.", imageBefore:"https://invozone-backend.s3.us-east-1.amazonaws.com/nymcard_854cd064ec.webp", imageUrl: "https://invozone-backend.s3.us-east-1.amazonaws.com/Group_1000006969_a47e359bb9.webp", sectors: ["Banking", "Financial Service", "Fintech", "Payments"] },
  { id: 4, title: "Project 4",  description: "APIs and launch solutions like prepaid cards, Multi-currency, Charge and Credit cards, and Buy Now Pay Later.", imageBefore:"https://invozone-backend.s3.us-east-1.amazonaws.com/nymcard_854cd064ec.webp", imageUrl: "https://invozone-backend.s3.us-east-1.amazonaws.com/Group_1000006969_a47e359bb9.webp", sectors: ["Banking", "Financial Service", "Fintech", "Payments"] },
  { id: 5, title: "Project 5",  description: "APIs and launch solutions like prepaid cards, Multi-currency, Charge and Credit cards, and Buy Now Pay Later.", imageBefore:"https://invozone-backend.s3.us-east-1.amazonaws.com/nymcard_854cd064ec.webp", imageUrl: "https://invozone-backend.s3.us-east-1.amazonaws.com/Group_1000006969_a47e359bb9.webp", sectors: ["Banking", "Financial Service", "Fintech", "Payments"] },
  { id: 6, title: "Project 6",  description: "APIs and launch solutions like prepaid cards, Multi-currency, Charge and Credit cards, and Buy Now Pay Later.", imageBefore:"https://invozone-backend.s3.us-east-1.amazonaws.com/nymcard_854cd064ec.webp", imageUrl: "https://invozone-backend.s3.us-east-1.amazonaws.com/Group_1000006969_a47e359bb9.webp", sectors: ["Banking", "Financial Service", "Fintech", "Payments"] },
  { id: 7, title: "Project 6",  description: "APIs and launch solutions like prepaid cards, Multi-currency, Charge and Credit cards, and Buy Now Pay Later.", imageBefore:"https://invozone-backend.s3.us-east-1.amazonaws.com/nymcard_854cd064ec.webp", imageUrl: "https://invozone-backend.s3.us-east-1.amazonaws.com/Group_1000006969_a47e359bb9.webp", sectors: ["Banking", "Financial Service", "Fintech", "Payments"] },
  { id: 8, title: "Project 6",  description: "APIs and launch solutions like prepaid cards, Multi-currency, Charge and Credit cards, and Buy Now Pay Later.", imageBefore:"https://invozone-backend.s3.us-east-1.amazonaws.com/nymcard_854cd064ec.webp", imageUrl: "https://invozone-backend.s3.us-east-1.amazonaws.com/Group_1000006969_a47e359bb9.webp", sectors: ["Banking", "Financial Service", "Fintech", "Payments"] },

];

export default function Page() {
  const router = useRouter();

  const handleViewDetails = (card) => {
    const query = new URLSearchParams(card).toString();
    router.push(`/portfolio/${card.id}?${query}`);
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 h-screen w-full p-6 ml-10 mr-10">
        {cards.map(card => (
          <div key={card.id} className="group h-[500px] bg-white relative p-6 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl">
            <div className="absolute inset-0 bg-white flex flex-col items-center justify-center p-6 group-hover:hidden">
              <img src={card.imageBefore} alt={card.title} className="w-full h-24 w-72 object-cover" />
              <div className="border-t w-[300px] mb-10 mt-10"></div>
              <p className='font-semibold text-center text-xl text-gray-500'>{card.description}</p>
            </div>
            <div className="absolute inset-0 bg-white flex flex-col items-center justify-between p-6 opacity-0 group-hover:opacity-100">
              <img src={card.imageUrl} alt={card.title} className="w-full h-[220px] object-cover" />
              <h2 className="text-2xl font-bold">{card.title}</h2>
              <div className='flex items-center justify-center gap-2 mt-2'>
                {card.sectors.map((sector, index) => (
                  <span key={index} className='bg-gray-200 text-sm px-2 py-1 rounded-lg px-2' style={{ whiteSpace: 'nowrap' }}>{sector}</span>
                ))}
              </div>
              <button onClick={() => router.push(`/portfolio/${card.id}`)} className="px-10 py-3 bg-[#2176FF] font-semibold text-white rounded-2xl mt-4">
                View Project Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
