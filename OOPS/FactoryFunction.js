function createPerson(firstName, lastName, age) {
  return {
    firstName,
    lastName,
    age,
    intro: function () {
      return `I am ${this.firstName} ${this.lastName}. I am ${this.age} years old`;
    },
  };
}

const Rajesh = createPerson('Rajesh', 'R', 20);
console.log(Rajesh.intro());
