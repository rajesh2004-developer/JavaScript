let array = [1,2,3,4,5]
let sum = 0;

let adder = (num) => sum+=num;
array.forEach(adder);
console.log(sum);

// map

array = array.map((num) => num * 2);
console.log(array);

//filter

let numbers = [1,2,3,4,5,6,7,8]

let filteredNumbers = numbers.filter(number => number > 4)
console.log(filteredNumbers);


//find

let students = [
  {name:"Rajesh", age: 20},
  {name:"Satish", age: 19},
  {name:"Pro", age: 20},
]

let person = students.find(student => student.age >= 19)
console.log(person);


//every && some

let result1 = students.every(student => student.age > 19)
let result2 = students.some(student => student.age > 19)
console.log(result1);
console.log(result2);


//reduce

let Total = numbers.reduce((addition,number)=> addition + number, 0)

console.log(Total);


let fruits = [
  "apples",
  "banana",
  "orange",
  "Grape",
  "apples",
  "banana",
  "orange",
  "orange",
]

let fruitFrequency = fruits.reduce((frequency, fruit) => {
  frequency[fruit] = (frequency[fruit] || 0) + 1;
  return frequency;
},{})

console.log(fruitFrequency);
