import styled from "styled-components";
import { AiOutlineArrowRight } from "react-icons/ai";

export const HeroContainer = styled.div`
  position: relative;
  height: 480px;
  width: 395px;
  margin: auto;
  background: red;
  margin: 1rem 33px;
  margin-left: 2px;

  :hover {
    transform: translate(0px, -10px);
    transition: 300ms ease-in-out;
    transition-property: all;
    transition-duration: 200ms;
    margin-left: 7px;
    /* margin-right: 2px; */
  }
`;

export const HeroHeading = styled.h1`
  padding-left: 2rem;
  padding-top: 2rem;
`;

export const HeroPara = styled.p`
  padding: 2rem 2rem;
  font-size: 1.23rem;
`;

export const RightArrow = styled(AiOutlineArrowRight)`
  position: absolute;
  width: 42px;
  height: 37px;
  cursor: pointer;
  bottom: 44px;
  right: 47px;
`;

export const Month = styled.h1``;
