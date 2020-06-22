import React from "react";
import "./App.css";

// Components
import Header from "./components/header/Header";
import Search from "./components/search/Search";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Search />
    </React.Fragment>
  );
};

export default App;
