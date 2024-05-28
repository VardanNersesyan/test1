"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElectricCar = void 0;
const Car_1 = require("./Car");
class ElectricCar extends Car_1.Car {
    constructor(mark, model, year, mileage = 0, batteryLevel = 100) {
        super(mark, model, year, mileage);
        if (batteryLevel < 0 || batteryLevel > 100) {
            throw new Error("Battery level must be between 0 and 100");
        }
        this.batteryLevel = batteryLevel;
    }
    charge(amount) {
        if (amount < 0) {
            throw new Error("Charge amount cannot be negative");
        }
        this.batteryLevel = Math.min(this.batteryLevel + amount, 100);
    }
    drive(distance) {
        if (distance < 0) {
            throw new Error("Distance cannot be negative");
        }
        super.drive(distance);
        const batteryUsage = distance / 10;
        this.batteryLevel = Math.max(this.batteryLevel - batteryUsage, 0);
    }
    getDescription() {
        return `${super.getDescription()} and ${this.batteryLevel}% battery remaining`;
    }
    getBatteryLevel() {
        return this.batteryLevel;
    }
}
exports.ElectricCar = ElectricCar;
