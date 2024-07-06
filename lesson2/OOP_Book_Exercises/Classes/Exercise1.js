/* eslint-disable max-len */

// Write a class that can be used to instantiate objects that represent smartphones.
// Each smartphone should have a brand, model, and release year.
// Add methods to check the battery level and to display the smartphone's information.
// Create objects that represent the following 2 smartphones:

/*
Brand -- Model -- Release Year
Apple -- iPhone 12 -- 2020
Samsung -- Galaxy S21 -- 2021
*/

class Smartphone {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  checkBattery() {
    console.log(`${this.model}'s battery is at 70%`);
  }

  checkInfo() {
    console.log(`This is a ${this.model} was released by ${this.brand} in ${this.year}`);
  }
}

let galaxyS21 = new Smartphone("Samsung", "Galaxy S21", "2021");
let iPhone12 = new Smartphone("Apple", "iPhone 12", "2020");

galaxyS21.checkInfo();
iPhone12.checkInfo();
