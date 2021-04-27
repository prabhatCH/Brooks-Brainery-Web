import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* border: 2px solid grey; */
`;
export const ImgWrapper = styled.div`
  /* width: 287px; */
  width: 50%;
  height: 124px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 2px solid green; */
  align-items: flex-start;
`;
export const Img = styled.img`
  width: 287px;
  height: 124px;
`;
export const FooterLinksHolder = styled.div`
  width: 50%;
  /* border: 2px solid grey; */
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const FooterItemHolder = styled.div`
  width: 85%;
  /* border: 2px solid yellow; */
  display: flex;
  justify-content: space-between;
`;

export const LinkSection = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 2px solid goldenrod; */
  justify-content: space-around;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  :hover {
    text-decoration: underline;
  }
`;

export const BottomFooter = styled.div`
  /* border: 2px solid grey; */
  height: 4rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Items = styled.div`
  /* border: 2px solid grey; */
  width: 40%;
  display: flex;
  justify-content: space-around;
`;
