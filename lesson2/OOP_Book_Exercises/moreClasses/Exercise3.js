/* eslint-disable max-len */

// Create a BankAccount class with a private field balance.
// Add a private method, #checkBalance, that logs the current balance.
// Provide a public method, deposit, to add money to the account and withdraw to take money out.
// Raise a RangeError if there are insufficient funds for the withdrawal.

class BankAccount {
  #balance = 0;

  #checkBalance() {
    console.log(`Your current balance is ${this.#balance}$`);
  }

  deposit(amount) {
    this.#balance += amount;
    this.#checkBalance();
  }

  withdraw(amount) {
    if (amount > this.#balance) throw new Error('RangeError: Insufficient funds');

    this.#balance -= amount;
    this.#checkBalance();
    return amount;
  }
}

let account = new BankAccount();
account.deposit(100);

account.withdraw(50);
account.withdraw(100); // RangeError: Insufficient funds