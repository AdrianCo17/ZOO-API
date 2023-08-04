const { Sequelize } = require('sequelize');
const config = require('./config'); // Import the config.js file

const sequelize = new Sequelize(
  config.DB_NAME,
  config.DB_USER,
  config.DB_PASS,
  {
    host: config.DB_HOST,
    port: config.DB_PORT,
    dialect: 'mysql',
  }
);
module.exports = sequelize;