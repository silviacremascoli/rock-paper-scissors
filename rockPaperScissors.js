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
      console.log("rock");
      break;
    case 1:
      console.log("paper");
      break;
    case 2:
      console.log("scissors");
      break;
    default:
      console.log("I don't know what to choose...");
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
  }
};

console.log(determineWinner("paper", "scissors"));
