import React, { useState } from "react";
// import { Route, Switch } from "react-router";

import FaqPage from "./pages/Faq";
import Homepage from "./pages/Home";
import Aboutpage from "./pages/About";

import Dropdown from "./components/Dropdown";
import Navbar from "./components/Navbar/";
import Footer from "./components/Footer";

import { GlobalStyle } from "./GlobalStyle";

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
      {/* <Form /> */}
      <Footer />
    </>
  );
};

export default App;
