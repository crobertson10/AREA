import React from "react";
import Home from "./Pages/Home/LoginPage";
import Signin from "./Pages/Signin/Signin";
import Signup from "./Pages/Signup/Signup";
import { Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/sign-in" component={Signin} />
      <Route exact path="/sign-up" component={Signup} />
    </Switch>
  );
}

export default App;
