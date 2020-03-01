import React from "react";
import "./ServiceCard.css";
import { Card, Button } from "react-bootstrap";
import trelloLogo from "Assets/yammer.png";
import "bootstrap/dist/css/bootstrap.min.css";

function YammerCard(props) {
  if (props.id === 4)
    return (
      <div>
        <Card className="ServiceCard" style={{ width: "60rem" }}>
          <Card.Img className="ImageCard" variant="top" src={trelloLogo} />
          <Card.Body className="BodyCard">
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
              Some qui example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Text>
              Some qui example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Text>
              Some qui example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Text>
              Some qui example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    );
  return null;
}

export default YammerCard;
