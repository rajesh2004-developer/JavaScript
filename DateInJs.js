const date = new Date();

const year = date.getFullYear();
const month = date.getMonth()
const dateOf = date.getDate();
const Day = date.getDay()

console.log(`Year ${year}`)
console.log(`Month ${month}`)
console.log(`date ${dateOf}`)
console.log(`Day ${Day}`)

console.log(date.toDateString())
console.log(date.toLocaleString())
console.log(date.toString())
console.log(date.toTimeString())