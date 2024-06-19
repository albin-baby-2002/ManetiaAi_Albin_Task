import React from "react";

const ContactHeadAndNav = () => {
  const companies = [
    "samsung.png",
    "visma.png",
    "bolt.png",
    "aws.png",
    "accenture.png",
    "at&t.png",
  ];

  return (
    <div className="w-1/2 bg-light-gray py-10 pr-7 ps-10 xl:ps-20">
      <div className="flex items-center gap-4">
        <div className="size-3">
          <img src="./icons/Contact/arrowBack.png" alt="" />
        </div>
        <p className="text-sm font-medium">Home</p>
      </div>

      <div className="mt-6">
        <p className="font-Plus-Jakarta-Sans text-4xl font-semibold">Contact</p>
      </div>

      <div className="flex items-center gap-4 py-12">
        <div className="size-8">
          <img src="./icons/Contact/Email.png" alt="" />
        </div>
        <p className="font-Inter text-sm font-semibold">CONTACT SALES</p>
      </div>

      <h1 className="font-Plus-Jakarta-Sans text-5xl font-bold">
        Talk to our account expert
      </h1>

      <p className="py-5 text-sm">
        Have questions about integrating our APIs? Fill out the form and a
        senior web expert will be in touch shortly.
      </p>

      <p className="text-blue-lotus pb-5 text-sm font-bold">
        Join 6,000+ forward-thinking companies:
      </p>

      <div className=" grid grid-cols-6 gap-6">
        {companies.map((company, idx) => (
          <div className="h-7 flex justify-center  " key={idx}>
            <img src={`./icons/Contact/${company}`}  className="  h-full  object-contain" alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactHeadAndNav;
