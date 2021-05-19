var readlinesync=require('readline-sync');

console.log('QUIZ : how well do you know me')
var score =0;
var username = readlinesync.question('what is your name : ');
console.log('Hey '+username+'! Im Riteah, lets see how much you know me ');

var questionone = "am I older then 25 ? ";
var answerone = "no";

var userans=readlinesync.question(questionone);


if(userans === answerone){
  console.log('correct');
  score= score+1;
  console.log('the score is : '+score);
}else{
  console.log('Incorrect');
  score=score-1;
  console.log('the score is : '+score)
}

var questiontwo ='am I from bihariganj ? ';
var answertwo = 'yes';

var userans2=readlinesync.question(questiontwo);


if(userans2 === answertwo){
  console.log('correct');
  score= score+1;
  console.log('the score is : '+score);
}else{
  console.log('Incorrect');
  score=score-1;
  console.log('the score is : '+score)
}

