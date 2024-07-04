// Given the following three objects,
// create an object factory that can eliminate the code duplication:

/*
let apple = {
  name: 'Apple',
  color: 'Red',

  isRipe: function() {
    return `This ${this.name} is ripe.`;
  },

  describe: function() {
    return `This ${this.name} is ${this.color}.`;
  },
};

let banana = {
  name: 'Banana',
  color: 'Yellow',

  isRipe: function() {
    return `This ${this.name} is ripe.`;
  },

  describe: function() {
    return `This ${this.name} is ${this.color}.`;
  },
};

let blackberry = {
  name: 'Blackberry',
  color: 'Black',

  isRipe: function() {
    return `This ${this.name} is ripe.`;
  },

  describe: function() {
    return `This ${this.name} is ${this.color}.`;
  },
};
*/

function createFruit(name, color) {
  return {
    name,
    color,

    isRipe: function() {
      return `This ${this.name} is ripe.`;
    },

    describe: function() {
      return `This ${this.name} is ${this.color}.`;
    },
  };
}

let apple = createFruit("Apple", "Red");
let banana = createFruit("Banana", "Yellow");
let blackberry = createFruit("Blackberry", "Black");

console.log(apple.isRipe());
console.log(banana.describe());
console.log(blackberry.isRipe());

