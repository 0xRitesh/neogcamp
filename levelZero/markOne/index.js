
var readlineSync = require('readline-sync');
const chalk = require('chalk');

console.log(chalk.blueBright
  .bold('QUIZ : How well do you know Ritesh (〃ω〃)'));

var userName = readlineSync.question('May I have your good name? ');
console.log(chalk.italic(chalk.magentaBright('Hello ') + chalk.whiteBright.inverse(userName) + chalk.magentaBright('!,welcome to the quiz \nLets start !! ')));
console.log('----------------------------');
var score = 0;

function quiz(que, ans) {
  var useranswer = readlineSync.question(chalk.yellowBright(que));
  if (useranswer.toLowerCase() === ans.toLowerCase()) {
    console.log(chalk.green('correct :)'));
    score = score + 1;

  } else {
    console.log(chalk.red('Incorrect :('));
    score = score - 1;

  } console.log('score : ' + score);
  console.log('------------------------------');
}

quiz('Q1: am i older then 25 ? ', 'no');
quiz('Q2:  do i live in bihariganj ? ', 'yes');
quiz('Q3:  do i love to watch anime ? ', 'yes');
quiz('Q4: am i a bibliophilic ? ', 'yes');
quiz('Q5:  who is my fav autho ? ', 'murakami');
quiz('Q6: who is my fav cricketr ? ', 'raina');
quiz('Q7: do i like pop ? ', 'no');
quiz('q8: Have I played in state-level cricket team ? ', 'no');

console.log(chalk.cyanBright.italic('You have reached the end of quiz, Thanks!'));
console.log(chalk.bold('your final score  : ') + score);
if (score === 8) {
  console.log(chalk.whiteBright.inverse('cheers! you got the Highest score ʘ‿ʘ  '))
} else {
  console.log(chalk.whiteBright.inverse('Highest score : 7'));
}