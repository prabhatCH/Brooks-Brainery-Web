import React from "react";
import HomeComponent from "../components/HomeComponent/";
import Hero from "../components/Hero/";
import {
  HerosContainer,
  OfferHerosContainer,
  OfferHeading,
} from "../components/Hero/HeroElement";
import { HomeData, offerData } from "./data/data";

const Homepage = () => {
  const mappedList = HomeData.map((el, i) => {
    return (
      <Hero
        firstH={el.firstH}
        secondH={el.secondH}
        para={el.para}
        bgColor={el.bgColor}
      />
    );
  });

  const mappedOfferData = offerData.map((el, i) => {
    return (
      <Hero
        firstH={el.firstH}
        secondH={el.secondH}
        para={el.para}
        bgColor={el.bgColor}
        month={el.month}
      />
    );
  });

  return (
    <>
      <HomeComponent />
      <HerosContainer>{mappedList}</HerosContainer>
      <OfferHerosContainer>
        <OfferHeading>What we can offer to out students?</OfferHeading>
        <HerosContainer style={{ height: "80%", width: "100%" }}>
          {mappedOfferData}
        </HerosContainer>
      </OfferHerosContainer>
    </>
  );
};

export default Homepage;
