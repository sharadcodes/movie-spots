import React from "react";
import Header from "../components/header/Header";

const Base = ({ children }) => (
  <React.Fragment>
    <Header />
    {children}
  </React.Fragment>
);

export default Base;
