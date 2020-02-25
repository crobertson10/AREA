import React, { useEffect } from "react";
import Axios from "axios";
import { Button } from "react-bootstrap";

function LogForm(props) {
  function connect() {
    Axios('http://localhost:3000/link/auth/github', {
      method: 'GET',
    })
    .then(res => {
      console.log(res.data);
      localStorage.setItem('service', 'Github');
      window.open(res.data.url, "_blank");
    })
    .catch(e => {
      console.log(e.toString());
    })
    /*localStorage.removeItem("trello-token");
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
      });*/
  }
  return (
    <Button onClick={connect}>
      Github
    </Button>
  );
}

export default LogForm;
