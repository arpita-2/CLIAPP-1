var readlineSync = require('readline-sync');
var score = 0;
 

var userName = readlineSync.question('Hey Buddy! what is your name? ');

console.log(userName);
var welcomeMessage = "Welocme " + userName + " to DO YOU KNOW Arpita ";
console.log(welcomeMessage);
console.log("Try to give your answer in small letters.")


function play(question, answer)
{

var userAnswer = readlineSync.question(question);
if(userAnswer === answer){
  console.log("you are right");
  score = score + 4;
  console.log("your current score: " ,score);
  console.log("------------");
}
else{
  console.log("you are wrong");
  score = score - 1
  console.log("your current score: " ,score);
}
}
play ("Where does she lives? ", "bangalore");
play("What is her favourite color? ","black" );
play("Who is her first crush in Bollywood actor? ", "siddhart malhotra");
// array of objects
var questions =[{
  question: "What she is studying now? ",
  answer: "bca"
},
{
  question: "Does she like to drink chilled cola? ",
  answer: "yes",
},
{
  question: "What is her favourite hobby? ",
  answer: "cooking"
},
{
  question: "What she likes to eat most? ",
  answer: "momo"
}];
// loop
for(var i = 0;i<questions.length; i++)
{
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}
console.log("HURRAY! you have scored " , score)
console.log("if you have scored more than 8 then you are a true buddy of Arpita");

console.log("Thank you for playing this game. Have a great day");