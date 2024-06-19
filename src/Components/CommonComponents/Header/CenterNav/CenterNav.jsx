import React from "react";

const CenterNav = () => {
  return (
    <div className=" hidden sm:flex items-center gap-10  text-base xl:text-xl">
      <p>Services</p>
      <p>Portfolio</p>
      <p>About us</p>
      <p>Testimonial</p>
      <div className=" size-5 xl:size-6">
        <img src="./icons/Search.png" alt="" className="object-contain" />
      </div>
    </div>
  );
};

export default CenterNav;
