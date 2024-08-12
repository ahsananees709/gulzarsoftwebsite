import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTwitter, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-10">
     <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 gap-8">
        {/* Contact Information */}
        <div className="lg:col-span-2 p-5 rounded-xl border border-gray-700">
          <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
          <div className="mb-2 p-2 bg-gray-800 rounded-full flex items-center">
            <FontAwesomeIcon icon={faEnvelope} className="text-white ml-2 w-5 mr-6 text-xs" />
            <span>gs@gmail.com</span>
          </div>
          <div className="mb-2 p-2 bg-gray-800 rounded-full flex items-center">
            <FontAwesomeIcon icon={faPhone} className="text-white ml-2 w-5 mr-6 text-xs" />
            <span>(+92) 3006242851</span>
          </div>
          <div className="mb-2 p-2 bg-gray-800 rounded-full flex items-center">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-white ml-2 w-5 mr-6 text-xs" />
            <span>1234 Street Name</span>
          </div>
          <h4 className="text-lg font-semibold mt-4 mb-2">Social Media</h4>
          <div className="flex items-center justify-start space-x-4">
            <a href="https://www.instagram.com" className="p-2 rounded-full">
              <FontAwesomeIcon icon={faInstagram} className="text-white w-7 text-xl" />
            </a>
            <a href="https://www.twitter.com" className="p-2 rounded-full">
              <FontAwesomeIcon icon={faTwitter} className="text-white w-7 text-xl" />
            </a>
            <a href="https://www.youtube.com" className="p-2 rounded-full">
              <FontAwesomeIcon icon={faYoutube} className="text-white w-7 text-xl" />
            </a>
            <a href="https://www.linkedin.com" className="p-2 rounded-full">
              <FontAwesomeIcon icon={faLinkedin} className="text-white w-7 text-xl" />
            </a>
          </div>
        </div>
        
        {/* Services */}
        <div className="lg:col-span-2 text-gray-400 ml-5">
  <h3 className="  text-xl font-bold mb-4 text-white">Services</h3>
  <ul className="space-y-2">
    {["Web App Development", "Mobile App Development", "AI Development Services", "Machine Learning", "Scrapy Services", "Software Quality Assurance", "UI/UX Design Services", "Product Development Services"].map(service => (
      <li key={service}>
        <a href="#" className=" relative before:absolute before:inset-x-0 before:bottom-0 before:h-0.5 before:bg-[#2176FF] before:scale-0 before:transition-transform before:duration-300 hover:before:scale-100">
          {service}
        </a>
      </li>
    ))}
  </ul>
</div>
        
        {/* Companies */}
        <div className=" lg:col-span-2 text-gray-400 ml-5">
  <h3 className="text-xl font-bold mb-4 text-white">Hire Developers</h3>
  <ul className="space-y-2">
    {["MERN Stack Developer", "Node Js Developer", "React Js Developer", "Next Js Developer", "Scrapy Developer",, "Selenium Developer", "Python Developer", "Djando Developer"].map(stack => (
      <li key={stack}>
        <a href="#" className=" relative before:absolute before:inset-x-0 before:bottom-0 before:h-0.5 before:bg-[#2176FF] before:scale-0 before:transition-transform before:duration-300 hover:before:scale-100">
          {stack}
        </a>
      </li>
    ))}
  </ul>
</div>
        
        {/* Industry */}
        <div className="text-gray-400 ml-5">
  <h3 className="text-xl font-bold mb-4 text-white">Industry</h3>
  <ul className="space-y-2">
    {["Fintech", "E-Commerce", "On-Demand", "Real Estate", "Healthcare", "Food & Grocery", "Education", "Textile"].map(industry => (
      <li key={industry}>
        <a href="#" className=" relative before:absolute before:inset-x-0 before:bottom-0 before:h-0.5 before:bg-[#2176FF] before:scale-0 before:transition-transform before:duration-300 hover:before:scale-100">
          {industry}
        </a>
      </li>
    ))}
  </ul>
              </div>
               {/* Company */}
        <div className="lg:ml-10 text-gray-400 ml-5">
  <h3 className="text-xl font-bold mb-4 text-white">Company</h3>
  <ul className="space-y-2">
      <li>
        <a href="#" className=" relative before:absolute before:inset-x-0 before:bottom-0 before:h-0.5 before:bg-[#2176FF] before:scale-0 before:transition-transform before:duration-300 hover:before:scale-100">
          About Us
        </a>
                      </li>
                      <li>
        <a href="#" className=" relative before:absolute before:inset-x-0 before:bottom-0 before:h-0.5 before:bg-[#2176FF] before:scale-0 before:transition-transform before:duration-300 hover:before:scale-100">
          Portfolio
        </a>
                      </li>
                      <li>
        <a href="#" className=" relative before:absolute before:inset-x-0 before:bottom-0 before:h-0.5 before:bg-[#2176FF] before:scale-0 before:transition-transform before:duration-300 hover:before:scale-100">
          Blogs
        </a>
                      </li>
                      <li>
        <a href="#" className=" relative before:absolute before:inset-x-0 before:bottom-0 before:h-0.5 before:bg-[#2176FF] before:scale-0 before:transition-transform before:duration-300 hover:before:scale-100">
          Careers
        </a>
                      </li>
                      <li>
        <a href="#" className=" relative before:absolute before:inset-x-0 before:bottom-0 before:h-0.5 before:bg-[#2176FF] before:scale-0 before:transition-transform before:duration-300 hover:before:scale-100">
          Pricing
        </a>
                      </li>
                      <li>
        <a href="#" className=" relative before:absolute before:inset-x-0 before:bottom-0 before:h-0.5 before:bg-[#2176FF] before:scale-0 before:transition-transform before:duration-300 hover:before:scale-100">
          Contact Us
        </a>
      </li>
  </ul>
</div>

      </div>
      <div className="bg-blue-500 text-white py-5 mt-5 mx-5 flex justify-between items-center rounded-tl-lg rounded-tr-lg">
        <p className="ml-5">All rights reserved © 2024</p>
        <div className="flex space-x-4 mr-5">
          <a href="#" className="hover:underline">Site Map</a>
          <span>|</span>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <span>|</span>
          <a href="#" className="hover:underline">Terms and Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
