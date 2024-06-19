import React, { useState } from "react";
import { FaArrowLeft, FaBars } from "react-icons/fa";
import TalkToUs from "../TalkToUs/TalkToUs";
import { Link } from "react-router-dom";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen((val) => !val);
  };

  return (
    <div className="md:hidden">
      <FaBars className="cursor-pointer" size={30} onClick={toggle} />

      {open && (
        <div className="fixed left-0 top-0 z-30 h-screen w-screen rounded-md bg-dark-blue px-10 py-10 text-center text-xl text-white shadow-md">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-2xl font-bold">Navytech</p>

            <p
              onClick={toggle}
              className="cursor-pointer font-Outfit text-3xl font-bold"
            >
              X
            </p>
          </div>

          <p className="flex items-center py-6 hover:bg-gray-200">Services</p>
          <p className="flex items-center py-6 hover:bg-gray-200">Portfolio</p>
          <p className="flex items-center py-6 hover:bg-gray-200">About us</p>
          <p className="flex items-center py-6 hover:bg-gray-200">
            Testimonial
          </p>

        
        </div>
      )}
    </div>
  );
};

export default MobileNav;
