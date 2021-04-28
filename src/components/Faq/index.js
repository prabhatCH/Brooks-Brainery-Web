import React, { useState } from "react";
// import { AiFillCaretDown } from "react-icons/ai";
import { FaqContainer, FaqHeading, FaqAnswer } from "./Element";

const Faq = ({ que, ans, bg }) => {
  const [drop, setDrop] = useState(false);
  const displayValue = drop ? "" : "none";
  return (
    <FaqContainer
      style={{
        // trasitionDuration: "500ms",
        backgroundColor: `${bg}`,
      }}
      onClick={() => setDrop(!drop)}
    >
      <FaqHeading style={{ cursor: "pointer" }}>{que}</FaqHeading>
      <FaqAnswer style={{ display: `${displayValue}` }}>{ans}</FaqAnswer>
    </FaqContainer>
  );
};

export default Faq;
