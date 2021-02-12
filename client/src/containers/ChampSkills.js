import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Passive from "../containers/Passive";
import SkillsTitle from "../components/SkillsTitle";
import SkillsDesc from "../containers/SkillsDesc";

const ChampSkills = () => {
  const selected = useParams();
  const [loaded, setLoaded] = useState(false);
  const [skills, setSkills] = useState([]);
  const [currentChamp, setCurrentChamp] = useState("");
  const [description, setDescription] = useState("");
  const [sname, setSname] = useState("");
  const [selectedSkill, setSelectedSkill] = useState([0]);
  const [pname, setPname] = useState("");
  const [desc, setDesc] = useState("");

  //statistic states//

  useEffect(() => {
    axios.get(`http://localhost:4040/champions/${selected.id}`).then((res) => {
      setSkills(res.data[selected.id].spells);
      setCurrentChamp(res.data[selected.id]);
      setDescription(res.data[selected.id].spells[selectedSkill].description);
      setSname(res.data[selected.id].spells[selectedSkill].name);
      setPname(res.data[selected.id].passive.name);
      setDesc(res.data[selected.id].passive.description);
      setLoaded(true);
    });
  }, []);
  const handleClick = (id, description) => {
    console.log(id);
    setSname(id);
    setDescription(description);
  };
  const handlePassive = (pname, desc) => {
    setSname(pname);
    setDescription(desc);
  };
  if (loaded === false) {
    return loaded;
  } else {
    return (
      <div>
        <Passive
          click={() => handlePassive(pname, desc)}
          image={currentChamp.passive.image.full}
        ></Passive>
        {skills.map((skill) => {
          return (
            <img
              key={skill.id}
              onClick={() => handleClick(skill.name, skill.description)}
              src={`http://ddragon.leagueoflegends.com/cdn/11.3.1/img/spell/${skill.image.full}`}
              alt="Abilties"
              style={{
                width: "150px",
                height: "150px",
                padding: "40px",
                marginTop: "12.5rem",
              }}
            />
          );
        })}
        <SkillsDesc description={description} sname={sname}></SkillsDesc>
      </div>
    );
  }
};

export default ChampSkills;
