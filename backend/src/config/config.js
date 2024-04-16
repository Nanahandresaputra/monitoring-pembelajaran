const dotenv = require("dotenv");

dotenv.config();

const config = {
  port: 8080,
  secretKey: process.env.SECRET_KEY,
  dbHost: process.env.DB_HOST,
  dbPassword: process.env.DB_PASSWORD,
  dbUser: process.env.DB_USER,
  dbName: process.env.DB_NAME,
  dbPort: process.env.DB_PORT,
};

module.exports = config;
