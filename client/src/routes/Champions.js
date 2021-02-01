import React from "react";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import Search from "../components/Search";
import Roster from "../containers/Roster";
const Champions = () => {
  return (
    <div>
      <h1 className="text-center mt-5">Henry.GG</h1>
      <Title></Title>
      <Search></Search>
      <div className="container mt-5">
        <div className="row text-end">
          <div className="col-3">
            <h5>! API is currently out of date hence the missing images. !</h5>
          </div>
          <div className="col-4"></div>
          <div className="col-5">
            <h5>! Will update API once API Keys are redistrubuted !</h5>
          </div>
        </div>
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
