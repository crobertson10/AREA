import React, { useState } from "react";
import Arrow from "Assets/arrow.png";

import {
  Alert,
  Modal,
  Container,
  Button,
  Dropdown,
  Form,
  DropdownButton
} from "react-bootstrap";
import Axios from "axios";
import "../ConnectModal/ConnectModal";

function ZapModal(props) {
  const [serv, setServ] = useState([]);
  const [act, setA] = useState([]);
  const [aS, setAs] = useState();
  const [rS, setRs] = useState();
  const [myAct, setMyact] = useState();
  const [myReac, setMyreac] = useState();
  const [status, setStatus] = useState(0);
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
        setServ(res.data);
      })
      .catch(err => {});
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
      })
      .catch(err => {});
  }

  function getReact(props) {
    Axios(`http://localhost:8080/info/reactions`, {
      method: "post",
      headers: {
        "content-type": "application/json"
      },
      data: {
        authToken: localStorage.getItem("accessToken"),
        service: props,
        actionService: aS,
        actionName: myAct
      }
    })
      .then(res => {
        setA(res.data);
      })
      .catch(err => {});
  }

  function changeData1(e) {
    setData1(e.target.value);
  }

  function changeData2(e) {
    setData2(e.target.value);
  }

  function showAlert(props) {
    if (props === 200) {
      return (
        <Alert style={{ margin: "10px" }} variant="success">
          Your Zap is successfully created!
        </Alert>
      );
    } else if (props === 400) {
      return (
        <Alert style={{ margin: "10px" }} variant="danger">
          Your Zap has not been created!
        </Alert>
      );
    }
  }

  function showAll() {
    Axios(`http://localhost:8080/zap/save`, {
      method: "post",
      headers: {
        "content-type": "application/json"
      },
      data: {
        authToken: localStorage.getItem("accessToken"),
        serviceA: aS,
        serviceR: rS,
        nameA: myAct,
        nameR: myReac
      }
    })
      .then(res => {
        setStatus(200);
      })
      .catch(err => {
        setStatus(400);
      });
  }

  return (
    <Modal className="ConnectModal" {...props}>
      <Modal.Header className="ConnectHeadMod">
        Here you can create your zap!
      </Modal.Header>
      <Modal.Body className="ConnectBodyMod">
        <Container className="ZapCard">
          <Container className="Itemrow">
            <DropdownButton
              id="typodropbutton"
              style={{ margin: "5px" }}
              onClick={() => getActserv()}
              title={"Action Service"}
            >
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
            <h1 class="typoservice">{aS}</h1>
          </Container>
          <Container className="Itemrow">
            <DropdownButton
              id="typodropbutton"
              style={{ margin: "5px" }}
              onClick={() => getAct(aS)}
              title={"Action"}
            >
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
            <h1 class="typoservice">{myAct}</h1>
          </Container>
          <Form.Control
            style={{ margin: "5px" }}
            size="sm"
            type="text"
            placeholder="Small text"
            onChange={e => changeData1(e)}
          />
        </Container>
        <img className="Logo" src={Arrow} alt="" class="center"></img>
        <Container className="ZapCard">
          <Container className="Itemrow">
            <DropdownButton
              id="typodropbutton"
              style={{ margin: "5px" }}
              title={"Reaction Service"}
            >
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
            <h1 class="typoservice">{rS}</h1>
          </Container>
          <Container className="Itemrow">
            <DropdownButton
              id="typodropbutton"
              style={{ margin: "5px" }}
              onClick={() => getReact(rS)}
              title={"Action"}
            >
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
            <h1 class="typoservice">{myReac}</h1>
          </Container>
          <Form.Control
            style={{ margin: "5px" }}
            size="sm"
            type="text"
            placeholder="Small text"
            onChange={e => changeData2(e)}
          />
        </Container>
        <Button className="TrelloButton" onClick={() => showAll()}>
          Create my Zap!
        </Button>
        {showAlert(status)}
      </Modal.Body>
    </Modal>
  );
}

export default ZapModal;
