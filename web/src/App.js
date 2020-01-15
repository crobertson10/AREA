import React from "react";
import logo from "./logo.svg";
import Home from "./Pages/Home";
import { Switch, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Switch>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}

export default App;
