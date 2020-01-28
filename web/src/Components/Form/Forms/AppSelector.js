import React from "react";
import "../../../Pages/ZapCreator/ZapCreator.css";
import GridContainer from "Components/components/Grid/GridContainer.js";
import GridItem from "Components/components/Grid/GridItem.js";
import Icon from "@material-ui/icons/ArrowForwardIosRounded";
import Button from "Components/components/CustomButtons/Button.js";
import Dropdown from "Components/Dropdown/Dropdown.js";

export default function AppSelector(props) {
  return (
    <div class="cardzap">
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={4}>
          <h5>Connect this app..</h5>
          <Dropdown title={props.firstApp} selected={props.first}></Dropdown>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <div class="icon">
            <Icon></Icon>
          </div>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <h5>with this one!</h5>
          <Dropdown title={props.secondApp} selected={props.second}></Dropdown>
        </GridItem>
      </GridContainer>
    </div>
  );
}
