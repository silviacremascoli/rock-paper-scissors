const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return userInput;
  } else {
    console.log("Please provide a valid input!");
  }
};

const getComputerChoice = () => {
  let number = Math.floor(Math.random() * 3);

  switch (number) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
    default:
      return "I don't know what to choose...";
      break;
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "Tie!";
  } else if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "The computer wins!";
    } else {
      return console.log("You win!");
    }
  } else if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "The computer wins!";
    } else {
      return "You win!";
    }
  } else if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "The computer wins!";
    } else {
      return "You win!";
    }
  } else if (userChoice === "bomb") {
    return "You win!";
  }
};

const playGame = () => {
  let userChoice = getUserChoice("scissors");
  let computerChoice = getComputerChoice();
  console.log(`You choose ${userChoice}`);
  console.log(`The computer chooses ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
