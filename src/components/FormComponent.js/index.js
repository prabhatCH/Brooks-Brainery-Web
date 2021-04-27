import React, { useState } from "react";
import {
  Button,
  Fields,
  FormContainer,
  Heading,
  Input,
  TextArea,
  FieldWrapper,
  ButtonWrapper,
  IconWrapper,
  IconHolder,
  LinkIcon,
} from "./FormComponentElement";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiFacebook } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { BiErrorAlt } from "react-icons/bi";

const Form = () => {
  const initialState = {
    name: "",
    email: "",
    message: "",
    counter: 0,
    msgError: "",
    errMsg: "",
  };

  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
    counter: 0,
    msgError: "",
    errMsg: "",
  });

  const handleMessage = (e) => {
    setValues({ message: e.target.value });
  };

  const valid = (e) => {
    e.preventDefault();
    if (!values.email || !values.email.includes("@")) {
      setValues({ errMsg: "Invalid e-mail" });
      return false;
    }
    console.log("Valid Form");
    setValues(initialState);
    return true;
  };
  return (
    <>
      <FormContainer onSubmit={(e) => valid(e)}>
        <Heading>Contact us</Heading>
        <Fields>
          <FieldWrapper>
            <Input
              value={values.name}
              onChange={(e) => setValues({ name: e.target.value })}
              placeholder="Name"
            />
            <Input
              value={values.email}
              onChange={(e) => setValues({ email: e.target.value })}
              placeholder="E-mail"
            />
            <div style={{ color: "red" }}>
              {values.errMsg ? <BiErrorAlt /> : ""}
              {values.errMsg}
            </div>
          </FieldWrapper>
          <TextArea
            value={values.message}
            placeholder="message"
            onChange={(e) => handleMessage(e)}
          />
        </Fields>
        <ButtonWrapper>
          <Button>Send</Button>
        </ButtonWrapper>
      </FormContainer>
      <IconWrapper>
        <IconHolder>
          <LinkIcon href="https://duckduckgo.com/">
            <AiOutlineInstagram style={{ height: "30px", width: "22px" }} />
          </LinkIcon>
          <LinkIcon href="https://duckduckgo.com/">
            <FiFacebook style={{ height: "30px", width: "22px" }} />
          </LinkIcon>
          <LinkIcon href="https://duckduckgo.com/">
            <FaLinkedinIn style={{ height: "30px", width: "22px" }} />
          </LinkIcon>
        </IconHolder>
      </IconWrapper>
    </>
  );
};

export default Form;
