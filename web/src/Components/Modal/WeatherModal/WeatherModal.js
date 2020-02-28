import React, {useState} from "react";
import Navbar from "Components/Header/Navbar";
import { Container, Row, Col, Button } from "react-bootstrap";
import Axios from "axios"
import "./Login.css";

function WeatherModal(props) {
const isLoggedIn = props.show;
  if (isLoggedIn) {
    return <h1>lol</h1>;
  }
}

export default WeatherModal;