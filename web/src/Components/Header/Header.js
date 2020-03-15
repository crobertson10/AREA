import React, { useState } from "react";
import Logo from "Assets/logo.png";
import LogOutModal from "Components/Modal/LogOutModal/LogOutModal";
import ConnectModal from "Components/Modal/ConnectModal/ConnectModal";
import ZapModal from "Components/Modal/ZapModal/ZapModal";
import GetZapModal from "Components/Modal/ZapModal/GetZapModal";
import "./Header.css";

function Header(props) {
  const [nshow, nsetShow] = useState(false);
  const [sshow, ssetShow] = useState(false);
  const [zshow, zsetShow] = useState(false);
  const [gshow, gsetShow] = useState(false);

  return (
    <div className="Header">
      <img className="Logo" src={Logo} alt=""></img>
      <div className="RightItem">
        <button className="Button" onClick={() => ssetShow(true)}>
          Connect your services
        </button>
        <ConnectModal show={sshow} onHide={() => ssetShow(false)} />
        <button className="Button" onClick={() => nsetShow(true)}>
          Log Out
        </button>
        <LogOutModal show={nshow} onHide={() => nsetShow(false)} />
        <button className="Button" onClick={() => zsetShow(true)}>
          Create a Zap!
        </button>
        <ZapModal show={zshow} onHide={() => zsetShow(false)} />
        <button className="Button" onClick={() => gsetShow(true)}>
          Get all my Zap!
        </button>
        <GetZapModal show={gshow} onHide={() => gsetShow(false)} />
      </div>
    </div>
  );
}

export default Header;
