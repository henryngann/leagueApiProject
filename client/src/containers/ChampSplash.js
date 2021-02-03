import React, { useState } from "react";
import styled from "styled-components";

const ChampName = styled.h1`
  font-size: 12em;
  text-align: center;
  color: white;
  font-style: italic;
  top: -300px;
  position: relative;
`;
const ChampSplash = (props) => {
  const [skinCount, setSkinCount] = useState(0);
  const switchSkins = () => {};
  return (
    <div className="container" style={{ width: "80rem", height: "45rem" }}>
      <img
        onClick={switchSkins}
        style={{ width: "80rem", height: "45rem" }}
        className="mt-5"
        src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${props.id}_${skinCount}.jpg`}
        alt="BG"
      />
      <ChampName className="">{props.id}</ChampName>
    </div>
  );
};

export default ChampSplash;
