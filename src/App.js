import React, { useState } from "react";
// import { Route, Switch } from "react-router";
import FaqPage from "./pages/FaqPage/";

import Dropdown from "./components/Dropdown";
import Navbar from "./components/Navbar/";

import { GlobalStyle } from "./GlobalStyle";
import Homepage from "./pages/Homepage/";
import Aboutpage from "./pages/Aboutpage/";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} />
      <Homepage />
      <Aboutpage />
      <FaqPage />
    </>
  );
};

export default App;
