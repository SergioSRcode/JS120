/* eslint-disable max-len */
// In this problem and the remaining problems, we'll build a simple invoice processing program.
// To get you started, here's the code to process a single invoice:

// let invoice = {
//   phone: 3000,
//   internet: 6500
// };

// let payment = {
//   phone: 1300,
//   internet: 5500
// };

// let invoiceTotal = invoice.phone + invoice.internet;
// let paymentTotal = payment.phone + payment.internet;
// let remainingDue = invoiceTotal - paymentTotal;

// console.log(paymentTotal);         // => 6800
// console.log(remainingDue);         // => 2700

// To process multiple invoices, we need a factory method that we can use to create invoices.
// The requirements for the factory function are as follows:

// 1. It returns an invoice object, with phone and internet properties, and a total method.
// 2. The default value for the phone service is 3000, and the internet service is 5500
// (in cents, of course!).
// 3. The function takes an object argument whose attributes override the default values.

// Your function should work with the following code:

function createInvoice(services = {}) {
  services.phone = services.phone || 3000;
  services.internet = services.internet || 5500;

  services.total = function() {
    return this.phone + this.internet;
  };

  return services;
}

function invoiceTotal(invoices) {
  let total = 0;

  for (let index = 0; index < invoices.length; index += 1) {
    total += invoices[index].total();
  }

  return total;
}

let invoices = [];
invoices.push(createInvoice());
invoices.push(createInvoice({ internet: 6500 }));
invoices.push(createInvoice({ phone: 2000 }));
invoices.push(createInvoice({
  phone: 1000,
  internet: 4500,
}));

console.log(invoiceTotal(invoices)); // 31000

/* LS solution
function createInvoice(services = {}) {
  let phoneCharge = services.phone;
  if (phoneCharge === undefined) {
    phoneCharge = 3000;
  }

  let internetCharge = services.internet;
  if (internetCharge === undefined) {
    internetCharge = 5500;
  }

  return {
    phone: phoneCharge,
    internet: internetCharge,

    total: function() {
      return this.phone + this.internet;
    }
  };
}
*/