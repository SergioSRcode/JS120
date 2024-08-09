let readline = require("readline-sync");

function Square(marker = Square.UNUSED_SQUARE) {
  this.marker = marker;
}

Square.UNUSED_SQUARE = " ";
Square.HUMAN_MARKER = "X";
Square.COMPUTER_MARKER = "O";

Square.prototype.toString = function() {
  return this.marker;
};

Square.prototype.setMarker = function(marker) {
  this.marker = marker;
};

Square.prototype.isUnused = function() {
  return this.marker === Square.UNUSED_SQUARE;
};

Square.prototype.getMarker = function() {
  return this.marker;
};

// let square = new Square(Square.COMPUTER_MARKER);
// console.log(square.marker);


function Board() {
  this.squares = {};

  for (let counter = 1; counter <= 9; ++counter) {
    this.squares[counter] = new Square();
  }
}

Board.prototype.display = function() {
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
};

Board.prototype.displayWithClear = function() {
  console.clear();
  console.log("");
  console.log("");
  this.display();
};

Board.prototype.markSquareAt = function(key, marker) {
  this.squares[key].setMarker(marker);
};

Board.prototype.unusedSquares = function() {
  let keys = Object.keys(this.squares);
  return keys.filter(key => this.squares[key].isUnused());
};

Board.prototype.isFull = function() {
  return this.unusedSquares().length === 0;
};

Board.prototype.countMarkersFor = function(player, keys) {
  let markers = keys.filter(key => {
    return this.squares[key].getMarker() === player.getMarker();
  });

  return markers.length;
};

// let board = new Board();
// board.markSquareAt(6, Square.COMPUTER_MARKER);
// board.display();

function Player(marker) {
  this.marker = marker;
}

Player.prototype.getMarker = function() {
  return this.marker;
};

function Human() {
  Player.call(this, Square.HUMAN_MARKER);
}

Human.prototype = Object.create(Player.prototype);
Human.prototype.constructor = Human;

function Computer() {
  Player.call(this, Square.COMPUTER_MARKER);
}

Computer.prototype = Object.create(Player.prototype);
Computer.prototype.constructor = Computer;

// let human = new Human();
// console.log(human.getMarker());
// let computer = new Computer();
// console.log(computer.getMarker());
