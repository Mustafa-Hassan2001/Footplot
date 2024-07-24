// Commons/SocialHandles/index.jsx
import React from 'react';
import './SocialHandles.css';
import { FaInstagram, FaTwitter, FaYoutube, FaFacebookSquare } from 'react-icons/fa';

const SocialHandles = () => {
  const data = [
    {
      name: "Instagram",
      icon: <FaInstagram />,
      link: "#",
    },
    {
      name: "Facebook",
      icon: <FaFacebookSquare />,
      link: "#",
    },
    {
      name: "Twitter",
      icon: <FaTwitter />, // Corrected icon name
      link: "#",
    },
    {
      name: "YouTube",
      icon: <FaYoutube />,
      link: "#",
    }
  ];

  return (
    <div className="handles-container">
      {data.map((handle, index) => (
        <a href={handle.link} target="_blank" className="flex-center icon-wrapper" key={index}>
          {handle.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialHandles;
