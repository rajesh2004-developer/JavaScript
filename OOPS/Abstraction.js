class Animal {
  constructor(name) {
    this.name = name;
  }
  sound() {
    throw new Error('This should be implemented');
  }
}

class Dog extends Animal{
  
}
