import React from "react";
import Logo from "Assets/logo.png";
import Form from "Components/Form/SignUpForm/SignForm";
import { Modal, Button } from "react-bootstrap";
import "./SignModal.css";

function SignModal(props) {
  return (
    <Modal className="Modal" {...props}>
      <Modal.Header className="HeadMod">
        <img src={Logo} className="logoMod"></img>
      </Modal.Header>
      <Modal.Body className="BodyMod">
        <Form></Form>
      </Modal.Body>
      <Modal.Footer className="FootMod"></Modal.Footer>
    </Modal>
  );
}

export default SignModal;
