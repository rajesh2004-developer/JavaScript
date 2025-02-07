let firstName = "Rajesh";
let lastName = "R";

// concatenation

let fullName = firstName + lastName;
console.log(fullName);
fullName = firstName.concat(lastName);
console.log(fullName);

//append

firstName += " Pro";
console.log(firstName);

//length

console.log(fullName.length);

//cases

console.log(firstName.toLowerCase());
console.log(firstName.toUpperCase());

//slice

console.log(firstName.slice(0, 3));

//split & join

console.log(firstName.split("").join(""));

//includes

console.log(firstName.includes("Raj"));

// trim

console.log(firstName.trim());
