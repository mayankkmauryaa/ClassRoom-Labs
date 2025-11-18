// Q3.js

const user = {
    name: "Mayank",
    showName: () => {
        console.log("Arrow:", this.name);
    }
};

user.showName(); 
// this.name is undefined because arrow functions don't bind their own 'this'.
// They use the surrounding (lexical) scope, which here is the global object.

// Fix using normal function:
const userFixed = {
    name: "Mayank",
    showName() {
        console.log("Normal:", this.name);
    }
};

userFixed.showName(); // Works correctly
