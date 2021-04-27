import React from "react";
// import { AiFillCaretDown } from "react-icons/ai";
import { FaqContainer, FaqHeading, FaqAnswer } from "./Element";

const Faq = ({ que, ans, bg }) => {
  return (
    <FaqContainer style={{ backgroundColor: `${bg}` }}>
      <FaqHeading>{que}</FaqHeading>
      <FaqAnswer>{ans}</FaqAnswer>
    </FaqContainer>
  );
};

export default Faq;
