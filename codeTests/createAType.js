function FireType(name) {
  this.name = name;
  this.type = "fire";
  this.weakness = ["water", "ground", "rock"];
  this.strength = ["grass, steel, bug"];
  this.immunity = null;

  this.inspectOpponent = function(opponent) {
    if (this.weakness.includes(opponent.type)) {
      console.log("better run!");
    } else if (this.strength.includes(opponent.type)) {
      console.log("we've got this!");
    } else {
      console.log("It's gonna be a close one!");
    }
  };
}

function WaterType(name) {
  this.name = name;
  this.type = "water";
  this.weakness = ["grass", "electro"];
  this.strength = ["fire", "ground", "rock"];
  this.immunity = null;

  this.inspectOpponent = function(opponent) {
    if (this.weakness.includes(opponent.type)) {
      console.log("better run!");
    } else if (this.strength.includes(opponent.type)) {
      console.log("we've got this!");
    } else {
      console.log("It's gonna be a close one!");
    }
  };
}

let charmander = new FireType("Charmander");
let squirtle = new WaterType("Squirtle");

console.log(charmander.inspectOpponent(squirtle));
console.log(squirtle.inspectOpponent(charmander));