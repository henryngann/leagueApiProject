const express = require("express");
const axios = require("axios");
const app = express();

app.listen(4040, () => {
  console.log("Listening");
});

//Get All Champions Route

app.get("/champions", async function (req, res) {
  const apiUrl =
    "http://ddragon.leagueoflegends.com/cdn/11.1.1/data/en_US/champion.json";
  const instance = axios.create({});
  try {
    let championInfo = await instance.get(apiUrl);
    res.send(championInfo.data.data);
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
    console.log(championInfo.data.data);
    res.send(championInfo.data.data);
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
