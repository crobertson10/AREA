import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import Image from "assets/img/doge.jpeg";
import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        brand="AREA"
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
      />
      <Parallax>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Welcome to your AREA!</h1>
              <h4>Create your own automated dashboard with AREA.</h4>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <img src={Image} width="100%" />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              md={1}
              direction="column"
              justify="center"
              alignItems="center"
            >
              <img src={Image} width="100%" />
              <img src={Image} width="100%" />
            </GridItem>
            <GridItem
              md={11}
              direction="column"
              justify="center"
              alignItems="center"
            >
              <img src={Image} width="100%" />
              <img src={Image} width="100%" />
            </GridItem>
          </GridContainer>
        </div>
      </div>
      <Footer />
    </div>
  );
}
