abstract class APerson {
    protected name: string;
    protected age: number;

    constructor(name: string, age: number) {
        if (age < 0) {
            throw new Error('Age cannot be negative');
        }

        this.name = name;
        this.age = age;
    }

    abstract introduce(): string;
}

interface IPerson {
    introduce(): string;
}

export class Person extends APerson implements IPerson {
    constructor(name: string, age: number) {
        super(name, age);
    }

    public introduce(): string {
        return `Hi, my name is ${this.name} and I am ${this.age} years old.`;
    }
}