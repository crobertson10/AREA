import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "Pages/Login/Login";
import PrivateRoute from "./Components/Routes/PrivateRoutes";
import Dashboard from "Pages/Dashboard/Dashboard";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserView>
        <BrowserRouter>
          <Switch>
            <PrivateRoute exact component={Dashboard} path="/dashboard" />
            <Route exact component={Login} path="/" />
          </Switch>
        </BrowserRouter>
      </BrowserView>
      <MobileView>
        <h1>coucou</h1>
      </MobileView>
    </div>
  );
}

export default App;
