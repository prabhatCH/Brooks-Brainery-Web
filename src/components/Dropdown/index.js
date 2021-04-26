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
        <SidebarLink
          style={{
            transform: `translateX(${transformValue})`,
            transition: "ease 100ms",
          }}
        >
          Home
        </SidebarLink>
      </SidebarLinkContainer>
      <SidebarLinkContainer>
        <SidebarLink
          style={{
            transform: `translateX(${transformValue})`,
            transition: "ease 200ms",
          }}
        >
          About
        </SidebarLink>
      </SidebarLinkContainer>
      <SidebarLinkContainer>
        <SidebarLink
          style={{
            transform: `translateX(${transformValue})`,
            transition: "ease 300ms",
          }}
        >
          Contact
        </SidebarLink>
      </SidebarLinkContainer>
    </SidebarContainer>
  );
};

export default Dropdown;
