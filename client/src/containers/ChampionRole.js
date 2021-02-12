import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import SummonerSpells from "./SummonerSpells";

const ChampionRole = () => {
  const selected = useParams();
  const [role, setRole] = useState("");
  useEffect(() => {
    axios.get(`http://localhost:4040/champions/${selected.id}`).then((res) => {
      setRole(res.data[selected.id].tags[0]);
    });
  }, []);
  return (
    <div>
      <p
        style={{
          position: "relative",
          color: "white",
          top: "2.2rem",
          left: "28rem",
          fontSize: "2rem",
        }}
      >
        Most Popular Role: {role}
      </p>
      <SummonerSpells tag={role}></SummonerSpells>
    </div>
  );
};

export default ChampionRole;
