/* eslint-disable max-len */

// Ben and Alyssa are working on a vehicle management system.
// Thus far, they have created classes named Auto and Motorcycle to
// represent automobiles and motorcycles.
// After they noticed that the information and calculations performed were
// common to both vehicle types, they decided to break out the
// commonality into a separate class named WheeledVehicle.

// Their code, thus far, looks like this:

const Movable = {
  range() {
    return this.fuelCap * this.fuelEfficiency;
  }
};

class WheeledVehicle {
  constructor(tirePressure, kmTravelledPerLiter, fuelCapInLiter) {
    this.tires = tirePressure;
    this.fuelEfficiency = kmTravelledPerLiter;
    this.fuelCap = fuelCapInLiter;
  }

  tirePressure(tireIdx) {
    return this.tires[tireIdx];
  }

  inflateTire(tireIdx, pressure) {
    this.tires[tireIdx] = pressure;
  }
}

Object.assign(WheeledVehicle.prototype, Movable);

class Auto extends WheeledVehicle {
  constructor() {
    // the array represents tire pressure for four tires
    super([30,30,32,32], 50, 25.0);
  }
}

class Motorcycle extends WheeledVehicle {
  constructor() {
    // array represents tire pressure for two tires
    super([20,20], 80, 8.0);
  }
}

// Their boss now wants them to incorporate a new type of vehicle: a Catamaran.

class Catamaran {
  constructor(propellerCount, hullCount, kmTravelledPerLiter, fuelCapInLiter) {
    // catamaran specific logic

    this.propellerCount = propellerCount;
    this.hullCount = hullCount;
    this.fuelEfficiency = kmTravelledPerLiter;
    this.fuelCap = fuelCapInLiter;
  }
}

Object.assign(Catamaran.prototype, Movable);

// This new class doesn't fit well with our existing class hierarchy:
// Catamarans don't have tires, and aren't wheeled vehicles.

// However, we still want to share the code for checking the range.
// Modify the class definitions and move code into a mix-in,
// as needed, to share code between the Catamaran and the wheeled vehicle classes.