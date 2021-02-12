import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const SummonerSpells = (props) => {
  const selected = useParams();
  useEffect(() => {
    axios
      .get(
        `http://ddragon.leagueoflegends.com/cdn/11.3.1/data/en_US/summoner.json`
      )
      .then((res) => {
        console.log(res.data);
      });
  }, []);
  if (props.tag === "Marksman") {
    return (
      <div>
        <p className="spellsText">Recommended Spells:</p>
        <img
          key={props.id}
          className="spells"
          width="85px"
          height="85px"
          alt={props.id}
          src={`http://ddragon.leagueoflegends.com/cdn/11.3.1/img/spell/SummonerFlash.png`}
        />
        <img
          key={props.id}
          className="spells"
          width="85px"
          height="85px"
          alt={props.id}
          src={`http://ddragon.leagueoflegends.com/cdn/11.3.1/img/spell/SummonerHeal.png`}
        />
      </div>
    );
  } else if (props.tag === "Tank") {
    return (
      <div>
        <p className="spellsText">Recommended Spells:</p>
        <img
          key={props.id}
          className="spells"
          width="85px"
          height="85px"
          alt={props.id}
          src={`http://ddragon.leagueoflegends.com/cdn/11.3.1/img/spell/SummonerFlash.png`}
        />
        <img
          key={props.id}
          className="spells"
          width="85px"
          height="85px"
          alt={props.id}
          src={`http://ddragon.leagueoflegends.com/cdn/11.3.1/img/spell/SummonerExhaust.png`}
        />
      </div>
    );
  } else if (props.tag === "Mage") {
    return (
      <div>
        <p className="spellsText">Recommended Spells:</p>
        <img
          key={props.id}
          className="spells"
          width="85px"
          height="85px"
          alt={props.id}
          src={`http://ddragon.leagueoflegends.com/cdn/11.3.1/img/spell/SummonerFlash.png`}
        />
        <img
          key={props.id}
          className="spells"
          width="85px"
          height="85px"
          alt={props.id}
          src={`http://ddragon.leagueoflegends.com/cdn/11.3.1/img/spell/SummonerDot.png`}
        />
      </div>
    );
  } else if (props.tag === "Fighter") {
    return (
      <div>
        <p className="spellsText">Recommended Spells:</p>
        <img
          key={props.id}
          className="spells"
          width="85px"
          height="85px"
          alt={props.id}
          src={`http://ddragon.leagueoflegends.com/cdn/11.3.1/img/spell/SummonerFlash.png`}
        />
        <img
          key={props.id}
          className="spells"
          width="85px"
          height="85px"
          alt={props.id}
          src={`http://ddragon.leagueoflegends.com/cdn/11.3.1/img/spell/SummonerTeleport.png`}
        />
      </div>
    );
  } else if (props.tag === "Assassin") {
    return (
      <div>
        <p className="spellsText">Recommended Spells:</p>
        <img
          key={props.id}
          className="spells"
          width="85px"
          height="85px"
          alt={props.id}
          src={`http://ddragon.leagueoflegends.com/cdn/11.3.1/img/spell/SummonerFlash.png`}
        />
        <img
          key={props.id}
          className="spells"
          width="85px"
          height="85px"
          alt={props.id}
          src={`http://ddragon.leagueoflegends.com/cdn/11.3.1/img/spell/SummonerDot.png`}
        />
      </div>
    );
  } else {
    return <p>nothing</p>;
  }
};

export default SummonerSpells;
