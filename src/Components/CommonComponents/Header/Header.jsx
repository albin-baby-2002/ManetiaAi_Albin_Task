import React from "react";
import Container from "../../uiCustom/Container";
import Logo from "../Logo/Logo";
import CenterNav from "./CenterNav/CenterNav";
import TalkToUs from "./TalkToUs/TalkToUs";

const Header = () => {
  return (
    <div className="bg-dark-blue text-white">
      <Container>
        <div className="flex items-center justify-between py-6 font-Outfit">
          <Logo />
          <CenterNav />
          <TalkToUs />
        </div>
      </Container>
    </div>
  );
};

export default Header;
