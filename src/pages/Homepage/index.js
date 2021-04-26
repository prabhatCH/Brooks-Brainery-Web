import React from "react";
// import HomeComponent from "../../components/HomeComponent/";
import Hero from "../../components/Hero/";
import {
  HerosContainer,
  OfferHerosContainer,
  OfferHeading,
} from "./HomeElement";

const Homepage = () => {
  const HomeData = [
    {
      firstH: "Join as a",
      secondH: "student",
      para:
        "Brooks Brainery is going to provide students with a big bucket of programs to choose from. A student can even opt out of the program anytime, or switch programs. ",
      bgColor: "#424242",
    },
    {
      firstH: "Volunteer as a",
      secondH: "teacher",
      para:
        "As the most important part of Brooks Brainery, we request you to volunteer as a teacher, to impart your knowledge and help shape the new generation of high-schoolers. ",
      bgColor: "#8ED100",
    },
    {
      firstH: "Join Brooks",
      secondH: "Brainery team",
      para:
        "We always welcome volunteers open-armingly. Anyone who is driven enough to help others are always invited.",
      bgColor: "#00A3FF",
    },
  ];

  const offerData = [
    {
      firstH: "Summer",
      secondH: "Program",
      para:
        "The Brooks Brainery Summer Program is a four-week long remote program for High Schoolers. ",
      bgColor: "#FFD600",
      month: "June - July",
    },
    {
      firstH: "Tutoring",
      secondH: "",
      para:
        "This not only personalizes a student’s learning path, but also caters their specific needs and requirements. This program is taught by handpicked tutors and available on-demand.",
      bgColor: "#2958FF",
      month: "",
    },
    {
      firstH: "Test",
      secondH: "Preparation",
      para:
        "Brooks Brainery FREE SAT/ACT Prep is a tailored small-group course for students, delivered live and online, to achieve the perfect test scores.",
      bgColor: "#DB00FF",
      month: "",
    },
  ];

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
      {/* <HomeComponent /> */}
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
