import React from "react";
import Home from "./Pages/Home";
import Signin from "./Pages/Signin/Signin";
import { Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/sign-in" component={Signin} />
    </Switch>
  );
}

export default App;
