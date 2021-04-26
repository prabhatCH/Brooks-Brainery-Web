import React from "react";
import {
  AboutContainer,
  Heading,
  AboutContent,
  AboutPara,
  SvgHolder,
  SvgWrapper,
} from "./AboutElement";

const AboutComponent = (props) => {
  const { heading, para, order, svg } = props;
  const cName = svg.props.className;
  const classname = svg.props.className === undefined ? "men" : cName;
  return (
    <AboutContainer>
      <AboutContent style={{ order: `${order}` }}>
        <Heading>{heading}</Heading>
        <AboutPara>{para}</AboutPara>
      </AboutContent>
      <SvgWrapper>
        <SvgHolder className={classname}>{svg}</SvgHolder>
      </SvgWrapper>
    </AboutContainer>
  );
};

export default AboutComponent;
