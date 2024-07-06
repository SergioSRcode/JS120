// Create a class hierarchy consisting of vehicles,
// including cars, boats, and planes, as specific kinds of vehicles.
// All vehicles should be able to accelerate and decelerate.
// Cars should be able to honk, boats should be able to drop anchor,
// and planes should be able to take off and land. Test your code.

// All vehicles should have a color and weight.
// Cars have a license number, boats have a home port,
// and planes have an airline name.

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
console.log(car.color);
console.log(car.weight);
console.log(car.vehicleType);
console.log(car.licenseNo);
car.accelerate();
car.honk();
car.decelerate();

let boat = new Boat("Berlin", "blue", "1t", "Boat");
console.log(boat.color);
console.log(boat.weight);
console.log(boat.vehicleType);
console.log(boat.homePort);
boat.accelerate();
boat.decelerate();
boat.dropAnchor();

let plane = new Plane("Ryanair", "white", "7t", "Plane");
console.log(plane.color);
console.log(plane.weight);
console.log(plane.vehicleType);
console.log(plane.airline);
plane.takeOff();
plane.accelerate();
plane.decelerate();
plane.land();


