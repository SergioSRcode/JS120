/* eslint-disable max-len */
/*
Finally, remove the scissors and drill object-literal object creations from the code,
and recreate these objects using our createProduct factory function,
along with two or three more products of your choosing.
*/

function createProduct(id, name, stock, price) {
  return {
    id,
    name,
    stock,
    price,

    adjustPrice(newPrice) {
      if (newPrice < 0) throw new Error("New Price should be greater than 0");
      this.price = newPrice;
    },

    describeProduct() {
      console.log(`=> Name: ${this.name}
  => ID: ${this.id}
  => Price: ${this.price}
  => Stock: ${this.stock}`);
    },
  };
}

let scissors = createProduct(0, "Scissors", 8, 10);
let drill = createProduct(1, "Cordless Drill", 15, 45);
let phone = createProduct(2, "Nokia", 2, 90);
let computerMouse = createProduct(3, "Luigitec Mouse", 50, 45);

scissors.adjustPrice(5);
console.log(scissors.price);
scissors.describeProduct();
drill.describeProduct();
phone.describeProduct();
computerMouse.adjustPrice(40);
computerMouse.describeProduct();