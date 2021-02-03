import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useParams } from "react-router-dom";
import CarouselChamps from "../components/CarouselChamps";

const ChampionDetails = () => {
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
  /*
  <img
        key={selected.id}
        className="mt-5 mx-3"
        width="50%"
        height="50%"
        alt={selected.id}
        src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${selected.id}_0.jpg`}
      />
  */

  return (
    <div>
      <h1 className="text-center mt-5">{selected.id}</h1>
      <CarouselChamps id={selected.id}></CarouselChamps>

      <div className="container">
        <div className="row">
          <div className="col mt-5"></div>
        </div>
        <div className="row">
          <div className="col">
            <div class="card">
              <div class="card-header d-flex justify-content-center ">
                <img
                  key={selected.id}
                  className="mt-5 mx-3"
                  width="150px"
                  height="150px"
                  alt={selected.id}
                  src={`http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/${image}`}
                />
              </div>
              <div class="card-body">
                <blockquote class="blockquote mb-0">
                  <p>{blurb}</p>
                  <ul class="list-group list-group-flush">
                    <br></br>
                    <p>Role: {tags}</p>
                    <li class="list-group-item">Health: {hp}</li>
                    <li class="list-group-item">Mana: {mana}</li>
                    <li class="list-group-item">Armor: {armor}</li>
                    <li class="list-group-item">Magic Resist: {mr}</li>
                    <li class="list-group-item">Patch Version: 11.3.1</li>
                  </ul>
                  <footer class="blockquote-footer mt-5">{title}</footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChampionDetails;
