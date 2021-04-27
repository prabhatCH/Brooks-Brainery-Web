import React from "react";
import img from "../../assets/bg.jpg";
import {
  FooterContainer,
  Img,
  FooterLinksHolder,
  FooterItemHolder,
  LinkSection,
  StyledLink,
  ImgWrapper,
  BottomFooter,
  Items,
} from "./FooterElement";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterItemHolder>
          <ImgWrapper>
            <Img src={img} alt="brooks brainery" />
          </ImgWrapper>
          <FooterLinksHolder>
            <LinkSection>
              <StyledLink>About us</StyledLink>
              <StyledLink>Contact us</StyledLink>
            </LinkSection>
            <LinkSection>
              <StyledLink>Summer program</StyledLink>
              <StyledLink>Test preparation</StyledLink>
              <StyledLink>Tutoring</StyledLink>
            </LinkSection>
            <LinkSection>
              <StyledLink style={{ color: "#e83c24" }}>
                Become a student
              </StyledLink>
              <StyledLink style={{ color: "#8dd000" }}>
                Volunteer as student
              </StyledLink>
              <StyledLink style={{ color: "#00a2fe" }}>Join BB team</StyledLink>
            </LinkSection>
          </FooterLinksHolder>
        </FooterItemHolder>
      </FooterContainer>
      <BottomFooter>
        <Items>
          <StyledLink>Cookie Policy</StyledLink>
          <StyledLink>Privacy Policy</StyledLink>
          <StyledLink>Terms of Service</StyledLink>
          <StyledLink>Copyright</StyledLink>
        </Items>
        <StyledLink>
          Copyright © Brooks Brainery. All Rights Reserved.
        </StyledLink>
      </BottomFooter>
    </>
  );
};

export default Footer;
