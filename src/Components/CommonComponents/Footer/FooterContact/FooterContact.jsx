import React from "react";
import Logo from "../../Logo/Logo";

const FooterContact = () => {
  const socialIcons = [
    "Facebook.png",
    "Instagram.png",
    "Linkedin.png",
    "Twitter.png",
    "Youtube.png",
  ];
  return (
    <div className="flex flex-col gap-10">
      <div>
        <Logo />
        <p className="pt-3 text-xl font-bold">Navytech</p>
      </div>

      <div className="font-Poppins">
        <p>hello@navytech.com</p>
        <p>Phone : +01 23456789</p>
      </div>

      <div className="flex">
        {socialIcons.map((icon, idx) => (
          <div className="size-8" key={idx}>
            <img src={`./icons/SocialIcons/${icon}`} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterContact;
