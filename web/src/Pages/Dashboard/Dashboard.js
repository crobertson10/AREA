import React from "react";
import Navbar from "Components/Header/Navbar";
import "./Dashboard.css";

function Dashboard(...props) {
  return (
    <div>
      <Navbar props={true} />
    </div>
  );
}

export default Dashboard;
