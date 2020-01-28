import React, { useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import Slack from "assets/img/slack.png";
import Trello from "assets/img/trello.png";
import Github from "assets/img/github.png";
import Epitech from "assets/img/epitech.png";

export default function AppDropdown(props) {
  const [app, setApp] = useState("Select an App");
  return (
    <DropdownButton id="dropdown-basic-button" title={props.title}>
      <Dropdown.Item onClick={() => props.selected("slack")}>
        <img alt="slack" src={Slack} height="30" />
        <h5>Slack</h5>
      </Dropdown.Item>
      <Dropdown.Item onClick={() => props.selected("github")}>
        <img alt="slack" src={Github} height="30" />
        <h5>Github</h5>
      </Dropdown.Item>
      <Dropdown.Item onClick={() => props.selected("epitech")}>
        <img alt="slack" src={Epitech} height="30" />
        <h5>Epitech</h5>
      </Dropdown.Item>
      <Dropdown.Item onClick={() => props.selected("trello")}>
        <img alt="slack" src={Trello} height="30" />
        <h5>Trello</h5>
      </Dropdown.Item>
    </DropdownButton>
  );
}
