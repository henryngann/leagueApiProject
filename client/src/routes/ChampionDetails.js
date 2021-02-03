import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import ChampCard from "../containers/ChampCard";
import ChampSplash from "../containers/ChampSplash";
import ChampLoading from "../components/ChampLoading";
import ChampSkills from "../containers/ChampSkills";
import styled from "styled-components";
import Abilities from "../components/Abilities";
const ChampionDetails = () => {
  const selected = useParams();

  const Banner = styled.div`
    text-align: start;
    margin-left: 20.3rem;
    margin-top: 10rem;
  `;

  return (
    <div className="bg-dark">
      <Navbar></Navbar>
      <ChampSplash id={selected.id} />
      <div className="d-flex">
        <ChampLoading id={selected.id}></ChampLoading>
        <Abilities></Abilities>
        <ChampSkills />
      </div>
      <ChampCard></ChampCard>
    </div>
  );
};

export default ChampionDetails;
