import React from 'react'

const QuickLinks = () => {
  const links = [
  
    "Services",
    "Portfolio",
    "About us",
    "Testimonial",
  ];

  return (
    <div className=' flex flex-col gap-6'>
      <p className=' text-xl font-bold'>Quick Links</p>
      <div className=' flex flex-col gap-2'>
        {links.map((val,idx)=>(
          <p>{val}</p>
        ))}
      </div>
    </div>
  )
}

export default QuickLinks
