import React from 'react'

const DashboardTopNav
 = () => {
  return (
    <div className=" flex justify-between  items-center  py-3">
      <div className="size-9">
        <img src="./icons/Search2.png" alt="" />
      </div>

      <div className=' flex gap-6'>
        <div className="size-6">
          <img src="./icons/Dashboard/Flag.png"  className="object-contain w-full h-full"alt="" />
        </div>
        <div className=" relative size-6">
          <img src="./icons/Dashboard/Bell.png"  className="object-contain w-full h-full"alt="" />
          <p className=' bg-red-500 absolute  -top-2 -right-2 px-[6.5px] py-[2px]  rounded-full flex items-center justify-center text-[10px] text-white'>
            2
          </p>
        </div>
        <div className="size-6">
          <img src="./icons/Dashboard/Users.png" className="object-contain w-full h-full" alt="" />
        </div>
        <div className="size-6">
          <img src="./icons/Dashboard/Profile.png" className="object-contain w-full h-full" alt="" />
        </div>
      </div>
    </div>
  );
}

export default DashboardTopNav;
