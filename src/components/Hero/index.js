import React from "react";
import {
  HeroContainer,
  HeroHeading,
  HeroPara,
  RightArrow,
} from "./HeroElement";

const Hero = () => {
  return (
    <HeroContainer>
      <HeroHeading>Join as a</HeroHeading>
      <HeroHeading style={{ paddingTop: 0 }}>student</HeroHeading>
      <HeroPara>
        Brooks Brainery is going to provide students with a big bucket of
        programs to choose from. A student can even opt out of the program
        anytime, or switch programs.
      </HeroPara>
      <RightArrow />
    </HeroContainer>
  );
};

export default Hero;
