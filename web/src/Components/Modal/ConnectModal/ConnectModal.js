import React, { useEffect } from "react";
import Logo from "Assets/logo.png";
import { Modal } from "react-bootstrap";
import "./ConnectModal.css";
import TrelloButton from "../../Button/TrelloButton/TrelloButton";
import GithubButton from '../../Button/GithubButton/GithubButton';
import Axios from 'axios';

function ConnectModal(props) {
  useEffect(() => {
    //console.log(window.location.href);
    if (localStorage.getItem('service') !== null && localStorage.getItem('service') === 'Trello') {
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
  if (localStorage.getItem('service') !== null && localStorage.getItem('service') === 'Github') {
      console.log('chibroscopie');
      let token = window.location.href.split('=');
      console.log("coucou", token[1]);
      Axios('http://localhost:3000/link/access/github', {
        method: 'POST',
        data: {
          code: token[1]
        }
      })
      .then(res => {
        console.log(res.data);
        localStorage.setItem('github-token', res.data.github_token);
        localStorage.removeItem('service');
        window.close();
        window.reload();
      })
      .catch(err => {
        console.log(err.toString());
      })
  }
  });
  return (
    <Modal className="ConnectModal" {...props}>
      <Modal.Header className="ConnectHeadMod">
        <img src={Logo} alt="" className="ConnectlogoMod"></img>
      </Modal.Header>
      <Modal.Body className="ConnectBodyMod">
        <TrelloButton></TrelloButton>
        <GithubButton></GithubButton>
      </Modal.Body>
    </Modal>
  );
}

export default ConnectModal;
