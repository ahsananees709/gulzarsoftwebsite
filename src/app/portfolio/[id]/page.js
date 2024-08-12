'use client'

import React from 'react';
import Child1 from './ui/Child1'
import Child2 from './ui/Child2'
import Child3 from './ui/Child3'
import Child4 from './ui/Child4'
import Child5 from './ui/Child5'
import Carousel from './ui/Carousel';

const cards = [
  {
    id: 1, title: "Nymcard", companyInfo: "A Fintect Card Issuer & Service Provider", problemDescription: { s1: "NymCard, a fintech company leading in bill payment services, faced a real struggle because of its aging legacy application.", s2: "The traditionally implemented system failed to meet the company's prudent adaptation to the sector's dynamics; therefore, productivity was inefficient, expandability limited, and security compromised." },
    challenges: { c1: "Outdated Tech Stacks, UI/UX Issues, and Lack of Security", c2: "Increasing scalability and raising productivity are goals of modern system architecture, while coping with security is also possible.", c3: "The use of third-party fraud detection programs that involve data privacy and security questions.", c4: "Legacy APIs ruined the availability of new functions to third-party services and partners.", c5: "Inefficient API integration resulted in disintegrated transactions, data management, and system communication.", c6: "Higher production costs and lower output followed, which created a competitive disadvantage for the business." },
    solutions: { s1: "Revamped the UI/UX", s2: "Pick up correct network exchange methods and deploy solid systems as well.", s3: "Create an in-house anti-fraud software that gives you full control of your personal information.", s4: "Replace outdated APIs and develop new ones to get oneself from third-party services.", s5: "Improve API integration to simplify transaction processing, data management, and system communication.", s6: "Explore routes to grow the business and reach more markets." },
    objectives: { o1: "Improve system security and scalability & meet compliance requirements.", o2: "Secure fintech vendor’s credibility.", o3: "Provide operational efficiency and productivity gains.", o4: "Minimize operational costs involved with ineffective processes.", o5: "Identify and counter the security risks and vulnerabilities associated with outdated APIs.", o6: "Develop scalability to cater to organizational growth and expansion." },
    images : [
      {
          src: "/image/carousel-1.jpg",
          alt: "image1"
      },
      {
          src: "/image/carousel-2.jpg",
          alt: "image2"
      },
      {
          src: "/image/carousel-3.jpg",
          alt: "image3"
      },
      {
          src: "/image/carousel-4.jpg",
          alt: "image4"
      }
  ],
    industry: "Fintech", service: "Web Application", technologies: "Next Js, Node Js, React Js", description: "APIs and launch solutions like prepaid cards, Multi-currency, Charge and Credit cards, and Buy Now Pay Later.", imageBefore: "https://invozone-backend.s3.us-east-1.amazonaws.com/nymcard_854cd064ec.webp", imageUrl: "https://invozone-backend.s3.us-east-1.amazonaws.com/Group_1000006969_a47e359bb9.webp", sectors: ["Banking", "Financial Service", "Fintech", "Payments"]
  },
  {
    id: 2, title: "Nymcard", companyInfo: "A Fintect Card Issuer & Service Provider", problemDescription: { s1: "NymCard, a fintech company leading in bill payment services, faced a real struggle because of its aging legacy application.", s2: "The traditionally implemented system failed to meet the company's prudent adaptation to the sector's dynamics; therefore, productivity was inefficient, expandability limited, and security compromised." },
    challenges: { c1: "Outdated Tech Stacks, UI/UX Issues, and Lack of Security", c2: "Increasing scalability and raising productivity are goals of modern system architecture, while coping with security is also possible.", c3: "The use of third-party fraud detection programs that involve data privacy and security questions.", c4: "Legacy APIs ruined the availability of new functions to third-party services and partners.", c5: "Inefficient API integration resulted in disintegrated transactions, data management, and system communication.", c6: "Higher production costs and lower output followed, which created a competitive disadvantage for the business." },
    solutions: { s1: "Revamped the UI/UX", s2: "Pick up correct network exchange methods and deploy solid systems as well.", s3: "Create an in-house anti-fraud software that gives you full control of your personal information.", s4: "Replace outdated APIs and develop new ones to get oneself from third-party services.", s5: "Improve API integration to simplify transaction processing, data management, and system communication.", s6: "Explore routes to grow the business and reach more markets." },
    objectives: { o1: "Improve system security and scalability & meet compliance requirements.", o2: "Secure fintech vendor’s credibility.", o3: "Provide operational efficiency and productivity gains.", o4: "Minimize operational costs involved with ineffective processes.", o5: "Identify and counter the security risks and vulnerabilities associated with outdated APIs.", o6: "Develop scalability to cater to organizational growth and expansion." },
    images : [
      {
          src: "/image/carousel-1.jpg",
          alt: "image1"
      },
      {
          src: "/image/carousel-2.jpg",
          alt: "image2"
      },
      {
          src: "/image/carousel-3.jpg",
          alt: "image3"
      },
      {
          src: "/image/carousel-4.jpg",
          alt: "image4"
      }
  ],
    industry: "Fintech", service: "Web Application", technologies: "Next Js, Node Js, React Js", description: "APIs and launch solutions like prepaid cards, Multi-currency, Charge and Credit cards, and Buy Now Pay Later.", imageBefore: "https://invozone-backend.s3.us-east-1.amazonaws.com/nymcard_854cd064ec.webp", imageUrl: "https://invozone-backend.s3.us-east-1.amazonaws.com/Group_1000006969_a47e359bb9.webp", sectors: ["Banking", "Financial Service", "Fintech", "Payments"]
  },
  {
    id: 3, title: "Nymcard", companyInfo: "A Fintect Card Issuer & Service Provider", problemDescription: { s1: "NymCard, a fintech company leading in bill payment services, faced a real struggle because of its aging legacy application.", s2: "The traditionally implemented system failed to meet the company's prudent adaptation to the sector's dynamics; therefore, productivity was inefficient, expandability limited, and security compromised." },
    challenges: { c1: "Outdated Tech Stacks, UI/UX Issues, and Lack of Security", c2: "Increasing scalability and raising productivity are goals of modern system architecture, while coping with security is also possible.", c3: "The use of third-party fraud detection programs that involve data privacy and security questions.", c4: "Legacy APIs ruined the availability of new functions to third-party services and partners.", c5: "Inefficient API integration resulted in disintegrated transactions, data management, and system communication.", c6: "Higher production costs and lower output followed, which created a competitive disadvantage for the business." },
    solutions: { s1: "Revamped the UI/UX", s2: "Pick up correct network exchange methods and deploy solid systems as well.", s3: "Create an in-house anti-fraud software that gives you full control of your personal information.", s4: "Replace outdated APIs and develop new ones to get oneself from third-party services.", s5: "Improve API integration to simplify transaction processing, data management, and system communication.", s6: "Explore routes to grow the business and reach more markets." },
    objectives: { o1: "Improve system security and scalability & meet compliance requirements.", o2: "Secure fintech vendor’s credibility.", o3: "Provide operational efficiency and productivity gains.", o4: "Minimize operational costs involved with ineffective processes.", o5: "Identify and counter the security risks and vulnerabilities associated with outdated APIs.", o6: "Develop scalability to cater to organizational growth and expansion." },
    images : [
      {
          src: "/image/carousel-1.jpg",
          alt: "image1"
      },
      {
          src: "/image/carousel-2.jpg",
          alt: "image2"
      },
      {
          src: "/image/carousel-3.jpg",
          alt: "image3"
      },
      {
          src: "/image/carousel-4.jpg",
          alt: "image4"
      }
  ],
    industry: "Fintech", service: "Web Application", technologies: "Next Js, Node Js, React Js", description: "APIs and launch solutions like prepaid cards, Multi-currency, Charge and Credit cards, and Buy Now Pay Later.", imageBefore: "https://invozone-backend.s3.us-east-1.amazonaws.com/nymcard_854cd064ec.webp", imageUrl: "https://invozone-backend.s3.us-east-1.amazonaws.com/Group_1000006969_a47e359bb9.webp", sectors: ["Banking", "Financial Service", "Fintech", "Payments"]
  },
  {
    id: 4, title: "Nymcard", companyInfo: "A Fintect Card Issuer & Service Provider", problemDescription: { s1: "NymCard, a fintech company leading in bill payment services, faced a real struggle because of its aging legacy application.", s2: "The traditionally implemented system failed to meet the company's prudent adaptation to the sector's dynamics; therefore, productivity was inefficient, expandability limited, and security compromised." },
    challenges: { c1: "Outdated Tech Stacks, UI/UX Issues, and Lack of Security", c2: "Increasing scalability and raising productivity are goals of modern system architecture, while coping with security is also possible.", c3: "The use of third-party fraud detection programs that involve data privacy and security questions.", c4: "Legacy APIs ruined the availability of new functions to third-party services and partners.", c5: "Inefficient API integration resulted in disintegrated transactions, data management, and system communication.", c6: "Higher production costs and lower output followed, which created a competitive disadvantage for the business." },
    solutions: { s1: "Revamped the UI/UX", s2: "Pick up correct network exchange methods and deploy solid systems as well.", s3: "Create an in-house anti-fraud software that gives you full control of your personal information.", s4: "Replace outdated APIs and develop new ones to get oneself from third-party services.", s5: "Improve API integration to simplify transaction processing, data management, and system communication.", s6: "Explore routes to grow the business and reach more markets." },
    objectives: { o1: "Improve system security and scalability & meet compliance requirements.", o2: "Secure fintech vendor’s credibility.", o3: "Provide operational efficiency and productivity gains.", o4: "Minimize operational costs involved with ineffective processes.", o5: "Identify and counter the security risks and vulnerabilities associated with outdated APIs.", o6: "Develop scalability to cater to organizational growth and expansion." },
    images : [
      {
          src: "/image/carousel-1.jpg",
          alt: "image1"
      },
      {
          src: "/image/carousel-2.jpg",
          alt: "image2"
      },
      {
          src: "/image/carousel-3.jpg",
          alt: "image3"
      },
      {
          src: "/image/carousel-4.jpg",
          alt: "image4"
      }
  ],
    industry: "Fintech", service: "Web Application", technologies: "Next Js, Node Js, React Js", description: "APIs and launch solutions like prepaid cards, Multi-currency, Charge and Credit cards, and Buy Now Pay Later.", imageBefore: "https://invozone-backend.s3.us-east-1.amazonaws.com/nymcard_854cd064ec.webp", imageUrl: "https://invozone-backend.s3.us-east-1.amazonaws.com/Group_1000006969_a47e359bb9.webp", sectors: ["Banking", "Financial Service", "Fintech", "Payments"]
  },
  {
    id: 5, title: "Nymcard", companyInfo: "A Fintect Card Issuer & Service Provider", problemDescription: { s1: "NymCard, a fintech company leading in bill payment services, faced a real struggle because of its aging legacy application.", s2: "The traditionally implemented system failed to meet the company's prudent adaptation to the sector's dynamics; therefore, productivity was inefficient, expandability limited, and security compromised." },
    challenges: { c1: "Outdated Tech Stacks, UI/UX Issues, and Lack of Security", c2: "Increasing scalability and raising productivity are goals of modern system architecture, while coping with security is also possible.", c3: "The use of third-party fraud detection programs that involve data privacy and security questions.", c4: "Legacy APIs ruined the availability of new functions to third-party services and partners.", c5: "Inefficient API integration resulted in disintegrated transactions, data management, and system communication.", c6: "Higher production costs and lower output followed, which created a competitive disadvantage for the business." },
    solutions: { s1: "Revamped the UI/UX", s2: "Pick up correct network exchange methods and deploy solid systems as well.", s3: "Create an in-house anti-fraud software that gives you full control of your personal information.", s4: "Replace outdated APIs and develop new ones to get oneself from third-party services.", s5: "Improve API integration to simplify transaction processing, data management, and system communication.", s6: "Explore routes to grow the business and reach more markets." },
    objectives: { o1: "Improve system security and scalability & meet compliance requirements.", o2: "Secure fintech vendor’s credibility.", o3: "Provide operational efficiency and productivity gains.", o4: "Minimize operational costs involved with ineffective processes.", o5: "Identify and counter the security risks and vulnerabilities associated with outdated APIs.", o6: "Develop scalability to cater to organizational growth and expansion." },
    images : [
      {
          src: "/image/carousel-1.jpg",
          alt: "image1"
      },
      {
          src: "/image/carousel-2.jpg",
          alt: "image2"
      },
      {
          src: "/image/carousel-3.jpg",
          alt: "image3"
      },
      {
          src: "/image/carousel-4.jpg",
          alt: "image4"
      }
  ],
    industry: "Fintech", service: "Web Application", technologies: "Next Js, Node Js, React Js", description: "APIs and launch solutions like prepaid cards, Multi-currency, Charge and Credit cards, and Buy Now Pay Later.", imageBefore: "https://invozone-backend.s3.us-east-1.amazonaws.com/nymcard_854cd064ec.webp", imageUrl: "https://invozone-backend.s3.us-east-1.amazonaws.com/Group_1000006969_a47e359bb9.webp", sectors: ["Banking", "Financial Service", "Fintech", "Payments"]
  },
  {
    id: 6, title: "Nymcard", companyInfo: "A Fintect Card Issuer & Service Provider", problemDescription: { s1: "NymCard, a fintech company leading in bill payment services, faced a real struggle because of its aging legacy application.", s2: "The traditionally implemented system failed to meet the company's prudent adaptation to the sector's dynamics; therefore, productivity was inefficient, expandability limited, and security compromised." },
    challenges: { c1: "Outdated Tech Stacks, UI/UX Issues, and Lack of Security", c2: "Increasing scalability and raising productivity are goals of modern system architecture, while coping with security is also possible.", c3: "The use of third-party fraud detection programs that involve data privacy and security questions.", c4: "Legacy APIs ruined the availability of new functions to third-party services and partners.", c5: "Inefficient API integration resulted in disintegrated transactions, data management, and system communication.", c6: "Higher production costs and lower output followed, which created a competitive disadvantage for the business." },
    solutions: { s1: "Revamped the UI/UX", s2: "Pick up correct network exchange methods and deploy solid systems as well.", s3: "Create an in-house anti-fraud software that gives you full control of your personal information.", s4: "Replace outdated APIs and develop new ones to get oneself from third-party services.", s5: "Improve API integration to simplify transaction processing, data management, and system communication.", s6: "Explore routes to grow the business and reach more markets." },
    objectives: { o1: "Improve system security and scalability & meet compliance requirements.", o2: "Secure fintech vendor’s credibility.", o3: "Provide operational efficiency and productivity gains.", o4: "Minimize operational costs involved with ineffective processes.", o5: "Identify and counter the security risks and vulnerabilities associated with outdated APIs.", o6: "Develop scalability to cater to organizational growth and expansion." },
    images : [
      {
          src: "/image/carousel-1.jpg",
          alt: "image1"
      },
      {
          src: "/image/carousel-2.jpg",
          alt: "image2"
      },
      {
          src: "/image/carousel-3.jpg",
          alt: "image3"
      },
      {
          src: "/image/carousel-4.jpg",
          alt: "image4"
      }
  ],
    industry: "Fintech", service: "Web Application", technologies: "Next Js, Node Js, React Js", description: "APIs and launch solutions like prepaid cards, Multi-currency, Charge and Credit cards, and Buy Now Pay Later.", imageBefore: "https://invozone-backend.s3.us-east-1.amazonaws.com/nymcard_854cd064ec.webp", imageUrl: "https://invozone-backend.s3.us-east-1.amazonaws.com/Group_1000006969_a47e359bb9.webp", sectors: ["Banking", "Financial Service", "Fintech", "Payments"]
  },
  {
    id: 7, title: "Nymcard", companyInfo: "A Fintect Card Issuer & Service Provider", problemDescription: { s1: "NymCard, a fintech company leading in bill payment services, faced a real struggle because of its aging legacy application.", s2: "The traditionally implemented system failed to meet the company's prudent adaptation to the sector's dynamics; therefore, productivity was inefficient, expandability limited, and security compromised." },
    challenges: { c1: "Outdated Tech Stacks, UI/UX Issues, and Lack of Security", c2: "Increasing scalability and raising productivity are goals of modern system architecture, while coping with security is also possible.", c3: "The use of third-party fraud detection programs that involve data privacy and security questions.", c4: "Legacy APIs ruined the availability of new functions to third-party services and partners.", c5: "Inefficient API integration resulted in disintegrated transactions, data management, and system communication.", c6: "Higher production costs and lower output followed, which created a competitive disadvantage for the business." },
    solutions: { s1: "Revamped the UI/UX", s2: "Pick up correct network exchange methods and deploy solid systems as well.", s3: "Create an in-house anti-fraud software that gives you full control of your personal information.", s4: "Replace outdated APIs and develop new ones to get oneself from third-party services.", s5: "Improve API integration to simplify transaction processing, data management, and system communication.", s6: "Explore routes to grow the business and reach more markets." },
    objectives: { o1: "Improve system security and scalability & meet compliance requirements.", o2: "Secure fintech vendor’s credibility.", o3: "Provide operational efficiency and productivity gains.", o4: "Minimize operational costs involved with ineffective processes.", o5: "Identify and counter the security risks and vulnerabilities associated with outdated APIs.", o6: "Develop scalability to cater to organizational growth and expansion." },
    images : [
      {
          src: "/image/carousel-1.jpg",
          alt: "image1"
      },
      {
          src: "/image/carousel-2.jpg",
          alt: "image2"
      },
      {
          src: "/image/carousel-3.jpg",
          alt: "image3"
      },
      {
          src: "/image/carousel-4.jpg",
          alt: "image4"
      }
  ],
    industry: "Fintech", service: "Web Application", technologies: "Next Js, Node Js, React Js", description: "APIs and launch solutions like prepaid cards, Multi-currency, Charge and Credit cards, and Buy Now Pay Later.", imageBefore: "https://invozone-backend.s3.us-east-1.amazonaws.com/nymcard_854cd064ec.webp", imageUrl: "https://invozone-backend.s3.us-east-1.amazonaws.com/Group_1000006969_a47e359bb9.webp", sectors: ["Banking", "Financial Service", "Fintech", "Payments"]
  },
  {
    id: 8, title: "Nymcard", companyInfo: "A Fintect Card Issuer & Service Provider", problemDescription: { s1: "NymCard, a fintech company leading in bill payment services, faced a real struggle because of its aging legacy application.", s2: "The traditionally implemented system failed to meet the company's prudent adaptation to the sector's dynamics; therefore, productivity was inefficient, expandability limited, and security compromised." },
    challenges: { c1: "Outdated Tech Stacks, UI/UX Issues, and Lack of Security", c2: "Increasing scalability and raising productivity are goals of modern system architecture, while coping with security is also possible.", c3: "The use of third-party fraud detection programs that involve data privacy and security questions.", c4: "Legacy APIs ruined the availability of new functions to third-party services and partners.", c5: "Inefficient API integration resulted in disintegrated transactions, data management, and system communication.", c6: "Higher production costs and lower output followed, which created a competitive disadvantage for the business." },
    solutions: { s1: "Revamped the UI/UX", s2: "Pick up correct network exchange methods and deploy solid systems as well.", s3: "Create an in-house anti-fraud software that gives you full control of your personal information.", s4: "Replace outdated APIs and develop new ones to get oneself from third-party services.", s5: "Improve API integration to simplify transaction processing, data management, and system communication.", s6: "Explore routes to grow the business and reach more markets." },
    objectives: { o1: "Improve system security and scalability & meet compliance requirements.", o2: "Secure fintech vendor’s credibility.", o3: "Provide operational efficiency and productivity gains.", o4: "Minimize operational costs involved with ineffective processes.", o5: "Identify and counter the security risks and vulnerabilities associated with outdated APIs.", o6: "Develop scalability to cater to organizational growth and expansion." },
    images : [
      {
          src: "/image/carousel-1.jpg",
          alt: "image1"
      },
      {
          src: "/image/carousel-2.jpg",
          alt: "image2"
      },
      {
          src: "/image/carousel-3.jpg",
          alt: "image3"
      },
      {
          src: "/image/carousel-4.jpg",
          alt: "image4"
      }
  ],
    industry: "Fintech", service: "Web Application", technologies: "Next Js, Node Js, React Js", description: "APIs and launch solutions like prepaid cards, Multi-currency, Charge and Credit cards, and Buy Now Pay Later.", imageBefore: "https://invozone-backend.s3.us-east-1.amazonaws.com/nymcard_854cd064ec.webp", imageUrl: "https://invozone-backend.s3.us-east-1.amazonaws.com/Group_1000006969_a47e359bb9.webp", sectors: ["Banking", "Financial Service", "Fintech", "Payments"]
  },
];

export default function Page({ params }) {
  const projectId = parseInt(params.id, 10);
  const project = cards.find(card => card.id === projectId);

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <div className='mt-20'>
      {/* <Carousel images={ project.images} /> */}
      <Child1 project={project} />
      
      <Child2 challenges={project.challenges} />
      <Child3 solutions={project.solutions} />
      <Child4 objectives={project.objectives} />
      <Carousel images={ project.images} />
      <Child5 />
      
    </div>
  );
}
