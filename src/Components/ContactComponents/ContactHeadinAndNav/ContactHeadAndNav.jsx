import React from 'react'

const ContactHeadAndNav = () => {
  return (
    <div className="w-1/2 bg-light-gray py-10 ps-10">
      <div className="flex items-center gap-4">
        <div className="size-3">
          <img src="./icons/Contact/arrowBack.png" alt="" />
        </div>
        <p className="text-sm font-medium">Home</p>
      </div>
      
      <div className=' mt-6'>
        <p className=' text-4xl font-semibold font-Plus-Jakarta-Sans'>Contact</p>
      </div>
    </div>
  );
}

export default ContactHeadAndNav
