import React from "react";
import Hero from "../components/Hero";
import "./offeringpage.css";

const Offeringpage = () => {
  const data = [
    {
      firstH: "Summer",
      secondH: "Program",
      para:
        "The Brooks Brainery Summer Program is a four-week long remote program for High Schoolers. ",
      bgColor: "#ffd600",
    },
    {
      firstH: "Tutoring",
      secondH: "",
      para:
        "This not only personalizes a student’s learning path, but also caters their specific needs and requirements. This program is taught by handpicked tutors and available on-demand. ",
      bgColor: "#2958ff",
    },
    {
      firstH: "Test",
      secondH: "Preparation",
      para:
        "Brooks Brainery FREE SAT/ACT Prep is a tailored small-group course for students, delivered live and online, to achieve the perfect test scores",
      bgColor: "#db00ff",
    },
  ];

  const mappedHeros = data.map((el, i) => (
    <Hero
      key={i}
      firstH={el.firstH}
      secondH={el.secondH}
      para={el.para}
      bgColor={el.bgColor}
    />
  ));
  return (
    <div className="offer-container">
      <h1 className="offer-heading">What we can offer our students?</h1>
      <div className="about-container">{mappedHeros}</div>
    </div>
  );
};

export default Offeringpage;
