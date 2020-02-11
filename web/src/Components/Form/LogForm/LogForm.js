import React from "react";
import { Button, Form } from "react-bootstrap";
import "./LogForm.css";

function LogForm(props) {
  return (
    <Form>
      <Form.Group>
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
    </Form>
  );
}

export default LogForm;
