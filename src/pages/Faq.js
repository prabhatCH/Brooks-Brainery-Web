import React from "react";
import { AboutHeading } from "../components/AboutComponent/AboutElement";
import Faq from "../components/Faq";
import Form from "../components/FormComponent.js/index.js";
import { faqs } from "./data/data";

const FaqPage = () => {
  const mappedFaqs = faqs.map((el) => {
    return <Faq que={el.que} ans={el.ans} bg={el.bg} />;
  });
  return (
    <>
      <AboutHeading style={{ paddingLeft: "8%", marginBottom: "2rem" }}>
        FAQ
      </AboutHeading>
      {mappedFaqs}
      <Form />
    </>
  );
};

export default FaqPage;
