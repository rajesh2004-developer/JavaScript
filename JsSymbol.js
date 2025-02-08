const symbol1 = Symbol("Rajesh")
const symbol2 = Symbol("Rajesh")


let obj = {};
obj[symbol1] = "value1"
obj[symbol2] = "value2"
obj["userName"] = "Rajesh"
obj["userName"] = "RajeshR"

console.log(obj);
