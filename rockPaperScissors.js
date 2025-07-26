const args = process.argv.slice(2);
// Check if the user provided exactly 

const userInput = args[0];
const user = userInput.toLowerCase();
if (user !== 'rock' && user !=='paper'&& user !=='scissor') {
  console.error('Please provide exactly Rock , Paper , Scissor');
  return;
}

// if (!['Rock', 'Paper', 'Scissor'].includes(user)) {
//   console.error('Please provide exactly Rock, Paper, or Scissor');
//   return;
// }


// Check if the user provided string
if (typeof user !== "string") {
  console.error("Argument must be a string");
  return;
}


function getRandomChoice() {
  const choices = ["rock", "paper", "scissor"];
  const computer = Math.floor(Math.random() * choices.length);
  return choices[computer];
}

function makeChoice(user, computer) {
  if (
    (user === 'rock' && computer === 'scissor') ||
    (user === 'paper' && computer === 'rock') ||
    (user === 'scissor' && computer === 'paper')
  ) {
    return 'win';
  } else if (user === computer) {
    return 'Draw';
  } else {
    return 'lose';
  }
}

    
const computer= getRandomChoice()
const result= makeChoice(user,computer)

console.log(`Output: You chose  ${user}. Computer chose ${computer}. You ${result}!`);