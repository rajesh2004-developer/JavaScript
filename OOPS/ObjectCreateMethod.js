let Person = {
  intro: function () {
    return `My name is ${this.firstName} ${this.lastName}`;
  },
};

const Rajesh = Object.create(Person, {
  firstName: { value: 'Rajesh' },
  lastName: { value: 'R' },
});

console.log(Rajesh.intro());
