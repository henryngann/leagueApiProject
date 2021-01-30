//Create a sequelize instance to connect to our postgreSQL database
//Then export it so our code is cleaner

const { Sequelize } = require("sequelize");
module.exports = new Sequelize("champions", "postgres", "password", {
  host: "localhost",
  dialect: "postgres",
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});
