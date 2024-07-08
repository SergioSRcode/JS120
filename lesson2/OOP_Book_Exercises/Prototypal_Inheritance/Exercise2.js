/* eslint-disable max-len */
// This exercise re-examines exercise 3 from the previous chapter.
// In that exercise, you wrote a class hierarchy to represent vehicles of various types.
// In this exercise, we'll rewrite that solution using the constructor/prototype pattern.

// Using the constructor/prototype pattern, create some types that represent vehicles,
// including cars, boats, and planes as specific kinds of vehicles.
// All vehicles should be able to accelerate and decelerate.
// Cars should be able to honk,
// boats should be able to drop anchor,
// and planes should be able to take off and land. Test your code.

function Vehicle(color, weight) {
  this.color = color;
  this.weight = weight;
}

Vehicle.prototype.accelerate = function() {
  console.log(this.type + " is accelerating!");
};

Vehicle.prototype.decelerate = function() {
  console.log(`${this.type} is decelerating`);
};

function Car(color, weight, licenseNumber) {
  this.type = "Car";
  Vehicle.call(this, color, weight);
  this.licenseNumber = licenseNumber;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;
Car.prototype.honk = function() {
  console.log("Honk");
};

function Boat(color, weight, homePort) {
  this.type = "Boat";
  Vehicle.call(this, color, weight);
  this.homePort = homePort;
}

Boat.prototype = Object.create(Vehicle.prototype);
Boat.prototype.constructor = Boat;
Boat.prototype.dropAnchor = function() {
  console.log("Drop anchor");
};

function Plane(color, weight, airline) {
  this.type = "Plane";
  Vehicle.call(this, color, weight);
  this.airline = airline;
}

Plane.prototype = Object.create(Vehicle.prototype);
Plane.prototype.constructor = Plane;
Plane.prototype.takeOff = function() {
  console.log("Take off");
};

Plane.prototype.land = function() {
  console.log("Land");
};

let car = new Car('red', 3300, 'BXY334');
car.accelerate();             // Accelerate
car.honk();                   // Honk
car.decelerate();             // Decelerate
console.log(car.color, car.weight, car.licenseNumber);
// red 3300 BXY334

let boat = new Boat('yellow', 12000, 'Bahamas');
boat.accelerate();            // Accelerate
boat.decelerate();            // Decelerate
boat.dropAnchor();            // Drop anchor
console.log(boat.color, boat.weight, boat.homePort);
// yellow 12000 Bahamas

let plane = new Plane('blue', 83000, 'Southwest');
plane.accelerate();           // Accelerate
plane.takeOff();              // Take off
plane.land();                 // Land
plane.decelerate();           // Decelerate
console.log(plane.color, plane.weight, plane.airline);
// blue 83000 Southwest