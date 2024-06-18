import React from "react";
import Container from "../../UIcomponets/Container";

const AboutUs = () => {
  return (
    <div className="py-20 font-Inter">
      <Container>
        <div className="flex flex-col gap-20">
          <div className="flex flex-col items-center justify-center">
            <p className="text-lg text-gray-500 xl:text-xl">About Us</p>
            <p className="text-3xl font-semibold">Why we are best</p>
          </div>

          <div className="flex gap-10">
            <div className="flex h-[400px] w-1/2 gap-2 xl:h-[500px]">
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

            <div className="flex w-1/2 flex-col gap-7 xl:gap-8">
              <p className="text-base xl:text-lg">
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

              <div>
                <button className="flex items-center gap-6 rounded-2xl bg-navy-blue px-10 py-4 text-white">
                  <p>Read more</p>
                  <div className="flex size-5 items-center xl:size-6">
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
