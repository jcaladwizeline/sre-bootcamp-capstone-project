const dotenv = require("dotenv");
dotenv.config();

const config = {
  database: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    databaseName: process.env.DB_DATABASE,
    dialect: process.env.DIALECT,
  },
  secret: {
    JWT: process.env.JWT_KEY,
  },
};

module.exports = config;
