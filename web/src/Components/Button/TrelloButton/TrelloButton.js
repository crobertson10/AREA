import React, { useEffect } from "react";
import Axios from "axios";
import { Button } from "react-bootstrap";
import "./TrelloButton.css";
import Trello from "../../../Assets/trello.png";

function LogForm(props) {
  function connect() {
    localStorage.removeItem("trello-token");
    Axios("http://localhost:3000/link/auth/trello", {
      method: "GET"
    })
      .then(res => {
        console.log(res.data);
        localStorage.setItem('service', 'Trello');
        window.open(res.data.url, "_blank");
      })
      .catch(err => {
        console.log(err.toString());
      });
  }
  return (
    <Button className="TrelloButton" onClick={connect}>
      <img className="TrelloLogo" src={Trello} alt=""></img>
      Trello
    </Button>
  );
}

export default LogForm;
