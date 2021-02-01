const express = require("express");
const axios = require("axios");
const app = express();
const ChampionsDB = require("./models/ChampionsDB");
const { Sequelize } = require("sequelize");

//Database Instance

const db = require("./config/database");

//Testing DB connection to see if we are connected

db.authenticate()
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log("Error: " + err));
var cors = require("cors");

app.use(cors());

app.listen(4040, async () => {
  console.log("Listening");
  await db.sync({ force: false });
});

//Get All Champions Route

app.get("/champions", async function (req, res) {
  const apiUrl =
    "http://ddragon.leagueoflegends.com/cdn/11.1.1/data/en_US/champion.json";
  const instance = axios.create({});
  try {
    let championInfo = await instance.get(apiUrl);
    let championArray = [];
    let loadChamps = [];
    for (key in championInfo.data.data) {
      championArray.push(championInfo.data.data[key]);

      // //Loaded ALL Champs in the database
      // let loadChamps = await ChampionsDB.create({
      //   key: championInfo.data.data[key].key,
      //   id: championInfo.data.data[key].id,
      //   title: championInfo.data.data[key].title,
      //   blurb: championInfo.data.data[key].blurb,
      // });
    }

    res.send(championArray);
  } catch (error) {
    console.log(error);
  }
});
//Get one champion route
app.get("/champions/:id", async function (req, res) {
  const apiUrl = `http://ddragon.leagueoflegends.com/cdn/11.1.1/data/en_US/champion/${req.params.id}.json`;
  const instance = axios.create({});

  try {
    let championInfo = await instance.get(apiUrl);
    res.send(championInfo.data.data);
    console.log(championInfo.data.data);
  } catch (error) {
    console.log(error);
  }
});
//Get all spells on one champ

app.get("/champions/:id/spell", async function (req, res) {
  const apiUrl = `http://ddragon.leagueoflegends.com/cdn/11.1.1/data/en_US/champion/${req.params.id}.json`;
  const instance = axios.create({});
  let paramsId = req.params.id;
  try {
    let championInfo = await instance.get(apiUrl);
    let selectedChamp = Object.keys(paramsId);

    console.log(championInfo.data.data);
    res.send(championInfo.data.data[paramsId].spells);
  } catch (error) {
    console.log(error);
  }
});
