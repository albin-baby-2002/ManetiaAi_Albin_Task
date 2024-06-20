import React from "react";
import Container from "../../uiCustom/Container";

const TrustedBy = () => {
  const companies = ["Google", "Canva", "Amazon", "Sketch"];

  return (
    <div className="bg-navy-blue text-white">
      <Container>
        <div className="flex justify-between py-4 sm:py-6 xl:py-10">
          <div>
            <p className="text-xs sm:text-base  md:text-xl text-white/70 xl:text-2xl">Trusted by</p>
            <p className=" text-sm sm:text-lg md:text-2xl font-semibold xl:text-3xl">Top Companies</p>
          </div>

          <div className="grid w-2/3 grid-cols-4">
            {companies.map((val, idx) => (
              <div key={idx} className=" flex justify-center px-3 py-3">
                <img
                  src={`./home/TrustedCompanies/${val}.png`}
                  className=" max-w-12 sm:max-w-20  lg:max-w-24 object-contain xl:max-w-32"
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TrustedBy;
