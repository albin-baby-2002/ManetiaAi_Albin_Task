import React from "react";
import FooterContact from "./FooterContact/FooterContact";
import Container from "../../uiCustom/Container";
import QuickLinks from "./QuickLinks/QuickLinks";
import ResourcesLinks from "./ResourcesLinks/ResourcesLinks";
import Subscribe from "./Subscribe/Subscribe";

const Footer = () => {
  return (
    <div className="bg-dark-blue text-white">
      <Container>
        <div className="flex flex-col justify-between  gap-14 py-14 font-Inter md:flex-row md:gap-0  md:py-16 xl:gap-20 xl:py-20">
          <FooterContact />
          <QuickLinks />
          <ResourcesLinks />
          <Subscribe />
        </div>
      </Container>
    </div>
  );
};

export default Footer;
