import React, { useEffect, useState } from "react";
import { Modal, Container } from "react-bootstrap";
import ConnectMarquer from "Components/Modal/ConnectModal/ConnectMarquer";
import "./ConnectModal.css";
import TrelloButton from "../../Button/TrelloButton/TrelloButton";

function ConnectModal(props) {
  const [trelloCo, setTrelloCo] = useState(false);

  useEffect(() => {
    //console.log(window.location.href);
    let token = window.location.hash.substr(1);
    console.log("coucou", token);
    setTrelloCo(localStorage.getItem("trello-token") || false);
    if (token) {
      const splitedToken = token.split("=");
      console.log(splitedToken[1]);
      localStorage.setItem("trello-token", splitedToken[1]);
      window.close();
      window.location.reload();
    }
  });
  return (
    <Modal className="ConnectModal" {...props}>
      <Modal.Header className="ConnectHeadMod">
        Here you can connect to all your services
      </Modal.Header>
      <Modal.Body className="ConnectBodyMod">
        <Container className="ConnectServiceCard">
          <TrelloButton></TrelloButton>
          <ConnectMarquer connect={trelloCo}></ConnectMarquer>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

export default ConnectModal;
