import { Person } from "./Person";

interface IEmployee {
    jobTitle: string;
}

export class Employee extends Person implements IEmployee {
    public readonly jobTitle: string;

    constructor(name: string, age: number, jobTitle: string) {
        super(name, age);
        this.jobTitle = jobTitle;
    }

    public introduce(): string {
        return `Hi, my name is ${this.name}, I am ${this.age} years old and I work as a ${this.jobTitle}.`;
    }
}