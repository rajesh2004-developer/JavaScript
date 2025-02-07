function callFunction(fn) {
  const num = 20;
  fn(num);
}

callFunction(function (num) {
  console.log(num);
});
