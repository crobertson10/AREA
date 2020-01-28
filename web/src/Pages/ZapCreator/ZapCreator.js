import React, { useState } from "react";
import { Card } from "react-bootstrap";
import GridContainer from "Components/components/Grid/GridContainer.js";
import GridItem from "Components/components/Grid/GridItem.js";
import CardHeader from "Components/components/Card/CardHeader.js";
import AppSelector from "Components/Form/Forms/AppSelector";

export default function ZapCreator(props) {
  const [firstApp, setFirstApp] = useState("Select an app");
  const [secondApp, setSecondApp] = useState("Select an app");

  return (
    <div className="main">
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={5}>
          <Card>
            <CardHeader color="danger" style={{ textAlign: "center" }}>
              <h1>Create a Zap</h1>
            </CardHeader>
            <AppSelector
              firstApp={firstApp}
              secondApp={secondApp}
              first={setFirstApp}
              second={setSecondApp}
            ></AppSelector>
            {firstApp !== "Select an app" && secondApp !== "Select an app" ? (
              <AppSelector></AppSelector>
            ) : null}
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
