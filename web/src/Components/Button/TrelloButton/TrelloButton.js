import React from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import "./TrelloButton.css";
import Trello from "../../../Assets/trello.png";

function LogForm(props) {
  const connect = () => {
    axios
      .post("http://localhost:3000/link/auth/trello", {})
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  return (
    <Button className="TrelloButton" onClick={connect}>
      <img className="TrelloLogo" src={Trello} alt=""></img>
      Trello
    </Button>
  );
}

export default LogForm;
