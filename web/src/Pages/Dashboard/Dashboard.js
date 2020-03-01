import React, { useState } from "react";
import Navbar from "Components/Header/Navbar";
import { Container, Row, Col, Button } from "react-bootstrap";
import Weather from "Components/Widget/Weather/Weather";
import TrelloCard from "Components/ServiceCard/TrelloCard";
import TwitchCard from "Components/ServiceCard/TwitchCard";
import SlackCard from "Components/ServiceCard/SlackCard";
import GithubCard from "Components/ServiceCard/GithubCard";
import YammerCard from "Components/ServiceCard/YammerCard";
import "./Dashboard.css";

function Dashboard(...props) {
  const [showWeather, setShowW] = useState(true);
  const [showTime, setShowT] = useState(true);
  const [showSat, setShowS] = useState(true);
  const [showSteam, setShowSteam] = useState(false);
  const [showCard, setShowCard] = useState(0);

  const handleShowW = () => {
    if (showWeather === false) {
      console.log(showCard);
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
            <Button className="buttonWidgetLeft" onClick={() => setShowCard(0)}>
              Trello
            </Button>
            <Button className="buttonWidgetLeft" onClick={() => setShowCard(1)}>
              Twitch
            </Button>
            <Button className="buttonWidgetLeft" onClick={() => setShowCard(2)}>
              Slack
            </Button>
            <Button className="buttonWidgetLeft" onClick={() => setShowCard(3)}>
              Github
            </Button>
            <Button className="buttonWidgetLeft" onClick={() => setShowCard(4)}>
              Yammer
            </Button>
          </Container>
        </Col>
        <Col className="middleL" xs={7}>
          <TrelloCard
            title={"Create some board with Trello"}
            id={showCard}
          ></TrelloCard>
          <TwitchCard
            title={"Be aware of favourite streamer with Twitch"}
            id={showCard}
          ></TwitchCard>
          <SlackCard
            title={"Communicate with your mate with Slack"}
            id={showCard}
          ></SlackCard>
          <GithubCard
            title={"Share your repo with Github"}
            id={showCard}
          ></GithubCard>
          <YammerCard
            title={"Your favourite social media!"}
            id={showCard}
          ></YammerCard>
        </Col>
        <Col className="middleR" xs={3}>
          <Row>
            <Weather title={"Weather"} show={showWeather} />
            <Weather title={"Time"} show={showTime} />
            <Weather title={"Satelite"} show={showSat} />
            <Weather title={"Steam"} show={showSteam} />
          </Row>
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
