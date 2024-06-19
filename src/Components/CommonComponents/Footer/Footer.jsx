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
        <div className="flex justify-between py-20 font-Inter">
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
