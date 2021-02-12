import React from "react";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import Roster from "../containers/Roster";
import Logo from "../components/Logo";
import AnimatedChamps from "../components/AnimateChamps";

import "../media/background.css";
const Champions = () => {
  return (
    <div className="background">
      <Navbar></Navbar>
      <Logo></Logo>
      <Title></Title>

      <div className="container mt-5" style={{ height: "125rem" }}>
        <div className="row">
          <div class="col">
            <Roster></Roster>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Champions;
