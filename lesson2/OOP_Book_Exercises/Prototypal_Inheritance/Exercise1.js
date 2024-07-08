/* eslint-disable max-len */
// This exercise re-examines exercise 1 from the previous chapter.
// In that exercise, you wrote a class to instantiate smartphone objects.
// In this exercise, we'll rewrite that solution using the constructor/prototype pattern.

// Using the constructor/prototype pattern, create a type that represents smartphones.
// Each smartphone should have a brand, model, and release year.
// Add methods that display the smartphone's information and check its battery level.
// Create objects that represent the following two smartphones:

function Smartphone(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;

  Smartphone.prototype.checkBattery = function() {
    console.log(`Battery is at 75%`);
  };

  Smartphone.prototype.checkInfo = function() {
    console.log(`${this.brand} ${this.model} released in ${this.year}`);
  };
}

let iPhone12 = new Smartphone("Apple", "iPhone 12", "2020");
let galaxyS21 = new Smartphone("Samsung", "Galaxy S21", "2021");
iPhone12.checkBattery();
galaxyS21.checkBattery();
iPhone12.checkInfo();
galaxyS21.checkInfo();
