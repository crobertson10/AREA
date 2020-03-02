import React, { useEffect, useState } from "react";
import { Card, Form, Col, Row, Button } from "react-bootstrap";
import Axios from "axios";
import "./Widget.css";

function Clock(props) {
  const [cityArr, setCityArr] = useState([
    "America/Sao_Paulo",
    "Asia/Hong_Kong",
    "Asia/Kuala_Lumpur",
    "Australia/Sydney",
    "Europe/Amsterdam",
    "Europe/Berlin",
    "Europe/Madrid",
    "Europe/Paris",
    "Pacific/Honolulu"
  ]);
  const [city, SetCity] = useState("Europe/Paris");

  if (props.show) {
    return (
      <div>
        <Card className="WidgetCard">
          <Card.Header className="WeatherWidgetHead">
            <Row>{city}</Row>
          </Card.Header>
          <Card.Body className="WeatherWidgetBody">
            <Row></Row>
            <Row>
              <Button className="AccordionButton">Get Time!</Button>
            </Row>
          </Card.Body>
        </Card>
      </div>
    );
  }
  return null;
}

export default Clock;
