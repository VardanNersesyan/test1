"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehicle = void 0;
class Vehicle {
    constructor(make, model, year, mileage = 0) {
        if (year < 1886) {
            throw new Error("Year must be 1886 or later");
        }
        if (mileage < 0) {
            throw new Error("Mileage cannot be negative");
        }
        this.make = make;
        this.model = model;
        this.year = year;
        this.mileage = mileage;
    }
    drive(distance) {
        if (distance < 0) {
            throw new Error("Distance cannot be negative");
        }
        this.mileage += distance;
    }
    getDescription() {
        return `${this.year} ${this.make} ${this.model} with ${this.mileage} miles`;
    }
}
exports.Vehicle = Vehicle;
