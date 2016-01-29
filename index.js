var mysql = require('mysql');
var prompt = require('prompt')
  promp.start();
  prompt.message = ''




var connection = mysql.createConnection({
  host:'Seans-MacBook-Pro.local',
  user:'anxiolydiot',
  password:'',
  database:'zoo_db'
})

connection.connect(function(err){
  if (err){
    console.error('err connection: ' + err.stack);
    return;


  };
  
console.log('connected as id ' + connection.threadId);
    });
