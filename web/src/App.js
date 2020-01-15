import React from 'react';
import { 
  Switch,
  Route
} from "react-router-dom";
import Signin from "./Pages/Signin/Signin";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Switch>
      <Route path="/sign-in" component={Signin} />
    </Switch>
  );
}

export default App;
