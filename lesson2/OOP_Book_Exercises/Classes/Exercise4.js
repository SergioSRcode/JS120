/* eslint-disable max-len */

// Using the solution to the previous exercise,
// demonstrate that cars and boats are both instance objects of the Vehicle class,
// that cars are instance objects of the Car class,
// but boats are not instance objects of the Car class.

class Vehicle {
  constructor(color, weight, vehicleType) {
    this.color = color;
    this.weight = weight;
    this.vehicleType = vehicleType;
  }

  accelerate() {
    console.log(`${this.vehicleType} is accelerating!!`);
  }

  decelerate() {
    console.log(`${this.vehicleType} is decelerating!`);
  }
}

class Car extends Vehicle {
  constructor(licenseNo, color, weight, vehicleType) {
    super(color, weight, vehicleType);
    this.licenseNo = licenseNo;
  }

  honk() {
    console.log("HOONK Honk HOOOONK!!");
  }
}

class Boat extends Vehicle {
  constructor(homePort, color, weight, vehicleType) {
    super(color, weight, vehicleType);
    this.homePort = homePort;
  }

  dropAnchor() {
    console.log("dropping anchor now!!");
  }
}

class Plane extends Vehicle {
  constructor(airline, color, weight, vehicleType) {
    super(color, weight, vehicleType);
    this.airline = airline;
  }

  takeOff() {
    console.log(`${this.vehicleType} is taking off!`);
  }

  land() {
    console.log(`${this.vehicleType} is now preparing to land. Thanks for flying with ${this.airline}!`);
  }
}

let car = new Car("ABC 1234", "red", "2t", "Car");
let boat = new Boat("Berlin", "blue", "1t", "Boat");
let plane = new Plane("Ryanair", "white", "7t", "Plane");

// cars and boats are instance objts of Vehicle => thus, true
console.log(car instanceof Vehicle && boat instanceof Vehicle);
console.log(car instanceof Car);  // cars are instance objects of Car => thus, true
console.log(boat instanceof Car);  //boats are not instance objects of Car => thus, false
