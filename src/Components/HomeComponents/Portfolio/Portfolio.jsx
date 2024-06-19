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
    <div className="bg-dark-blue py-20 font-Inter">
      <Container>
        <div className="flex flex-col gap-20">
          <div className="flex flex-col items-center justify-center text-white">
            <p className="text-lg text-gray-500 xl:text-xl">Portfolio</p>
            <p className="text-3xl font-semibold">Our Previous Works</p>
          </div>

          <div className="grid grid-cols-3 grid-rows-2 gap-x-8 gap-y-8">
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
              <p>View more</p>
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
      </Container>
    </div>
  );
};

export default Portfolio;
