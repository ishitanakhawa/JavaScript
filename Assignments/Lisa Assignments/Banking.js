class BankAccount {
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(`${this.name} deposited ${amount}. New balance: ${this.balance}`);
  }

  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Insufficient funds!");
    } else {
      this.balance -= amount;
      console.log(`${this.name} withdrew ${amount}. Remaining: ${this.balance}`);
    }
  }
}


const myAccount = new BankAccount("Rahul", 1000);
myAccount.deposit(500);   
myAccount.withdraw(200);  
