import React, { useState } from "react";
import {
  HeroBg,
  HeroContainer,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroSectionStyles";
import dataVideo from "../../videos/dataVideo.mp4";
import { ScrollButton } from "../scroll-button/ScrollButtonStyles";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={dataVideo} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Lorem ipsum dolor sit amet.</HeroH1>
        <HeroP>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ipsam
          aperiam minima error aliquid odio.
        </HeroP>
        <HeroBtnWrapper>
          <ScrollButton
            to="signUp"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            smooth={true} duration={500} spy={true} exact='true' offset={-80}
          >
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}{" "}
          </ScrollButton>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
