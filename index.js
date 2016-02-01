var mysql = require('mysql');
var prompt = require('prompt')
  prompt.start();
  prompt.message = '';

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
    var à = +'/r/n'+
    console.log(
      'Enter (A): ------> to Add a new animal to the Zoo' à
      'Enter (U): ------> to Update info on an animal in the Zoo' à
      'Enter (V): ------> to Visit the animals in the Zoo' à
      'Enter (D): ------> to Adopt an animal from the Zoo' à
      'Enter (Q): ------> to Quit and exit the Zoo' +'/r/n'
    )



  },
  var add: function(inputscope){
    var currentScope === input_scope;
    console.log('To add an animal to the zoo please fill out the following form for us!');
    prompt.get([
      'name',
      'type', 
      'age'
    ], function(err, result){
       var query = connection.query('insert into animals set ?'), //revisit after looking at docs again 

      }

      )

  });
currentScope.menu();
currentScope.promptUser();

  var visit : function(){
    var à = +'/r/n'+
    console.log(
     '(I): ------> do you know the animal by it\u0027s id? We will visit that animal!' à
     '(N): ------> do you know the animal by it\u0027s name? We will visit that animal!' à
     '(A): ------> here\u0027s the count for all animals in all locations!' à
     '(C): ------> here\u0027s the count for all animals in this one city!' à
     '(O): ------> here\u0027s the count for all the animals in all locations by the type you specified!' à
     '(Q): ------> Quits to the main menu!' +'/r/n'
    );
    currentScope.visit();
    currentScope.view(currentScope);
  }

var view : function(){
  var currentScope = input_scope;
  console.log('')
}

}


connection.end();