/* eslint-disable no-tabs */
// Write a factory function that creates objects that represent smartphones.
// Each smartphone should have a brand, model, and release year.

// eslint-disable-next-line max-len
//Add methods to check the batterylevel and to display the smartphoness information
// Create objects that represent the following two smartphones:

// Brand	 Model	    Release Year
// Apple	 iPhone 12	2020
// Samsung Galaxy S21	2021

function createSmartphone(brand, model, year, battery) {
  return {
    brand,
    model,
    year,
    battery,

    checkBatteryLife() {
      console.log(`the battery is at ${this.battery}.`);
    },

    checkInformation() {
      console.log(`This ${this.brand} smartphone corresponds to the model ${this.model} and was realeased in ${this.year}`);
    },
  };
}

let galaxyS21 = createSmartphone("Samsung", "Galaxy S21", "2021", "15%");
let iPhone12 = createSmartphone("Apple", "iPhone 12", "2020", "85%");

galaxyS21.checkInformation();
galaxyS21.checkBatteryLife();
iPhone12.checkInformation();
iPhone12.checkBatteryLife();
