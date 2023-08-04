const dotenv = require('dotenv');

dotenv.config();

const configDB = {
  DB: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  dialect: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
};

module.exports = configDB;

