import React from "react";
import {
  HeroContainer,
  HeroHeading,
  HeroPara,
  RightArrow,
} from "./HeroElement";

const Hero = ({ firstH, secondH, para, bgColor }) => {
  return (
    <HeroContainer style={{ background: `${bgColor}` }}>
      <HeroHeading>{firstH}</HeroHeading>
      <HeroHeading style={{ paddingTop: 0 }}>{secondH}</HeroHeading>
      <HeroPara>{para}</HeroPara>
      <RightArrow />
    </HeroContainer>
  );
};

export default Hero;
