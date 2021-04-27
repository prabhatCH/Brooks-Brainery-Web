import React from "react";
import { AboutHeading } from "../../components/AboutComponent/AboutElement";
import AboutComponent from "../../components/AboutComponent/";
import {
  AboutContainer,
  Heading,
  AboutContent,
  AboutPara,
  SvgHolder,
  SvgWrapper,
} from "../../components/AboutComponent/AboutElement";

import { men, freeLabel, emoji, textPaper } from "./AboutElement";

const Aboutpage = () => {
  return (
    <>
      <AboutHeading style={{ paddingLeft: "8%", marginBottom: "6rem" }}>
        About us
      </AboutHeading>
      <AboutContainer>
        <AboutContent style={{ order: `o` }}>
          <Heading>Brooks Brainery</Heading>
          <AboutPara>
            is a non-profit organization led by teenagers whose sole purpose is
            to provide opportunities free of cost to other teenagers.{" "}
          </AboutPara>
        </AboutContent>
        <SvgWrapper>
          <SvgHolder>{men}</SvgHolder>
        </SvgWrapper>
      </AboutContainer>
      <AboutContainer>
        <AboutContent style={{ order: `2` }}>
          <Heading>Freebie</Heading>
          <AboutPara>
            We strive to provide a self-sufficient platform to high schoolers,
            by fellow high schoolers, and bring the best possible resources and
            services, completely free of cost.
          </AboutPara>
        </AboutContent>
        <SvgWrapper
          id="flip"
          style={{
            transform: "rotate(10deg)",
          }}
        >
          <SvgHolder>{freeLabel}</SvgHolder>
        </SvgWrapper>
      </AboutContainer>
      <AboutContainer>
        <AboutContent style={{ order: `0` }}>
          <Heading>Get ready for college!</Heading>
          <AboutPara>
            We are focused on creating a conducive environment for college
            preparation and applications.{" "}
          </AboutPara>
        </AboutContent>
        <SvgWrapper>
          <SvgHolder>{textPaper}</SvgHolder>
        </SvgWrapper>
      </AboutContainer>
      <AboutContainer>
        <AboutContent style={{ order: `2` }}>
          <Heading>Your personal teacher friend</Heading>
          <AboutPara>
            We are also working towards introducing specific courses for the
            standardized tests, and one-on-one live tutoring to master any
            particular topic.
          </AboutPara>
        </AboutContent>
        <SvgWrapper>
          <SvgHolder>{emoji}</SvgHolder>
        </SvgWrapper>
      </AboutContainer>
    </>
  );
};

export default Aboutpage;
