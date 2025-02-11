function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('The promise is successful');
    }, 4000);
  });
}
console.log('Start');

async function userData() {
  const data = await getData();
  console.log(data);
}

userData();

console.log('End');
