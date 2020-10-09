import React, { useState } from "react";
import HeroSection from "../components/hero-section/HeroSection";
import {
  aboutObj,
  discoverObj,
  signUpObj,
} from "../components/InfoSection/data";
import InfoSection from "../components/InfoSection/InfoSection";
import Navbar from "../components/navbar/Navbar";
import Services from "../components/services/Services";
import Sidebar from "../components/sidebar/Sidebar";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    // set the state to go from false to true or vice versa
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...aboutObj} />
      <InfoSection {...discoverObj} />
      <Services />
      <InfoSection {...signUpObj} />
    </>
  );
};

export default HomePage;
