"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class APerson {
    constructor(name, age) {
        if (age < 0) {
            throw new Error('Age cannot be negative');
        }
        this.name = name;
        this.age = age;
    }
}
class Person extends APerson {
    constructor(name, age) {
        super(name, age);
    }
    introduce() {
        return `Hi, my name is ${this.name} and I am ${this.age} years old.`;
    }
}
exports.Person = Person;
