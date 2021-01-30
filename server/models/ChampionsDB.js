const Sequelize = require("sequelize");
const db = require("../config/database");

const Champions = db.define("champions", {
  key: {
    primaryKey: true,
    type: Sequelize.INTEGER,
  },
  id: {
    type: Sequelize.TEXT,
  },
  title: {
    type: Sequelize.TEXT,
  },
  blurb: {
    type: Sequelize.TEXT,
  },
});

module.exports = Champions;
