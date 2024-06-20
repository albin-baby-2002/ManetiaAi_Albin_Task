import React from "react";
import Header from "../components/CommonComponents/Header/Header";
import HeroSection from "../components/HomeComponents/HeroSection/HeroSection";
import TrustedBy from "../components/HomeComponents/TrustedBy/TrustedBy";
import OurServices from "../components/HomeComponents/OurServices/OurServices";
import Portfolio from "../components/HomeComponents/Portfolio/Portfolio";
import AboutUs from "../components/HomeComponents/AboutUs/AboutUs";
import Testimonial from "../components/HomeComponents/Testimonial/Testimonial";
import Articles from "../components/HomeComponents/Articles/Articles";
import Footer from "../components/CommonComponents/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <TrustedBy />
      <OurServices />
      <Portfolio />
      <AboutUs />
      <Testimonial />
      <Articles />
      <Footer />
    </div>
  );
};

export default Home;
