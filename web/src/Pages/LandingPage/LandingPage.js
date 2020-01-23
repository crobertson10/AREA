import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import { CloudDownload } from "@material-ui/icons";
import Header from "Components/components/Header/Header";
import Footer from "Components/components/Footer/Footer";
import GridContainer from "Components/components/Grid/GridContainer";
import GridItem from "Components/components/Grid/GridItem";
import Button from "Components/components/CustomButtons/Button";
import HeaderLinks from "Components/components/Header/HeaderLinks";
import Parallax from "Components/components/Parallax/Parallax";
import Image from "assets/img/logo1.png";
import styles from "assets/jss/material-kit-react/views/landingPage.js";
import CustomDropdown from "Components/components/CustomDropdown/CustomDropdown";

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        brand={<img src={Image} height="50" />}
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
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
