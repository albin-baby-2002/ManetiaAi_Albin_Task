import React from 'react'
import { Link } from 'react-router-dom';

const TalkToUs = () => {
  return (
    <Link to={'/contact'}>
      <div className=" hidden md:flex items-center gap-3 rounded-lg border-2 px-6 py-2 text-base hover:cursor-pointer xl:px-8 xl:py-3">
        <div className="size-5 xl:size-6 hidden lg:block">
          <img src="./icons/phone.png" alt="" className="object-contain" />
        </div>
        <p className=''>Talk To Us</p>
      </div>
    </Link>
  );
}

export default TalkToUs
