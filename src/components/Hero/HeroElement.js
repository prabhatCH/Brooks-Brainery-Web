import styled from "styled-components";
import { AiOutlineArrowRight } from "react-icons/ai";

export const HeroContainer = styled.div`
  height: 480px;
  width: 395px;
  margin: auto;
  background: red;
  margin: 1rem 0;
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
  right: 47px;
  bottom: 44px;
  cursor: pointer;
`;
