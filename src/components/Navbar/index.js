import React from "react";
import { NavContainer, MenuIcon } from "./NavbarElement";

const Navbar = ({ toggle }) => {
  return (
    <NavContainer>
      <MenuIcon onClick={() => toggle()} />
    </NavContainer>
  );
};

export default Navbar;
