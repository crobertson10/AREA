import React, { useState } from "react";
import Logo from "Assets/logo.png";
import LogOutModal from "Components/Modal/LogOutModal/LogOutModal";
import "./Header.css";

function Header(props) {
  const [show, setShow] = useState(false);
  const [nshow, nsetShow] = useState(false);
  return (
    <div className="Header">
      <img className="Logo" src={Logo} alt=""></img>
      <div className="RightItem">
        <button className="Button" onClick={() => setShow(true)}>
          Create a Zap
        </button>
        <button className="Button" onClick={() => nsetShow(true)}>
          Log Out
        </button>
        <LogOutModal show={nshow} onHide={() => nsetShow(false)} />
      </div>
    </div>
  );
}

export default Header;
