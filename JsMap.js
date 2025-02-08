const map = new Map();
const key1 = "Rajesh";
const key2 = {name:"Rajesh"}
const key3 = () => {return 0}

map.set(key1, "string")
map.set(key2, "Object")
map.set(key3, "Function")



console.log(map.keys());
console.log(map.values());
console.log(map.get(key1));
console.log(map.size);
map.forEach((key, value) => {
  console.log(key, value);
})
console.log(map.has(key1));
console.log(map.delete(key3));
console.log(map.entries());
console.log(map.clear());
console.log(map);
