import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/loginPage.js";
import image from "assets/img/bg7.jpg";
import GithubForm from "Components/Form/Forms/GithubForm";
const useStyles = makeStyles(styles);

class GithubSignIn extends React.Component {
  render() {
    return (
      <div
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        <GithubForm />
      </div>
    );
  }
}

export default GithubSignIn;
