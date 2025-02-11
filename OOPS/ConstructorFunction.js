function CreatePerson(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.intro = function () {
    return `I am ${this.firstName} ${this.lastName}. I'm ${this.age} years old`;
  };
}

const Rajesh = new CreatePerson('Rajesh', 'R', 20);

console.log(Rajesh);
