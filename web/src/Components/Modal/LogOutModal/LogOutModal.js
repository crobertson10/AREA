import React, { useState } from "react";
import Logo from "Assets/logo.png";
import { Redirect } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { logout } from "../../Routes/utils";
import "../LogOutModal/LogOutModal.css";

function LogOutModal(props) {
  const [log, setLog] = useState(0);

  const logOut = () => {
    logout(localStorage.getItem("accessToken"));
    setLog(1);
  };

  return (
    <Modal className="Modal" {...props}>
      {log === 1 && <Redirect to="/" />}
      <Modal.Header className="HeadMod">
        <img src={Logo} alt="" className="logoMod"></img>
        <h1>Do you really want to Log Out?</h1>
      </Modal.Header>
      <Modal.Body className="bodyMod">
        <button className="Button" onClick={logOut}>
          Yes
        </button>
        <button className="Button" onClick={props.onHide}>
          No
        </button>
      </Modal.Body>
    </Modal>
  );
}

export default LogOutModal;
