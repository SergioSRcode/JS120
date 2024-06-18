/* eslint-disable indent */
/* eslint-disable max-len */
/* eslint-disable max-lines-per-function */
const readline = require("readline-sync");

function print(text) {
  console.log(`==>  ${text}`);
}

function createPlayer() {
  return {
    move: null,
    validChoices: ["rock", "paper", "scissors", "lizard", "spock"],
  };
}

function createComputer() {
  let playerObject = createPlayer();

  let computerObject = {
    choose() {
      let randomIdx = Math.floor(Math.random() * this.validChoices.length);
      this.move = this.validChoices[randomIdx];
    },
  };

  return Object.assign(playerObject, computerObject);
}

function createHuman() {
  let playerObject = createPlayer();

  let humanObject = {
    choose() {
      const VALID_ABBREVS = ["r", "p", "sc", "l", "sp"];
      let choice;

      while (true) {
        print("Please choose rock (r), paper (p), scissors (sc), lizard (l) or spock (sp)");
        choice = readline.question().toLowerCase();

        if (this.validChoices.includes(choice) || VALID_ABBREVS.includes(choice)) break;
        console.log("Sorry, invalid choice.");
      }

      this.move = this.validChoices.find(validChoice => validChoice.startsWith(choice));
    },
  };

  return Object.assign(playerObject, humanObject);
}

function createScore() {
  return {
    human: 0,
    computer: 0,
    winningScore: 3,

    reset() {
      this.human = 0;
      this.computer = 0;
    },

    reachedWinningScore() {
      return this.human === this.winningScore
      || this.computer === this.winningScore;
    },

    display() {
      console.log(`You: ${this.human} | Computer: ${this.computer}`);
    },

    displayWinnerMessage() {
      if (this.reachedWinningScore()) {
        if (this.human === this.winningScore) print("Well done, you won the match!\n");
        if (this.computer === this.winningScore) print("Computer won this match...I guess AI really is taking over, huh...\n");
      }
    },
  };
}

function createMovesLog() {
  return {
    human: [],
    computer: [],
    logValidation: "log",

    logRound(humanMove, computerMove) {
      this.human.push(humanMove);
      this.computer.push(computerMove);
    },

    displayLog() {
      this.human.forEach((_, idx) => console.log(
        `Round: ${idx + 1} | You: ${this.human[idx]} | Computer: ${this.computer[idx]}`
      ));
    },

    reset() {
      this.human = [];
      this.computer = [];
    },
  };
}

const RPSGame = {
  human: createHuman(),
  computer: createComputer(),
  score: createScore(),
  movesLog: createMovesLog(),
  winningCombos: {
    rock:     ['scissors', 'lizard'],
    paper:    ['rock',     'spock'],
    scissors: ['paper',    'lizard'],
    lizard:   ['paper',    'spock'],
    spock:    ['rock',     'scissors'],
  },

  displayWelcomeMessage() {
    console.log("*** Welcome to Rock, Paper, Scissors, Lizard and Spock! ***");
    console.log();
    console.log(`Rules:  The first to win ${this.score.winningScore} rounds wins the match!`);
    console.log();
    print("Press Enter to Start the game!");
    readline.question();
    console.clear();
  },

  startNewGame() {
    this.score.reset();
    // this.movesLog.reset();
  },

  compareMoves() {
    this.human.choose();
    this.computer.choose();
    this.adjustComputerChoice();
    this.calculateWinner();
    console.clear();
  },

  calculateWinner() {
    let humanMove = this.human.move;
    let computerMove = this.computer.move;

    if (this.winningCombos[humanMove].includes(computerMove)) this.score.human += 1;
    if (this.winningCombos[computerMove].includes(humanMove)) this.score.computer += 1;
  },

  displayWinner() {
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
  },

  displayRoundStats() {
    this.score.display();
    this.displayWinner();
  },

  getHumanWins() {
    return this.movesLog.human.filter((move, idx) => {
      return this.winningCombos[move].includes(this.movesLog.computer[idx]);
    });
  },

  getKillerMove() {
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
  },

  adjustComputerChoice() {
    let killerMove = this.getKillerMove();

    if (killerMove) {
      this.computer.move = this.computer.validChoices.find(move => this.winningCombos[move]
                                                     .includes(killerMove));
    }
  },

  continueToNextRound() {
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
  },

  playAgain() {
    const VIABLE_INPUTS = ["y", "yes", "n", "no"];

    print("What a great game! Play again? (y/n)");
    let userChoice = readline.question().toLowerCase();

    while (!VIABLE_INPUTS.includes(userChoice)) {
      print("I couldn't hear you! Do you want to play again? (y/n)");
      userChoice = readline.question().toLowerCase();
    }
    console.clear();

    return userChoice === "y" || userChoice === "yes";
  },

  displayGoodByeMessage() {
    console.clear();
    console.log("*** Thank you for playing, goodbye! ***");
  },

  play() {
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
  },
};

RPSGame.play();