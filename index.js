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

var zoo = {
  welcome : function(){
    console.log("Welcome to the Zoo And Friends App~")
  },
  menu: function(){
    console.log(
      'Enter (A): ------> to Add a new animal to the Zoo' +'/r/n'+
      'Enter (U): ------> to Update info on an animal in the Zoo' +'/r/n'+
      'Enter (V): ------> to Visit the animals in the Zoo' +'/r/n'+
      'Enter (D): ------> to Adopt an animal from the Zoo' +'/r/n'+
      'Enter (Q): ------> to Quit and exit the Zoo' +'/r/n'
    )



  },
  add: function(inputscope){
    var currentScope === input_scope;
    console.log('To add an animal to the zoo please fill out the following form for us!');

  }
}


connection.end();