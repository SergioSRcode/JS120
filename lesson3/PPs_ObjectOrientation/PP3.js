/* eslint-disable max-len */
/*
It would also be useful to have the ability to output descriptions of our product objects.
Implement such a function following the example below:
*/


let scissors = {
  id: 0,
  name: "Scissors",
  stock: 8,
  price: 10,
};

let drill = {
  id: 1,
  name: "Cordless Drill",
  stock: 15,
  price: 45,
};

function adjustPrice(product, newPrice) {
  if (newPrice < 0) throw new Error("New Price should be greater than 0");
  product.price = newPrice;
}

function describeProduct(product) {
  console.log(`=> Name: ${product.name}
=> ID: ${product.id}
=> Price: ${product.price}
=> Stock: ${product.stock}`);
}

adjustPrice(scissors, 9);
console.log(scissors.price);
// adjustPrice(drill, -3);  // Error => new price is negative
// console.log(drill.price); // won't be read

describeProduct(scissors);
// => Name: Scissors
// => ID: 0
// => Price: $10
// => Stock: 8
