import React from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import ChampCard from "../containers/ChampCard";
import ChampSplash from "../containers/ChampSplash";
import ChampLoading from "../components/ChampLoading";
import ChampSkills from "../containers/ChampSkills";
import ChampTable from "../containers/ChampTable";
import ChampName from "../components/ChampName";
import "../media/background.css";
import ChampionRole from "../containers/ChampionRole";
import SummonerSpells from "../containers/SummonerSpells";
const ChampionDetails = () => {
  const selected = useParams();

  return (
    <div className="background" style={{ height: "60rem" }}>
      <div style={{ width: "1080px", height: "150px" }}>
        <ChampName id={selected.id}></ChampName>
        <ChampionRole></ChampionRole>
      </div>

      <div className="d-flex">
        <ChampLoading id={selected.id}></ChampLoading>

        <ChampTable></ChampTable>
        <ChampSkills></ChampSkills>
      </div>
    </div>
  );
};

export default ChampionDetails;
