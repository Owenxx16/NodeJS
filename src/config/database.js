require('dotenv').config();
const mysql2 = require('mysql2/promise');
//test Connection
// const connection = mysql2.createConnection({
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT, //Default value is 3306
//   user: process.env.DB_USER, //Default value is empty
//   password: process.env.DB_PASS,
//   database: process.env.DB_NAME
// });

const connection = mysql2.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT, //Default value is 3306
  user: process.env.DB_USER, //Default value is empty
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = connection;