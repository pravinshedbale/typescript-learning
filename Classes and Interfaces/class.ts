class Department {
    name: string;

    constructor(n: string) {
        this.name = n;
    }
}

const d = new Department("Computer Science and Engineering");

console.log(d.name);
