import React, { useState } from "react";
import { Modal, Container, Button } from "react-bootstrap";
import Axios from "axios";
import "../ConnectModal/ConnectModal";

function GetZap(props) {
  const [zap, setZap] = useState([]);

  function getAll(props) {
    Axios(`http://localhost:8080/info/zaps`, {
      method: "post",
      headers: {
        "content-type": "application/json"
      },
      data: {
        authToken: localStorage.getItem("accessToken")
      }
    })
      .then(res => {
        setZap(res.data);
        console.log(res.data);
      })
      .catch(err => {
        console.log("popo");
      });
  }

  function deleteZap(props) {
    Axios(`http://localhost:8080/zap/delete`, {
      method: "post",
      headers: {
        "content-type": "application/json"
      },
      data: {
        authToken: localStorage.getItem("accessToken"),
        zapId: props
      }
    })
      .then(res => {
        setZap(() => {
          getAll();
        });
      })
      .catch(err => {
        console.log("popo");
      });
  }

  function showZap() {
    if (zap != null) {
      return zap.map(zap => (
        <Container className="DeleteZap">
          <h4 style={{ color: "#7e7e7e" }}>ZAP</h4>
          <Container className="ServZap">
            <h5 style={{ color: "#7e7e7e" }}> {zap.serviceA}</h5>
            <h5 style={{ color: "#a970fd" }}>Action:</h5>
            <h5 style={{ color: "#7e7e7e" }}> {zap.nameA}</h5>
          </Container>
          <Container className="ServZap">
            <h5 style={{ color: "#7e7e7e" }}> {zap.serviceR}</h5>
            <h5 style={{ color: "#a970fd" }}>Reaction:</h5>
            <h5 style={{ color: "#7e7e7e" }}> {zap.nameR}</h5>
          </Container>
          <Button
            className="ZapButton"
            onClick={() => {
              deleteZap(zap._id);
            }}
          >
            Delete
          </Button>
        </Container>
      ));
    }
    return null;
  }
  return (
    <Modal className="GetzapModal" style={{ borderRadius: "30px" }} {...props}>
      <Modal.Header className="ConnectHeadMod">
        <h3>All your zap are here!</h3>
        <Button
          onClick={() => {
            getAll();
          }}
          className="AccordionButton"
          style={{ margin: "30px" }}
        >
          Get your Zap!
        </Button>
      </Modal.Header>
      <Modal.Body className="ConnectBodyMod">{showZap()}</Modal.Body>
    </Modal>
  );
}

export default GetZap;
