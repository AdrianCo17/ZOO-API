const { Sequelize } = require('sequelize');
const configDB = require('./config/config'); // Import the config file

const sequelize = new Sequelize(
  configDB.DB,
  configDB.username,
  configDB.password,
  {
    host: configDB.host,
    port: configDB.port,
    dialect: configDB.dialect,
  }
);
module.exports = sequelize;
