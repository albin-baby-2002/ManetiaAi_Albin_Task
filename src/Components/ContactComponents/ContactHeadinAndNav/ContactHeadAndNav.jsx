import React from "react";
import { Link } from "react-router-dom";

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
    <div className=" w-2/5 md:w-[45%] lg:w-1/2 bg-light-gray min-h-screen py-10  px-5 md:px-7 lg:ps-10 xl:ps-20">
      <Link to={"/"}>
        <div className="flex items-center gap-4">
          <div className="size-3">
            <img src="./icons/Contact/arrowBack.png" alt="" />
          </div>
          <p className="text-sm font-medium">Home</p>
        </div>
      </Link>

      <div className="mt-6">
        <p className="font-Plus-Jakarta-Sans text-xl lg:text-3xl xl:text-4xl font-semibold ">Contact</p>
      </div>

      <div className="flex items-center gap-4 py-8 lg:py-12">
        <div className=" size-6 lg:size-8">
          <img src="./icons/Contact/Email.png" alt="" />
        </div>
        <p className="font-Inter text-xs lg:text-sm font-semibold">CONTACT SALES</p>
      </div>

      <h1 className="font-Plus-Jakarta-Sans text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold">
        Talk to our account expert
      </h1>

      <p className="py-5 text-xs lg:text-sm">
        Have questions about integrating our APIs? Fill out the form and a
        senior web expert will be in touch shortly.
      </p>

      <p className="pb-5 text-xs lg:text-sm font-bold text-blue-lotus">
        Join 6,000+ forward-thinking companies:
      </p>

      <div className="grid grid-cols-6 gap-6">
        {companies.map((company, idx) => (
          <div className="flex h-5 lg:h-7 justify-center" key={idx}>
            <img
              src={`./icons/Contact/${company}`}
              className="h-full object-contain"
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactHeadAndNav;
