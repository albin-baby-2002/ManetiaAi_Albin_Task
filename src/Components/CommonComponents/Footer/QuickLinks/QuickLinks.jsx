import React from 'react'

const QuickLinks = () => {
  const links = [
  
    "Services",
    "Portfolio",
    "About us",
    "Testimonial",
  ];

  return (
    <div className="flex flex-col gap-6">
      <p className="text-lg font-bold md:text-center lg:text-left lg:text-xl">
        Quick Links
      </p>
      <div className="flex flex-col gap-2 md:text-center lg:text-left">
        {links.map((val, idx) => (
          <p key={idx}>{val}</p>
        ))}
      </div>
    </div>
  );
}

export default QuickLinks
