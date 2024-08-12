'use client'
import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS library
import { toast } from 'react-toastify';

const SuccessStory = ({ image, rating, review, reviewer }) => (
  <div className="mb-8 flex flex-col items-center justify-center">
    <div className="mb-2">
      <img src={image} alt="Success Story" className="h-[150px] w-[150px] rounded-full" />
    </div>
    <div className="mb-2 flex items-center">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          className={`h-8 w-8 ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 0l2.5 6.25H20l-5 3.75 1.875 5L10 13.75 3.125 15l1.875-5-5-3.75h7.5L10 0z"
            clipRule="evenodd"
          />
        </svg>
      ))}
    </div>
    <p className="text-lg font-semibold text-center max-w-md">{review}</p>
    <p className="text-3xl text-blue-700 text-center font-bold mt-10">{reviewer}</p>
  </div>
);

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    contactNumber: '',
    email: '',
    preferredStack: '',
    message: ''
  });
  const [buttonText, setButtonText] = useState("Submit")
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const [currentStory, setCurrentStory] = useState(0);

  const stories = [
    {
      image: "/image/testimonial1.png",
      rating: 5,
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      reviewer: "John Doe"
    },
    {
      image: "/image/testimonial1.png",
      rating: 4,
      review: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      reviewer: "Jane Smith"
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStory(current => (current + 1) % stories.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText("Submitting...")
    emailjs.send('service_rv60y0n', 'template_x85moje', formData, "FtTOKEnRdNlLd2ZHb")
      .then((result) => {
        setButtonText("Submit")
        toast.success("Request Added successfully. We will shortly contact you.")
      }, (error) => {
        setButtonText("Submit")
        toast.error("Error while submitting request.")
      });

    setFormData({
      fullName: '',
      contactNumber: '',
      email: '',
      preferredStack: '',
      message: ''
    });
  };

  return (
    <div className='flex flex-col md:flex-row h-screen mt-20'>
      <div className='w-full md:w-1/2'>
        <div className='h-full'>
          <div className='p-10'>
            <p className="font-bold text-[39px] mb-5">We Got Your Back</p>
            <p className="font-bold text-lg text-gray-500 mb-10">
              Submit a short brief to build, launch, and grow.
            </p>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className='flex flex-col md:flex-row'>
                <div className="flex-grow mb-4 md:mb-0 md:mr-4">
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    required
                    onChange={handleChange}
                    className="mt-1 p-2 py-3 w-full border rounded-md"
                    placeholder="Full Name*"
                  />
                </div>
                <div className="flex-grow">
                  <input
                    type="text"
                    name="contactNumber"
                    value={formData.contactNumber}
                    required
                    onChange={handleChange}
                    className="mt-1 p-2 py-3 w-full border rounded-md"
                    placeholder="Contact Number*"
                  />
                </div>
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                required
                onChange={handleChange}
                className="mt-1 p-2 py-3 w-full border rounded-md"
                placeholder="Email*"
              />
              <select
                name="preferredStack"
                value={formData.preferredStack}
                required
                onChange={handleChange}
                className="mt-1 p-2 py-4 w-full border rounded-md text-gray-400"
              >
                <option value="">Select your preferred tech stack...</option>
                <option value="React">React</option>
                <option value="Angular">Angular</option>
                <option value="Vue">Vue</option>
                <option value="Svelte">Svelte</option>
                <option value="Ember">Ember</option>
              </select>
              <textarea
                name="message"
                value={formData.message}
                required
                onChange={handleChange}
                className="mt-1 p-2 w-full h-48 border rounded-md"
                rows="4"
                placeholder="Tell Us How can we help?*"
              ></textarea>
              <button
                type="submit"
                className=" float-right py-3 px-3 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
              >
                {buttonText}
              </button>
            </form>
          </div>
          <div className='flex-grow'></div>
        </div>
      </div>
      <div className='w-full md:w-1/2 p-10 text-black'>
        <p className="font-bold text-[39px] text-center mb-10">Success Stories</p>
        <SuccessStory {...stories[currentStory]} />
      </div>
    </div>
  );
}
