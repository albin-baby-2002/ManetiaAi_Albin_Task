import React from "react";
import Pitch from "./Pitch/Pitch";
import Container from "../../uiCustom/Container";
import HeroImg from "./HeroImg/HeroImg";

const HeroSection = () => {
  return (
    <div className="bg-dark-blue text-white">
      <Container>
        <div className="flex items-center justify-between py-20">
          <Pitch />
          <HeroImg />
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
