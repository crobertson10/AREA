import React, { useState } from "react";
import Logo from "Assets/logo.png";
import LogModal from "Components/Modal/LogModal";
import "./UnHeader.css";

function UnHeader(props) {
  const [show, setShow] = useState(false);

  return (
    <div className="UnHeader">
      <img className="Logo" src={Logo} alt=""></img>
      <div className="RightItem">
        <button className="Button" onClick={() => setShow(true)}>
          Log In
        </button>
        <LogModal show={show} onHide={() => setShow(false)} />
        <button className="Button">Sign Up</button>
      </div>
    </div>
  );
}

export default UnHeader;
