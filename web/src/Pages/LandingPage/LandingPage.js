import React from "react";
import "./LandingPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Nav, Button } from "react-bootstrap";

export default function LandingPage(props) {
  return (
    <div class="container">
      <div class="row">
        <div class="col-sm" color="white">
          One of three columns
        </div>
        <div class="col-sm">One of three columns</div>
        <div class="col-sm">One of three columns</div>
      </div>
    </div>
  );
}
