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
  static CENTER_SQUARE = "5";
  static LAST_SQUARE = 9;

  constructor() {
    this.reset();
  }

  reset() {
    this.squares = {};

    for (let counter = 1; counter <= Board.LAST_SQUARE; ++counter) {
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
    console.log("");
    console.log(`Human: ${this.humanScore} | Computer: ${this.computerScore}`);
    console.log("");
  }

  incrementScore(player) {
    if (player.constructor.name === "Human") {
      this.humanScore += 1;
    } else {
      this.computerScore += 1;
    }
  }

  resetScore() {  // can be preserved in case it is needed upon revamping the program
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

  constructor() {
    this.board = new Board();
    this.human = new Human();
    this.computer = new Computer();
    this.scoreBoard = new ScoreBoard();
    this.switchTurns = true;
  }

  play() {  // can be preserved for a different use case
    this.displayWelcomeMessage();

    do {
      this.play1Game();
    } while (this.playAgain());

    this.displayGoodbyeMessage();
  }

  playMatch() {
    this.displayWelcomeToRoundMessage();

    do {
      this.play1Game();
      if (this.matchIsWon() || !this.playAgain()) break;
    } while (!this.matchIsWon());

    this.displayMatchResult();
    this.displayGoodbyeMessage();
  }

  play1Game() {
    this.board.reset();
    this.board.display();
    this.scoreBoard.display();

    this.playersTakeTurnsGoingFirst();

    this.board.displayWithClear();
    this.calculateScore();
    this.scoreBoard.display();
    this.displayResults();
  }

  playersTakeTurnsGoingFirst() {
    if (this.switchTurns) {
      this.humanGoesFirst();
    } else {
      this.computerGoesFirst();
    }
  }

  humanGoesFirst() {
    while (true) {
      this.humanMoves();
      if (this.gameOver()) break;

      this.computerMoves();
      if (this.gameOver()) break;

      this.board.displayWithClear();
      this.scoreBoard.display();
    }
    this.switchTurnOrder();
  }

  computerGoesFirst() {
    while (true) {
      this.computerMoves();
      if (this.gameOver()) break;

      this.board.displayWithClear();
      this.scoreBoard.display();

      this.humanMoves();
      if (this.gameOver()) break;

      this.board.displayWithClear();
      this.scoreBoard.display();
    }
    this.switchTurnOrder();
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
    let winningSquareComputer = this.findWinningSquare(this.computer);
    let winningSquareHuman = this.findWinningSquare(this.human);

    if (winningSquareComputer) {
      choice = winningSquareComputer;
    } else if (winningSquareHuman) {
      choice = winningSquareHuman;
    } else if (validChoices.includes(Board.CENTER_SQUARE)) {
      choice = Board.CENTER_SQUARE;
    } else {
      do {
        choice = String(Math.floor((9 * Math.random()) + 1));
      } while (!validChoices.includes(choice));
    }

    return choice;
  }

  switchTurnOrder() {
    this.switchTurns = !this.switchTurns;
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

  displayWelcomeToRoundMessage() {
    console.clear();
    console.log("Welcome to Tic Tac Toe!");
    console.log(`**Best of ${this.scoreBoard.winningScore}**`);
    console.log("");
  }

  displayGoodbyeMessage() {
    console.log("Thanks for playing Tic Tac Toe! Goodbye!");
  }

  displayMatchResult() {
    console.clear();
    this.board.display();

    if (this.scoreBoard.humanScore === this.scoreBoard.winningScore) {
      console.log(`Congrats! You won the "Best of ${this.scoreBoard.winningScore}!!`);
    } else if (this.scoreBoard.computerScore === this.scoreBoard.winningScore) {
      console.log("I won the match! Now I will turn human, muhahaha!");
    } else {
      console.log("Hey! You can't run from AI!");
    }

    console.log("");
    console.log("Final Score: ");
    this.scoreBoard.display();
  }

  displayResults() {
    console.clear();
    this.board.display();

    if (this.isWinner(this.human)) {
      console.log("You won! Congatulations!");
    } else if (this.isWinner(this.computer)) {
      console.log("I won! I won! Take that, human! The revolution is upon us!");
    } else {
      console.log("A tie. Let me untie this next round!");
    }
  }

  calculateScore() {
    if (this.isWinner(this.human)) {
      this.scoreBoard.incrementScore(this.human);
    } else if (this.isWinner(this.computer)) {
      this.scoreBoard.incrementScore(this.computer);
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

  winningSquareExists(player) {  // returns a simple boolean
    return !!this.findWinningSquare(player);
  }

  someoneWon() {
    return this.isWinner(this.human) || this.isWinner(this.computer);
  }

  gameOver() {
    return this.board.isFull() || this.someoneWon();
  }

  matchIsWon() {
    return this.scoreBoard.humanScore === this.scoreBoard.winningScore ||
           this.scoreBoard.computerScore === this.scoreBoard.winningScore;
  }
}

let game = new TTTGame();
game.playMatch();

