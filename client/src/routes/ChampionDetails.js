import React from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import ChampCard from "../containers/ChampCard";
import ChampSplash from "../containers/ChampSplash";
import ChampLoading from "../components/ChampLoading";
import ChampSkills from "../containers/ChampSkills";
import "../media/background.css";
const ChampionDetails = () => {
  const selected = useParams();

  return (
    <div className="background" style={{ height: "110rem" }}>
      <Navbar></Navbar>
      <ChampSplash id={selected.id} />

      <div className="d-flex align-items-start align-content-between">
        <ChampLoading id={selected.id}></ChampLoading>
        <ChampSkills />
      </div>
    </div>
  );
};

export default ChampionDetails;
