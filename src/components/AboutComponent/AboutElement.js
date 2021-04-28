import styled, { css } from "styled-components";
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

export const SvgWrapper = styled.span`
  ${({ flip }) =>
    flip
      ? css`
          /* transform: rotate(10deg) */
          transition-duration: 500ms;
          :hover {
            transform: rotate(-10deg);
          }
        `
      : ""}
`;

export const SvgHolder = styled.span``;

export const RollingImg = styled.div`
  height: 444px;
  display: flex;
  align-items: center;
`;

export const MenStack = styled.span`
  white-space: nowrap;
  .men-one {
    transition-duration: 500ms;
    /* transition: linear 500ms ease; */
    /* border: 2px solid green; */
  }
  .men-two {
    transition-duration: 500ms;

    /* transition: linear 500ms ease; */

    /* border: 2px solid green; */
  }
  :hover {
    .men-one {
      transform: translateY(-2px);
      /* transition-duration: 500ms;
      transition-property: all;
      transition-timing-function: linear; */
    }

    .men-two {
      transform: translateY(-5px);
      /* transition: transform 0.5s ease;
      transition-duration: 500ms;
      transition-timing-function: linear; */
    }
  }
`;
