import React from "react";
import Axios from "axios";
import { Button } from "react-bootstrap";
import trelloLogo from "Assets/trello.png";
import {url} from "../../../Utils/Utils";
import "./TrelloButton.css";

function LogForm(props) {
  function connect() {
    localStorage.removeItem("trello-token");
    Axios(`${url.local}link/auth/trello`, {
      method: "GET"
    })
      .then(res => {
        console.log(res.data);
        localStorage.setItem("service", "Trello");
        window.open(res.data.url, "_blank");
      })
      .catch(err => {
        console.log(err.toString());
      });
  }
  return (
    <Button className="TrelloButton" onClick={connect}>
      <img className="ConnectionLogo" src={trelloLogo} alt=""></img>
      Trello
    </Button>
  );
}

export default LogForm;
