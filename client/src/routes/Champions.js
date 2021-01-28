import React from "react";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import Search from "../components/Search";
import Roster from "../containers/Roster";
const Champions = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Title></Title>
      <Search></Search>
      <Roster></Roster>
    </div>
  );
};

export default Champions;
