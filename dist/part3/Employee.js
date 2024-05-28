"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
const Person_1 = require("./Person");
class Employee extends Person_1.Person {
    constructor(name, age, jobTitle) {
        super(name, age);
        this.jobTitle = jobTitle;
    }
    introduce() {
        return `Hi, my name is ${this.name}, I am ${this.age} years old and I work as a ${this.jobTitle}.`;
    }
}
exports.Employee = Employee;
