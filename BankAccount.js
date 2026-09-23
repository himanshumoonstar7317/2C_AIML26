class BankAccount {
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    console.log("+ Added: " + amount);
  }

  withdraw(amount) {
    if (amount > this.balance) {
      console.log("- Not enough balance!");
      return;
    }
    this.balance -= amount;
    console.log("- Withdrew: " + amount);
  }

  show() {
    console.log(this.name + " Balance: " + this.balance);
  }
}

// Check
let acc1 = new BankAccount("Himanshu", 500);
acc1.deposit(200);
acc1.withdraw(100);
acc1.show();