async function getData() {
  const response = await fetch('text.txt');
  const data = await response.text();
  console.log(data);
}
getData();
