let fruits = ["apple", "banana", "orange"];

fruits.push("Grape");

fruits.pop();

fruits.shift(); //removes first element

fruits.unshift("jackfruit");

const newArray = [1, 2, 34];
console.log(fruits.concat(newArray));
console.log(fruits.includes("banana"));
console.log(fruits.join("-"));
console.log(fruits.reverse());
console.log(fruits.sort());
console.log(fruits.slice(0, 2));
console.log(fruits);
