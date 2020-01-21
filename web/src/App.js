import React from "react";
import Home from "./Pages/Login/LoginPage";
import Signup from "./Pages/Signup/Signup";
import FacebookSignIn from "./Pages/FacebookSignIn/FacebookSignIn";
import SlackSignIn from "./Pages/SlackSignIn/SlackSignIn";
import GithubSignIn from "./Pages/GithubSignIn/GithubSignIn";
import styles from "assets/jss/material-kit-react/views/loginPage.js";
import { makeStyles } from "@material-ui/core/styles";
import { Switch, Route } from "react-router-dom";
import image from "assets/img/bg7.jpg";
import "./App.css";

const useStyles = makeStyles(styles);
function App() {
  const classes = useStyles();
  return (
    <div
      className={classes.pageHeader}
      style={{
        backgroundImage: "url(" + image + ")",
        backgroundSize: "cover",
        backgroundPosition: "top center"
      }}
    >
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/sign-up" component={Signup} />
        <Route exact path="/facebook" component={FacebookSignIn} />
        <Route exact path="/slack" component={SlackSignIn} />
        <Route exact path="/github" component={GithubSignIn} />
      </Switch>
    </div>
  );
}

export default App;
