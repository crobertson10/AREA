import React from "react";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "Pages/Login/Login";
import "./App.css";

function App() {
  return (
    <div class="App">
      <Switch>
        <Route exact path="/login" component={Login} header={true} />
      </Switch>
    </div>
  );
}

export default App;
