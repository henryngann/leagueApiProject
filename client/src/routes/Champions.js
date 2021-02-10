import React from "react";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import Roster from "../containers/Roster";
import "../media/background.css";
const Champions = () => {
  return (
    <div className="background">
      <Navbar></Navbar>
      <h1 className="text-center mt-5" style={{ color: "white" }}>
        Henry.GG
      </h1>
      <Title></Title>

      <div className="container mt-5" style={{ height: "125rem" }}>
        <div className="row">
          <div class="col">
            <Roster />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Champions;
