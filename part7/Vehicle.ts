export interface IVehicle {
    drive(distance: number): void;
    getDescription(): string;
}

export abstract class Vehicle implements IVehicle {
    protected make: string;
    protected model: string;
    protected year: number;
    protected mileage: number;

    constructor(make: string, model: string, year: number, mileage: number = 0) {
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

    public drive(distance: number): void {
        if (distance < 0) {
            throw new Error("Distance cannot be negative");
        }
        this.mileage += distance;
    }

    public getDescription(): string {
        return `${this.year} ${this.make} ${this.model} with ${this.mileage} miles`;
    }
}