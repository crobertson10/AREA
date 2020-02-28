import React, { useState } from "react";
import Navbar from "Components/Header/Navbar";
import { Container, Row, Col, Button } from "react-bootstrap";
import Weather from "Components/Widget/Weather/Weather";
import "./Dashboard.css";

function Dashboard(...props) {
  const [showWeather, setShowW] = useState(false);
  const [showTime, setShowT] = useState(false);
  const [showSat, setShowS] = useState(false);
  const [showSteam, setShowSteam] = useState(false);
  const handleShowW = () => {
    if (showWeather === false) {
      setShowW(true);
    } else setShowW(false);
  };

  const handleShowT = () => {
    if (showTime === false) {
      setShowT(true);
    } else setShowT(false);
  };

  const handleShowS = () => {
    if (showSat === false) {
      setShowS(true);
    } else setShowS(false);
  };

  const handleShowSteam = () => {
    if (showSteam === false) {
      setShowSteam(true);
    } else setShowSteam(false);
  };
  return (
    <div>
      <Navbar props={true} />
      <Row className="noRow">
        <Col xs={1} className="noCol">
          <Container className="leftC">
            <Button className="buttonWidgetLeft" onClick={handleShowW}>
              Trello
            </Button>
            <Button className="buttonWidgetLeft" onClick={handleShowW}>
              Epitech
            </Button>
            <Button className="buttonWidgetLeft" onClick={handleShowW}>
              Slack
            </Button>
            <Button className="buttonWidgetLeft" onClick={handleShowW}>
              Github
            </Button>
            <Button className="buttonWidgetLeft" onClick={handleShowW}>
              Steam
            </Button>
          </Container>
        </Col>
        <Col className="middleC" xs={10}>
          <Weather lol={"Weather"} show={showWeather} />
          <Weather lol={"Time"} show={showTime} />
          <Weather lol={"Satelite"} show={showSat} />
          <Weather lol={"Steam"} show={showSteam} />
        </Col>
        <Col className="noCol" xs={1}>
          <Container className="rightC">
            <Button className="buttonWidget" onClick={handleShowW}>
              Weather
            </Button>
            <Button className="buttonWidget" onClick={handleShowT}>
              Time
            </Button>
            <Button className="buttonWidget" onClick={handleShowS}>
              Satelite
            </Button>
            <Button className="buttonWidget" onClick={handleShowSteam}>
              Steam
            </Button>
          </Container>
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;
