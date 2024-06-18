import React from "react";

const Pitch = () => {
  return (
    <div className=" w-1/2 ">
      {/* pitch text */}

      <div className="flex flex-col gap-4">
        <p className="font-Outfit text-[50px]  font-medium xl:text-[64px] leading-[1.2]">
          #1 Worldwide Digital Solution Agency
        </p>
        <p className="lg:text-base xl:text-xl">
          Revolutionize your global digital strategy with the #1 Worldwide
          Digital Solution Agency, pioneering innovative solutions for
          unparalleled success.
        </p>
      </div>

      {/* Book a call */}

      <div className="py-10">
        <button className="flex gap-4 rounded-2xl bg-navy-blue px-14 py-5 ">
          <div className="size-7 xl:size-8">
            <img src="./icons/phone.png" alt="" className="object-contain" />
          </div>
          <p className="font-Inter text-lg xl:text-2xl">Book a call</p>
        </button>
      </div>

      {/* achievements */}

      <div className="flex gap-4 font-Inter mt-5">
        <div className="rounded-2xl bg-gradient-to-r from-white/10 from-10% via-white via-50% to-white/10 to-100%">
          <div className="my-[1px] rounded-2xl bg-dark-blue">
            <div className="flex flex-col items-center gap-2 rounded-2xl bg-white/10 px-9 xl:px-10 py-3">
              <p className="z-10 text-2xl font-semibold text-white xl:text-3xl">
                75K+
              </p>
              <p className=" text-[10px] xl:text-xs">Project Completed</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-gradient-to-r from-white/10 from-10% via-white via-50% to-white/10 to-100%">
          <div className="my-[1px] rounded-2xl bg-dark-blue">
            <div className="flex flex-col items-center gap-2 rounded-2xl bg-white/10 px-9 xl:px-10 py-3">
              <p className="z-10 text-2xl font-semibold text-white xl:text-3xl">
                20+
              </p>
              <p className=" text-[10px] xl:text-xs">Years of Experience</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-gradient-to-r from-white/10 from-10% via-white via-50% to-white/10 to-100%">
          <div className="my-[1px] rounded-2xl bg-dark-blue">
            <div className="flex flex-col items-center gap-2 rounded-2xl bg-white/10 px-9 xl:px-10 py-3">
              <p className="z-10 text-2xl font-semibold text-white xl:text-3xl">
                400+
              </p>
              <p className=" text-[10px] xl:text-xs">Clients Worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pitch;
