import React, {useState} from "react";
import Navbar from "Components/Header/Navbar";
import { Container, Row, Col, Button } from "react-bootstrap";
import Weather from "Components/Modal/WeatherModal/WeatherModal"
import "./Login.css";

function Login(...props) {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    if (show === false) {
      console.log(show);
      setShow(true);
    }
    else
      setShow(false)
  };

  return (
    <div>
      <Navbar props={false} />
      <Row className="noRow">
        <Col xs={11}>
        <Weather show={show}/>
        </Col>
        <Col className="noCol" xs={1}>
          <Container className="rightC">
            <Button className="buttonWidget" onClick={handleShow}>Weather</Button>
            <Button className="buttonWidget">Time</Button>
            <Button className="buttonWidget">lol</Button>
            <Button className="buttonWidget">lol</Button>
            <Button className="buttonWidget">lol</Button>
          </Container>
        </Col>
      </Row>
    </div>
  );
}

export default Login;
