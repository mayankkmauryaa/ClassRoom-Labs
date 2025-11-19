// Q5.js

function Person(name) {
    this.name = name;
}

Person.prototype.showName = function() {
    console.log("Name:", this.name);
};

function Student(name, branch) {
    Person.call(this, name);  // inherit properties
    this.branch = branch;
}

// Link prototypes
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.showBranch = function() {
    console.log("Branch:", this.branch);
};

// Demonstration
const s1 = new Student("Mayank", "CSE");

s1.showName();     // From Person prototype
s1.showBranch();   // From Student prototype

console.log(Object.getPrototypeOf(s1) === Student.prototype); 
console.log(Object.getPrototypeOf(Student.prototype) === Person.prototype);
