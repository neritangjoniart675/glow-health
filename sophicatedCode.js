/* sophicatedCode.js */

// This code is an example of a complex employee management system in a company

class Employee {
  constructor(name, age, position) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}, Position: ${this.position}`;
  }
}

class Department {
  constructor(name, employees) {
    this.name = name;
    this.employees = employees;
  }

  addEmployee(employee) {
    this.employees.push(employee);
  }

  removeEmployee(employee) {
    const index = this.employees.indexOf(employee);
    if (index > -1) {
      this.employees.splice(index, 1);
    }
  }

  getDepartmentDetails() {
    let details = `Department: ${this.name}\nEmployees:\n`;
    for (const employee of this.employees) {
      details += `- ${employee.getDetails()}\n`;
    }
    return details;
  }
}

const john = new Employee("John Doe", 30, "Manager");
const jane = new Employee("Jane Smith", 25, "Developer");
const mark = new Employee("Mark Johnson", 35, "Analyst");

const developmentDept = new Department("Development", [john, jane]);
developmentDept.addEmployee(mark);

console.log(developmentDept.getDepartmentDetails()); // Prints department details

// Output:
// Department: Development
// Employees:
// - Name: John Doe, Age: 30, Position: Manager
// - Name: Jane Smith, Age: 25, Position: Developer
// - Name: Mark Johnson, Age: 35, Position: Analyst

// ... continue adding more complex features to the code.