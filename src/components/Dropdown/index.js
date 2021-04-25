import React from "react";
import {
  SidebarContainer,
  SidebarLink,
  SidebarLinkContainer,
} from "./DropdownElement";

const Dropdown = ({ isOpen }) => {
  const transformValue = isOpen ? 0 : "-1000px";
  return (
    <SidebarContainer style={{ transform: `translateX(${transformValue})` }}>
      <SidebarLinkContainer>
        <SidebarLink>Home</SidebarLink>
      </SidebarLinkContainer>
      <SidebarLinkContainer>
        <SidebarLink>About</SidebarLink>
      </SidebarLinkContainer>
      <SidebarLinkContainer>
        <SidebarLink>Contact</SidebarLink>
      </SidebarLinkContainer>
    </SidebarContainer>
  );
};

export default Dropdown;
