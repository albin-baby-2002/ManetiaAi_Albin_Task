import React from "react";
import Container from "../../uiCustom/Container";

const Testimonial = () => {
  return (
    <div className="bg-brigh-blue font-Inter">
      <Container>
        <div className="flex flex-col gap-14 py-14 md:gap-16 md:py-16 xl:gap-20 xl:py-20">
          <div className="flex flex-col items-center justify-center">
            <p className="text-gray-500 md:text-lg xl:text-xl">Testimonial</p>
            <p className="text-2xl font-semibold md:text-3xl">
              What our clients say
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="flex flex-col items-center gap-4 bg-white px-10 py-6">
              <div className="flex size-9 items-center">
                <img
                  src="./icons/Testimonial/Quotes.png"
                  alt=""
                  className="object-contain"
                />
              </div>

              <p className="text-center text-sm 2xl:text-lg sm:text-base">
                Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit
                dolor fringilla volutpat lectus amet. Integer sed pretium odio
                lectus at malesuada sed eget nunc. Viverra malesuada viverra id
                vel tortor dui adipiscing.
              </p>

              <div className="flex gap-3">
                <div className="size-10 sm:size-14 md:size-16">
                  <img src="./home/Testimonial/Client1.png" alt="" />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-sm font-bold md:text-base">Michael Wong</p>
                  <div className="w-20 sm:w-24">
                    <img src="./icons/Testimonial/rating1.png" alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 bg-white px-10 py-6">
              <div className="flex size-9 items-center">
                <img
                  src="./icons/Testimonial/Quotes.png"
                  alt=""
                  className="object-contain"
                />
              </div>

              <p className="text-center text-sm 2xl:text-lg sm:text-base">
                Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit
                dolor fringilla volutpat lectus amet. Integer sed pretium odio
                lectus at malesuada sed eget nunc. Viverra malesuada viverra id
                vel tortor dui adipiscing.
              </p>

              <div className="flex gap-3">
                <div className="size-10 sm:size-14 md:size-16">
                  <img src="./home/Testimonial/Client2.png" alt="" />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-sm font-bold md:text-base">Avril Song</p>
                  <div className="w-20 sm:w-24">
                    <img src="./icons/Testimonial/rating2.png" alt="" />
                  </div>
                </div>
              </div>
            </div>

         
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Testimonial;
