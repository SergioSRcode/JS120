/* eslint-disable max-lines-per-function */
/*
Step 1: Write a textual description of the problem or exercise.

Our first step is to write a textual description of the RPS game:

RPS is a two-player game where each player chooses one of three possible moves:
rock, paper, or scissors.
The winner is chosen by comparing their moves with the following rules:

* Rock crushes scissors, i.e., rock wins against scissors.
* Scissors cuts paper, i.e., scissors beats paper.
* Paper wraps rock, i.e., paper beats rock.
* If the players chose the same move, the game is a tie.

Step 2: Extract the significant nouns and verbs from the description!

Nouns: player, move, rule
verbs: choose, compare

Step 3: Organize and associate the verbs with the nouns.

player
  - choose
Move
Rule

???
  - compare

*/

const readline = require("readline-sync");

function print(text) {
  console.log(`==>  ${text}`);
  console.log();
}

function createPlayer() {
  return {
    move: null,
  };
}

function createComputer() {
  let playerObject = createPlayer();

  let computerObject = {
    choose() {
      const CHOICES = ["rock", "paper", "scissors"];
      let randomIdx = Math.floor(Math.random() * CHOICES.length);
      this.move = CHOICES[randomIdx];
    },
  };

  return Object.assign(playerObject, computerObject);
}

function createHuman() {
  let playerObject = createPlayer();

  let humanObject = {
    choose() {
      let choice;

      while (true) {
        print("Please choose rock, paper, or scissors:");
        choice = readline.question();

        if (["rock", "paper", "scissors"].includes(choice)) break;
        console.log("Sorry, invalid choice.");
      }

      this.move = choice;
    },
  };

  return Object.assign(playerObject, humanObject);
}


// function createMove() {
//   return {
//     // possible state: rock, paper, scissors
//   };
// }

// function createRule() {
//   return {
//     // possible state: not clear if rules need state
//   };
// }

// Since we don't yet know where to put `compare`, let's define
// it as an ordinary function.

// let compare = function(move1, move2) {
//   // not yet implemented
// };

const RPSGame = {
  human: createHuman(),
  computer: createComputer(),
  winningCombos: {
    rock:     ['scissors', 'lizard'],
    paper:    ['rock',     'spock'],
    scissors: ['paper',    'lizard'],
    // lizard:   ['paper',    'spock'],
    // spock:    ['rock',     'scissors'],
  },

  displayWelcomeMessage() {
    print("Welcome to Rock, Paper, Scissors!");
  },

  displayGoodByeMessage() {
    console.clear();
    print("Thank you for playing Rock, Paper, Scissors. Goodbye!");
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

  playAgain() {
    const VIABLE_INPUTS = ["y", "yes", "n", "no"];

    print("What a great game! Play again?");
    let userChoice = readline.question().toLowerCase();

    while (!VIABLE_INPUTS.includes(userChoice)) {
      print("I couldn't hear you! Do you want to play again?");
      userChoice = readline.question().toLowerCase();
    }
    console.clear();

    return userChoice === "y" || userChoice === "yes";
  },

  play() {
    console.clear();
    this.displayWelcomeMessage();
    do {
      this.human.choose();
      this.computer.choose();
      this.displayWinner();
    } while (this.playAgain());
    this.displayGoodByeMessage();
  },
};

RPSGame.play();