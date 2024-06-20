import React from 'react'

const ServicesCard = ({service}) => {
  return (
    <div
      
      className="mx-auto flex max-w-[450px] flex-col gap-4 border-2 border-brigh-blue px-5 pb-10 pt-6 hover:bg-brigh-blue sm:max-w-none"
    >
      <div className="items- flex justify-center px-3 py-3">
        <img
          src={`./home/Services/${service.img}`}
          className="max-w-12 object-contain lg:max-w-24 xl:max-w-32"
          alt=""
        />
      </div>

      <div className="flex flex-col gap-4">
        <p className="text-lg font-semibold sm:text-xl xl:text-2xl">
          {service.title}
        </p>
        <p className="text-xs sm:text-sm">{service.description}</p>
      </div>

      <div className="flex items-center justify-center">
        <p className="text-sm text-navy-blue">View Details</p>
        <div className="size-5 xl:size-6">
          <img src="./icons/CaretRight.png" alt="" className="object-contain" />
        </div>
      </div>
    </div>
  );
}

export default ServicesCard
