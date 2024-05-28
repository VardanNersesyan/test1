"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
const Vehicle_1 = require("./Vehicle");
class Car extends Vehicle_1.Vehicle {
    constructor(mark, model, year, mileage = 0) {
        super(mark, model, year, mileage);
    }
}
exports.Car = Car;
