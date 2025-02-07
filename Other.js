const person = {
  name: "Rajesh",
  age: 20,
  greet: function () {
    return `Hello , I  am ${this.name} && I am ${this.age} years old`;
  },
};
console.log(person.greet());



function Print(x, ...others) {
  console.log(x);
  console.log(others);

}

Print("Rajesh", 19, "Idk", "Programmer")

let array = ["R", "A", 'J', "E", 'S', "H"]

for(let i of array) {
  console.log(i);
}

for(let key in person) {
  console.log(key, person[key]);

}