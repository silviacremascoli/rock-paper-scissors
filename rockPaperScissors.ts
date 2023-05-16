const getComputerChoice = (): string => {
  const number: number = Math.floor(Math.random() * 3);

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

const determineWinner = (userChoice: string, computerChoice: string) => {
  if (userChoice === computerChoice) {
    return "Tie! 😀";
  } else if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "The computer wins! ☹️";
    } else {
      return "You win! 🎉";
    }
  } else if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "The computer wins! ☹️";
    } else {
      return "You win! 🎉";
    }
  } else if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "The computer wins! ☹️";
    } else {
      return "You win! 🎉";
    }
  }
};

const playGame = (input: string) => {
  const userChoice = input;
  const computerChoice: string = getComputerChoice();
  let myChoice = <HTMLElement>document.querySelector("#myChoice");
  myChoice.innerHTML = `You choose ${userChoice}...`;
  let computersChoice = <HTMLElement>document.querySelector("#computersChoice");
  computersChoice.innerHTML = `The computer chooses ${computerChoice}...`;
  let winner = document.querySelector("#winner")!; // non-null assertion operator
  winner.innerHTML = determineWinner(userChoice, computerChoice)!;
};

const getUserChoice = (event) => {
  event.preventDefault();
  let userInput = event.target.value;
  playGame(userInput);
};

let select = <HTMLElement>document.querySelector("#choice");
select.addEventListener("change", getUserChoice);
