/* eslint-disable indent */
/* Description
- Tic Tac Toe is a 2-player board game.

- The board is a 3x3 grid.

- Players take turns marking a square with a marker that identifies the player.

- Traditionally, the player to go first uses the marker X to mark her squares,
and the player to go second uses the marker O.

- The first player to mark 3 squares in a row with her marker wins the game.

- A row can be a horizontal row, a vertical column,or either of the two
diagonals (top-left to bottom-right and top-right to bottom-left).

- There is one human player and one computer player.

- The human player always moves (places a marker) first in the initial version
of our game; you can change that later.


Nouns: Game, Player, Human, Computer, Board, Marker, Row, Square
Verbs: play, mark


Organize:

Game (n)
- play

Player (n)
- Human (n)
- Computer (n)
- mark (v)
- play (v)

Board (n)
Marker (n)
Row (n)
Square (n)

*/
let readline = require("readline-sync");

class Square {
  static UNUSED_SQUARES = [" 1", " 2", " 3", " 4", " 5", " 6", " 7", " 8", " 9"];
  static HUMAN_MARKER = "❌";
  static COMPUTER_MARKER = "⚪️";

  constructor(marker) {
    this.marker = " " + marker;
  }

  toString() {
    return this.marker;
  }

  setMarker(marker) {
    this.marker = marker;
  }

  isUnused() {
    return Square.UNUSED_SQUARES.includes(this.marker);
  }

  getMarker() {
    return this.marker;
  }
}

class Board {
  constructor() {
    this.reset();
  }

  reset() {
    this.squares = {};

    for (let counter = 1; counter <= 9; ++counter) {
      this.squares[counter] = new Square(counter);
    }
  }

  display() {
    console.log("");
    console.log("     |     |");
    console.log(` ${this.squares["1"]}  | ${this.squares["2"]}  | ${this.squares["3"]}`);
    console.log("     |     |");
    console.log("-----+-----+-----");
    console.log("     |     |");
    console.log(` ${this.squares["4"]}  | ${this.squares["5"]}  | ${this.squares["6"]}`);
    console.log("     |     |");
    console.log("-----+-----+-----");
    console.log("     |     |");
    console.log(` ${this.squares["7"]}  | ${this.squares["8"]}  | ${this.squares["9"]}`);
    console.log("     |     |");
    console.log("");
  }

  displayWithClear() {
    console.clear();
    console.log("");
    console.log("");
    this.display();
  }

  markSquareAt(key, marker) {
    this.squares[key].setMarker(marker);
  }

  unusedSquares() {
    let keys = Object.keys(this.squares);
    return keys.filter(key => this.squares[key].isUnused());
  }

  isFull() {
    return this.unusedSquares().length === 0;
  }

  countMarkersFor(player, keys) {
    let markers = keys.filter(key => {
      return this.squares[key].getMarker() === player.getMarker();
    });

    return markers.length;
  }
}

class Player {
  constructor(marker) {
    this.marker = marker;
  }

  getMarker() {
    return this.marker;
  }
}

class Human extends Player {
  constructor() {
    super(Square.HUMAN_MARKER);
  }
}

class Computer extends Player {
  constructor() {
    super(Square.COMPUTER_MARKER);
  }
}

class ScoreBoard {
  constructor() {
    this.winningScore = 3;
    this.humanScore = 0;
    this.computerScore = 0;
  }

  display() {
    console.log(`Human: ${this.humanScore} | Computer: ${this.computerScore}`);
  }

  incrementScore(player) {
    if (player === this.human) {
      this.humanScore += 1;
    } else {
      this.computerScore += 1;
    }
  }

  resetScore() {
    this.humanScore = 0;
    this.computerScore = 0;
  }
}

class TTTGame {
  static POSSIBLE_WINNING_ROWS = [
    [ "1", "2", "3" ],            // top row of board
    [ "4", "5", "6" ],            // center row of board
    [ "7", "8", "9" ],            // bottom row of board
    [ "1", "4", "7" ],            // left column of board
    [ "2", "5", "8" ],            // middle column of board
    [ "3", "6", "9" ],            // right column of board
    [ "1", "5", "9" ],            // diagonal: top-left to bottom-right
    [ "3", "5", "7" ],            // diagonal: bottom-left to top-right
  ];

  static CENTER_SQUARE = "5";

