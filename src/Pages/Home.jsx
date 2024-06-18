import React from 'react'
import Container from '../Components/UIcomponets/Container'
import { FaBars } from 'react-icons/fa'
import Header from '../Components/CommonComponents/Header/Header'
import HeroSection from '../Components/HomeComponents/HeroSection/HeroSection'
import TrustedBy from '../Components/HomeComponents/TrustedBy/TrustedBy'
import OurServices from '../Components/HomeComponents/OurServices/OurServices'
import Portfolio from '../Components/HomeComponents/Portfolio/Portfolio'
import AboutUs from '../Components/HomeComponents/AboutUs/AboutUs'
import Testimonial from '../Components/HomeComponents/Testimonial/Testimonial'
import Articles from '../Components/HomeComponents/Articles/Articles'
import Footer from '../Components/CommonComponents/Footer/Footer'

const Home = () => {
  return (
    <div>
      
      <Header/>
      <HeroSection/>
      <TrustedBy/>
      <OurServices/>
      <Portfolio/>
      <AboutUs/>
      <Testimonial/>
      <Articles/>
      <Footer/>
    </div>
  
  )
}

export default Home
