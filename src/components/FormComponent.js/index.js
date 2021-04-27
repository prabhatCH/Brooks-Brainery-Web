import React from "react";
import {
  Button,
  Fields,
  FormContainer,
  Heading,
  Input,
  TextArea,
  FieldWrapper,
  ButtonWrapper,
} from "./FormComponentElement";

const Form = () => {
  return (
    <FormContainer>
      <Heading>Contact us</Heading>
      <Fields>
        <FieldWrapper>
          <Input placeholder="Name" />
          <Input placeholder="E-mail" />
        </FieldWrapper>
        <TextArea placeholder="message" />
      </Fields>
      <ButtonWrapper>
        <Button>Send</Button>
      </ButtonWrapper>
    </FormContainer>
  );
};

export default Form;
