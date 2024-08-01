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

class Board {
  constructor() {
    //STUB
    // Game board
  }
}

class Square {
  constructor() {
    //STUB
    // The game board is comprised of squares to be marked
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
    //STUB
    // needs a board an 2 players (Player and Computer)
  }

  play() {
    // SPIKE
    this.displayWelcomeMessage();

    while (true) {
      this.displayBoard();

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
    //show welcome message
  }

  displayGoodbyeMessage() {
    //STUB
    //show goodbye message
  }

  displayResults() {
    //STUB
    // show results of game (w/l/tie)
  }

  displayBoard() {
    //STUB
    // show game board in current state
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