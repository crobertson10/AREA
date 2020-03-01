import React from "react";
import "./ServiceCard.css";
import { Card, Button } from "react-bootstrap";
import trelloLogo from "Assets/trello.png";
import "bootstrap/dist/css/bootstrap.min.css";

function TrelloCard(props) {
  if (props.id === 0)
    return (
      <div>
        <Card className="ServiceCard" style={{ width: "60rem" }}>
          <Card.Img className="ImageCard" variant="top" src={trelloLogo} />
          <Card.Body className="BodyCard">
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>Action n°1</Card.Text>
            <Card.Text>Action n°2</Card.Text>
            <Card.Text>Action n°3</Card.Text>
            <Card.Text>Action n°4</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    );
  return null;
}

export default TrelloCard;
