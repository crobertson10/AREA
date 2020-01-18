import React from "react";
import Home from "./Pages/Home/LoginPage";
import Signin from "./Pages/Signin/Signin";
import Signup from "./Pages/Signup/Signup";
import FacebookSignIn from "./Pages/FacebookSignIn/FacebookSignIn";
import SlackSignIn from "./Pages/SlackSignIn/SlackSignIn";
import GithubSignIn from "./Pages/GithubSignIn/GithubSignIn";
import { Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/sign-in" component={Signin} />
      <Route exact path="/sign-up" component={Signup} />
      <Route exact path="/facebook" component={FacebookSignIn} />
      <Route exact path="/slack" component={SlackSignIn} />
      <Route exact path="/github" component={GithubSignIn} />
    </Switch>
  );
}

export default App;
