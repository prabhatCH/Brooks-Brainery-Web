import React from "react";
import { HomeContainer, Logo, HomeHeading } from "./HomeElement";
import bg from "../../assets/bg.jpg";

const HomeComponent = () => {
  return (
    <HomeContainer>
      <Logo src={bg} alt="bg" />
      <HomeHeading>Free opportunities for high-schoolers</HomeHeading>
    </HomeContainer>
  );
};

export default HomeComponent;
