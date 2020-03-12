import React from "react";
import Logo from "Assets/logo.png";
import Form from "Components/Form/SignUpForm/SignForm";
import { Modal } from "react-bootstrap";
import "./SignModal.css";

function SignModal(props) {
  return (
    <Modal className="Modal" {...props}>
      <Modal.Header className="DisconnectHeadMod">
        Please enter your personnal informations
      </Modal.Header>
      <Modal.Body className="DisconnectBodyMod">
        <Form></Form>
      </Modal.Body>
    </Modal>
  );
}

export default SignModal;
