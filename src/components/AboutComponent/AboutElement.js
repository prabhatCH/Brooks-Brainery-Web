import styled from "styled-components";
// import { svg } from "./index";

export const AboutHeading = styled.h1`
  font-size: 54px;
`;

export const AboutContainer = styled.div`
  /* border: 2px solid white; */
  width: 80%;
  margin: auto;
  margin-bottom: 5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: no-wrap;
`;
// Height for the box 52px + 28px + 140px
export const Heading = styled.h2`
  font-size: 41px;
  /* margin-top: 28px; */
`;

export const AboutContent = styled.div`
  /* border: 2px solid grey; */
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: space-between;
  order: 0;
`;

export const AboutPara = styled.p`
  font-size: 25px;
  /* height: 160px; */
  width: 576px;
  padding-left: 87px;
`;

export const SvgWrapper = styled.span``;

export const SvgHolder = styled(SvgWrapper)`
  .freeLabel {
    transform: rotate(0deg);
    :hover {
      transform: rotate(0deg);
      transition: ease;
      transition-duration: 200ms;
    }
  }
`;
