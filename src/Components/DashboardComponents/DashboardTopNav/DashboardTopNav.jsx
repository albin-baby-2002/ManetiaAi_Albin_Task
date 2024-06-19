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
        <div className="size-6">
          <img src="./icons/Dashboard/Bell.png"  className="object-contain w-full h-full"alt="" />
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
