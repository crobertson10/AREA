import React, { useEffect } from "react";
import Logo from "Assets/logo.png";
import { Modal } from "react-bootstrap";
import "./ConnectModal.css";
import TrelloButton from "../../Button/TrelloButton/TrelloButton";

function ConnectModal(props) {
  useEffect(() => {
    //console.log(window.location.href);
    let token = window.location.hash.substr(1);
    console.log("coucou", token);
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
        <img src={Logo} alt="" className="ConnectlogoMod"></img>
      </Modal.Header>
      <Modal.Body className="ConnectBodyMod">
        <TrelloButton></TrelloButton>
      </Modal.Body>
    </Modal>
  );
}

export default ConnectModal;
