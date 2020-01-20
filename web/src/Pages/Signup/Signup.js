import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/loginPage.js";
import image from "assets/img/bg7.jpg";
import SignUpForm from "Components/Form/Forms/SignUpForm";
const useStyles = makeStyles(styles);

class SignUp extends React.Component {
  render() {
    return (
      <div
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        <SignUpForm />
      </div>
    );
  }
}

export default SignUp;
