import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import "./style.css";

const Hero = ({ firstH, secondH, para, bgColor }) => {
  return (
    <div className="hero-container" style={{ backgroundColor: `${bgColor}` }}>
      <div className="content">
        <h1 className="heor-heading">{firstH}</h1>
        <h1 className="heor-heading" id="student-heading">
          {secondH}
        </h1>
        <p className="desc">{para}</p>
      </div>
      <AiOutlineArrowRight className="arrow-icon" />
    </div>
  );
};

export default Hero;
