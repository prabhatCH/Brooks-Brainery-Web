import React from "react";
import { AboutHeading } from "../../components/AboutComponent/AboutElement";
import AboutComponent from "../../components/AboutComponent/";
import { men, freeLabel, emoji, textPaper } from "./AboutElement";

const Aboutpage = () => {
  const AboutData = [
    {
      heading: "Brooks Brainery",
      para:
        "is a non-profit organization led by teenagers whose sole purpose is to provide opportunities free of cost to other teenagers. ",
      svg: men,
      order: 0,
    },
    {
      heading: "Freebie",
      para:
        "We strive to provide a self-sufficient platform to high schoolers, by fellow high schoolers, and bring the best possible resources and services, completely free of cost.",
      svg: freeLabel,
      order: "2",
    },
    {
      heading: "Get ready for a college!",
      para:
        "We are focused on creating a conducive environment for college preparation and applications. ",
      svg: textPaper,
      order: "0",
    },
    {
      heading: "Your personal teacher friend",
      para:
        "We are also working towards introducing specific courses for the standardized tests, and one-on-one live tutoring to master any particular topic.",
      svg: emoji,
      order: "2",
    },
  ];

  return (
    <>
      <AboutHeading style={{ paddingLeft: "8%", marginBottom: "2rem" }}>
        About us
      </AboutHeading>
      {AboutData.map((el) => {
        return (
          <AboutComponent
            heading={el.heading}
            para={el.para}
            order={el.order}
            svg={el.svg}
          />
        );
      })}
    </>
  );
};

export default Aboutpage;
