import React from "react";
import Navbar from "./components/Navbar/";
import Homepage from "./pages/Homepage";
import Joiningpage from "./pages/Joiningpage";
import { Switch, Route } from "react-router-dom";
import Offeringpage from "./pages/Offeringpage";
// import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/join" component={Joiningpage} />
        <Route path="/offer" component={Offeringpage} />
      </Switch>
    </div>
  );
};

export default App;
