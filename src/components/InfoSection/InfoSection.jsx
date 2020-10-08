import React from "react";
import { ScrollButton } from "../scroll-button/ScrollButtonStyles";

const InfoSection = () => {
  return (
    <>
      <InfoContainer id={id}>
        <InfoWrapper>
          <InfoRow>
            <Column1>
              <TextWrapper>
                <TopLine>Top Line</TopLine>
                <Heading>Heading</Heading>
                <Subtitle>Subtitle</Subtitle>
                <BtnWrap>
                  <ScrollButton>Button</ScrollButton>
                </BtnWrap>
              </TextWrapper>
            </Column1>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
