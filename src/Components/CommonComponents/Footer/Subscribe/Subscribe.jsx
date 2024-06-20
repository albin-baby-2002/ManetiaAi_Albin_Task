import React from "react";

const Subscribe = () => {
  return (
    <div className="flex flex-col gap-6">
      <p className=" text-lg lg:text-xl font-bold">Subscribe</p>

      <div>
        <div className="flex justify-between max-w-96 gap-5 rounded-xl bg-white/10 px-4 py-2">
          <div className="flex items-center gap-2">
            <div className="size-5 md:hidden lg:flex">
              <img src="./icons/Envelope.png" alt="" />
            </div>
            <p className="text-sm md:text-xs lg:text-base">name@domain.com</p>
          </div>
          <div>
            <button className="rounded-xl bg-navy-blue px-11 md:px-6 lg:px-16 py-4 md:py-2 lg:py-4">
              <p className="text-sm md:text-xs lg:text-base">send</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
