/* eslint-disable max-len */
/*
Our new organization also makes it easier to write functions dealing with the products,
because we can now take advantage of conventions in the objects' data.
Create a function that takes one of our product objects as an argument,
and sets the object's price to a non-negative number of our choosing, passed in as a second argument.
If the new price is negative, let the user know that the new price is invalid.
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

adjustPrice(scissors, 9);
console.log(scissors.price);
adjustPrice(drill, -3);  // Error => new price is negative
console.log(drill.price); // won't be read

