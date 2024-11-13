require('dotenv').config();
const mysql2 = require('mysql2');
//test Connection
const connection = mysql2.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT, //Default value is 3306
  user: process.env.DB_USER, //Default value is empty
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});



module.exports = connection;