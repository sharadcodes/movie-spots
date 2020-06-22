import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/"><h1>Movie Spots</h1></Link>
      <small>Find the shooting spots for your favourate movie</small>
    </header>
  );
};

export default Header;
