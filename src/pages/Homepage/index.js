import React from "react";
// import HomeComponent from "../../components/HomeComponent/";
import Hero from "../../components/Hero/";
import { HerosContainer } from "./HomeElement";

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
  return (
    <>
      {/* <HomeComponent /> */}
      <HerosContainer>{mappedList}</HerosContainer>
    </>
  );
};

export default Homepage;