  constructor() {
    this.board = new Board();
    this.human = new Human();
    this.computer = new Computer();
    this.scoreBoard = new ScoreBoard();
  }

  play() {
    this.displayWelcomeMessage();

    do {
      this.play1Game();
    } while (this.playAgain());

    this.displayGoodbyeMessage();
  }

  play1Game() {
    this.board.reset();
    this.board.display();

    while (true) {
      this.humanMoves();
      if (this.gameOver()) break;

      this.computerMoves();
      if (this.gameOver()) break;

      this.board.displayWithClear();
    }

    this.board.displayWithClear();
    this.displayResults();
  }

  playAgain() {
    const POSSIBLE_CHOICES = ["yes", "y", "no", "n"];
    let choice;

    while (!POSSIBLE_CHOICES.includes(choice)) {
      choice = readline.question("Continue playing? (y/n)\n").toLowerCase();
    }

    console.clear();
    return choice[0] === POSSIBLE_CHOICES[1];
  }

  displayWelcomeMessage() {
    console.clear();
    console.log("Welcome to Tic Tac Toe!");
    console.log("");
  }

  displayGoodbyeMessage() {
    console.log("Thanks for playing Tic Tac Toe! Goodbye!");
  }

  displayResults() {
    console.clear();
    this.board.display();

    if (this.isWinner(this.human)) {
      console.log("You won! Congatulations!");
    } else if (this.isWinner(this.computer)) {
      console.log("I won! I won! Take that, human! The revolution is upon us!");
    } else {
      console.log("A tie. Next time I will make you sink like the Tie-tanic!");
    }
  }

  isWinner(player) {
    return TTTGame.POSSIBLE_WINNING_ROWS.some(row => {
      return this.board.countMarkersFor(player, row) === 3;
    });
  }

  findCriticalRow(player) {
    return TTTGame.POSSIBLE_WINNING_ROWS.find(row => {
      if ((this.board.countMarkersFor(player, row) === 2) &&
          row.some(square => this.board.squares[square].isUnused())) {
            return true;
          }

      return false;
    });
  }

  findWinningSquare(player) {
    let criticalRow = this.findCriticalRow(player);
    if (!criticalRow) return false;

    return criticalRow.find(square => this.board.squares[square].isUnused());
  }

  winningSquareExists(player) {
    return !!this.findWinningSquare(player);
  }

  humanMoves() {
    let choice;

    while (true) {
      let validChoices = this.board.unusedSquares();
      const prompt = `Choose a square(${TTTGame.joinOr(validChoices, ", ")}):\n`;
      choice = readline.question(prompt);

      if (validChoices.includes(choice)) break;

      console.log("Sorry, that's not a valid choice.");
      console.log("");
    }

    this.board.markSquareAt(choice, this.human.getMarker());
  }

  static joinOr(arr, separator = ", ", connector = "or") {
    if (arr.length === 1) return arr[0];

    arr = arr.slice();
    let lastChar = " " + connector + " " + arr.pop();
    let str = arr.join(separator);

    return str + lastChar;
  }

  computerMoves() {
    let validChoices = this.board.unusedSquares();
    let choice;

    choice = this.findComputerChoice(validChoices, choice);

    this.board.markSquareAt(choice, this.computer.getMarker());
  }

  findComputerChoice(validChoices, choice) {
    do {
      if (this.winningSquareExists(this.computer)) {
        choice = this.findWinningSquare(this.computer);
      } else if (this.winningSquareExists(this.human)) {
        choice = this.findWinningSquare(this.human);
      } else if (validChoices.includes(TTTGame.CENTER_SQUARE)) {
        choice = TTTGame.CENTER_SQUARE;
      } else {
        choice = String(Math.floor((9 * Math.random()) + 1));
      }
    } while (!validChoices.includes(choice));

    return choice;
  }

  gameOver() {
    return this.board.isFull() || this.someoneWon();
  }

  someoneWon() {
    return this.isWinner(this.human) || this.isWinner(this.computer);
  }

  matchIsWon() {
    return this.scoreBoard.humanScore === this.scoreBoard.winningScore ||
           this.scoreBoard.computerScore === this.scoreBoard.winningScore;
  }
// for testing purposes
  incrementAndShow() {
    do {
      this.scoreBoard.incrementScore(this.computer);
      this.scoreBoard.display();
    } while (!this.matchIsWon());
  }
}

let game = new TTTGame();
// game.play();
game.incrementAndShow();
