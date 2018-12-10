var rs = require('readline-sync');

var employees = [];

function Employee(name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary = salary;
    this.status = "Full Time";
}
Employee.prototype.printEmployeeForm = printEmployeeForm;

function printEmployeeForm() {
    console.log(this);
}

function enterNewEmployees(num) {
    for (i = 0; i < num; i++){
        employees.push(new Employee(rs.question("Enter Employee Name: "), rs.question("Enter Employee Position: "), rs.question("Enter Employee Salary: ")));
    }
}

enterNewEmployees(rs.question("How many new employees?"));
employees[0].status = "Part Time";
employees.forEach((x) => x.printEmployeeForm());
