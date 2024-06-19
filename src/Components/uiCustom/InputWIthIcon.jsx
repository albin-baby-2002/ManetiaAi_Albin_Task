import React from 'react'
import { Input } from '../ui/input';

const InputWIthIcon = () => {
  return (
    <div className="flex  rounded-lg border px-2 py-1">
      <div className='flex items-center '>
        <div className="size-8">
          <img src="./icons/Search2.png" alt="" />
        </div>
        
      </div>

      <input className="ouline-none text-sm focus:outline-none w-full" placeholder='Search Customers'  type="text" />
      
    </div>
  );
}

export default InputWIthIcon
