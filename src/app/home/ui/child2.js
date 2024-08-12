import React from 'react';
import Image from 'next/image';

const engagementModels = [
  {
    image: "https://invozone-backend.s3.us-east-1.amazonaws.com/resource_aug_9a19fb02ac.svg",
    title: "Staff/Resource Augmentation",
    description: "Our staff augmentation model is intended to help companies find the right skills for their project."
  },
  {
    image: "https://invozone-backend.s3.us-east-1.amazonaws.com/product_dev_591f8794ae.svg",
    title: "Product Development",
    description: "The project-based model is designed to help you get your product built from ideation to deployment by a team of expert software engineering consultants."
  },
  {
    image: "https://invozone-backend.s3.us-east-1.amazonaws.com/dedicated_development_team_17e06cc6f5.svg",
    title: "Dedicated Development Team",
    description: "Our team of developers is highly qualified and dedicated to delivering quality development services to clients."
  }
];

export default function HomeChild2() {
  return (
    <div className='mb-20'>
      <p className="ml-20 font-bold text-[39px] mb-5">
        Engagement Models
      </p>
      <div className='flex flex-col justify-between sm:flex-row'>
        <div className='ml-20 mb-5'>
          <p class="pb-5 pt-3 mb-0 text-lg">We solve your biggest business pains and help you succeed. <br /> Here is how we can work together</p>
                  <Image
                      className='ml-10'
            src="https://invozone.com/static/Illustration-58cdcfa31a066c176d95793fa28fddc6.svg"
            width={400}
            height={500}
            alt="Engagement Models Illustration"
          />
        </div>
        <div className='flex flex-col ml-10 mr-20 sm:ml-20'>
          {engagementModels.map((model, index) => (
            <div key={index} className={`flex mb-5 ${model.title === 'Product Development' ? 'ml-0 sm:ml-10' : ''}`}>
              <div className="mr-5">
                <Image
                  src={model.image}
                  width={60}
                  height={60}
                  alt="Engagement Model Icon"
                />
              </div>
              <div className="flex-grow">
                <p className="font-semibold text-2xl sm:text-2xl md:text-2xl">
                  {model.title}
                </p>
                <div className="sm:w-[500px]">
                  <p class="pb-5 pt-3 mb-0 text-sm">{model.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div class="flex justify-center col-span-12">
  <button class="border text-lg text-white font-semibold border-white mt-4 md:mt-5 px-8 py-3 bg-[#2176FF] rounded-full">View Pricing</button>
</div>

    </div>
  );
}
