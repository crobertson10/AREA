import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Logo from "Assets/logo.png";
import "./Mobile.css";

function Mobile(...props) {
  return (
    <Container className="mobileContainer">
      <img className="logoMob" src={Logo} alt=""></img>
      <h3>Welcome on Area!</h3>
      <h4>Click here to download the App!</h4>
      <div>
        <Button
          className="ZapButton"
          style={{ width: "380px" }}
          positive
          as="a"
          href="client_apk/app-release.apk"
          download
        >
          Download the APK
        </Button>
      </div>
    </Container>
  );
}

export default Mobile;
