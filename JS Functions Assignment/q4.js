// Q4.js

function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

Car.prototype.getDetails = function() {
    console.log(`${this.brand} ${this.model}`);
};

const car1 = new Car("Toyota", "Corolla");
const car2 = new Car("Honda", "Civic");

car1.getDetails();
car2.getDetails();

// Both objects share the same getDetails() via prototype.
