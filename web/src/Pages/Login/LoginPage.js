import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import EmailIcon from "@material-ui/icons/Email";
import AddIcon from "@material-ui/icons/Add";
import LockIcon from "@material-ui/icons/Lock";
import GridContainer from "Components/components/Grid/GridContainer";
import GridItem from "Components/components/Grid/GridItem";
import Button from "Components/components/CustomButtons/Button";
import Card from "Components/components/Card/Card";
import CardBody from "Components/components/Card/CardBody";
import CardHeader from "Components/components/Card/CardHeader";
import CardFooter from "Components/components/Card/CardFooter";
import CustomInput from "Components/components/CustomInput/CustomInput";
import Axios from "axios";
import styles from "assets/jss/material-kit-react/views/loginPage.js";

const useStyles = makeStyles(styles);

export default function LoginPage() {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const [values, setValues] = React.useState({
    mail: "",
    password: ""
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const submit = () => {
    console.log("password: " + values.password);
    console.log("mail: " + values.mail);
    Axios({
      method: "POST",
      url: "http://localhost:3000/api/user/register",
      data: values
    })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={4}>
            <Card className={classes[cardAnimaton]}>
              <CardHeader color="danger" style={{ textAlign: "center" }}>
                <h3>Login</h3>
              </CardHeader>
              <CardBody>
                <CustomInput
                  labelText="Email"
                  id="material"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    value: values.mail,
                    onChange: handleChange("mail"),
                    endAdornment: (
                      <InputAdornment position="end">
                        <EmailIcon />
                      </InputAdornment>
                    )
                  }}
                />
                <CustomInput
                  labelText="Mot de passe"
                  id="material"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    value: values.password,
                    onChange: handleChange("password"),
                    endAdornment: (
                      <InputAdornment position="end">
                        <LockIcon />
                      </InputAdornment>
                    )
                  }}
                />
              </CardBody>
              <CardFooter>
                <Button
                  href={"/dashboard"}
                  color="danger"
                  round
                  onClick={submit}
                >
                  Sign In
                </Button>
                <Button href={"/sign-up"} color="danger" round>
                  <AddIcon />
                  Sign Up
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
