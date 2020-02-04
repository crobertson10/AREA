import React from "react";
import Home from "./Pages/Login/LoginPage";
import Signup from "./Pages/Signup/Signup";
import Header from "Components/components/Header/Header";
import HeaderLinks from "Components/components/Header/HeaderLinks";
import Dashboard from "./Pages/LandingPage/LandingPage";
import ZapCreator from "./Pages/ZapCreator/ZapCreator";
import { Switch, Route } from "react-router-dom";
import Logo from "assets/img/logo1.png";
import "./App.css";

function App() {
  return (
    <div class="App">
      <Header
        color="white"
        brand={<img alt="Logo" src={Logo} height="50" />}
        rightLinks={<HeaderLinks />}
        fixed
      />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Home} />
        <Route exact path="/sign-up" component={Signup} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/creator" component={ZapCreator} />
      </Switch>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
