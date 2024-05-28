"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.task10 = void 0;
class DivisionByZeroError extends Error {
    constructor() {
        super("Division by zero is not allowed");
        this.name = "DivisionByZeroError";
    }
}
class ConsoleLogger {
    log(message) {
        console.log(message);
    }
    logError(error) {
        console.error(`Error: ${error.message}`);
    }
}
class Calculator {
    constructor(logger = new ConsoleLogger()) {
        this.result = 0;
        this.logger = logger;
    }
    clear() {
        this.result = 0;
        return this;
    }
    getResult() {
        return this.result;
    }
    add(a, b) {
        if (b !== undefined) {
            this.result = a + b;
        }
        else {
            this.result += a;
        }
        this.logger.log(`add(${a}${b !== undefined ? `, ${b}` : ''}) = ${this.result}`);
        return this;
    }
    subtract(a, b) {
        if (b !== undefined) {
            this.result = a - b;
        }
        else {
            this.result -= a;
        }
        this.logger.log(`subtract(${a}${b !== undefined ? `, ${b}` : ''}) = ${this.result}`);
        return this;
    }
    multiply(a, b) {
        if (b !== undefined) {
            this.result = a * b;
        }
        else {
            this.result *= a;
        }
        this.logger.log(`multiply(${a}${b !== undefined ? `, ${b}` : ''}) = ${this.result}`);
        return this;
    }
    divide(a, b) {
        if (b !== undefined) {
            if (b === 0) {
                const error = new DivisionByZeroError();
                this.logger.logError(error);
                throw error;
            }
            this.result = a / b;
        }
        else {
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
    logError(error) {
        if (error instanceof Error) {
            this.logger.logError(error);
        }
        else {
            this.logger.logError(new Error(String(error)));
        }
    }
}
function task10() {
    console.log('Task 10 running:');
    const calculator = new Calculator();
    console.log('Calculate provided params:');
    calculator.add(2, 3);
    calculator.subtract(5, 1);
    calculator.multiply(2, 3);
    calculator.divide(10, 2);
    console.log(`Result: ${calculator.getResult()}`);
    console.log('');
    console.log('');
    console.log('Chain calculation:');
    calculator.add(3, 3).subtract(2).multiply(4).divide(2);
    console.log(`Result: ${calculator.getResult()}`);
    try {
        calculator.divide(10, 0);
    }
    catch (error) {
        if (error instanceof DivisionByZeroError) {
            console.error(error.message);
        }
        else {
            console.error("An unknown error occurred", error);
        }
    }
    console.log('----------------------------------');
}
exports.task10 = task10;
