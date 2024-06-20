import React from "react";

const Pitch = () => {
  return (
    <div className=" lg:w-1/2">
      {/* pitch text */}

      <div className="flex flex-col gap-8 lg:gap-4">
        <p className="text-center font-Outfit text-4xl sm:text-5xl font-medium leading-[1.2] lg:text-left md:text-6xl lg:text-[50px] xl:text-[64px]">
          #1 Worldwide Digital Solution Agency
        </p>
        <p className="text-center text-sm lg:text-left md:mx-auto md:w-4/6 lg:w-auto  md:text-base xl:text-xl">
          Revolutionize your global digital strategy with the #1 Worldwide
          Digital Solution Agency, pioneering innovative solutions for
          unparalleled success.
        </p>
      </div>

      {/* Book a call */}

      <div className="flex justify-center py-10 lg:justify-start">
        <button className="flex gap-4 rounded-2xl bg-navy-blue px-10 py-3 md:px-14 md:py-5">
          <div className="size-7 xl:size-8">
            <img src="./icons/phone.png" alt="" className="object-contain" />
          </div>
          <p className="font-Inter text-lg xl:text-2xl">Book a call</p>
        </button>
      </div>

      {/* achievements */}

      <div className="mt-5  flex justify-center lg:justify-start gap-4 font-Inter">
        <div className="rounded-2xl bg-gradient-to-r from-white/10 from-10% via-white via-50% to-white/10 to-100%">
          <div className="my-[1px] rounded-2xl bg-dark-blue">
            <div className="flex flex-col items-center gap-2 rounded-2xl bg-white/10 px-10 sm:px-14 md:px-16 lg:px-4 py-3 xl:px-10">
              <p className="z-10 text-sm sm:text-lg font-semibold text-white lg:text-2xl xl:text-3xl">
                75K+
              </p>
              <p className="hidden  lg:block lg:text-xs">
                Project Completed
              </p>
              <p className="text-[10px] lg:hidden xl:text-xs">Projects</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-gradient-to-r from-white/10 from-10% via-white via-50% to-white/10 to-100%">
          <div className="my-[1px] rounded-2xl bg-dark-blue">
            <div className="flex flex-col items-center gap-2 rounded-2xl bg-white/10 px-10 sm:px-14 md:px-16 lg:px-4 py-3 xl:px-10">
              <p className="z-10 text-sm sm:text-lg font-semibold text-white lg:text-2xl xl:text-3xl">
                20+
              </p>

              <p className="hidden  lg:block lg:text-xs">
                Years of Experience
              </p>
              <p className="text-[10px] lg:hidden xl:text-xs">Years</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-gradient-to-r from-white/10 from-10% via-white via-50% to-white/10 to-100%">
          <div className="my-[1px] rounded-2xl bg-dark-blue">
            <div className="flex flex-col items-center gap-2 rounded-2xl bg-white/10 px-10 sm:px-14 md:px-16 lg:px-4 py-3 xl:px-10">
              <p className="z-10 text-sm sm:text-lg font-semibold text-white lg:text-2xl xl:text-3xl">
                400+
              </p>
              <p className="hidden  lg:block lg:text-xs">
                Clients Worldwide
              </p>
              <p className="text-[10px] lg:hidden xl:text-xs">Clients</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pitch;
