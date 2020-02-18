import React, { useState } from "react";
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import "./LogForm.css";

function LogForm(props) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const mail = event => {
    setEmail(event.target.value);
  };
  const passW = event => {
    setPass(event.target.value);
  };

  const submit = () => {
    axios
      .post("http://localhost:3000/api/user/login", {
        email: email,
        password: pass
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  return (
    <Form>
      <Form.Group>
        <Form.Label className="Typo">Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={mail} />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label className="Typo">Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={passW} />
      </Form.Group>
      <Button onClick={submit}>Submit</Button>
    </Form>
  );
}

export default LogForm;
