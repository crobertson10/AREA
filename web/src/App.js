import React from "react";
import Home from "./Pages/Login/LoginPage";
import Signup from "./Pages/Signup/Signup";
import Header from "Components/components/Header/Header";
import HeaderLinks from "Components/components/Header/HeaderLinks";
import FacebookSignIn from "./Pages/FacebookSignIn/FacebookSignIn";
import Dashboard from "./Pages/LandingPage/LandingPage";
import SlackSignIn from "./Pages/SlackSignIn/SlackSignIn";
import GithubSignIn from "./Pages/GithubSignIn/GithubSignIn";
import styles from "assets/jss/material-kit-react/views/loginPage.js";
import { makeStyles } from "@material-ui/core/styles";
import { Switch, Route } from "react-router-dom";
import Image from "assets/img/logo1.png";
import "./App.css";

const useStyles = makeStyles(styles);
function App() {
  const classes = useStyles();
  return (
    <div
      className={classes.pageHeader}
      style={{
        backgroundColor: "black",
        backgroundSize: "cover",
        backgroundPosition: "top center"
      }}
    >
      <Header
        color="white"
        brand={<img src={Image} height="50" />}
        rightLinks={<HeaderLinks />}
        fixed
      />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Home} />
        <Route exact path="/sign-up" component={Signup} />
        <Route exact path="/facebook" component={FacebookSignIn} />
        <Route exact path="/slack" component={SlackSignIn} />
        <Route exact path="/github" component={GithubSignIn} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
