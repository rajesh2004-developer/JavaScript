class Vehicle {
  constructor(model, id, color, wheels) {
    this.model = model;
    this.id = id;
    this.color = color;
    this.wheels = wheels;
    this.info = function () {
      return `This is a ${this.model} model`;
    };
  }
  specificity() {
    return 'This is very fast to reach a destination';
  }
}

class Car extends Vehicle {
  constructor(model, id, color, wheels, fuelType) {
    super(model, id, color, wheels);
    this.fuelType = fuelType;
  }
}
const car = new Car('Ford', 1, 'red', 4, 'Diesel');
console.log(car);
