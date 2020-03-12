import React, { useEffect, useState } from "react";
import {
  Modal,
  Container,
  Button,
  Dropdown,
  Form,
  DropdownButton
} from "react-bootstrap";
import Axios from "axios";
import { url } from "../../../Utils/Utils";
import "../ConnectModal/ConnectModal";

function ZapModal(props) {
  const [serv, setServ] = useState([]);
  const [act, setA] = useState([]);
  const [aS, setAs] = useState();
  const [rS, setRs] = useState();
  const [myAct, setMyact] = useState();
  const [myReac, setMyreac] = useState();
  const [data1, setData1] = useState();
  const [data2, setData2] = useState();

  function getActserv() {
    Axios(`http://localhost:8080/info/services`, {
      method: "post",
      headers: {
        "content-type": "application/json"
      },
      data: {
        authToken: localStorage.getItem("accessToken")
      }
    })
      .then(res => {
        console.log(res.data);
        setServ(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  function getAct(props) {
    Axios(`http://localhost:8080/info/actions`, {
      method: "post",
      headers: {
        "content-type": "application/json"
      },
      data: {
        authToken: localStorage.getItem("accessToken"),
        service: props
      }
    })
      .then(res => {
        setA(res.data);
        console.log(res.data);
      })
      .catch(err => {
        console.log("popo");
      });
  }

  function changeData1(e) {
    setData1(e.target.value);
  }

  function changeData2(e) {
    setData2(e.target.value);
  }

  function showAll() {
    console.log(
      aS,
      "  ",
      rS,
      "  ",
      myAct,
      "  ",
      myReac,
      "  ",
      data1,
      "  ",
      data2,
      "  "
    );
  }

  return (
    <Modal className="ConnectModal" {...props}>
      <Modal.Header className="ConnectHeadMod">
        Here you can create your zap!
      </Modal.Header>
      <Modal.Body className="ConnectBodyMod">
        <Container className="ConnectServiceCard">
          <DropdownButton onClick={() => getActserv()} title={"Action Service"}>
            {serv.map(serv => (
              <Dropdown.Item
                onClick={() => {
                  console.log(serv);
                  setAs(serv);
                }}
              >
                {serv}
              </Dropdown.Item>
            ))}
          </DropdownButton>
          <DropdownButton onClick={() => getAct(aS)} title={"Action"}>
            {act.map(act => (
              <Dropdown.Item
                onClick={() => {
                  setMyact(act);
                }}
              >
                {act}
              </Dropdown.Item>
            ))}
          </DropdownButton>
          <Form.Control
            size="sm"
            type="text"
            placeholder="Small text"
            onChange={e => changeData1(e)}
          />
        </Container>
        <Container className="ConnectServiceCard">
          <DropdownButton title={"Reaction Service"}>
            {serv.map(serv => (
              <Dropdown.Item
                onClick={() => {
                  console.log(serv);
                  setRs(serv);
                }}
              >
                {serv}
              </Dropdown.Item>
            ))}
          </DropdownButton>
          <DropdownButton onClick={() => getAct(rS)} title={"Action"}>
            {act.map(act => (
              <Dropdown.Item
                onClick={() => {
                  setMyreac(act);
                }}
              >
                {act}
              </Dropdown.Item>
            ))}
          </DropdownButton>
          <Form.Control
            size="sm"
            type="text"
            placeholder="Small text"
            onChange={e => changeData2(e)}
          />
        </Container>
        <Button className="TrelloButton" onClick={() => showAll()}>Create my Zap!</Button>
      </Modal.Body>
    </Modal>
  );
}

export default ZapModal;
