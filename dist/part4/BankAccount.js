"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.task4 = void 0;
class AbstractBankAccount {
    constructor(accountNumber, ownerName, initialBalance) {
        if (!accountNumber) {
            throw new Error("Account number is required");
        }
        if (!ownerName) {
            throw new Error("Owner name is required");
        }
        if (initialBalance < 0) {
            throw new Error("Initial balance cannot be negative");
        }
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = initialBalance;
    }
    getBalance() {
        return this.balance;
    }
}
class BankAccount extends AbstractBankAccount {
    constructor(accountNumber, ownerName, initialBalance) {
        super(accountNumber, ownerName, initialBalance);
    }
    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Deposit amount must be positive");
        }
        this.balance += amount;
    }
    withdraw(amount) {
        if (amount <= 0) {
            throw new Error("Withdraw amount must be positive");
        }
        if (amount > this.balance) {
            throw new Error("Insufficient funds");
        }
        this.balance -= amount;
    }
}
function task4() {
    const myAccount = new BankAccount("84723784687", "Vardan", 100000);
    console.log('Task 4 running:');
    console.log('Initial values: "84723784687", "Vardan", 100000');
    console.log('RESULT:');
    console.log('Deposit 5000');
    myAccount.deposit(5000);
    console.log(myAccount.getBalance());
    console.log('Withdraw 15000');
    myAccount.withdraw(15000);
    console.log(myAccount.getBalance());
    console.log('----------------------------------');
}
exports.task4 = task4;
