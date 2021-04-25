import styled from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";

export const NavContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const MenuIcon = styled(AiOutlineMenu)`
  color: #e93c24;
  margin-top: 1.5rem;
  margin-right: 2rem;
  cursor: pointer;
  height: 41px;
  width: 53px;
`;
