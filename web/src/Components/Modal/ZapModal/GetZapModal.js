import React, { useEffect, useState } from "react";
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
      {
        return zap.map(zap => (
          <Container className="ConnectServiceCard">
            {zap.serviceA}
            {zap.nameA}
            {zap.serviceR}
            {zap.nameR}
            <Button
              className="AccordionButton"
              onClick={() => {
                deleteZap(zap._id);
              }}
            >
              Delete
            </Button>
          </Container>
        ));
      }
    }
  }
  return (
    <Modal className="ConnectModal" {...props}>
      <Modal.Header className="ConnectHeadMod">
        All your zap are here!
        <Button
          onClick={() => {
            getAll();
          }}
        >
          Get your Zap!
        </Button>
      </Modal.Header>
      <Modal.Body className="ConnectBodyMod">{showZap()}</Modal.Body>
    </Modal>
  );
}

export default GetZap;
