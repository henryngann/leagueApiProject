import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Passive from "../containers/Passive";

const ChampSkills = () => {
  const selected = useParams();
  const [loaded, setLoaded] = useState(false);
  const [skills, setSkills] = useState([]);
  const [currentChamp, setCurrentChamp] = useState("");
  useEffect(() => {
    axios.get(`http://localhost:4040/champions/${selected.id}`).then((res) => {
      setSkills(res.data[selected.id].spells);
      setCurrentChamp(res.data[selected.id]);
      setLoaded(true);
    });
  }, []);

  if (loaded === false) {
    return loaded;
  } else {
    return (
      <div>
        <Passive
          name={currentChamp.id}
          image={currentChamp.passive.image.full}
        ></Passive>
        {skills.map((skill) => {
          return (
            <img
              key={skill.id}
              src={`http://ddragon.leagueoflegends.com/cdn/11.3.1/img/spell/${skill.image.full}`}
              alt="Abilties"
              style={{ padding: "40px", marginTop: "8rem" }}
            />
          );
        })}
      </div>
    );
  }
};

export default ChampSkills;
