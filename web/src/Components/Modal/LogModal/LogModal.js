import React from "react";
import Form from "Components/Form/LogForm/LogForm";
import { Modal } from "react-bootstrap";
import "./LogModal.css";

function LogModal(props) {
  return (
    <Modal className="Modal" {...props}>
      <Modal.Header className="DisconnectHeadMod">
        Please enter your Ids
      </Modal.Header>
      <Modal.Body className="DisconnectBodyMod">
        <Form></Form>
      </Modal.Body>
    </Modal>
  );
}

export default LogModal;
