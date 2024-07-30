/* eslint-disable indent */
/* eslint-disable max-len */
/* eslint-disable max-lines-per-function */
const readline = require("readline-sync");

function print(text) {
  console.log(`==>  ${text}`);
}

function Player() {
  this.move = null;
  this.validChoices = ["rock", "paper", "scissors", "lizard", "spock"];
}

function Computer() {
  Player.call(this);
}

Computer.prototype = Object.create(Player.prototype);
Computer.prototype.constructor = Computer;

Computer.prototype.choose = function() {
  let randomIdx = Math.floor(Math.random() * this.validChoices.length);
  this.move = this.validChoices[randomIdx];
};

function Human() {
  Player.call(this);
}

Human.prototype = Object.create(Player.prototype);
Human.prototype.constructor = Human;

Human.prototype.choose = function() {
  const VALID_ABBREVS = ["r", "p", "sc", "l", "sp"];
  let choice;

  while (true) {
    print("Please choose rock (r), paper (p), scissors (sc), lizard (l) or spock (sp)");
    choice = readline.question().toLowerCase();

    if (this.validChoices.includes(choice) || VALID_ABBREVS.includes(choice)) break;
    console.log("Sorry, invalid choice.");
  }

  this.move = this.validChoices.find(validChoice => validChoice.startsWith(choice));
};

function Score() {
  this.human = 0;
  this.computer = 0;
  this.winningScore = 3;
}

Score.prototype.reset = function() {
  this.human = 0;
  this.computer = 0;
};

Score.prototype.reachedWinningScore = function() {
  return this.human === this.winningScore
  || this.computer === this.winningScore;
};

Score.prototype.display = function() {
  console.log(`You: ${this.human} | Computer: ${this.computer}`);
};

Score.prototype.displayWinnerMessage = function() {
  if (this.reachedWinningScore()) {
    if (this.human === this.winningScore) print("Well done, you won the match!\n");
    if (this.computer === this.winningScore) print("Computer won this match...I guess AI really is taking over, huh...\n");
  }
};

function MovesLog() {
  this.human = [];
  this.computer = [];
  this.logValidation = "log";
}

MovesLog.prototype.logRound = function(humanMove, computerMove) {
  this.human.push(humanMove);
  this.computer.push(computerMove);
};

MovesLog.prototype.displayLog = function() {
  this.human.forEach((_, idx) => console.log(
    `Round: ${idx + 1} | You: ${this.human[idx]} | Computer: ${this.computer[idx]}`
  ));
};

MovesLog.prototype.reset = function() {
  this.human = [];
  this.computer = [];
};

function RPSGame() {
  this.human = new Human();
  this.computer = new Computer();
  this.score = new Score();
  this.movesLog = new MovesLog();
  this.winningCombos = {
    rock:     ['scissors', 'lizard'],
    paper:    ['rock',     'spock'],
    scissors: ['paper',    'lizard'],
    lizard:   ['paper',    'spock'],
    spock:    ['rock',     'scissors'],
  };
}

RPSGame.prototype.displayWelcomeMessage = function() {
  console.log("*** Welcome to Rock, Paper, Scissors, Lizard and Spock! ***");
  console.log();
  console.log(`Rules:  The first to win ${this.score.winningScore} rounds wins the match!`);
  console.log();
  print("Press Enter to Start the game!");
  readline.question();
  console.clear();
};

RPSGame.prototype.startNewGame = function() {
  this.score.reset();
  // this.movesLog.reset();
};

RPSGame.prototype.compareMoves = function() {
  this.human.choose();
  this.computer.choose();
  this.adjustComputerChoice();
  this.calculateWinner();
  console.clear();
};

RPSGame.prototype.calculateWinner = function() {
  let humanMove = this.human.move;
  let computerMove = this.computer.move;

  if (this.winningCombos[humanMove].includes(computerMove)) this.score.human += 1;
  if (this.winningCombos[computerMove].includes(humanMove)) this.score.computer += 1;
};

RPSGame.prototype.displayWinner = function() {
  let humanMove = this.human.move;
  let computerMove = this.computer.move;

  print(`You chose: ${humanMove}`);
  print(`The computer chose: ${computerMove}`);

  if (this.winningCombos[humanMove].includes(computerMove)) {
    print("You win!");
  } else if (this.winningCombos[computerMove].includes(humanMove)) {
    print("Aww, computer won!");
  } else {
    print("It's a tie");
  }
};

RPSGame.prototype.displayRoundStats = function() {
  this.score.display();
  this.displayWinner();
};

RPSGame.prototype.getHumanWins = function() {
  return this.movesLog.human.filter((move, idx) => {
    return this.winningCombos[move].includes(this.movesLog.computer[idx]);
  });
};

RPSGame.prototype.getKillerMove = function() {
  let humanWins = this.getHumanWins();

  for (let idx = 0; idx < this.human.validChoices.length; idx++) {
    let winCount = 0;
    let possibleMove = this.human.validChoices[idx];
    for (let jdx = 0; jdx < humanWins.length; jdx++) {
      let currentMove = humanWins[jdx];

      if (possibleMove === currentMove) winCount++;
      if (winCount > (humanWins.length / 100 * 60)) return currentMove;
    }
  }

  return false;
};

RPSGame.prototype.adjustComputerChoice = function() {
  let killerMove = this.getKillerMove();

  if (killerMove) {
    this.computer.move = this.computer.validChoices.find(move => this.winningCombos[move]
                                                   .includes(killerMove));
  }
};

RPSGame.prototype.continueToNextRound = function() {
  if (!this.score.reachedWinningScore()) {
    let choice = null;

    console.log();
    print("Type 'log' (l) to see your previous moves or");
    print("Hit Enter to continue to the next round!");
    choice = readline.question().toLowerCase();

    if (this.movesLog.logValidation.startsWith(choice) && (choice.length > 0)) {
      console.clear();
      this.movesLog.displayLog();
      console.log();
      print("Press Enter to continue to the next round!");
      readline.question();
    }

    console.clear();
  }
};

RPSGame.prototype.playAgain = function() {
  const VIABLE_INPUTS = ["y", "yes", "n", "no"];

  print("What a great game! Play again? (y/n)");
  let userChoice = readline.question().toLowerCase();

  while (!VIABLE_INPUTS.includes(userChoice)) {
    print("I couldn't hear you! Do you want to play again? (y/n)");
    userChoice = readline.question().toLowerCase();
  }
  console.clear();

  return userChoice === "y" || userChoice === "yes";
};

RPSGame.prototype.displayGoodByeMessage = function() {
  console.clear();
  console.log("*** Thank you for playing, goodbye! ***");
};

RPSGame.prototype.play = function() {
  console.clear();
  this.displayWelcomeMessage();
  do {
    this.startNewGame();
    while (!this.score.reachedWinningScore()) {
      this.score.display();
      this.compareMoves();
      this.displayRoundStats();
      this.movesLog.logRound(this.human.move, this.computer.move);
      this.continueToNextRound();
      this.score.displayWinnerMessage();
    }
  } while (this.playAgain());
  this.displayGoodByeMessage();
};

let rpsGame = new RPSGame();

rpsGame.play();