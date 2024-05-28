class DivisionByZeroError extends Error {
    constructor() {
        super("Division by zero is not allowed");
        this.name = "DivisionByZeroError";
    }
}

interface ILogger {
    log(message: string): void;
    logError(error: Error): void;
}

class ConsoleLogger implements ILogger {
    log(message: string): void {
        console.log(message);
    }

    logError(error: Error): void {
        console.error(`Error: ${error.message}`);
    }
}

class Calculator {
    private result: number = 0;
    private logger: ILogger;

    constructor(logger: ILogger = new ConsoleLogger()) {
        this.logger = logger;
    }

    public clear(): this {
        this.result = 0;
        return this;
    }

    public getResult(): number {
        return this.result;
    }

    public add(a: number, b?: number): this {
        if (b !== undefined) {
            this.result = a + b;
        } else {
            this.result += a;
        }
        this.logger.log(`add(${a}${b !== undefined ? `, ${b}` : ''}) = ${this.result}`);
        return this;
    }

    public subtract(a: number, b?: number): this {
        if (b !== undefined) {
            this.result = a - b;
        } else {
            this.result -= a;
        }
        this.logger.log(`subtract(${a}${b !== undefined ? `, ${b}` : ''}) = ${this.result}`);
        return this;
    }

    public multiply(a: number, b?: number): this {
        if (b !== undefined) {
            this.result = a * b;
        } else {
            this.result *= a;
        }
        this.logger.log(`multiply(${a}${b !== undefined ? `, ${b}` : ''}) = ${this.result}`);
        return this;
    }

    public divide(a: number, b?: number): this {
        if (b !== undefined) {
            if (b === 0) {
                const error = new DivisionByZeroError();
                this.logger.logError(error);
                throw error;
            }
            this.result = a / b;
        } else {
            if (a === 0) {
                const error = new DivisionByZeroError();
                this.logger.logError(error);
                throw error;
            }
            this.result /= a;
        }
        this.logger.log(`divide(${a}${b !== undefined ? `, ${b}` : ''}) = ${this.result}`);
        return this;
    }

    private logError(error: unknown): void {
        if (error instanceof Error) {
            this.logger.logError(error);
        } else {
            this.logger.logError(new Error(String(error)));
        }
    }
}


export function task10() {
    console.log('Task 10 running:');
    const calculator = new Calculator();

    console.log('Calculate provided params:')
    calculator.add(2, 3);
    calculator.subtract(5, 1);
    calculator.multiply(2, 3);
    calculator.divide(10, 2);
    console.log(`Result: ${calculator.getResult()}`);
    console.log('')
    console.log('')
    console.log('Chain calculation:')
    calculator.add(3, 3).subtract(2).multiply(4).divide( 2);
    console.log(`Result: ${calculator.getResult()}`);

    try {
        calculator.divide(10, 0);
    } catch (error) {
        if (error instanceof DivisionByZeroError) {
            console.error(error.message);
        } else {
            console.error("An unknown error occurred", error);
        }
    }
    console.log('----------------------------------');

}