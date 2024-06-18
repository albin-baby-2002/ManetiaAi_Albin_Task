import React from "react";

const Subscribe = () => {
  return (
    <div className="flex flex-col gap-6">
      <p className="text-xl font-bold">Subscribe</p>

      <div>
        <div className=" flex gap-5 bg-white/10 py-2 px-4 rounded-xl">
          <div className="flex items-center gap-2">
            <div className="size-5">
              <img src="./icons/Envelope.png" alt="" />
            </div>
            <p>name@domain.com</p>
          </div>
          <div>
            <button className="bg-navy-blue px-16 py-4 rounded-xl">
              <p>send</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
