fetch('./text.txt')
  .then((res) => res.text())
  .then((value) => console.log(value))
  .catch((err) => console.log(err));
