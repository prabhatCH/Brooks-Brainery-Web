import styled from "styled-components";
// import { Link } from "react-router-dom";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 85%;
  height: 655px;
  margin: auto;
  border: 2px solid white;
  margin-top: 275px;
`;

export const Heading = styled.div`
  position: relative;
  width: 85%;
  font-size: 105px;
`;

export const Fields = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 85%;
`;
export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Input = styled.input`
  padding: 23px 0px 32px 29px;
  width: 477px;
  height: 68px;
  background-color: black;
  color: white;
  border: 3px solid white;
  font-size: 18px;
`;

export const TextArea = styled.textarea`
  padding: 23px 0px 32px 29px;

  font-size: 18px;
  width: 619px;
  height: 167px;
  background-color: black;
  color: white;
  border: 3px solid white;
`;

export const Button = styled.button`
  width: 263px;
  height: 67px;
  background-color: #e93c24;
  border: none;
  font-size: 26px;
  color: white;
  cursor: pointer;
  :hover {
    background-color: #2958ff;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 85%;
`;

// About components
export const IconWrapper = styled.div`
  /* border: 2px solid black; */
  display: flex;
  justify-content: flex-end;
  width: 85%;
`;

export const IconHolder = styled.div`
  /* border: 1px solid yellow; */
  width: 10%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 149px;
`;

export const LinkIcon = styled.a`
  display: felx;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: white;
  /* border: 2px solid white; */
  border-radius: 50px;
  width: 42px;
  height: 42px;
  :hover {
    background-color: #3e3e3e;
  }
`;
