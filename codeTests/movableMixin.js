function createMovableMixin(kmTravelledPerLiter, fuelCapInLiter) {
  return {
    fuelEfficiency: kmTravelledPerLiter,
    fuelCap: fuelCapInLiter,

    range() {
      return this.fuelCap *  this.fuelEfficiency;
    }
  };
}

class WheeledVehicle {
  constructor(tirePressure, kmTravelledPerLiter, fuelCapInLiter) {
    this.tires = tirePressure;

    Object.assign(WheeledVehicle.prototype,
      createMovableMixin(kmTravelledPerLiter, fuelCapInLiter));
  }

  tirePressure(tireIdx) {
    return this.tires[tireIdx];
  }

  inflateTire(tireIdx, pressure) {
    this.tires[tireIdx] = pressure;
  }
}

class Auto extends WheeledVehicle {
  constructor() {
    // the array represents tire pressure for four tires
    super([30,30,32,32], 50, 25.0);
  }
}

class Catamaran {
  constructor(propellerCount, hullCount, kmTravelledPerLiter, fuelCapInLiter) {
    this.propellerCount = propellerCount;
    this.hullCount = hullCount;

    Object.assign(Catamaran.prototype,
      createMovableMixin(kmTravelledPerLiter, fuelCapInLiter));
  }
}

let jonny = new Auto();
console.log(jonny.range()); // 1250
let peter = new Catamaran(5, 5, 50, 25.0);
console.log(peter.range()); // 1250