import React from "react";

const CenterNav = () => {
  const links = [ "Services", "Portfolio", "About us", "Testimonial"];

  return (
    <div className="hidden items-center gap-6 text-base md:flex lg:gap-10 xl:text-xl">
     {links.map((link,idx)=>(
      <p key={idx}>{link}</p>
     ))}
      <div className="size-5 xl:size-6">
        <img src="./icons/Search.png" alt="" className="object-contain" />
      </div>
    </div>
  );
};

export default CenterNav;
