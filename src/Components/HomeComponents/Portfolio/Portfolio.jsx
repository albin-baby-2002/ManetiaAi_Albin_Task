import React from "react";
import Container from "../../uiCustom/Container";

const Portfolio = () => {
  const frames = [
    "Frame1.png",
    "Frame2.png",
    "Frame3.png",
    "Frame4.png",
    "Frame5.png",
    "Frame6.png",
  ];

  return (
    <div className="bg-dark-blue font-Inter">
      <Container>
        <div className="flex flex-col gap-14 py-14 md:gap-16 md:py-16 xl:gap-20 xl:py-20">
          <div className="flex flex-col items-center justify-center">
            <p className="text-gray-500 md:text-lg xl:text-xl">Portfolio</p>
            <p className="text-2xl font-semibold text-white md:text-3xl">
              Our Previous Works
            </p>
          </div>

          <div className="grid grid-cols-3 grid-rows-2 gap-2 sm:gap-4 md:gap-8 ">
            {frames.map((frame, idx) => (
              <div className=" " key={idx}>
                <img
                  src={`./home/Portfolio/${frame}`}
                  className="object-contain"
                  alt=""
                />
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center">
            <button className="flex items-center gap-6 rounded-2xl bg-navy-blue px-10 py-4 text-white">
              <p className=" text-sm md:text-base"> View more</p>
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
      </Container>
    </div>
  );
};

export default Portfolio;
