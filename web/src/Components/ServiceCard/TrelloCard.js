import React, { useState } from "react";
import "./ServiceCard.css";
import { Accordion, Card, Button, Form } from "react-bootstrap";
import trelloLogo from "Assets/trello.png";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function TrelloCard(props) {
  const [boardName, setBoardName] = useState("");
  const [mateName, setMateName] = useState("");

  const submitCreate = () => {
    Axios.post("http://localhost:3000/action/trello/board/create", {
      token: localStorage.getItem("trello-token"),
      name: boardName
    })
      .then(function(response) {
        setBoardName("");
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  if (props.id === 0)
    return (
      <div>
        <Card className="ServiceCard" style={{ width: "60rem" }}>
          <Card.Img className="ImageCard" variant="top" src={trelloLogo} />
          <Card.Body className="BodyCard">
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
              <Accordion defaultActiveKey="1">
                <Card className="AccordionCard">
                  <Accordion.Toggle as={Card.Header} eventKey="0">
                    Create a board!
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body className="AccordionBody">
                      <Form.Control
                        size="lg"
                        type="text"
                        placeholder="Name of your board"
                        className="AccordionForm"
                        onChange={e => {
                          setBoardName(e.target.value);
                        }}
                      />
                      <Button
                        className="AccordionButton"
                        onClick={() => {
                          submitCreate();
                        }}
                      >
                        Create my board!
                      </Button>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Card.Text>
            <Card.Text>
              <Accordion defaultActiveKey="1">
                <Card className="AccordionCard">
                  <Accordion.Toggle as={Card.Header} eventKey="0">
                    Delete a board!
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body className="AccordionBody">
                      <Form.Control
                        size="lg"
                        type="text"
                        placeholder="Name of your board"
                        className="AccordionForm"
                      />
                      <Button className="AccordionButton">
                        Delete my board!
                      </Button>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Card.Text>
            <Card.Text>
              <Accordion defaultActiveKey="1">
                <Card className="AccordionCard">
                  <Accordion.Toggle as={Card.Header} eventKey="0">
                    Add a mate a your board!
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body className="AccordionBody">
                      <Form.Control
                        size="lg"
                        type="text"
                        placeholder="Name of your Board"
                        className="AccordionForm"
                      />
                      <Form.Control
                        size="lg"
                        type="text"
                        placeholder="Name of your Mate"
                        className="AccordionForm"
                      />
                      <Button className="AccordionButton">Add my mate!</Button>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Card.Text>
            <Card.Text>
              <Accordion defaultActiveKey="1">
                <Card className="AccordionCard">
                  <Accordion.Toggle as={Card.Header} eventKey="0">
                    Kick a mate a your board!
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body className="AccordionBody">
                      <Form.Control
                        size="lg"
                        type="text"
                        placeholder="Name of your Board"
                        className="AccordionForm"
                      />
                      <Form.Control
                        size="lg"
                        type="text"
                        placeholder="Name of your Mate"
                        className="AccordionForm"
                      />
                      <Button className="AccordionButton">Kick my mate!</Button>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  return null;
}

export default TrelloCard;
