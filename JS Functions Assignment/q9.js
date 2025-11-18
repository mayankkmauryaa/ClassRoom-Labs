// prototype version recap

function Person(name) {
    this.name = name;
}
Person.prototype.showName = function() {
    console.log(this.name);
};

function Student(name, branch) {
    Person.call(this, name);
    this.branch = branch;
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype.showBranch = function() {
    console.log(this.branch);
};


// Q9.js

class PersonC {
    constructor(name) {
        this.name = name;
    }
    showName() {
        console.log(this.name);
    }
}

class StudentC extends PersonC {
    constructor(name, branch) {
        super(name);     // calls PersonC constructor
        this.branch = branch;
    }
    showBranch() {
        console.log(this.branch);
    }
}

// Demonstration:
const st = new StudentC("Mayank", "CSE");
st.showName();   // inherited
st.showBranch(); // own method
