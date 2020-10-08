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
          <Button to="signUp" onMouseEnter={onHover} onMouseLeave={onHover}>
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}{" "}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
