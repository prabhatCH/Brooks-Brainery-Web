import styled from "styled-components";
import { Link } from "react-router-dom";

export const SidebarContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  transition: ease-in-out;
  transition-duration: 300ms;
  z-index: 999;
`;

export const SidebarLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

export const SidebarLinkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
