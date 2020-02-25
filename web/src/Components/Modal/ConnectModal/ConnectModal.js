import React, { useEffect } from "react";
import Logo from "Assets/logo.png";
import { Modal } from "react-bootstrap";
import "./ConnectModal.css";
import TrelloButton from "../../Button/TrelloButton/TrelloButton";
import Axios from 'axios';

function ConnectModal(props) {
  useEffect(() => {
    //console.log(window.location.href);
    if (localStorage.getItem('service') !== null) {
      let token = window.location.hash.substr(1);
      console.log("coucou", token);
      const splitedToken = token.split("=");
      console.log(splitedToken[1]);
      console.log(localStorage.getItem('service'));
      localStorage.setItem("trello-token", splitedToken[1]);
      localStorage.removeItem('service');
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
