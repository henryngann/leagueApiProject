import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ChampTable = () => {
  const selected = useParams();
  const [attack, setAttack] = useState("");
  const [defense, setDefense] = useState("");
  const [magic, setMagic] = useState("");
  const [difficulty, setDifficulty] = useState("");

  const [health, setHealth] = useState("");
  const [mana, setMana] = useState("");
  const [apl, setApl] = useState("");
  const [mpl, setMpl] = useState("");

  const [ad, setAD] = useState("");
  const [as, setAS] = useState("");
  const [adpl, setAdpl] = useState("");
  const [aspl, setAspl] = useState("");

  const [hpregen, setHpregen] = useState("");
  const [mpregen, setMpregen] = useState("");
  const [hpregenplvl, setHpregenplvl] = useState("");
  const [mpregenplvl, setMpregenplvl] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:4040/champions/${selected.id}`).then((res) => {
      setAttack(res.data[selected.id].info.attack);
      setDefense(res.data[selected.id].info.defense);
      setMagic(res.data[selected.id].info.magic);
      setDifficulty(res.data[selected.id].info.difficulty);

      setHealth(res.data[selected.id].stats.hp);
      setMana(res.data[selected.id].stats.mp);
      setApl(res.data[selected.id].stats.armorperlevel);
      setMpl(res.data[selected.id].stats.spellblockperlevel);

      setAD(res.data[selected.id].stats.attackdamage);
      setAS(res.data[selected.id].stats.attackspeed);
      setAdpl(res.data[selected.id].stats.attackdamageperlevel);
      setAspl(res.data[selected.id].stats.attackspeedperlevel);

      setHpregen(res.data[selected.id].stats.hpregen);
      setMpregen(res.data[selected.id].stats.mpregen);
      setHpregenplvl(res.data[selected.id].stats.hpregenperlevel);
      setMpregenplvl(res.data[selected.id].stats.mpregenperlevel);
    });
  }, []);
  return (
    <table className="champTable tableWords">
      <tr className="tableWords">
        <th className="">Champion Statistics</th>
        <th className="     "></th>
        <th></th>
        <th></th>
      </tr>
      <tr>
        <td>Attack: {attack}</td>
        <td>Defense: {defense} </td>
        <td>Magic: {magic}</td>
        <td>Difficulty:{difficulty}</td>
      </tr>
      <tr>
        <td>Health: {health}</td>
        <td>Mana: {mana}</td>
        <td>ArmorPerLvL: {apl}</td>
        <td>MrPerLvL: {mpl}</td>
      </tr>
      <tr>
        <td>Attack Damage: {ad} </td>
        <td>Attack Speed: {as} </td>
        <td>ADPerLvl: {adpl}</td>
        <td>ASPerLvl: {aspl} </td>
      </tr>
      <tr>
        <td>HP Regen: {hpregen}</td>
        <td>MP Regen: {mpregen}</td>
        <td>HPRegenPerLvL: {hpregenplvl}</td>
        <td>MPRegenPerLvL: {mpregenplvl}</td>
      </tr>
    </table>
  );
};

export default ChampTable;
