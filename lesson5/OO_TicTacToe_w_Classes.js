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

class Square {
  static UNUSED_SQUARE = " ";
  static HUMAN_MARKER = "X";
  static COMPUTER_MARKER = "O";

  constructor(marker = Square.UNUSED_SQUARE) {
    this.marker = marker;
  }

  toString() {
    return this.marker;
  }
}

class Board {
  constructor() {
    this.squares = {};
    for (let counter = 1; counter <= 9; ++counter) {
      this.squares[counter] = new Square();
    }
  }

  display() {
    console.log("");
    console.log("     |     |");
    console.log(`  ${this.squares["1"]}  |  ${this.squares["2"]}  |  ${this.squares["3"]}  `);
    console.log("     |     |");
    console.log("-----+-----+-----");
    console.log("     |     |");
    console.log(`  ${this.squares["4"]}  |  ${this.squares["5"]}  |  ${this.squares["6"]}  `);
    console.log("     |     |");
    console.log("-----+-----+-----");
    console.log("     |     |");
    console.log(`  ${this.squares["7"]}  |  ${this.squares["8"]}  |  ${this.squares["9"]}  `);
    console.log("     |     |");
    console.log("");
  }
}

class Row {
  constructor() {
    //STUB
    // the game board consists of 3 rows of 3 squares each
  }
}

class Marker {
  constructor() {
    //STUB
    // marking a move on the board
  }
}

class Player {
  constructor() {
    //STUB
    // Possibly a marker for Player and/or Computer
  }

  mark() {
    //STUB
    // mark a square on the board
    // how do we access the board?
  }

  play() {
    //STUB
    // filler
  }
}

class Human extends Player {
  constructor() {
    super();
    //STUB
    //filler
  }
}

class Computer extends Player {
  constructor() {
    super();
    //STUB
    //filler
  }
}

class TTTGame {
  constructor() {
    this.board = new Board();
  }

  play() {
    // SPIKE
    this.displayWelcomeMessage();

    while (true) {
      this.board.display();

      this.firstPlayerMoves();
      if (this.gameOver()) break;

      this.secondPlayerMoves();
      if (this.gameOver()) break;
      break; // <= execute loop only once for now
    }

    this.displayResults();
    this.displayGoodbyeMessage();
  }

  displayWelcomeMessage() {
    //STUB
    console.log("Welcome to Tic Tac Toe!");
  }

  displayGoodbyeMessage() {
    //STUB
    console.log("Thanks for playing Tic Tac Toe! Goodbye!");
  }

  displayResults() {
    //STUB
    // show results of game (w/l/tie)
  }

  firstPlayerMoves() {
    //STUB
    // first player marks a sqare on board
  }

  secondPlayerMoves() {
    //STUB
    // second player marks a sqare on board
  }

  gameOver() {
    //STUB
    // if a player has three in a row, return true
    return false;
  }
}

let game = new TTTGame();
game.play();
