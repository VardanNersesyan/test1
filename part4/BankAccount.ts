interface IBankAccount {
    getBalance(): number;
    deposit(amount: number): void;
    withdraw(amount: number): void;
}

abstract class AbstractBankAccount implements IBankAccount {
    protected accountNumber: string;
    protected balance: number;
    public ownerName: string;

    constructor(accountNumber: string, ownerName: string, initialBalance: number) {
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

    public getBalance(): number {
        return this.balance;
    }

    public abstract deposit(amount: number): void;
    public abstract withdraw(amount: number): void;
}

class BankAccount extends AbstractBankAccount {
    constructor(accountNumber: string, ownerName: string, initialBalance: number) {
        super(accountNumber, ownerName, initialBalance);
    }

    public deposit(amount: number): void {
        if (amount <= 0) {
            throw new Error("Deposit amount must be positive");
        }
        this.balance += amount;
    }

    public withdraw(amount: number): void {
        if (amount <= 0) {
            throw new Error("Withdraw amount must be positive");
        }
        if (amount > this.balance) {
            throw new Error("Insufficient funds");
        }
        this.balance -= amount;
    }
}

export function task4() {
    const myAccount = new BankAccount("84723784687", "Vardan", 100000);
    console.log('Task 4 running:');
    console.log('Initial values: "84723784687", "Vardan", 100000')
    console.log('RESULT:')
    console.log('Deposit 5000')
    myAccount.deposit(5000)
    console.log(myAccount.getBalance())
    console.log('Withdraw 15000')
    myAccount.withdraw(15000)
    console.log(myAccount.getBalance())
    console.log('----------------------------------');
}

