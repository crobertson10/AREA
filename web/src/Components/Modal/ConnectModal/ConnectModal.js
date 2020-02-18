import React from "react";
import Logo from "Assets/logo.png";
import { Modal } from "react-bootstrap";
import "./ConnectModal.css";
import TrelloButton from "../../Button/TrelloButton/TrelloButton";

function ConnectModal(props) {
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
