import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ChampCard = (props) => {
  const selected = useParams();
  const [champ, setChamp] = useState("");
  const [title, setTitle] = useState("");
  const [blurb, setBlurb] = useState("");
  const [image, setImage] = useState("");
  const [hp, setHp] = useState("");
  const [mana, setMana] = useState("");
  const [armor, setArmor] = useState("");
  const [mr, setMr] = useState("");
  const [tags, setTags] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:4040/champions/${selected.id}`).then((res) => {
      setChamp(selected.id);
      setBlurb(res.data[selected.id].blurb);
      setTitle(res.data[selected.id].title);
      setImage(res.data[selected.id].image.full);
      setHp(res.data[selected.id].stats.hp);
      setMana(res.data[selected.id].stats.mp);
      setArmor(res.data[selected.id].stats.armor);
      setMr(res.data[selected.id].stats.spellblock);
      setTags(res.data[selected.id].tags[0]);
    });
  }, []);
  //http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/${image}
  return (
    <div className="container">
      <div className="row">
        <div className="col mt-5 text-center">
          <h1>{selected.id}</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <div className="card ">
            <div className="card-body">
              <blockquote className="blockquote mb-0">
                <p>{blurb}</p>
                <ul className="list-group list-group-flush">
                  <br></br>
                  <p>Role: {tags}</p>
                  <li className="list-group-item">Health: {hp}</li>
                  <li className="list-group-item">Mana: {mana}</li>
                  <li className="list-group-item">Armor: {armor}</li>
                  <li className="list-group-item">Magic Resist: {mr}</li>
                  <li className="list-group-item">Patch Version: 11.3.1</li>
                </ul>
                <footer className="blockquote-footer mt-5">{title}</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChampCard;
