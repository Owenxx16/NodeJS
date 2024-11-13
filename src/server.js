// server.mjs
// const {createServer} = require('http');

// const server = createServer((req, res) => {
// res.writeHead(200, { 'Content-Type': 'text/plain' });
// res.end('Hello World!\n Owen Knight');
// });

// // starts a simple http server locally on port 3000
// server.listen(3000, '127.0.0.1', () => {
// console.log(`Server running http://127.0.0.1:3000`);
// });

// run with `node server.mjs`

//Express with HelloWord 

const express = require('express');
const app = express();
const configViewEngine = require('./config/viewEngine');
const path = require('path');
require('dotenv').config();
const webRoute = require('./routes/web');
const mysql2 = require('mysql2');

const port = process.env.PORT || 3000; // chay dc thi xuất ra 8081 còn k thì 3000

//khai bao express.json va express.urlencoded
app.use(express.json());
app.use(express.urlencoded({extended: true}));


//Config template engine
configViewEngine(app);

//Khai bao Route
app.use('/',webRoute);



// A simple SELECT query




app.listen(port, () =>{
  console.log(`Example app listenning on port ${port}`);
})
