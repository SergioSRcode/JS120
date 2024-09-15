let SwimmableMixin = {
  swimmable: true,

  swim() {
    console.log("splish splash!");
  },
};

class Dog {
  constructor(race, color, cuteness) {
    this.race = race;
    this.color = color;
    this.cuteness = cuteness;
  }

  eat() {
    console.log("yumm");
  }

  sleep() {
    console.log("Zzzz");
  }
}

Object.assign(Dog.prototype, SwimmableMixin);

let jonny = new Dog("Labradoodle", "brown", "10/10");

console.log(jonny);
console.log(jonny.hasOwnProperty("eat"));
// console.log(jonny.hasOwnProperty("swimmable"));
// console.log(jonny.swimmable);
// console.log(jonny.swim());