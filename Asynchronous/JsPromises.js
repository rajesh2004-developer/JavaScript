function OddOrEven(number) {
  return new Promise((resolve, reject) => {
    if (number % 2 === 0) {
      resolve(`${number} is an even number`);
    } else {
      reject(`${number} is an odd number`);
    }
  });
}

OddOrEven(1)
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });
