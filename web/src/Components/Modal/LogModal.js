import React from "react";
import Logo from "Assets/logo.png";
import Form from "Components/Form/LogForm/LogForm";
import { Modal, Button } from "react-bootstrap";
import "./LogModal.css";

function LogModal(props) {
  return (
    <Modal className="Modal" {...props}>
      <Modal.Header className="HeadMod">
        <img src={Logo} className="logoMod"></img>
      </Modal.Header>
      <Modal.Body className="BodyMod">
        <Form></Form>
      </Modal.Body>
      <Modal.Footer className="FootMod">
        <Button onClick={props.onHide}>Submit</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default LogModal;
