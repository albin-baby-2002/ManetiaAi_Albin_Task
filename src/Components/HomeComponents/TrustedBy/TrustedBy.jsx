import React from "react";
import Container from "../../UIcomponets/Container";

const TrustedBy = () => {
    
    const companies = ['Google','Canva','Amazon','Sketch'];
    
  return (
    <div className="bg-navy-blue text-white">
      <Container>
        <div className="flex justify-between py-6 xl:py-10">
          <div>
            <p className="text-xl text-white/70 xl:text-2xl">Trusted by</p>
            <p className="text-2xl font-semibold xl:text-3xl">Top Companies</p>
          </div>

          <div className="grid w-2/3 grid-cols-4">
            {companies.map((val, idx) => (
              <div key={idx} className=" flex items- justify-center px-3 py-3">
                <img
                  src={`./home/TrustedCompanies/${val}.png`}
                  className="object-contain max-w-24 xl:max-w-32"
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
