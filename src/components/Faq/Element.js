import styled from "styled-components";

export const FaqContainer = styled.div`
  width: 85%;
  margin: auto;
  background-color: red;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const FaqHeading = styled.h3`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 23px;
  padding-bottom: 15px;
  padding-top: 15px;
  font-size: 27px;
`;

export const FaqAnswer = styled.div`
  width: 464px;
  padding-left: 23px;
  font-size: 18px;
  min-height: 0px;
  display: hidden;
  /* background-color: grey; */
  margin-bottom: 10px;
`;
