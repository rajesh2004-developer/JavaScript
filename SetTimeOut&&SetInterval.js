const intervalId = setInterval(() => {
  console.log("Rajesh");
}, 2000)

setTimeout(() => {
  clearInterval(intervalId)
}, 5000)