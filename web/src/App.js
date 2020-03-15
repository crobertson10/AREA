import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "Pages/Login/Login";
import Mobile from "Pages/MobilePage/Mobile";
import PrivateRoute from "./Components/Routes/PrivateRoutes";
import Dashboard from "Pages/Dashboard/Dashboard";
import { BrowserView, MobileView } from "react-device-detect";
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
        <BrowserRouter>
          <Switch>
            <Route exact component={Mobile} path="/client.apk" />
            <Route exact component={Mobile} path="/" />
          </Switch>
        </BrowserRouter>
      </MobileView>
    </div>
  );
}

export default App;
