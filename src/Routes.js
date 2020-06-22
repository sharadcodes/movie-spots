import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Movie from "./core/Movie";
import Home from "./core/Home";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/movie" exact component={Movie} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;