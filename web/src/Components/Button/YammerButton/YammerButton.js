import React, { useEffect } from "react";
import Axios from "axios";
import { Button } from "react-bootstrap";

function LogForm(props) {
  function connect() {
    Axios('http://localhost:3000/link/auth/yammer', {
      method: 'GET',
    })
    .then(res => {
      console.log(res.data);
      localStorage.setItem('service', 'Yammer');
      window.open(res.data.url, "_blank");
    })
    .catch(e => {
      console.log(e.toString());
    })
  }
  return (
    <Button onClick={connect}>
      Yammer
    </Button>
  );
}

export default LogForm;