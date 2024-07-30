/*
If we have a Car class and a Truck class,
how can you use the Speed object as a mix-in to make them goFast?
How can you check whether your Car or Truck can now go fast?
*/

const Speed = {
  goFast() {
    console.log(`I'm a ${this.constructor.name} and going super fast!`);
  }
};

class Car {
  goSlow() {
    console.log(`I'm safe and driving slow.`);
  }
}

Object.assign(Car.prototype, Speed); // merging the Speed obj to the prototype

class Truck {
  goVerySlow() {
    console.log(`I'm a heavy truck and like going very slow.`);
  }
}

Object.assign(Truck.prototype, Speed);

console.log(Car.prototype.hasOwnProperty("goFast"));
Car.prototype.goFast();

console.log(Truck.prototype.hasOwnProperty("goFast"));
Truck.prototype.goFast();

// Alternatively
console.log("goFast" in Car.prototype);  // using the "in" operator
console.log("goFast" in Truck.prototype);