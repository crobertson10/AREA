import React from "react";
import MyForm from "../../Components/Form/Forms/Form";

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  setEmail = async value => {
    this.setState(
      {
        email: value
      },
      () => {
        console.log(this.state.email);
      }
    );
  };

  setPassword = async value => {
    this.setState(
      {
        password: value
      },
      () => {
        console.log(this.state.password);
      }
    );
  };

  render() {
    return (
      <div>
        <MyForm
          id="email"
          label="Email address"
          placeholder="Enter email"
          message="We'll never shared your address with anyone else"
          type="email"
          value={this.setEmail}
        />
        <MyForm
          id="password"
          label="Password"
          placeholder="Password"
          message=""
          type="password"
          value={this.setPassword}
        />
      </div>
    );
  }
}

export default Signin;
