import React from "react";
import Button from "react-bootstrap/Button";

class Home extends React.Component {
  render() {
    return (
      <div>
        <h2>AREA</h2>
        <Button href="/sign-up">Create an account</Button>
        <Button href="/sign-in">I already have an account</Button>
      </div>
    );
  }
}

export default Home;
