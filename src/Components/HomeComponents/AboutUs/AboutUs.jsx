import React from "react";
import Container from "../../uiCustom/Container";

const AboutUs = () => {
  return (
    <div className="font-Inter">
      <Container>
        <div className="flex flex-col gap-14 py-14 md:gap-16 md:py-16 xl:gap-20 xl:py-20">
          <div className="flex flex-col items-center justify-center">
            <p className="text-gray-500 md:text-lg xl:text-xl">About Us</p>
            <p className="text-2xl font-semibold md:text-3xl">
              Why we are best
            </p>
          </div>

          <div className="flex gap-10">
            <div className="hidden h-[400px] w-1/2 gap-2 md:flex xl:h-[500px]">
              <div className="flex h-full w-1/2 flex-col justify-between gap-2">
                <div className="h-[68%]">
                  <img
                    src="./home/AboutUs/F3.png"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="h-[32%]">
                  <img
                    src="./home/AboutUs/F1.png"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <div className="h-full w-1/2">
                <div className="h-full">
                  <img
                    src="./home/AboutUs/F2.png"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-7 md:w-1/2 xl:gap-8">
              <p className="text-center text-sm md:text-base md:text-left xl:text-lg">
                Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit
                dolor fringilla volutpat lectus amet. Integer sed pretium odio
                lectus at malesuada sed eget nunc. Viverra malesuada viverra id
                vel tortor dui adipiscing. Bibendum cras fringilla amet
                suspendisse. Duis mattis hac urna fames in ante.
              </p>

              <div className="flex gap-3">
                <div className="flex size-16 items-center">
                  <img src="./icons/About/Eye.png" alt="" />
                </div>
                <div className="flex flex-col">
                  <p className="text-lg font-bold">Our Vision</p>
                  <p className="text-sm xl:text-lg">
                    Lorem ipsum dolor sit amet consectetur. Ut elementum ac eget
                    at. Id et at dui arcu risus.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex size-16 items-center">
                  <img src="./icons/About/Target.png" alt="" />
                </div>
                <div className="flex flex-col">
                  <p className="text-lg font-bold">Our Mission</p>
                  <p className="text-sm xl:text-lg">
                    Lorem ipsum dolor sit amet consectetur. Ut elementum ac eget
                    at. Id et at dui arcu risus.
                  </p>
                </div>
              </div>

              <div className="flex justify-center md:justify-start mt-4 md:mt-0">
                <button className="flex items-center gap-6 rounded-2xl bg-navy-blue px-10 py-4 text-white">
                  <p className="text-sm md:text-base">Read more</p>
                  <div className="flex size-3 md:size-5 items-center xl:size-6">
                    <img
                      src="./icons/ArrowRight.png"
                      alt=""
                      className="object-contain"
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;
