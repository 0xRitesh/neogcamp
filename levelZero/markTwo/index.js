var readlineSync = require('readline-sync');
const chalk = require('chalk')

var score=0;
console.log(chalk.whiteBright.bold('A QUIZ ON M.S DHONI '));
var userName = readlineSync.question(chalk.blueBright.bold('May i know your good name ? '));
console.log(chalk.white('Hello! '+ chalk.white.inverse(userName) +' welcome to the quiz\nLets found out how much you know about Captain Cool\n'+ chalk.cyanBright.italic('Note: Each question will have four answers, only one of which is correct; please provide the option number.')));
console.log('-------------------------------')
var rulesA = readlineSync.question('Press X to Start the quiz : ');
console.log('-------------------------------\n')

function playQuiz(ques,options,ans){

    console.log(chalk.bgMagenta.white.bold(ques));

    for(var i=0; i<options.length;i++){
        console.log(chalk.whiteBright('\n'+ [i+1]+'. ' +options[i]));
  
    }
    var userAns = readlineSync.question(chalk.yellowBright('\nYour Answer : '));

        if( userAns === ans){
            console.log(chalk.bold.black.bgGreen('Correct'));
                  score= score+1;
        }else{
            console.log(chalk.bgRedBright('Incorrect'));
            // score=score-1;
        }
        console.log(chalk.cyanBright('your current score : '+score));
        console.log('-------------------------------\n')
}

var quesSet = [{
    ques: "1. How many times has MS Dhoni remained not-out in a successful chase in One Day Internationals ?",
    options: ["41","47","45","48"],
    ans:"2"
},
{
    ques: "2. How many matches has Dhoni lost as captain in the ODI World Cup ?",
    options: ["4","5","2","3"],
    ans:"3"
},
{
    ques: "3. How many runs has Dhoni scored in all the IPL 20th overs he has played ?",
    options: ["564","596","514","498"],
    ans:"2"
},
{
    ques: "4. How many centuries has Dhoni scored while playing at number 7 in the ODIs ?",
    options: ["2","4","1","3"],
    ans:"1"
},
{
    ques: "5. Which railway zone did Dhoni work for, as a TTE ?",
    options: ["Central Indian Railways","Eastern Indian Railways","Western Indian Railways ","South Eastern Railways"],
    ans:"2"
},
{
    ques: "6. Which team did Dhoni make his Ranji trophy debut for ?",
    options: ["Bengal","Chhattisgarh","Railways","Bihar"],
    ans:"4"
},
{
    ques: "7. How many innings has MS Dhoni played as a bowler, in international cricket ?",
    options: ["10","9","8","7"],
    ans:"2"
},
{
    ques: "8. Apart from cricket, Dhoni is also a big fan of football, and in fact wanted to pursue it further. Which other sport did he play apart from these two ?    ",
    options: ["Volleyball","Badminton","Kabaddi","Hockey"],
    ans:"2"
},
{
    ques: "9. Dhoni once revealed his favourite dog out of all the pets he has. What's its name ?",
    options: ["Zoya","Sam","Lilly","Gabbar"],
    ans:"2"
},
{
    ques: "10. Dhoni holds the highest 8th wicket ODI partnership record for India with this player. Who is he ?",
    options: ["Ravichandran Ashwin","Kuldeep Yadav","Hardik Pandya ","Bhuvneshwar Kumar"],
    ans:"4"
}];


for(var i=0;i<quesSet.length;i++)
{
playQuiz(quesSet[i].ques,quesSet[i].options,quesSet[i].ans);
}

console.log(chalk.inverse('congrats 🎉! You completed the quiz, ggwp ✨\n'))
console.log(chalk.bgRed("Final score: " + score +"/"+quesSet.length));

var highScorers = [{
  name: "kafka",
  score:7
},
{
  name: "Himan",
  score:4
}
]

if(score>=highScorers[0].score){
  console.log(chalk.bold.black.bgGreen("booyah 🎊 you got a highest score 🥇"));
  console.log(chalk.bold.black.bgGreen('You are a superFan 🚀 '));
}else{
  console.log(chalk.bold.black.bgGreenBright('\n You missed to achieve the highest score. Better Luck Next time'))
};

