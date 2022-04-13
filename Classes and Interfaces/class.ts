class Department {
    protected employees: string[] = [];
    constructor(private id: string, private readonly name: string) {}
    describe(this: Department) {
        console.log(`Department : ${this.name}`);
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ITDepartment extends Department {
    constructor(id: string) {
        super(id, "IT");
    }
}

const cse = new Department("cse", "Computer Science and Engineering");
const it = new ITDepartment("it");

it.addEmployee("Pravin");
it.addEmployee("Sandesh");
it.addEmployee("Deepak");

it.describe();
it.printEmployeeInformation();
