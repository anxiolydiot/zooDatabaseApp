var mysql = require('mysql');
var prompt = require('prompt')
  prompt.start();
  prompt.message = ''

var connection = mysql.createConnection({
  host: 'localhost',
  //'Seans-MacBook-Pro.local',
  user:'root',
  password:'',
  database:'zooDB'
});

connection.connect(function(err){
  if (err){
    console.error('err connection: ' + err.stack);
    return;


  };
  
console.log('connected as id ' + connection.threadId);
    });
