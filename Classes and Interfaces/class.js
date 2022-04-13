var Department = /** @class */ (function () {
    function Department(n) {
        this.employees = [];
        this.name = n;
    }
    Department.prototype.describe = function () {
        console.log("Department : ".concat(this.name));
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return Department;
}());
var cse = new Department("Computer Science and Engineering");
cse.addEmployee("Pravin");
cse.addEmployee("Sandesh");
cse.addEmployee("Deepak");
cse.describe();
cse.printEmployeeInformation();
console.log(cse.name);
