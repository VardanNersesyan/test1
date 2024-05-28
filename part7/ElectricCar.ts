import { Car } from './Car';
export class ElectricCar extends Car {
    private batteryLevel: number;

    constructor(mark: string, model: string, year: number, mileage: number = 0, batteryLevel: number = 100) {
        super(mark, model, year, mileage);
        if (batteryLevel < 0 || batteryLevel > 100) {
            throw new Error("Battery level must be between 0 and 100");
        }
        this.batteryLevel = batteryLevel;
    }

    public charge(amount: number): void {
        if (amount < 0) {
            throw new Error("Charge amount cannot be negative");
        }
        this.batteryLevel = Math.min(this.batteryLevel + amount, 100);
    }

    public drive(distance: number): void {
        if (distance < 0) {
            throw new Error("Distance cannot be negative");
        }
        super.drive(distance);
        const batteryUsage = distance / 10;
        this.batteryLevel = Math.max(this.batteryLevel - batteryUsage, 0);
    }

    public getDescription(): string {
        return `${super.getDescription()} and ${this.batteryLevel}% battery remaining`;
    }

    public getBatteryLevel(): number {
        return this.batteryLevel;
    }
}