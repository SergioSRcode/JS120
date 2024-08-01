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
    // Game board
  }
}

class Square {
  constructor() {
    // The game board is comprised of squares to be marked
  }
}

class Row {
  constructor() {
    // the game board consists of 3 rows of 3 squares each
  }
}

class Marker {
  constructor() {
    // marking a move on the board
  }
}

class Player {
  constructor() {
    // Possibly a marker for Player and/or Computer
  }

  mark() {
    // mark a square on the board
    // how do we access the board?
  }

  play() {
    // filler
  }
}

class Human extends Player {
  constructor() {
    super();
    //filler
  }
}

class Computer extends Player {
  constructor() {
    super();
    //filler
  }
}

class TTTGame {
  constructor() {
    // needs a board an 2 players (Player and Computer)
  }

  play() {
    // start game
  }
}

let game = new TTTGame();
game.play();