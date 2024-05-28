"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.task3 = void 0;
const Person_1 = require("./Person");
const Employee_1 = require("./Employee");
function task3() {
    const person = new Person_1.Person('Vardan', 32);
    const employee = new Employee_1.Employee('Vardan', 32, 'Senior Node.js Engineer');
    console.log('Task 3 running:');
    console.log('RESULT:');
    console.log(person.introduce());
    console.log(employee.introduce());
    console.log('--------------------------------------');
}
exports.task3 = task3;
