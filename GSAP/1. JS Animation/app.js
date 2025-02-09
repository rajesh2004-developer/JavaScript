const sideBar = document.querySelector('.sidebar');
const Btn = document.querySelector('button');

Btn.addEventListener('click', () => {
  sideBar.classList.toggle('hide');
});
