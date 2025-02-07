const person = {
  name : "Rajesh",
  age : 20,
  Dept : "CSE",
  Address : {
    "Door No" : 688,
    City : "Chennai",
    State : "TamilNadu"
  }
}

const JsonString = JSON.stringify(person);
const paredJsString = JSON.parse(JsonString)
console.log(person)
console.log(JsonString)
console.log(paredJsString)