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

function createPlayer() {
  return {
    // possible state: player name?
    // possible state: player's current move

    choose() {
      // not yet implemented
    },
  };
}

function createMove() {
  return {
    // possible state: rock, paper, scissors
  };
}

function createRule() {
  return {
    // possible state: not clear if rules need state
  };
}

// Since we don't yet know where to put `compare`, let's define
// it as an ordinary function.

let compare = function(move1, move2) {
  // not yet implemented
};

const RPSGAME = {
  human: createPlayer(),
  computer: createPlayer(),

  displayWelcomeMessage() {
    console.log("Welcome to Rock, Paper, Scissors!");
  },

  displayGoodByeMessage() {
    console.log("Thank you for playing Rock, Paper, Scissors. Goodbye!");
  },

  play() {
    this.displayWelcomeMessage();
    this.human.choose();
    this.computer.choose();
    displayWinner();
    this.displayGoodByeMessage();
  },
};

RPSGame.play();