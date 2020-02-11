import React from "react";
import Logo from "Assets/logo.png";
import "./Header.css";

function Header(props) {
  return (
    <div className="Header">
      <img className="Logo" src={Logo} alt=""></img>
      <button>Create a Zap</button>
      <button>Connect an account</button>
    </div>
  );
}

export default Header;
