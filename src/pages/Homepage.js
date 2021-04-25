import React from "react";
import { Link } from "react-router-dom";
import bg from "../assets/bg.jpg";
import { AiOutlineArrowDown } from "react-icons/ai";

import "./homepage.css";

const Homepage = () => {
  return (
    <div className="home-container">
      <img className="logo" src={bg} alt="logo" />
      <h1>FREE OPPORTUNITIES FOR HIGH-SCHOOLERS</h1>
      <Link to="/about">
        <AiOutlineArrowDown className="arrow-down-icon" />
      </Link>
    </div>
  );
};

export default Homepage;
