import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "Components/components/Grid/GridContainer.js";
import GridItem from "Components/components/Grid/GridItem.js";
import CardHeader from "Components/components/Card/CardHeader.js";
import AppSelector from "Components/Form/Forms/AppSelector";
import styles from "assets/jss/material-kit-react/views/loginPage.js";

export default function ZapCreator(props) {
  const useStyles = makeStyles(styles);
  const [firstApp, setFirstApp] = useState("Select an app");
  const [secondApp, setSecondApp] = useState("Select an app");
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  const classes = useStyles();

  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  return (
    <div className="main">
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={5}>
          <Card className={classes[cardAnimaton]}>
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
