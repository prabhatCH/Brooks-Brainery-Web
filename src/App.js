import React, { useState } from "react";
import { Route, Switch } from "react-router";
import Dropdown from "./components/Dropdown";
import Navbar from "./components/Navbar/";
import Homepage from "./pages/Homepage";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} />
      <Switch>
        <Route path="/" exact component={Homepage} />
      </Switch>
    </>
  );
};

export default App;
