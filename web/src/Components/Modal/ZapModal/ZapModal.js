import React, { useEffect, useState } from "react";
import { Modal, Container, Dropdown, DropdownButton } from "react-bootstrap";
import Axios from "axios";
import { url } from "../../../Utils/Utils";
import "../ConnectModal/ConnectModal";

function ZapModal(props) {
  // const [actServ, setActserv] = useState(getActserv());
  // const [act, setAct] = useState([]);
  // const [reacServ, setReacserv] = useState([]);
  // const [reac, setReac] = useState([]);

  function getActserv() {
    console.log(localStorage.getItem("accessToken"));
    Axios(`http://localhost:8080/info/services`, {
      method: "get",
      data: {
        authToken: localStorage.getItem("accessToken")
      }
    })
      .then(res => {
        // setActserv(res.data);
        console.log("YOOOOOOOOOOOOOOOOOOOOOOOOO");
      })
      .catch(err => {
        console.log("popo");
      });
  }

  return (
    <Modal className="ConnectModal" {...props}>
      <Modal.Header className="ConnectHeadMod">
        Here you can connect to all your services
      </Modal.Header>
      <Modal.Body className="ConnectBodyMod">
        <Container className="ConnectServiceCard">
          <DropdownButton
            onClick={getActserv()}
            title={"select your shit"}
          ></DropdownButton>
          <DropdownButton></DropdownButton>
        </Container>
        <Container className="ConnectServiceCard">
          <DropdownButton title={"select your shit"}></DropdownButton>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

export default ZapModal;
