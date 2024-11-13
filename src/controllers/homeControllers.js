const connection = require('../config/database');
const { getAllUsers } = require('../services/CRUDservices');
// const getHomePage = (req,res) =>{
//   res.send('Hello World vs Hoi Dan It & Owen | nodemon');
// }
const getABC =(req,res) =>{
  res.send("CheckABC")
}
const getHoiDanIT = (req,res) => {
  // res.render('sample.ejs');

let users = [];
connection.query(
  'SELECT * FROM Users u',
  function (err, results, fields) {
    if(err) console.error(err.message);
    users = results;
    console.log(">>>result = ",results); // results contains rows returned by server
    console.log('>>>CheckUser:', users);
    res.send(JSON.stringify(users));
    // console.log(">>> fields = ",fields); // fields contains extra meta data about results, if available
  }
  
);
}
const getHomePage = async (req,res) => {
    let results = await getAllUsers();
    res.render('home.ejs', {listUser: results}); 
}

const postCreateUser = async (req,res) => {
   let {email,username,city} = req.body;
  // console.log(">>>>req.body:", email,username,city);
  // connection.query(
  //   `INSERT INTO Users (email,name,city) VALUES (?,?,?)`,
  //   [email,username,city], 
  //   function (err, result) {
  //     console.log(result);
  //     res.send('create user succeed');
  //   }
  // )
  let [result, fields] = await connection.query(
    `INSERT INTO Users (email,name,city) VALUES (?,?,?)`, [email,username,city]);
  console.log(">>>>>", result);
  res.send("Successful");
  // const [rows, fields] = await connection.query('Select * from Users u');
  // console.log(">>>", rows);
}
const getRequestPage = (req,res) => {
  res.render('create.ejs');
}
module.exports = {getHomePage,getABC,getHoiDanIT,postCreateUser,getRequestPage};
