import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

const MobileNav = () => {
  const links = ["Services", "Portfolio", "About us", "Testimonial"];

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

          {links.map((link, idx) => (
            <p key={idx} className="flex items-center py-6 hover:bg-gray-200">
              {link}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileNav;
