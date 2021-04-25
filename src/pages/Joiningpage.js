import React from "react";
import Hero from "../components/Hero";
import "./joiningpage.css";

const data = [
  {
    firstH: "Join as",
    secondH: "student",
    para:
      "Brooks Brainery is going to provide students with a big bucket of programs to choose from. A student can even opt out of the program anytime, or switch programs. ",
    bgColor: "#e93c24",
  },
  {
    firstH: "Join as",
    secondH: "teacher",
    para:
      "As the most important part of Brooks Brainery, we request you to volunteer as a teacher, to impart your knowledge and help shape the new generation of high-schoolers. ",
    bgColor: "#8ed100",
  },
  {
    firstH: "Join Brooks",
    secondH: "Brainery team",
    para:
      "We always welcome volunteers open-armingly. Anyone who is driven enough to help others are always invited.",
    bgColor: "#00a3ff",
  },
];

const Aboutpage = () => {
  const mappedHeros = data.map((el, i) => {
    return (
      <Hero
        key={i}
        firstH={el.firstH}
        secondH={el.secondH}
        para={el.para}
        bgColor={el.bgColor}
      />
    );
  });
  return <div className="about-container">{mappedHeros}</div>;
};

export default Aboutpage;
