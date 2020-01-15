import React from "react";
import Button from "react-bootstrap/Button";
import { Redirect } from "react-router-dom";

class Home extends React.Component {
  state = {
    signin: false,
    signup: false
  };

  setSignIn = () => {
    this.setState({
      signin: true
    });
  };
  setSignUp = () => {
    this.setState({
      signup: true
    });
  };
  handleSignIn = () => {
    console.log("SignIn");
    if (this.state.signin) {
      return <Redirect to="/sign-in" />;
    }
    if (this.state.signup) {
      return <Redirect to="/sign-up" />;
    }
  };

  render() {
    return (
      <div>
        <h2>AREA</h2>
        {this.handleSignIn()}
        <Button onClick={this.setSignUp}>Create an account</Button>
        <Button onClick={this.setSignIn}>I already have an account</Button>
      </div>
    );
  }
}

export default Home;
