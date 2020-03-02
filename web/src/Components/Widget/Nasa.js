import React, { useState, useEffect } from "react";
import { Card, Form, Col, Row, Modal, Button } from "react-bootstrap";
import Axios from "axios";
import "./Widget.css";

function Nasa(props) {
  const [urlN, setUrl] = useState(
    "https://pmcdeadline2.files.wordpress.com/2019/10/shutterstock_editorial_10434333bm.jpg?crop=0px%2C0px%2C2903px%2C1627px&resize=681%2C383"
  );
  const [desc, setDesc] = useState("Dolnad Trump");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getImage = () => {
    Axios.post("http://localhost:3000/widget/nasa", {})
      .then(function(res) {
        setUrl(res.data.url);
        setDesc(res.data.explanation);
        console.log(urlN);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  if (props.show === true) {
    return (
      <div>
        <Card className="WidgetCard">
          <Card.Img variant="top" src={urlN} />
          <Card.Body>
            <Card.Title>Photo of the day!</Card.Title>
            <Card.Body className="WeatherWidgetBody">
              <Button onClick={getImage} className="AccordionButton">
                Get image
              </Button>
              <Button onClick={handleShow} className="AccordionButton">
                Get explanations!
              </Button>
              <Modal className="NasaModal" show={show} onHide={handleClose}>
                <Modal.Header className="NasaHeadMod">
                  <Modal.Title>Photo of the day</Modal.Title>
                </Modal.Header>
                <Modal.Body className="NasaBodyMod">
                  <img
                    className="NasalogoMod"
                    style={{ height: "300px" }}
                    src={urlN}
                    alt="nasa"
                  ></img>
                </Modal.Body>
                <Modal.Footer className="NasaFootMod">{desc}</Modal.Footer>
              </Modal>
            </Card.Body>
          </Card.Body>
        </Card>
      </div>
    );
  }
  return null;
}

export default Nasa;
