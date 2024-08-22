// Iterator is a design pattern that provides a way to sequentially access elements of a collection without exposing its internal structure.

// The Employee class is responsible for creating employee objects. Each employee has a name, position, and salary.
class Employee {
  constructor(name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary = salary;
  }
}

// The EmployeeGroup class is used to create groups of employees. It contains a list of employees.
class EmployeeGroup {
  employees = [];
  addEmployee(employee) {
    this.employees.push(employee);
  }
}

// The EmployeeIterator class is responsible for iterating through the employee group.
class EmployeeIterator {
  #employees = [];
  #currentIndex = 0;
  constructor(employeeGroup) {
    this.#employees = employeeGroup.employees;
  }
  #hasNext() {
    return this.#currentIndex < this.#employees.length;
  }
  #next() {
    if (this.#hasNext()) {
      const employee = this.#employees[this.#currentIndex];
      this.#currentIndex++;
      return employee;
    }
  }
  list() {
    return this.#employees.map((employee) => employee.name);
  }
}

console.log("Task 7 ====================================");

// Creating a new employee group.
const employeeGroup = new EmployeeGroup();

// Adding new employees to the group using the addEmployee method.
employeeGroup.addEmployee(new Employee("John Doe", "Manager", 5000));
employeeGroup.addEmployee(new Employee("Jane Smith", "Developer", 4000));

// Creating a new iterator for the employee group.
const employeeIterator = new EmployeeIterator(employeeGroup);

// Outputting the names of all employees in the group using the list method.
console.log(employeeIterator.list());
